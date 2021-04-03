"use strict";
exports.__esModule = true;
exports.convertSTUserPublicDataToSTUserIndentification = void 0;
exports.convertSTUserPublicDataToSTUserIndentification = function (publicData) {
    var identification = {
        accountCreatedDate: publicData.accountCreatedDate,
        locale: publicData.locale,
        nickName: publicData.nickName,
        photoURL: publicData.photoURL,
        uid: publicData.uid
    };
    return identification;
};
