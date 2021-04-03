"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.leaveGroup = exports.toggleInvitationRequestToGroup = exports.answerReceivedGroupInvitation = exports.deleteGroup = exports.editGroup = exports.createGroup = void 0;
var user_query_1 = require("./../user/user.query");
var apollo_server_1 = require("apollo-server");
var st_group_query_1 = require("./st-group.query");
var st_group_util_1 = require("./st-group.util");
var admin = require("firebase-admin");
var api = require("stock-tracker-common-interfaces");
var st_shared_functions_1 = require("../st-shared/st-shared.functions");
exports.createGroup = function (groupInput) { return __awaiter(void 0, void 0, Promise, function () {
    var group_1, _a, _b, invitationSent, result, error_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 4, , 5]);
                group_1 = st_group_util_1.createEmptySTGroupAllData();
                group_1.name = groupInput.name;
                group_1.description = groupInput.description;
                group_1.imagePath = groupInput.imagePath;
                group_1.imageUrl = groupInput.imageUrl;
                _a = group_1;
                _b = st_group_util_1.createSTGroupUser;
                return [4 /*yield*/, user_query_1.queryUserPublicData(groupInput.owner)];
            case 1:
                _a.owner = _b.apply(void 0, [_c.sent()]);
                return [4 /*yield*/, Promise.all(__spreadArrays(new Set(groupInput.invitationSent)).map(function (m) { return user_query_1.queryUserPublicData(m); }))];
            case 2:
                invitationSent = _c.sent();
                group_1.invitationSent = invitationSent.map(function (m) { return st_group_util_1.createSTGroupUser(m); });
                return [4 /*yield*/, admin.firestore().collection("" + api.ST_GROUP_COLLECTION_GROUPS).add(group_1)];
            case 3:
                result = _c.sent();
                group_1.groupId = result.id;
                // update user's groupInvitationReceived
                groupInput.invitationSent.forEach(function (userId) {
                    admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(userId)
                        .set({
                        groups: {
                            groupInvitationReceived: admin.firestore.FieldValue.arrayUnion(group_1.groupId)
                        }
                    }, { merge: true });
                });
                // update owner's group
                admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(groupInput.owner)
                    .set({
                    groups: {
                        groupOwner: admin.firestore.FieldValue.arrayUnion(group_1.groupId)
                    }
                }, { merge: true });
                // format for accepted result
                return [2 /*return*/, st_group_util_1.createSTGroupPartialDataFromSTGroupAllData(group_1)];
            case 4:
                error_1 = _c.sent();
                throw new apollo_server_1.ApolloError(error_1);
            case 5: return [2 /*return*/];
        }
    });
}); };
// TODO edit group form users -> cloud functions
exports.editGroup = function (groupInput) { return __awaiter(void 0, void 0, Promise, function () {
    var group, _a, _b, groupMembersIds_1, groupManagersIds_1, groupInvitationSentIds_1, groupInvitationReceivedIds_1, newMembers, newManagers, newInvitationSent, newInvitationReceived, notSaved, error_2;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 5, , 6]);
                return [4 /*yield*/, st_group_query_1.querySTGroupAllDataByGroupId(groupInput.groupId)];
            case 1:
                group = _c.sent();
                group.name = groupInput.name;
                group.description = groupInput.description;
                group.imagePath = groupInput.imagePath;
                group.imageUrl = groupInput.imageUrl;
                _a = group;
                _b = st_group_util_1.createSTGroupUser;
                return [4 /*yield*/, user_query_1.queryUserPublicData(groupInput.owner)];
            case 2:
                _a.owner = _b.apply(void 0, [_c.sent()]);
                group.lastEditedDate = st_shared_functions_1.getCurrentIOSDate();
                // delete uses which are not in groupInput
                group.members = group.members.filter(function (m) { return groupInput.members.includes(m.userIdentification.uid); });
                group.managers = group.managers.filter(function (m) { return groupInput.managers.includes(m.userIdentification.uid); });
                group.invitationSent = group.invitationSent.filter(function (m) { return groupInput.invitationSent.includes(m.userIdentification.uid); });
                group.invitationReceived = group.invitationReceived.filter(function (m) { return groupInput.invitationReceived.includes(m.userIdentification.uid); });
                groupMembersIds_1 = group.members.map(function (m) { return m.userIdentification.uid; });
                groupManagersIds_1 = group.managers.map(function (m) { return m.userIdentification.uid; });
                groupInvitationSentIds_1 = group.invitationSent.map(function (m) { return m.userIdentification.uid; });
                groupInvitationReceivedIds_1 = group.invitationReceived.map(function (m) { return m.userIdentification.uid; });
                newMembers = __spreadArrays(new Set(groupInput.members)).filter(function (mId) { return !groupMembersIds_1.includes(mId); }).map(function (m) { return user_query_1.queryUserPublicData(m); });
                newManagers = __spreadArrays(new Set(groupInput.managers)).filter(function (mId) { return !groupManagersIds_1.includes(mId); }).map(function (m) { return user_query_1.queryUserPublicData(m); });
                newInvitationSent = __spreadArrays(new Set(groupInput.invitationSent)).filter(function (mId) { return !groupInvitationSentIds_1.includes(mId); }).map(function (m) { return user_query_1.queryUserPublicData(m); });
                newInvitationReceived = __spreadArrays(new Set(groupInput.invitationReceived)).filter(function (mId) { return !groupInvitationReceivedIds_1.includes(mId); }).map(function (m) { return user_query_1.queryUserPublicData(m); });
                return [4 /*yield*/, Promise.all([
                        Promise.all(newMembers),
                        Promise.all(newManagers),
                        Promise.all(newInvitationSent),
                        Promise.all(newInvitationReceived)
                    ])];
            case 3:
                notSaved = _c.sent();
                // merge and save everything users
                group.members = __spreadArrays(group.members, notSaved[0].map(function (m) { return st_group_util_1.createSTGroupUser(m); }));
                group.managers = __spreadArrays(group.managers, notSaved[1].map(function (m) { return st_group_util_1.createSTGroupUser(m); }));
                group.invitationSent = __spreadArrays(group.invitationSent, notSaved[2].map(function (m) { return st_group_util_1.createSTGroupUser(m); }));
                group.invitationReceived = __spreadArrays(group.invitationReceived, notSaved[3].map(function (m) { return st_group_util_1.createSTGroupUser(m); }));
                /*if (group.members.length > 0) {
                    group.portfolio = group.members.map(member => member.userIdentification.portfolio).reduce((acc, cur) => {
                        acc.portfolioCash += cur.portfolioCash;
                        acc.portfolioInvested += cur.portfolioInvested;
                        return acc;
                    });
                }*/
                // TODO update group portfolio
                // persist
                return [4 /*yield*/, admin.firestore()
                        .collection("" + api.ST_GROUP_COLLECTION_GROUPS)
                        .doc("" + group.groupId)
                        .set(group)];
            case 4:
                /*if (group.members.length > 0) {
                    group.portfolio = group.members.map(member => member.userIdentification.portfolio).reduce((acc, cur) => {
                        acc.portfolioCash += cur.portfolioCash;
                        acc.portfolioInvested += cur.portfolioInvested;
                        return acc;
                    });
                }*/
                // TODO update group portfolio
                // persist
                _c.sent();
                //return querySTGroupAllDataByGroupId(group.groupId);
                return [2 /*return*/, st_group_util_1.createSTGroupPartialDataFromSTGroupAllData(group)];
            case 5:
                error_2 = _c.sent();
                throw new apollo_server_1.ApolloError(error_2);
            case 6: return [2 /*return*/];
        }
    });
}); };
// TODO remove group form users -> cloud functions
exports.deleteGroup = function (uid, groupId) { return __awaiter(void 0, void 0, Promise, function () {
    var group, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, st_group_query_1.querySTGroupAllDataByGroupId(groupId)];
            case 1:
                group = _a.sent();
                if (group.owner.userIdentification.uid !== uid) {
                    throw new apollo_server_1.ApolloError("Only owner can delete a group");
                }
                return [4 /*yield*/, admin.firestore().collection("" + api.ST_GROUP_COLLECTION_GROUPS).doc(groupId)["delete"]()];
            case 2:
                _a.sent();
                return [2 /*return*/, true];
            case 3:
                error_3 = _a.sent();
                throw new apollo_server_1.ApolloError(error_3);
            case 4: return [2 /*return*/];
        }
    });
}); };
// TODO update data in user group.invitationReceived -> cloud functions
/**
 * Invited users may accept or decline received group invitation
 * @param uid
 * @param groupId
 * @param accept
 */
