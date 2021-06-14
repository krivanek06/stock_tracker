import { Context } from './../st-shared/st-shared.interface';
import { queryUserPublicData } from './../user/user.query';
import {ApolloError} from "apollo-server";
import {querySTGroupAllDataByGroupId} from "./st-group.query";
import {
    initGroupFromInput,
    createSTGroupPartialDataFromSTGroupAllData,
    createSTGroupUser
} from "./st-group.util";
import * as admin from "firebase-admin";
import * as api from 'stock-tracker-common-interfaces';
import {getCurrentIOSDate} from "../st-shared/st-shared.functions";


export const createGroup = async (groupInput: api.STGroupAllDataInput, {requesterUserId}: Context): Promise<api.STGroupAllData> => {
    try {
        const group = initGroupFromInput(groupInput);

        group.owner = createSTGroupUser(await queryUserPublicData(requesterUserId));

        // load distinct users who were invited
        const invitationSent = await Promise.all([...new Set(groupInput.invitationSent)].map(m => queryUserPublicData(m)));
        group.invitationSent = invitationSent.map(m => createSTGroupUser(m));

        // persist
        const result = await admin.firestore().collection(`${api.ST_GROUP_COLLECTION_GROUPS}`).add(group);
        group.groupId = result.id;

        // update user's groupInvitationReceived
        groupInput.invitationSent.forEach(userId => {
            admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(userId)
                .set({
                    groups: {
                        groupInvitationReceived: admin.firestore.FieldValue.arrayUnion(group.groupId)
                    }
                }, {merge: true})
        });

        // update owner's group
        admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(requesterUserId)
            .set({
                groups: {
                    groupOwner: admin.firestore.FieldValue.arrayUnion(group.groupId)
                }
            }, {merge: true});

        // format for accepted result
        //return createSTGroupPartialDataFromSTGroupAllData(group);
        return group;
    } catch (error) {
        throw new ApolloError(error);
    }
};
// TODO edit group form users -> cloud functions
export const editGroup = async (groupInput: api.STGroupAllDataInput): Promise<api.STGroupPartialData> => {
    try {
        // load group or create new
        const group = await querySTGroupAllDataByGroupId(groupInput.groupId);
        group.name = groupInput.name;
        group.description = groupInput.description;
        group.imagePath = groupInput.imagePath;
        group.imageUrl = groupInput.imageUrl;
        group.lastEditedDate = getCurrentIOSDate();

        // delete uses which are not in groupInput
        group.members = group.members.filter(m => groupInput.members.includes(m.id));
        group.managers = group.managers.filter(m => groupInput.managers.includes(m.id));
        group.invitationSent = group.invitationSent.filter(m => groupInput.invitationSent.includes(m.id));
        group.invitationReceived = group.invitationReceived.filter(m => groupInput.invitationReceived.includes(m.id));

        // delete users in groupInput which are already in the group, do not load them again from firestore
        // right outer join groupInput
        const groupMembersIds = group.members.map(m => m.id);
        const groupManagersIds = group.managers.map(m => m.id);
        const groupInvitationSentIds = group.invitationSent.map(m => m.id);
        const groupInvitationReceivedIds = group.invitationReceived.map(m => m.id);

        // load STUserInformation for users which are not already in group
        const newMembers = [...new Set(groupInput.members)].filter(mId => !groupMembersIds.includes(mId)).map(m => queryUserPublicData(m));
        const newManagers = [...new Set(groupInput.managers)].filter(mId => !groupManagersIds.includes(mId)).map(m => queryUserPublicData(m));
        const newInvitationSent = [...new Set(groupInput.invitationSent)].filter(mId => !groupInvitationSentIds.includes(mId)).map(m => queryUserPublicData(m));
        const newInvitationReceived = [...new Set(groupInput.invitationReceived)].filter(mId => !groupInvitationReceivedIds.includes(mId)).map(m => queryUserPublicData(m));

        const notSaved = await Promise.all([
            Promise.all(newMembers),
            Promise.all(newManagers),
            Promise.all(newInvitationSent),
            Promise.all(newInvitationReceived)
        ]);

        // merge and save everything users
        group.members = [...group.members, ...notSaved[0].map(m => createSTGroupUser(m))];
        group.managers = [...group.managers, ...notSaved[1].map(m => createSTGroupUser(m))];
        group.invitationSent = [...group.invitationSent, ...notSaved[2].map(m => createSTGroupUser(m))];
        group.invitationReceived = [...group.invitationReceived, ...notSaved[3].map(m => createSTGroupUser(m))];

        /*if (group.members.length > 0) {
            group.portfolio = group.members.map(member => member.userIdentification.portfolio).reduce((acc, cur) => {
                acc.portfolioCash += cur.portfolioCash;
                acc.portfolioInvested += cur.portfolioInvested;
                return acc;
            });
        }*/

        // TODO update group portfolio

        // persist
        await admin.firestore()
            .collection(`${api.ST_GROUP_COLLECTION_GROUPS}`)
            .doc(`${group.groupId}`)
            .set(group);

        //return querySTGroupAllDataByGroupId(group.groupId);
        return createSTGroupPartialDataFromSTGroupAllData(group);
    } catch (error) {
        throw new ApolloError(error);
    }
};

