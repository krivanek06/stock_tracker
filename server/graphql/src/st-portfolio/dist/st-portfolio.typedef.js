"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.STPortfolioTypeDefs = void 0;
var apollo_server_1 = require("apollo-server");
exports.STPortfolioTypeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    # type\n    type STPortfolio {\n        portfolioInvested: Float!\n        portfolioCash: Float!\n    }\n\n\n"], ["\n    # type\n    type STPortfolio {\n        portfolioInvested: Float!\n        portfolioCash: Float!\n    }\n\n\n"])));
var templateObject_1;
