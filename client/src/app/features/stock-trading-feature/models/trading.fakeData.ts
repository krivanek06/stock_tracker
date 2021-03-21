import {StPortfolioWeeklyChange, StTransactionOperationEnum} from '@core';

export const fakeDataTransactionTable: StPortfolioWeeklyChange[] = [
    {
        __typename: 'STPortfolioWeeklyChange',
        date: '2020.12.1',
        portfolio: {
            __typename: 'STPortfolio',
            portfolioInvested: 12560,
            portfolioCash: 3600,
            portfolioWeeklyChange: 3.6,
            portfolioWeeklyGrowth: 350,
            date: '2020.12.1'
        },
        transactionsBuy: {
            __typename: 'STPortfolioWeeklyChangeTransactions',
            total: 3895.56,
            transactions: [
                {
                    __typename: 'STTransaction',
                    date: '2020.12.1',
                    operation: StTransactionOperationEnum.Buy,
                    price: 54.01,
                    return: null,
                    returnChange: null,
                    symbol: 'UBER',
                    symbol_logo_url: 'https://logo.clearbit.com/uber.com',
                    units: 10
                },
                {
                    __typename: 'STTransaction',
                    date: '2020.12.1',
                    operation: StTransactionOperationEnum.Buy,
                    price: 234.01,
                    return: null,
                    returnChange: null,
                    symbol: 'FB',
                    symbol_logo_url: 'https://logo.clearbit.com/uber.com',
                    units: 15
                }
            ]
        },
        transactionsSell: {
            __typename: 'STPortfolioWeeklyChangeTransactions',
            total: 1240.1,
            transactions: [
                {
                    __typename: 'STTransaction',
                    date: '2020.12.1',
                    operation: StTransactionOperationEnum.Sell,
                    price: 124.01,
                    return: null,
                    returnChange: null,
                    symbol: 'MMM',
                    symbol_logo_url: 'https://logo.clearbit.com/uber.com',
                    units: 10
                }
            ]
        }
    },
    // SECOND
    {
        __typename: 'STPortfolioWeeklyChange',
        date: '2020.12.7',
        portfolio: {
            __typename: 'STPortfolio',
            portfolioInvested: 18560,
            portfolioCash: 6600,
            portfolioWeeklyChange: 8.2,
            portfolioWeeklyGrowth: 1550,
            date: '2020.12.7'
        },
        transactionsBuy: {
            __typename: 'STPortfolioWeeklyChangeTransactions',
            total: 5995.56,
            transactions: [
                {
                    __typename: 'STTransaction',
                    date: '2020.12.7',
                    operation: StTransactionOperationEnum.Buy,
                    price: 54.01,
                    return: null,
                    returnChange: null,
                    symbol: 'UBER',
                    symbol_logo_url: 'https://logo.clearbit.com/uber.com',
                    units: 10
                },
                {
                    __typename: 'STTransaction',
                    date: '2020.12.7',
                    operation: StTransactionOperationEnum.Buy,
                    price: 352.01,
                    return: null,
                    returnChange: null,
                    symbol: 'AAPL',
                    symbol_logo_url: 'https://logo.clearbit.com/uber.com',
                    units: 15
                }
            ]
        }
        ,
        transactionsSell: {
            __typename: 'STPortfolioWeeklyChangeTransactions',
            total: 2040.1,
            transactions: [
                {
                    __typename: 'STTransaction',
                    date: '2020.12.7',
                    operation: StTransactionOperationEnum.Sell,
                    price: 204.01,
                    return: null,
                    returnChange: null,
                    symbol: 'MMM',
                    symbol_logo_url: 'https://logo.clearbit.com/uber.com',
                    units: 10
                }
            ]
        }
    },
    // THIRD
    {
        __typename: 'STPortfolioWeeklyChange',
        date: '2020.12.16',
        portfolio: {
            __typename: 'STPortfolio',
            portfolioInvested: 1250,
            portfolioCash: 2560,
            portfolioWeeklyChange: -2.2,
            portfolioWeeklyGrowth: -350,
            date: '2020.12.16'
        },
        transactionsBuy: {
            __typename: 'STPortfolioWeeklyChangeTransactions',
            total: 255.56,
            transactions: [
                {
                    __typename: 'STTransaction',
                    date: '2020.12.16',
                    operation: StTransactionOperationEnum.Buy,
                    price: 54.01,
                    return: null,
                    returnChange: null,
                    symbol: 'UBER',
                    symbol_logo_url: 'https://logo.clearbit.com/uber.com',
                    units: 3
                }
            ]
        },
        transactionsSell: {
            __typename: 'STPortfolioWeeklyChangeTransactions',
            total: 7040.1,
            transactions: [
                {
                    __typename: 'STTransaction',
                    date: '2020.12.16',
                    operation: StTransactionOperationEnum.Sell,
                    price: 204.01,
                    return: null,
                    returnChange: null,
                    symbol: 'MMM',
                    symbol_logo_url: 'https://logo.clearbit.com/uber.com',
                    units: 10
                },
                {
                    __typename: 'STTransaction',
                    date: '2020.12.16',
                    operation: StTransactionOperationEnum.Buy,
                    price: 54.01,
                    return: null,
                    returnChange: null,
                    symbol: 'UBER',
                    symbol_logo_url: 'https://logo.clearbit.com/uber.com',
                    units: 20
                },
                {
                    __typename: 'STTransaction',
                    date: '2020.12.16',
                    operation: StTransactionOperationEnum.Buy,
                    price: 352.01,
                    return: null,
                    returnChange: null,
                    symbol: 'AAPL',
                    symbol_logo_url: 'https://logo.clearbit.com/uber.com',
                    units: 15
                }
            ]
        }
    },
    // OTHER


    {
        __typename: 'STPortfolioWeeklyChange',
        date: '2020.12.23',
        portfolio: {
            __typename: 'STPortfolio',
            portfolioInvested: 12560,
            portfolioCash: 3600,
            portfolioWeeklyChange: 3.6,
            portfolioWeeklyGrowth: 350,
            date: '2020.12.23'
        },
        transactionsBuy: {
            __typename: 'STPortfolioWeeklyChangeTransactions',
            total: 3895.56,
            transactions: [
                {
                    __typename: 'STTransaction',
                    date: '2020.12.23',
                    operation: StTransactionOperationEnum.Buy,
                    price: 54.01,
                    return: null,
                    returnChange: null,
                    symbol: 'UBER',
                    symbol_logo_url: 'https://logo.clearbit.com/uber.com',
                    units: 10
                },
                {
                    __typename: 'STTransaction',
                    date: '2020.12.23',
                    operation: StTransactionOperationEnum.Buy,
                    price: 234.01,
                    return: null,
                    returnChange: null,
                    symbol: 'FB',
                    symbol_logo_url: 'https://logo.clearbit.com/uber.com',
                    units: 15
                }
            ]
        },
        transactionsSell: {
            __typename: 'STPortfolioWeeklyChangeTransactions',
            total: 1240.1,
            transactions: [
                {
                    __typename: 'STTransaction',
                    date: '2020.12.23',
                    operation: StTransactionOperationEnum.Sell,
                    price: 124.01,
                    return: null,
                    returnChange: null,
                    symbol: 'MMM',
                    symbol_logo_url: 'https://logo.clearbit.com/uber.com',
                    units: 10
                }
            ]
        }
    },
    // SECOND
    {
        __typename: 'STPortfolioWeeklyChange',
        date: '2020.12.30',
        portfolio: {
            __typename: 'STPortfolio',
            portfolioInvested: 18560,
            portfolioCash: 6600,
            portfolioWeeklyChange: 8.2,
            portfolioWeeklyGrowth: 1550,
            date: '2020.12.30'
        },
        transactionsBuy: {
            __typename: 'STPortfolioWeeklyChangeTransactions',
            total: 5995.56,
            transactions: [
                {
                    __typename: 'STTransaction',
                    date: '2020.12.30',
                    operation: StTransactionOperationEnum.Buy,
                    price: 54.01,
                    return: null,
                    returnChange: null,
                    symbol: 'UBER',
                    symbol_logo_url: 'https://logo.clearbit.com/uber.com',
                    units: 10
                },
                {
                    __typename: 'STTransaction',
                    date: '2020.12.30',
                    operation: StTransactionOperationEnum.Buy,
                    price: 352.01,
                    return: null,
                    returnChange: null,
                    symbol: 'AAPL',
                    symbol_logo_url: 'https://logo.clearbit.com/uber.com',
                    units: 15
                }
            ]
        }
        ,
        transactionsSell: {
            __typename: 'STPortfolioWeeklyChangeTransactions',
            total: 2040.1,
            transactions: [
                {
                    __typename: 'STTransaction',
                    date: '2020.12.30',
                    operation: StTransactionOperationEnum.Sell,
                    price: 204.01,
                    return: null,
                    returnChange: null,
                    symbol: 'MMM',
                    symbol_logo_url: 'https://logo.clearbit.com/uber.com',
                    units: 10
                }
            ]
        }
    },
    // THIRD
    {
        __typename: 'STPortfolioWeeklyChange',
        date: '2021.1.3',
        portfolio: {
            __typename: 'STPortfolio',
            portfolioInvested: 1250,
            portfolioCash: 2560,
            portfolioWeeklyChange: -2.2,
            portfolioWeeklyGrowth: -350,
            date: '2021.1.3'
        },
        transactionsBuy: {
            __typename: 'STPortfolioWeeklyChangeTransactions',
            total: 255.56,
            transactions: [
                {
                    __typename: 'STTransaction',
                    date: '2021.1.3',
                    operation: StTransactionOperationEnum.Buy,
                    price: 54.01,
                    return: null,
                    returnChange: null,
                    symbol: 'UBER',
                    symbol_logo_url: 'https://logo.clearbit.com/uber.com',
                    units: 3
                }
            ]
        },
        transactionsSell: {
            __typename: 'STPortfolioWeeklyChangeTransactions',
            total: 7040.1,
            transactions: [
                {
                    __typename: 'STTransaction',
                    date: '2021.1.3',
                    operation: StTransactionOperationEnum.Sell,
                    price: 204.01,
                    return: null,
                    returnChange: null,
                    symbol: 'MMM',
                    symbol_logo_url: 'https://logo.clearbit.com/uber.com',
                    units: 10
                },
                {
                    __typename: 'STTransaction',
                    date: '2021.1.3',
                    operation: StTransactionOperationEnum.Buy,
                    price: 54.01,
                    return: null,
                    returnChange: null,
                    symbol: 'UBER',
                    symbol_logo_url: 'https://logo.clearbit.com/uber.com',
                    units: 20
                },
                {
                    __typename: 'STTransaction',
                    date: '2021.1.3',
                    operation: StTransactionOperationEnum.Buy,
                    price: 352.01,
                    return: null,
                    returnChange: null,
                    symbol: 'AAPL',
                    symbol_logo_url: 'https://logo.clearbit.com/uber.com',
                    units: 15
                }
            ]
        }
    },
];

export const getFakeTransactionTable = (): StPortfolioWeeklyChange[] => {
    const rev = fakeDataTransactionTable; //.reverse();
    return rev;
};
