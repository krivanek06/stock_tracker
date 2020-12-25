import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';

export const updateGroupIdsForUsers = functions.database
    .ref('/groups/{groupId}')
    .onUpdate((snap, context) => {
        console.log('function called');
        const before = snap.before.val() as api.STGroupAllData;
        const after = snap.after.val() as api.STGroupAllData;
        const groupId = context.params.groupId;

        // DELETE old users
        const deletedMembers = before.members.filter(m => !after.members.includes(m));
        const deletedInvitationReceived = before.invitationReceived.filter(m => !after.invitationReceived.includes(m));
        const deletedInvitationSent = before.invitationSent.filter(m => !after.invitationSent.includes(m));

        updateUserGroup(deletedMembers, groupId, 'groupMember', false);
        updateUserGroup(deletedInvitationReceived, groupId, 'groupInvitationReceived', false);
        updateUserGroup(deletedInvitationSent, groupId, 'groupInvitationSent', false);


        // UPDATE new users
        const newMembers = after.members.filter(m => !before.members.includes(m));
        const newInvitationReceived = after.invitationReceived.filter(m => !before.invitationReceived.includes(m));
        const newInvitationSent = after.invitationSent.filter(m => !before.invitationSent.includes(m));

        updateUserGroup(newMembers, groupId, 'groupMember', false);
        updateUserGroup(newInvitationReceived, groupId, 'groupInvitationReceived', false);
        updateUserGroup(newInvitationSent, groupId, 'groupInvitationSent', false);
    });


const updateUserGroup = (userArray: api.STGroupUser[], groupId: string, field: string, add: boolean) => {
    userArray.forEach(m => admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(m.user.uid).set({
        groups: {
            [`${field}`]: add ? admin.firestore.FieldValue.arrayUnion(groupId) : admin.firestore.FieldValue.arrayRemove(groupId)
        }
    }, {merge: true}));
};
