import quandl
import os
from private_data import enviroments
from requests import get
from datetime import datetime
from math import isnan
from queue import Queue
from threading import Thread
import json


class Quandl:
    def __init__(self):
        quandl.ApiConfig.api_key = os.environ['QUANDL_SECRET_KEY']
        self.FOLDER = 'resource/chart_data'
        self.SP500Folder = 'sp500_data.json'
        self.InvestorSentimentFolder = 'investor_sentiment.json'
        self.TreasuryYieldCurveRatesFolder = 'treasury_yield_curve_rates.json'
        self.BitcoinDataFolder = 'bitcoin_data.json'
        self.MiseryIndexFolder = 'misery_index.json'
        self.EmploymentDataFolder = 'employment_data.json'

        if not os.path.exists(self.FOLDER):
            os.makedirs(self.FOLDER)

    # https://www.quandl.com/data/BLSE-BLS-Employment-Unemployment?page=4
    def getEmploymentData(self):
        if os.path.exists(self.FOLDER + "/" + self.EmploymentDataFolder):
            with open(self.FOLDER + "/" + self.EmploymentDataFolder, encoding='utf-8') as f:
                data = json.load(f)
            return self.__getOnlyPartialData(data)

        arrayKeys = ['governmentIndustry', 'serviceProvidingIndustry', 'goodsProducingIndustry', 'privateIndustry']
        data = self.__downloadEmployment()
        data = self.__formatData(arrayKeys, data, True)

        with open(self.FOLDER + "/" + self.EmploymentDataFolder, "w+", encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)

        return self.__getOnlyPartialData(data)

    # https://www.quandl.com/data/USMISERY/INDEX-United-States-Misery-Index
    def getMiseryIndex(self):
        if os.path.exists(self.FOLDER + "/" + self.MiseryIndexFolder):
            with open(self.FOLDER + "/" + self.MiseryIndexFolder, encoding='utf-8') as f:
                data = json.load(f)
            return self.__getOnlyPartialData(data)

        arrayKeys = ['Unemployment Rate', 'Inflation Rate', 'Misery Index']
        data = quandl.get("USMISERY/INDEX")
        data = self.__formatData(arrayKeys, data, False)

        with open(self.FOLDER + "/" + self.MiseryIndexFolder, "w+", encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)

        return self.__getOnlyPartialData(data)

    # https://www.quandl.com/data/BCHAIN-Blockchain
    def getBitcoinData(self):
        if os.path.exists(self.FOLDER + "/" + self.BitcoinDataFolder):
            with open(self.FOLDER + "/" + self.BitcoinDataFolder, encoding='utf-8') as f:
                data = json.load(f)
            return self.__getOnlyPartialData(data)

        arrayKeys = ['marketPrice', 'exchangeTradingVolume', 'numberOfTransactionsPerDay', 'costPerTransaction',
                     'marketCap', 'transactionTime', 'transactionFeesUSD']
        data = self.__downloadBitcoinData()
        data = self.__formatData(arrayKeys, data, True)

        with open(self.FOLDER + "/" + self.BitcoinDataFolder, "w+", encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)

        return self.__getOnlyPartialData(data)


    # https://www.quandl.com/data/USTREASURY-US-Treasury
    def getTreasuryYieldCurveRates(self):
        if os.path.exists(self.FOLDER + "/" + self.TreasuryYieldCurveRatesFolder):
            with open(self.FOLDER + "/" + self.TreasuryYieldCurveRatesFolder, encoding='utf-8') as f:
                data = json.load(f)
            return self.__getOnlyPartialData(data)
        # '1 MO', '2 MO', '3 MO', '6 MO', '1 YR', '2 YR', '3 YR', '5 YR', '7 YR', '10 YR', '20 YR', '30 YR'
        arrayKeys = ['6 MO', '1 YR', '5 YR', '10 YR', '20 YR', '30 YR']
        data = quandl.get('USTREASURY/YIELD')
        data = self.__formatData(arrayKeys, data, False)

        with open(self.FOLDER + "/" + self.TreasuryYieldCurveRatesFolder, "w+", encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)

        return self.__getOnlyPartialData(data)


    def getInvestorSentiment(self):
        if os.path.exists(self.FOLDER + "/" + self.InvestorSentimentFolder):
            with open(self.FOLDER + "/" + self.InvestorSentimentFolder, encoding='utf-8') as f:
                data = json.load(f)
            return self.__getOnlyPartialData(data)

        arrayKeys = ['Bullish', 'Neutral', 'Bearish']
        data = quandl.get("AAII/AAII_SENTIMENT")
        data = self.__formatData(arrayKeys, data, False)

        with open(self.FOLDER + "/" + self.InvestorSentimentFolder, "w+", encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)

        return self.__getOnlyPartialData(data)

    # https://www.quandl.com/data/MULTPL-S-P-500-Ratios
    def getSP500Statistics(self):
        if os.path.exists(self.FOLDER + "/" + self.SP500Folder):
            with open(self.FOLDER + "/" + self.SP500Folder, encoding='utf-8') as f:
                result = json.load(f)
            return self.__getOnlyPartialData(result)

        arrayKeys = ['dividendYieldMonth', 'peRatioMonth', 'earningsYieldMonth', 'priceToBookQrt', 'dividendPerMonth',
                'salesGrowthQrt', 'bookValueQrt', 'priceToSaleQrt']
        data = self.__downloadSP500Data()
        data = self.__formatData(arrayKeys, data)

        with open(self.FOLDER + "/" + self.SP500Folder, "w+", encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)

        return self.__getOnlyPartialData(data)

    def __getOnlyPartialData(self, data):
        result = {k: data[k][-30:] for k in data.keys()}

        '''
        timestamps = [datetime.strptime(date, '%d/%m/%Y') for date in result['timestamp']]
        interval1 = timestamps[-1] - timestamps[-2]
        interval2 = timestamps[-2] - timestamps[-3]
        largerInterval = interval1 if interval1 > interval2 else interval2

        result['interval'] = largerInterval.total_seconds()
        result['startingDate'] = timestamps[0]
        '''

        return result

    '''
        arrayOfKeys - keys which will be saved from data, space is removed automatically
        data - dictionary {Key: [1,2...]}
    '''
    def __formatData(self, arrayOfKeys, data, hasValueField = True):
        formatedData = {d.replace(' ', '_'): [] for d in arrayOfKeys}
        formatedData['timestamp'] = []
        longestData = max([len(data[k]), k] for k in data.keys()) # length + key

        if hasValueField:
            for k in data[longestData[1]]['Value'].keys():
                formatedData['timestamp'].append(k.timestamp()) # .strftime("%d/%m/%Y")
        else:
            for k in data[longestData[1]].keys():
                formatedData['timestamp'].append(k.timestamp())


        # arrays are different sizes, inicialise everything to 0
        for i in range(longestData[0]):
            for d in arrayOfKeys:
                formatedData[d.replace(' ', '_')].append(0)

        # from end change values
        for d in arrayOfKeys:
            for i in range(1, len(data[d]) + 1):
                if hasValueField:
                    formatedData[d.replace(' ', '_')][-i] = 0 if isnan(data[d]['Value'][-i]) else data[d]['Value'][-i]
                else:
                    formatedData[d.replace(' ', '_')][-i] = 0 if isnan(data[d][-i]) else data[d][-i]
        return formatedData

    def __downloadSP500Data(self):
        que = Queue()
        # declare threads
        t1 = Thread(target=lambda q, arg1: q.put({'dividendYieldMonth': quandl.get('MULTPL/SP500_DIV_YIELD_MONTH')}),
                    args=(que, None))
        t2 = Thread(target=lambda q, arg1: q.put({'peRatioMonth': quandl.get('MULTPL/SP500_PE_RATIO_MONTH')}),
                    args=(que, None))
        t3 = Thread(
            target=lambda q, arg1: q.put({'earningsYieldMonth': quandl.get('MULTPL/SP500_EARNINGS_YIELD_MONTH')}),
            args=(que, None))

        t1.start()
        t2.start()
        t3.start()

        t1.join()
        t2.join()
        t3.join()

        t4 = Thread(target=lambda q, arg1: q.put({'priceToBookQrt': quandl.get('MULTPL/SP500_PBV_RATIO_QUARTER')}),
                    args=(que, None))
        t5 = Thread(target=lambda q, arg1: q.put({'dividendPerMonth': quandl.get('MULTPL/SP500_DIV_MONTH')}),
                    args=(que, None))
        t6 = Thread(target=lambda q, arg1: q.put({'salesGrowthQrt': quandl.get('MULTPL/SP500_SALES_GROWTH_QUARTER')}),
                    args=(que, None))
        t7 = Thread(target=lambda q, arg1: q.put({'bookValueQrt': quandl.get('MULTPL/SP500_BVPS_QUARTER')}),
                    args=(que, None))
        t8 = Thread(target=lambda q, arg1: q.put({'priceToSaleQrt': quandl.get('MULTPL/SP500_PSR_QUARTER')}),
                    args=(que, None))

        t4.start()
        t5.start()
        t6.start()
        t7.start()
        t8.start()

        t4.join()
        t5.join()
        t6.join()
        t7.join()
        t8.join()

        result = {**que.get(), **que.get(), **que.get(), **que.get(), **que.get(), **que.get(), **que.get(), **que.get()}

        return result

    def __downloadEmployment(self):
        que = Queue()

        # declare threads
        t1 = Thread(target=lambda q, arg1: q.put({'governmentIndustry': quandl.get('BLSE/CES9000000001')}), args=(que, None))
        t2 = Thread(target=lambda q, arg1: q.put({'serviceProvidingIndustry': quandl.get('BLSE/CES0700000001')}), args=(que, None))
        t3 = Thread(target=lambda q, arg1: q.put({'goodsProducingIndustry': quandl.get('BLSE/CES0600000001')}),args=(que, None))
        t4 = Thread(target=lambda q, arg1: q.put({'privateIndustry': quandl.get('BLSE/CES0500000001')}), args=(que, None))

        t1.start()
        t2.start()
        t3.start()
        t4.start()

        t1.join()
        t2.join()
        t3.join()
        t4.join()

        result = {**que.get(), **que.get(), **que.get(), **que.get()}
        return result

    def __downloadBitcoinData(self):
        que = Queue()

        t1 = Thread(target=lambda q, arg1: q.put({'marketPrice': quandl.get('BCHAIN/MKPRU')}), args=(que, None))
        t2 = Thread(target=lambda q, arg1: q.put({'exchangeTradingVolume': quandl.get('BCHAIN/TRVOU')}), args=(que, None))
        t3 = Thread(target=lambda q, arg1: q.put({'numberOfTransactionsPerDay': quandl.get('BCHAIN/NTRAN')}), args=(que, None))

        t1.start()
        t2.start()
        t3.start()

        t1.join()
        t2.join()
        t3.join()

        t4 = Thread(target=lambda q, arg1: q.put({'costPerTransaction': quandl.get('BCHAIN/CPTRA')}), args=(que, None))
        t5 = Thread(target=lambda q, arg1: q.put({'marketCap': quandl.get('BCHAIN/MKTCP')}), args=(que, None))
        t6 = Thread(target=lambda q, arg1: q.put({'transactionTime': quandl.get('BCHAIN/ATRCT')}), args=(que, None))
        t7 = Thread(target=lambda q, arg1: q.put({'transactionFeesUSD': quandl.get('BCHAIN/TRFUS')}), args=(que, None))

        t4.start()
        t5.start()
        t6.start()
        t7.start()

        t4.join()
        t5.join()
        t6.join()
        t7.join()

        result = {**que.get(), **que.get(), **que.get(), **que.get(), **que.get(), **que.get(), **que.get()}

        return result