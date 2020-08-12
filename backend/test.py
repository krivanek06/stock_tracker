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
# university of michigan - https://www.quandl.com/data/UMICH-Consumer-Sentiment?page=4
ProbabilityOfLoosingAJob = quandl.get("UMICH/SOC17")
buyingConditionForHouse = quandl.get("UMICH/SOC41")
sellingConditionForHouse = quandl.get("UMICH/SOC43")
consumerSentiment = quandl.get("UMICH/SOC1")
buyingConditionForVehicle = quandl.get("UMICH/SOC37")
financialSituationComparedFiveYearsAgo = quandl.get("UMICH/SOC10")
householdFinancialSituation = quandl.get("UMICH/SOC9")
'''


#res = Quandl.getMiseryIndex()
#res = Quandl.getBitcoinData()
res = Quandl.getEmploymentData()
print(res.keys())



print('end',  time.time() - t)