exports.answerReceivedGroupInvitation = function (uid, groupId, accept) { return __awaiter(void 0, void 0, Promise, function () {
    var group, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, st_group_query_1.querySTGroupAllDataByGroupId(groupId)];
            case 1:
                group = _a.sent();
                if (!group.invitationSent.map(function (x) { return x.userIdentification.uid; }).includes(uid)) {
                    throw new apollo_server_1.ApolloError("You have no invitation from group " + group.name);
                }
                // add as member
                if (accept) {
                    group.members = __spreadArrays(group.members, [group.invitationSent.find(function (x) { return x.userIdentification.uid === uid; })]);
                }
                // remove invitation
                group.invitationSent = group.invitationSent.filter(function (x) { return x.userIdentification.uid !== uid; });
                return [4 /*yield*/, admin.firestore()
                        .collection("" + api.ST_GROUP_COLLECTION_GROUPS)
                        .doc(groupId)
                        .set({
                        members: group.members,
                        invitationSent: group.invitationSent
                    }, { merge: true })];
            case 2:
                _a.sent();
                return [2 /*return*/, st_group_util_1.createSTGroupPartialDataFromSTGroupAllData(group)];
            case 3:
                error_4 = _a.sent();
                throw new apollo_server_1.ApolloError(error_4);
            case 4: return [2 /*return*/];
        }
    });
}); };
// TODO update data in user group.invitationSent -> cloud functions
/***
 * User can send or cancel invitation request to group
 * @param uid
 * @param groupId
 */
