from ExternalAPI import EconomicNews, YahooFinance, Finhub, Twelvedata, Quandl
from Services.fundamentals import FundamentalsService
import time
import quandl

StockNews = EconomicNews.EconomicNews()
YahooFinanceGlobal = YahooFinance.YahooFinance()
Finhub = Finhub.Finhub()
Twelvedata = Twelvedata.Twelvedata()

Quandl = Quandl.Quandl()
stockDetailsService =  FundamentalsService.FundamentalsService()


t = time.time()
print('start')

'''
#S&P 500 Ratios - https://www.quandl.com/data/MULTPL-S-P-500-Ratios
# check graph, some values goes back to 1880, other 200
quandl.ApiConfig.api_key = 'EngrQ3ssvi8xdyRgrU5z'
dividendYeld = quandl.get('MULTPL/SP500_DIV_YIELD_MONTH')
peRatio = quandl.get('MULTPL/SP500_PE_RATIO_MONTH', start_date='2010-07-01', end_date='2020-08-31')
earnings = quandl.get('MULTPL/SP500_EARNINGS_YIELD_MONTH', start_date='2010-07-01', end_date='2020-08-31')
priceToSale = quandl.get('MULTPL/SP500_PSR_QUARTER', start_date='2010-07-01', end_date='2020-08-31')
priceToBook = quandl.get('MULTPL/SP500_PBV_RATIO_QUARTER', start_date='2010-07-01', end_date='2020-08-31')
dividendPerMonth = quandl.get('MULTPL/SP500_DIV_MONTH', start_date='2010-07-01', end_date='2020-08-31')
salesGrowth = quandl.get('MULTPL/SP500_SALES_GROWTH_QUARTER', start_date='2010-07-01', end_date='2020-08-31')
bookValue = quandl.get('MULTPL/SP500_BVPS_QUARTER', start_date='2010-07-01', end_date='2020-08-31')




# USD exchange rate - https://www.quandl.com/data/FED-US-Federal-Reserve-Data-Releases

# Investor Sentiment
sentiment = quandl.get("AAII/AAII_SENTIMENT")


# Treasury Yield Curve Rates - https://www.quandl.com/data/USTREASURY-US-Treasury
treasury = quandl.get('USTREASURY/YIELD')

# Blockchain - bitcoin wallet https://www.quandl.com/data/BCHAIN-Blockchain
numberOfUsers = quandl.get('BCHAIN/MWNUS')
marketPrice = quandl.get('BCHAIN/MKPRU')
exchangeTradingVolume = quandl.get('BCHAIN/TRVOU')
numberOfTransactionsPerDay = quandl.get('BCHAIN/NTRAN')
costPerTransaction = quandl.get('BCHAIN/CPTRA')
marketCap = quandl.get('BCHAIN/MKTCP')
transactionTime = quandl.get('BCHAIN/ATRCT')
transactionFeesUSD = quandl.get("BCHAIN/TRFUS")
transactionTime = quandl.get("BCHAIN/ATRCT")

# transactionVolumeInUSD = quandl.get("BCHAIN/ETRVU") - estimates
# transactionVolumeInBTC = quandl.get("BCHAIN/ETRAV") - estimates

# Inflation Rates YOY - https://www.quandl.com/data/RATEINF-Inflation-Rates
inflationUSA = quandl.get("RATEINF/INFLATION_USA")
inflationUK = quandl.get("RATEINF/INFLATION_GBR")
inflationSwitzerland = quandl.get("RATEINF/INFLATION_CHE")
inflationFrance = quandl.get("RATEINF/INFLATION_FRA")
inflationGermany = quandl.get("RATEINF/INFLATION_DEU")
inflationJapan = quandl.get("RATEINF/INFLATION_JPN")
inflationCanada = quandl.get("RATEINF/INFLATION_CAN")
inflationRussia = quandl.get("RATEINF/INFLATION_RUS")

# BLS Employment & Unemployment - https://www.quandl.com/data/BLSE-BLS-Employment-Unemployment?page=4
governmentIndustry = quandl.get("BLSE/CES9000000001")
serviceProvidingIndustry = quandl.get("BLSE/CES0700000001")
goodsProducingIndustry = quandl.get("BLSE/CES0600000001")
privateIndustry = quandl.get("BLSE/CES0500000001")

#  Exchange rates US to X  - https://www.quandl.com/data/FED-US-Federal-Reserve-Data-Releases
# francsToUS = quandl.get("FED/RXI_N_A_SZ")
# hkTOUS = quandl.get("FED/RXI_N_A_HK")
# yenToUS = quandl.get("FED/RXI_N_A_JA")



# university of michigan - https://www.quandl.com/data/UMICH-Consumer-Sentiment?page=4
ProbabilityOfLoosingAJob = quandl.get("UMICH/SOC17")
buyingConditionForHouse = quandl.get("UMICH/SOC41")
sellingConditionForHouse = quandl.get("UMICH/SOC43")
consumerSentiment = quandl.get("UMICH/SOC1")
buyingConditionForVehicle = quandl.get("UMICH/SOC37")
financialSituationComparedFiveYearsAgo = quandl.get("UMICH/SOC10")
householdFinancialSituation = quandl.get("UMICH/SOC9")


# labour force by country https://www.quandl.com/data/ULMI-United-Nations-Labour-Market-Indicators


# misery index  - https://www.quandl.com/data/USMISERY/INDEX-United-States-Misery-Index
miseryIndex = quandl.get("USMISERY/INDEX") 
'''


quandl.ApiConfig.api_key = 'EngrQ3ssvi8xdyRgrU5z'

res = Quandl.getSP500Statistics()
#for k in unemployment.keys():
#    print(k, unemployment[k][0])

print(res.keys())
#print(res['peRatioMonth']) # date based on this
#print('----------------')
#print(res['priceToBookQrt'])
print('end',  time.time() - t)