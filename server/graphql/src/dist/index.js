"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.__esModule = true;
var st_group_typedefs_1 = require("./st-group/st-group.typedefs");
var st_shared_typedef_1 = require("./st-shared/st-shared.typedef");
var watchlist_typedefs_1 = require("./watchlist/watchlist.typedefs");
var apollo_server_1 = require("apollo-server");
var user_typeDefs_1 = require("./user/user.typeDefs");
var user_resolver_1 = require("./user/user.resolver");
var admin = require("firebase-admin");
var user_query_1 = require("./user/user.query");
var watchlist_mutation_1 = require("./watchlist/watchlist.mutation");
var user_mutation_1 = require("./user/user.mutation");
var st_stock_query_1 = require("./st-stocks/st-stock.query");
var st_stock_typedefs_1 = require("./st-stocks/st-stock.typedefs");
var st_transaction_typedef_1 = require("./st-transaction/st-transaction.typedef");
var st_rank_typedef_1 = require("./st-rank/st-rank.typedef");
var st_portfolio_typedef_1 = require("./st-portfolio/st-portfolio.typedef");
var st_group_mutation_1 = require("./st-group/st.group.mutation");
var st_group_query_1 = require("./st-group/st-group.query");
var st_transaction_resolver_1 = require("./st-transaction/st-transaction.resolver");
var watchlist_resolver_1 = require("./watchlist/watchlist.resolver");
var st_transaction_mutation_1 = require("./st-transaction/st-transaction.mutation");
var st_market_typedefs_1 = require("./st-market/st-market.typedefs");
var st_market_query_1 = require("./st-market/st-market.query");
global.fetch = require("node-fetch");
var serviceAccount = require('../firebase_key.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://stocktrackertest-e51fc.firebaseio.com"
});
var mainTypeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    ###### QUERY\n    type Query {\n        # user\n        queryUserData(uid: String!): STUserPublicData\n        queryUserPublicDataByUsername(usernamePrefix: String!): [STUserPublicData]!\n        authenticateUser(uid: String!): STUserPublicData\n\n        # groups\n        querySTGroupAllDataByGroupId(groupId: String!): STGroupAllData\n        querySTGroupPartialDataByGroupName(groupName: String!): STSearchGroups\n\n        # details\n        queryStockDetails(symbol: String!): StockDetails\n        queryStockSummary(symbol: String!): Summary\n        queryStockSummaries(symbolPrefix: String!): SearchSymbol\n\n        # market data\n        querySTMarketHistoryOverview: STMarketOverviewPartialData\n        queryStMarketAllCategories: STMarketDatasetKeyCategories\n        queryMarketDailyOverview: STMarketDailyOverview\n        queryStMarketData(key: String!): STMarketChartDataResultCombined\n        queryStMarketCalendarEvents(date: String!): StMarketCalendarEvents\n        queryStMarketCalendarEventsEarnings(date: String!): StMarketCalendarEventsEarnings\n    }\n\n    #### MUTATION\n    type Mutation {\n        # user\n        registerUser(user: STUserAuthenticationInput): Boolean\n        editUser(editInput: STUserEditDataInput): Boolean\n        resetUserAccount(userId: String!): STUserResetedAccount\n\n        # groups\n        createGroup(groupInput: STGroupAllDataInput!): STGroupPartialData\n        editGroup(groupInput: STGroupAllDataInput!): STGroupPartialData\n        deleteGroup(uid: String!, groupId: String!): Boolean\n        toggleInvitationRequestToGroup(uid: String!, groupId: String!): STGroupPartialData\n        answerReceivedGroupInvitation(uid: String!, groupId: String!, accept: Boolean!): STGroupPartialData\n        leaveGroup(uid: String!, groupId: String!): Boolean\n\n        ## watchlist\n        createStockWatchlist( identifier: STStockWatchInputlistIdentifier!): STStockWatchlist\n        renameStockWatchlist(identifier: STStockWatchInputlistIdentifier!): Boolean\n        deleteWatchlist(identifier: STStockWatchInputlistIdentifier!): Boolean\n        addStockIntoStockWatchlist(identifier: STStockWatchInputlistIdentifier!): Summary\n        removeStockFromStockWatchlist(identifier: STStockWatchInputlistIdentifier!): Boolean\n\n        # trading\n        performTransaction(transactionInput: STTransactionInput): PerformedTransaction\n    }\n"], ["\n\n    ###### QUERY\n    type Query {\n        # user\n        queryUserData(uid: String!): STUserPublicData\n        queryUserPublicDataByUsername(usernamePrefix: String!): [STUserPublicData]!\n        authenticateUser(uid: String!): STUserPublicData\n\n        # groups\n        querySTGroupAllDataByGroupId(groupId: String!): STGroupAllData\n        querySTGroupPartialDataByGroupName(groupName: String!): STSearchGroups\n\n        # details\n        queryStockDetails(symbol: String!): StockDetails\n        queryStockSummary(symbol: String!): Summary\n        queryStockSummaries(symbolPrefix: String!): SearchSymbol\n\n        # market data\n        querySTMarketHistoryOverview: STMarketOverviewPartialData\n        queryStMarketAllCategories: STMarketDatasetKeyCategories\n        queryMarketDailyOverview: STMarketDailyOverview\n        queryStMarketData(key: String!): STMarketChartDataResultCombined\n        queryStMarketCalendarEvents(date: String!): StMarketCalendarEvents\n        queryStMarketCalendarEventsEarnings(date: String!): StMarketCalendarEventsEarnings\n    }\n\n    #### MUTATION\n    type Mutation {\n        # user\n        registerUser(user: STUserAuthenticationInput): Boolean\n        editUser(editInput: STUserEditDataInput): Boolean\n        resetUserAccount(userId: String!): STUserResetedAccount\n\n        # groups\n        createGroup(groupInput: STGroupAllDataInput!): STGroupPartialData\n        editGroup(groupInput: STGroupAllDataInput!): STGroupPartialData\n        deleteGroup(uid: String!, groupId: String!): Boolean\n        toggleInvitationRequestToGroup(uid: String!, groupId: String!): STGroupPartialData\n        answerReceivedGroupInvitation(uid: String!, groupId: String!, accept: Boolean!): STGroupPartialData\n        leaveGroup(uid: String!, groupId: String!): Boolean\n\n        ## watchlist\n        createStockWatchlist( identifier: STStockWatchInputlistIdentifier!): STStockWatchlist\n        renameStockWatchlist(identifier: STStockWatchInputlistIdentifier!): Boolean\n        deleteWatchlist(identifier: STStockWatchInputlistIdentifier!): Boolean\n        addStockIntoStockWatchlist(identifier: STStockWatchInputlistIdentifier!): Summary\n        removeStockFromStockWatchlist(identifier: STStockWatchInputlistIdentifier!): Boolean\n\n        # trading\n        performTransaction(transactionInput: STTransactionInput): PerformedTransaction\n    }\n"])));
var mainResolver = {
    Query: {
        // USER
        authenticateUser: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_query_1.authenticateUser(args.uid)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        queryUserData: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_query_1.queryUserPublicData(args.uid)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        queryUserPublicDataByUsername: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_query_1.queryUserPublicDataByUsername(args.usernamePrefix)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        // GROUP
        querySTGroupAllDataByGroupId: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, st_group_query_1.querySTGroupAllDataByGroupId(args.groupId)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        querySTGroupPartialDataByGroupName: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, st_group_query_1.querySTGroupPartialDataByGroupName(args.groupName)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        // stock details
        queryStockDetails: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, st_stock_query_1.queryStockDetails(args.symbol)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        queryStockSummary: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, st_stock_query_1.queryStockSummary(args.symbol)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        queryStockSummaries: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, st_stock_query_1.queryStockSummaries(args.symbolPrefix)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        // market data
        querySTMarketHistoryOverview: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, st_market_query_1.querySTMarketHistoryOverview()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        queryMarketDailyOverview: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, st_stock_query_1.queryMarketDailyOverview()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        queryStMarketAllCategories: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, st_market_query_1.queryStMarketAllCategories()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        queryStMarketData: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, st_market_query_1.queryStMarketData(args.key)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        queryStMarketCalendarEvents: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, st_market_query_1.queryStMarketCalendarEvents(args.date)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        queryStMarketCalendarEventsEarnings: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, st_market_query_1.queryStMarketCalendarEventsEarnings(args.date)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); }
    },
    Mutation: {
        // USER
        registerUser: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_mutation_1.registerUser(args.user)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        editUser: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_mutation_1.editUser(args.editInput)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        resetUserAccount: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_mutation_1.resetUserAccount(args.userId)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        // GROUPS
        createGroup: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, st_group_mutation_1.createGroup(args.groupInput)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        editGroup: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, st_group_mutation_1.editGroup(args.groupInput)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        deleteGroup: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, st_group_mutation_1.deleteGroup(args.uid, args.groupId)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        answerReceivedGroupInvitation: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, st_group_mutation_1.answerReceivedGroupInvitation(args.uid, args.groupId, args.accept)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        toggleInvitationRequestToGroup: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, st_group_mutation_1.toggleInvitationRequestToGroup(args.uid, args.groupId)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        leaveGroup: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, st_group_mutation_1.leaveGroup(args.uid, args.groupId)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        // WATCHLIST
        createStockWatchlist: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, watchlist_mutation_1.createStockWatchlist(args.identifier)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        renameStockWatchlist: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, watchlist_mutation_1.renameStockWatchlist(args.identifier)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        deleteWatchlist: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, watchlist_mutation_1.deleteWatchlist(args.identifier)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        addStockIntoStockWatchlist: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, watchlist_mutation_1.addStockIntoStockWatchlist(args.identifier)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        removeStockFromStockWatchlist: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, watchlist_mutation_1.removeStockFromStockWatchlist(args.identifier)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        // trading
        performTransaction: function (_, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, st_transaction_mutation_1.performTransaction(args.transactionInput)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); }
    }
};
var resolvers = __assign(__assign(__assign(__assign({}, user_resolver_1.userResolvers), st_transaction_resolver_1.stTransactionResolvers), watchlist_resolver_1.stStockWatchlistResolvers), mainResolver);
var server = new apollo_server_1.ApolloServer({
    typeDefs: [
        mainTypeDefs,
        user_typeDefs_1.userTypeDefs,
        watchlist_typedefs_1.watchlistTypeDefs,
        st_stock_typedefs_1.stockDetailsTypeDefs,
        st_market_typedefs_1.STMarketSharedTypeDefs,
        st_transaction_typedef_1.STTransactionTypeDefs,
        st_shared_typedef_1.STSharedTypeDefs,
        st_rank_typedef_1.STRankTypeDefs,
        st_portfolio_typedef_1.STPortfolioTypeDefs,
        st_group_typedefs_1.STGroupTypeDefs
    ],
    resolvers: resolvers,
    introspection: true
});
server.listen(process.env.PORT || 4000).then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80  Server ready at " + url);
});
var templateObject_1;