exports.toggleInvitationRequestToGroup = function (uid, groupId) { return __awaiter(void 0, void 0, Promise, function () {
    var group, user, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                return [4 /*yield*/, st_group_query_1.querySTGroupAllDataByGroupId(groupId)];
            case 1:
                group = _a.sent();
                if (group.members.map(function (x) { return x.userIdentification.uid; }).includes(uid)) {
                    throw new apollo_server_1.ApolloError("Cannot send / cancel invitation, you are already a member in group " + group.name);
                }
                if (group.invitationSent.map(function (x) { return x.userIdentification.uid; }).includes(uid)) {
                    throw new apollo_server_1.ApolloError("You are already invited from group " + group.name);
                }
                user = void 0;
                if (!group.invitationReceived.map(function (x) { return x.userIdentification.uid; }).includes(uid)) return [3 /*break*/, 2];
                // already sent invitation -> cancel it
                group.invitationReceived = group.invitationReceived.filter(function (x) { return x.userIdentification.uid !== uid; });
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, user_query_1.queryUserPublicData(uid)];
            case 3:
                // sent invitation request to group
                user = _a.sent();
                group.invitationReceived = __spreadArrays(group.invitationReceived, [st_group_util_1.createSTGroupUser(user)]);
                _a.label = 4;
            case 4: return [4 /*yield*/, admin.firestore()
                    .collection("" + api.ST_GROUP_COLLECTION_GROUPS)
                    .doc(groupId)
                    .set({
                    invitationReceived: group.invitationReceived
                }, { merge: true })];
            case 5:
                _a.sent();
                return [2 /*return*/, st_group_util_1.createSTGroupPartialDataFromSTGroupAllData(group)];
            case 6:
                error_5 = _a.sent();
                throw new apollo_server_1.ApolloError(error_5);
            case 7: return [2 /*return*/];
        }
    });
}); };
// TODO -> cloud function update user's data, remove group if group.groupMember
exports.leaveGroup = function (uid, groupId) { return __awaiter(void 0, void 0, Promise, function () {
    var group, filteredManagers, filteredMembers, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, st_group_query_1.querySTGroupAllDataByGroupId(groupId)];
            case 1:
                group = _a.sent();
                if (!group.members.map(function (x) { return x.userIdentification.uid; }).includes(uid) && !group.managers.map(function (x) { return x.userIdentification.uid; }).includes(uid)) {
                    throw new apollo_server_1.ApolloError("You cannot leave a group you are not a member or manager");
                }
                if (group.owner.userIdentification.uid === groupId) {
                    throw new apollo_server_1.ApolloError("Owner can only delete whole group");
                }
                filteredManagers = group.managers.filter(function (x) { return x.userIdentification.uid !== uid; });
                filteredMembers = group.members.filter(function (x) { return x.userIdentification.uid !== uid; });
                return [4 /*yield*/, admin.firestore()
                        .collection("" + api.ST_GROUP_COLLECTION_GROUPS)
                        .doc(groupId)
                        .set({
                        members: filteredMembers,
                        managers: filteredManagers
                    }, { merge: true })];
            case 2:
                _a.sent();
                return [2 /*return*/, true];
            case 3:
                error_6 = _a.sent();
                throw new apollo_server_1.ApolloError(error_6);
            case 4: return [2 /*return*/];
        }
    });
}); };
