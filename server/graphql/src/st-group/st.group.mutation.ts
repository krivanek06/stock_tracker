import {ST_GROUP_COLLECTION_GROUPS, STGroupAllDataInput} from "./st-group.model";
import {ApolloError} from "apollo-server";
import {getSTGroupAllDataByGroupId} from "./st-group.query";
import {
    createEmptySTGroupAllData,
    createSTGroupPartialDataFromSTGroupAllData,
    createSTGroupUser
} from "./st-group.util";
import {querySTUserPartialInformationByUid} from "../user/user.query";
import * as admin from "firebase-admin";
import {getCurrentIOSDate, stSeep} from "../st-shared/st-shared.functions";
import {ST_USER_COLLECTION_USER} from "../user/user.model";


export const createGroup = async (groupInput: STGroupAllDataInput) => {
    try {
        const group = createEmptySTGroupAllData();
        group.name = groupInput.name;
        group.description = groupInput.description;
        group.imagePath = groupInput.imagePath;
        group.imageUrl = groupInput.imageUrl;
        group.owner = createSTGroupUser(await querySTUserPartialInformationByUid(groupInput.owner));

        // load users who were invited
        const invitationSent = await Promise.all([...new Set(groupInput.invitationSent)].map(m => querySTUserPartialInformationByUid(m)));
        group.invitationSent = invitationSent.map(m => createSTGroupUser(m));

        // persist
        const result = await admin.firestore().collection(`${ST_GROUP_COLLECTION_GROUPS}`).add(group);
        group.groupId = result.id;

        // format for accepted result
        const partialData = createSTGroupPartialDataFromSTGroupAllData(group);

        // update user's groupInvitationReceived
        groupInput.invitationSent.forEach(userId => {
            admin.firestore().collection(ST_USER_COLLECTION_USER).doc(userId)
                .set({
                    groups: {
                        groupInvitationReceived: admin.firestore.FieldValue.arrayUnion(partialData)
                    }
                }, {merge: true})
        });

        // update owner's group
        admin.firestore().collection(ST_USER_COLLECTION_USER).doc(groupInput.owner)
            .set({
                groups: {
                    groupOwner: admin.firestore.FieldValue.arrayUnion(partialData)
                }
            }, {merge: true});

        return partialData
    } catch (error) {
        throw new ApolloError(error);
    }
};

export const editGroup = async (groupInput: STGroupAllDataInput) => {
    try {
        // load group or create new
        const group = await getSTGroupAllDataByGroupId(groupInput.groupId);
        group.name = groupInput.name;
        group.description = groupInput.description;
        group.imagePath = groupInput.imagePath;
        group.imageUrl = groupInput.imageUrl;
        group.owner = createSTGroupUser(await querySTUserPartialInformationByUid(groupInput.owner));
        group.lastUpdateDate = getCurrentIOSDate();

        // delete uses which are not in groupInput
        group.members = group.members.filter(m => groupInput.members.includes(m.user.uid));
        group.managers = group.managers.filter(m => groupInput.managers.includes(m.user.uid));
        group.invitationSent = group.invitationSent.filter(m => groupInput.invitationSent.includes(m.user.uid));
        group.invitationReceived = group.invitationReceived.filter(m => groupInput.invitationReceived.includes(m.user.uid));

        // delete users in groupInput which are already in the group, do not load them again from firestore
        // right outer join groupInput
        const groupMembersIds = group.members.map(m => m.user.uid);
        const groupManagersIds = group.managers.map(m => m.user.uid);
        const groupInvitationSentIds = group.invitationSent.map(m => m.user.uid);
        const groupInvitationReceivedIds = group.invitationReceived.map(m => m.user.uid);

        // load STUserPartialInformation for users which are not already in group
        const newMembers = [...new Set(groupInput.members)].filter(mId => !groupMembersIds.includes(mId)).map(m => querySTUserPartialInformationByUid(m));
        const newManagers = [...new Set(groupInput.managers)].filter(mId => !groupManagersIds.includes(mId)).map(m => querySTUserPartialInformationByUid(m));
        const newInvitationSent = [...new Set(groupInput.invitationSent)].filter(mId => !groupInvitationSentIds.includes(mId)).map(m => querySTUserPartialInformationByUid(m));
        const newInvitationReceived = [...new Set(groupInput.invitationReceived)].filter(mId => !groupInvitationReceivedIds.includes(mId)).map(m => querySTUserPartialInformationByUid(m));

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

        // persist
        await admin.firestore().collection(`${ST_GROUP_COLLECTION_GROUPS}`).doc(`${group.groupId}`).set(group);

        return getSTGroupAllDataByGroupId(group.groupId);

    } catch (error) {
        throw new ApolloError(error);
    }
};


export const deleteGroup = async (uid: string, groupId: string) => {
    try {
        const group = await getSTGroupAllDataByGroupId(groupId);
        if (group.owner.user.uid !== uid) {
            throw new ApolloError("Only owner can delete a group");
        }
        await admin.firestore().collection(`${ST_GROUP_COLLECTION_GROUPS}`).doc(groupId).delete();
        return true;
    } catch (error) {
        throw new ApolloError(error);
    }
}
