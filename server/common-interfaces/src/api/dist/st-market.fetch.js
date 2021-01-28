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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
exports.__esModule = true;
exports.searchStMarketData = exports.searchMultilpleStMarketData = exports.getStMarketAllCategories = exports.getStMarketOverview = exports.getStMarketTopTables = void 0;
var node_fetch_1 = require("node-fetch");
var environments_1 = require("./../../environments");
var QUNDAL_ENDPOINT = environments_1.stockDataAPI + "/quandl";
var SEARCH_ENDPOINT = environments_1.stockDataAPI + "/search";
exports.getStMarketTopTables = function () { return __awaiter(void 0, void 0, Promise, function () {
    var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, promises, dataPromises, result, dataPromises_1, dataPromises_1_1, data, _i, _a, _b, key, value, e_1_1;
    var e_1, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, node_fetch_1["default"](SEARCH_ENDPOINT + "/news")];
            case 1:
                p1 = _d.sent();
                return [4 /*yield*/, node_fetch_1["default"](SEARCH_ENDPOINT + "/events_calendar")];
            case 2:
                p2 = _d.sent();
                return [4 /*yield*/, node_fetch_1["default"](SEARCH_ENDPOINT + "/top_crypto")];
            case 3:
                p3 = _d.sent();
                return [4 /*yield*/, node_fetch_1["default"](SEARCH_ENDPOINT + "/stocks_day_gainers")];
            case 4:
                p4 = _d.sent();
                return [4 /*yield*/, node_fetch_1["default"](SEARCH_ENDPOINT + "/stocks_day_losers")];
            case 5:
                p5 = _d.sent();
                return [4 /*yield*/, node_fetch_1["default"](SEARCH_ENDPOINT + "/stocks_day_active")];
            case 6:
                p6 = _d.sent();
                return [4 /*yield*/, node_fetch_1["default"](SEARCH_ENDPOINT + "/stocks_undervalued_growth_stocks")];
            case 7:
                p7 = _d.sent();
                return [4 /*yield*/, node_fetch_1["default"](SEARCH_ENDPOINT + "/stocks_growth_technology_stocks")];
            case 8:
                p8 = _d.sent();
                return [4 /*yield*/, node_fetch_1["default"](SEARCH_ENDPOINT + "/stocks_undervalued_large_caps")];
            case 9:
                p9 = _d.sent();
                return [4 /*yield*/, node_fetch_1["default"](SEARCH_ENDPOINT + "/stocks_aggressive_small_caps")];
            case 10:
                p10 = _d.sent();
                return [4 /*yield*/, node_fetch_1["default"](SEARCH_ENDPOINT + "/stocks_small_cap_gainers")];
            case 11:
                p11 = _d.sent();
                promises = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11];
                dataPromises = promises.map(function (p) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, p.json()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                }); }); });
                result = {};
                _d.label = 12;
            case 12:
                _d.trys.push([12, 17, 18, 23]);
                dataPromises_1 = __asyncValues(dataPromises);
                _d.label = 13;
            case 13: return [4 /*yield*/, dataPromises_1.next()];
            case 14:
                if (!(dataPromises_1_1 = _d.sent(), !dataPromises_1_1.done)) return [3 /*break*/, 16];
                data = dataPromises_1_1.value;
                // example, keys is : 'stocks_aggressive_small_caps'
                for (_i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
                    _b = _a[_i], key = _b[0], value = _b[1];
                    if (key !== 'status') {
                        result[key] = value;
                    }
                }
                _d.label = 15;
            case 15: return [3 /*break*/, 13];
            case 16: return [3 /*break*/, 23];
            case 17:
                e_1_1 = _d.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 23];
            case 18:
                _d.trys.push([18, , 21, 22]);
                if (!(dataPromises_1_1 && !dataPromises_1_1.done && (_c = dataPromises_1["return"]))) return [3 /*break*/, 20];
                return [4 /*yield*/, _c.call(dataPromises_1)];
            case 19:
                _d.sent();
                _d.label = 20;
            case 20: return [3 /*break*/, 22];
            case 21:
                if (e_1) throw e_1.error;
                return [7 /*endfinally*/];
            case 22: return [7 /*endfinally*/];
            case 23: return [2 /*return*/, result];
        }
    });
}); };
exports.getStMarketOverview = function () { return __awaiter(void 0, void 0, Promise, function () {
    var social_security, investor_sentiment, employment, exports, manufacturing, sp500, inflation_rate, consumer_price_index_states, consumer_us_price_index, producer_us_price_index, misery_index, treasury_yield, bonds, bitcoin, promises, dataPromises, result, dataPromises_2, dataPromises_2_1, data, e_2_1;
    var e_2, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, node_fetch_1["default"](QUNDAL_ENDPOINT + "/social_security")];
            case 1:
                social_security = _b.sent();
                return [4 /*yield*/, node_fetch_1["default"](QUNDAL_ENDPOINT + "/investor_sentiment")];
            case 2:
                investor_sentiment = _b.sent();
                return [4 /*yield*/, node_fetch_1["default"](QUNDAL_ENDPOINT + "/employment")];
            case 3:
                employment = _b.sent();
                return [4 /*yield*/, node_fetch_1["default"](QUNDAL_ENDPOINT + "/exports")];
            case 4:
                exports = _b.sent();
                return [4 /*yield*/, node_fetch_1["default"](QUNDAL_ENDPOINT + "/manufacturing")];
            case 5:
                manufacturing = _b.sent();
                return [4 /*yield*/, node_fetch_1["default"](QUNDAL_ENDPOINT + "/sp500")];
            case 6:
                sp500 = _b.sent();
                return [4 /*yield*/, node_fetch_1["default"](QUNDAL_ENDPOINT + "/inflation_rate")];
            case 7:
                inflation_rate = _b.sent();
                return [4 /*yield*/, node_fetch_1["default"](QUNDAL_ENDPOINT + "/consumer_price_index_states")];
            case 8:
                consumer_price_index_states = _b.sent();
                return [4 /*yield*/, node_fetch_1["default"](QUNDAL_ENDPOINT + "/consumer_us_price_index")];
            case 9:
                consumer_us_price_index = _b.sent();
                return [4 /*yield*/, node_fetch_1["default"](QUNDAL_ENDPOINT + "/producer_us_price_index")];
            case 10:
                producer_us_price_index = _b.sent();
                return [4 /*yield*/, node_fetch_1["default"](QUNDAL_ENDPOINT + "/misery_index")];
            case 11:
                misery_index = _b.sent();
                return [4 /*yield*/, node_fetch_1["default"](QUNDAL_ENDPOINT + "/treasury_yield")];
            case 12:
                treasury_yield = _b.sent();
                return [4 /*yield*/, node_fetch_1["default"](QUNDAL_ENDPOINT + "/bonds")];
            case 13:
                bonds = _b.sent();
                return [4 /*yield*/, node_fetch_1["default"](QUNDAL_ENDPOINT + "/bitcoin")];
            case 14:
                bitcoin = _b.sent();
                promises = [
                    investor_sentiment,
                    social_security,
                    employment,
                    exports,
                    manufacturing,
                    sp500,
                    inflation_rate,
                    consumer_price_index_states,
                    consumer_us_price_index,
                    producer_us_price_index,
                    misery_index,
                    treasury_yield,
                    bonds,
                    bitcoin
                ];
                dataPromises = promises.map(function (p) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, p.json()];
                        case 1: return [2 /*return*/, (_a.sent())];
                    }
                }); }); });
                result = {};
                _b.label = 15;
            case 15:
                _b.trys.push([15, 20, 21, 26]);
                dataPromises_2 = __asyncValues(dataPromises);
                _b.label = 16;
            case 16: return [4 /*yield*/, dataPromises_2.next()];
            case 17:
                if (!(dataPromises_2_1 = _b.sent(), !dataPromises_2_1.done)) return [3 /*break*/, 19];
                data = dataPromises_2_1.value;
                result[data.keyName] = data;
                _b.label = 18;
            case 18: return [3 /*break*/, 16];
            case 19: return [3 /*break*/, 26];
            case 20:
                e_2_1 = _b.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 26];
            case 21:
                _b.trys.push([21, , 24, 25]);
                if (!(dataPromises_2_1 && !dataPromises_2_1.done && (_a = dataPromises_2["return"]))) return [3 /*break*/, 23];
                return [4 /*yield*/, _a.call(dataPromises_2)];
            case 22:
                _b.sent();
                _b.label = 23;
            case 23: return [3 /*break*/, 25];
            case 24:
                if (e_2) throw e_2.error;
                return [7 /*endfinally*/];
            case 25: return [7 /*endfinally*/];
            case 26: return [2 /*return*/, result];
        }
    });
}); };
exports.getStMarketAllCategories = function () { return __awaiter(void 0, void 0, Promise, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, node_fetch_1["default"](QUNDAL_ENDPOINT + "/categories")];
            case 1:
                res = _a.sent();
                return [2 /*return*/, res.json()];
        }
    });
}); };
exports.searchMultilpleStMarketData = function (key) { return __awaiter(void 0, void 0, Promise, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, node_fetch_1["default"](QUNDAL_ENDPOINT + "/search?quandlKey=" + key)];
            case 1:
                res = _a.sent();
                return [2 /*return*/, res.json()];
        }
    });
}); };
exports.searchStMarketData = function (key) { return __awaiter(void 0, void 0, Promise, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, node_fetch_1["default"](QUNDAL_ENDPOINT + "/search?quandlKey=" + key)];
            case 1:
                res = _a.sent();
                return [2 /*return*/, res.json()];
        }
    });
}); };
