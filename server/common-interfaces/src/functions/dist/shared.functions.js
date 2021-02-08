"use strict";
exports.__esModule = true;
exports.stSleep = void 0;
exports.stSleep = function (ms) {
    if (ms === void 0) { ms = 1000; }
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
};
