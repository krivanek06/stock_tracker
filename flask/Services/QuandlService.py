from ExternalAPI.QuandlApi import QuandlApi
from Services.FileManagerService import FileManagerService


class QuandlService:
    def __init__(self):
        self.quandlApi = QuandlApi()

    def getAllDataForDocumentKey(self, documentKey):
        return self.quandlApi.getAllDataForDocumentKey(documentKey)

    '''
        return partial data = Sp500, bonds, inflation rate, misery index, bitcoin
    '''

    def getMarketOverview(self):
        manager = FileManagerService()
        if manager.getJsonFile('quandl_temp'):
            return manager.getJsonFile('quandl_temp')
        t1 = self._getMarketOverviewSP500()
        t2 = self._getBonds()
        t3 = self._getTreasuryYield()
        t4 = self._getMiseryIndex()
        t5 = self._getInvestorSentiment()
        t6 = self._getInflationRate()
        t7 = self._getBitcoin()
        res = {**t1, **t2, **t3, **t4, **t5, **t6, **t7}
        manager.saveFile('quandl_temp', res)
        return res

    def _getBitcoin(self):
        documentKeys = ['qundal_bitcoin_market_capitalization_value', 'qundal_bitcoin_usd_exchange_trade_volume_value',
                        'qundal_bitcoin_total_transaction_fees_usd_value', 'qundal_bitcoin_median_transaction_confirmation_time_value',
                        'qundal_bitcoin_cost_per_transaction_value', 'qundal_bitcoin_number_of_transactions_value']
        return {'bitcoin': self._getPartialData(documentKeys, [])}

    def _getInflationRate(self):
        documentKeys = ['qundal_inflation_yoy__usa_value', 'qundal_inflation_yoy__euro_area_value',
                        'qundal_inflation_yoy__uk_value', 'qundal_inflation_yoy__japan_value',
                        'qundal_inflation_yoy__russia_value', 'qundal_inflation_yoy__australia_value']
        return {'inflation_rate': self._getPartialData(documentKeys, [])}

    def _getInvestorSentiment(self):
        documentKeys = ['qundal_aaii_investor_sentiment_data_bullish']
        return {'investor_sentiment': self._getPartialData(documentKeys, [])}

    def _getMiseryIndex(self):
        documentKeys = ['qundal_united_states_misery_index_unemployment_rate']
        allowedDataKeys = ['qundal_united_states_misery_index_unemployment_rate', 'qundal_united_states_misery_index_misery_index']
        return {'misery_index': self._getPartialData(documentKeys, allowedDataKeys)}

    def _getTreasuryYield(self):
        documentKeys = ['qundal_treasury_yield_curve_rates_1_mo']
        allowedDataKeys = ['qundal_treasury_yield_curve_rates_1_mo', 'qundal_treasury_yield_curve_rates_6_mo',
                           'qundal_treasury_yield_curve_rates_1_yr', 'qundal_treasury_yield_curve_rates_5_yr',
                           'qundal_treasury_yield_curve_rates_10_yr', 'qundal_treasury_yield_curve_rates_30_yr']
        return {'treasury_yield': self._getPartialData(documentKeys, allowedDataKeys)}

    def _getBonds(self):
        documentKeys = ['qundal_us_aaa_rated_bond_index_yield_bamlc0a1caaaey', 'qundal_us_aa_bond_index_yield_bamlc0a2caaey',
                        'qundal_us_high_yield_bb_corporate_bond_index_yield_bamlh0a1hybbey', 'qundal_us_cccrated_bond_index_yield_bamlh0a3hycey',
                        'qundal_us_corporate_bond_index_yield_bamlc0a0cmey', 'qundal_us_high_yield_corporate_bond_index_yield_bamlh0a0hym2ey',
                        'qundal_euro_emerging_markets_corporate_bond_index_yield_bamlemebcrpieey']
        return {'bonds': self._getPartialData(documentKeys)}

    def _getMarketOverviewSP500(self):
        documentKeys = ['qundal_sp_500_pe_ratio_by_month_value', 'qundal_shiller_pe_ratio_by_month_value',
                        'qundal_sp_500_book_value_per_share_by_quarter_value', 'qundal_sp_500_price_to_book_value_by_quarter_value',
                        'qundal_sp_500_real_sales_by_quarter_value', 'qundal_sp_500_real_sales_growth_by_quarter_value',
                        'qundal_sp_500_price_to_sales_ratio_by_quarter_value', 'qundal_sp_500_earnings_by_month_value',
                        'qundal_sp_500_earnings_growth_rate_by_quarter_value', 'qundal_sp_500_earnings_yield_by_month_value',
                        'qundal_sp_500_dividend_yield_by_month_value', 'qundal_sp_500_dividend_by_month_value',
                        'qundal_sp_500_dividend_growth_by_quarter_value']
        return {'sp500': self._getPartialData(documentKeys)}

    # for each dataset get only allowedDataKeys if not empty with max 150 data
    def _getPartialData(self, documentKeys: [], allowedDataKeys: [] = []):
        dataSet = list(map(lambda key: self.getAllDataForDocumentKey(key), documentKeys))
        results = []
        for data in dataSet:
            for result in data['result']:
                if allowedDataKeys != [] and result['documentKey'] not in allowedDataKeys:
                    continue
                copy = result
                copy['data'] = result['data'][-150:]
                copy['timestamp'] = result['timestamp'][-150:]
                results.append(copy)
        return results
