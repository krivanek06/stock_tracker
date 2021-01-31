"use strict";
exports.__esModule = true;
exports.USER_ROLES_ENUM = exports.ST_USER_COLLECTION_MORE_INFORMATION = exports.ST_USER_DOCUMENT_HISTORICAL_DATA = exports.ST_USER_DOCUMENT_PRIVATE_DATA = exports.ST_USER_COLLECTION_USER = exports.USER_STATUS = exports.USER_ACTIVITY = void 0;
var USER_ACTIVITY;
(function (USER_ACTIVITY) {
    USER_ACTIVITY["SIGNED_IN"] = "SIGNED_IN";
    USER_ACTIVITY["SIGNED_OUT"] = "SIGNED_OUT";
})(USER_ACTIVITY = exports.USER_ACTIVITY || (exports.USER_ACTIVITY = {}));
var USER_STATUS;
(function (USER_STATUS) {
    USER_STATUS["PENDING"] = "PENDING";
    USER_STATUS["DENIED"] = "DENIED";
    USER_STATUS["ALLOWED"] = "ALLOWED";
})(USER_STATUS = exports.USER_STATUS || (exports.USER_STATUS = {}));
exports.ST_USER_COLLECTION_USER = "users";
exports.ST_USER_DOCUMENT_PRIVATE_DATA = "private_data";
exports.ST_USER_DOCUMENT_HISTORICAL_DATA = "historical_data";
exports.ST_USER_COLLECTION_MORE_INFORMATION = "more_information";
var USER_ROLES_ENUM;
(function (USER_ROLES_ENUM) {
    USER_ROLES_ENUM["ROLE_ADMIN"] = "ROLE_ADMIN";
    USER_ROLES_ENUM["ROLE_GROUP_CREATE"] = "ROLE_GROUP_CREATE";
})(USER_ROLES_ENUM = exports.USER_ROLES_ENUM || (exports.USER_ROLES_ENUM = {}));