// TODO remove group form users -> cloud functions
export const deleteGroup = async (uid: string, groupId: string): Promise<boolean> => {
    try {
        const group = await querySTGroupAllDataByGroupId(groupId);
        if (group.owner.id !== uid) {
            throw new ApolloError("Only owner can delete a group");
        }

        await admin.firestore().collection(`${api.ST_GROUP_COLLECTION_GROUPS}`).doc(groupId).delete();
        return true;
    } catch (error) {
        throw new ApolloError(error);
    }
}

// TODO update data in user group.invitationReceived -> cloud functions
/**
 * Invited users may accept or decline received group invitation
 * @param uid
 * @param groupId
 * @param accept
 */
export const answerReceivedGroupInvitation = async (uid: string, groupId: string, accept: Boolean): Promise<api.STGroupPartialData> => {
    try {
        const group = await querySTGroupAllDataByGroupId(groupId);
        if (!group.invitationSent.map(x => x.id).includes(uid)) {
            throw new ApolloError(`You have no invitation from group ${group.name}`);
        }

        // add as member
        if (accept) {
            group.members = [...group.members, group.invitationSent.find(x => x.id === uid)];
        }
        // remove invitation
        group.invitationSent = group.invitationSent.filter(x => x.id !== uid);

        await admin.firestore()
            .collection(`${api.ST_GROUP_COLLECTION_GROUPS}`)
            .doc(groupId)
            .set({
                members: group.members,
                invitationSent: group.invitationSent
            }, {merge: true});

        return createSTGroupPartialDataFromSTGroupAllData(group);
    } catch (error) {
        throw new ApolloError(error);
    }
}

// TODO update data in user group.invitationSent -> cloud functions
/***
 * User can send or cancel invitation request to group
 * @param uid
 * @param groupId
 */
export const toggleInvitationRequestToGroup = async (uid: string, groupId: string): Promise<api.STGroupPartialData> => {
    try {
        const group = await querySTGroupAllDataByGroupId(groupId);
        if (group.members.map(x => x.id).includes(uid)) {
            throw new ApolloError(`Cannot send / cancel invitation, you are already a member in group ${group.name}`);
        }

        if (group.invitationSent.map(x => x.id).includes(uid)) {
            throw new ApolloError(`You are already invited from group ${group.name}`);
        }

        let user;
        if (group.invitationReceived.map(x => x.id).includes(uid)) {
            // already sent invitation -> cancel it
            group.invitationReceived = group.invitationReceived.filter(x => x.id !== uid);
        } else {
            // sent invitation request to group
            user = await queryUserPublicData(uid);
            group.invitationReceived = [...group.invitationReceived, createSTGroupUser(user)];
        }

        await admin.firestore()
            .collection(`${api.ST_GROUP_COLLECTION_GROUPS}`)
            .doc(groupId)
            .set({
                invitationReceived: group.invitationReceived
            }, {merge: true});

        return createSTGroupPartialDataFromSTGroupAllData(group);
    } catch (error) {
        throw new ApolloError(error);
    }
}

// TODO -> cloud function update user's data, remove group if group.groupMember
export const leaveGroup = async (uid: string, groupId: string): Promise<boolean> => {
    try {
        const group = await querySTGroupAllDataByGroupId(groupId);
        if (!group.members.map(x => x.id).includes(uid) && !group.managers.map(x => x.id).includes(uid)) {
            throw new ApolloError("You cannot leave a group you are not a member or manager");
        }
        if (group.owner.id === groupId) {
            throw new ApolloError("Owner can only delete whole group");
        }

        const filteredManagers = group.managers.filter(x => x.id !== uid);
        const filteredMembers = group.members.filter(x => x.id !== uid);

        await admin.firestore()
            .collection(`${api.ST_GROUP_COLLECTION_GROUPS}`)
            .doc(groupId)
            .set({
                members: filteredMembers,
                managers: filteredManagers
            }, {merge: true});

        return true;
    } catch (error) {
        throw new ApolloError(error);
    }
}
