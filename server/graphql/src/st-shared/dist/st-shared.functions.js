"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.stRandomSlice = exports.stSeep = exports.datesAreOnSameDay = exports.getCurrentIOSDate = void 0;
exports.getCurrentIOSDate = function () {
    var today = new Date();
    //today.setHours(today.getHours() + Math.abs(today.getTimezoneOffset()) / 60);
    return today.toISOString();
};
exports.datesAreOnSameDay = function (a, b) {
    var first = new Date(a);
    var second = new Date(b);
    return first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate();
};
exports.stSeep = function (ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
};
exports.stRandomSlice = function (ar, size) {
    var new_ar = __spreadArrays(ar);
    new_ar.splice(Math.floor(Math.random() * ar.length), 1);
    return ar.length <= (size + 1) ? new_ar : exports.stRandomSlice(new_ar, size);
};
