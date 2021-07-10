from Services.fundamentals_services.FundamentalServiceCalculationFacade import FundamentalServiceCalculationFacade
from Services.fundamentals_services.FundamentalServiceDataFetcher import FundamentalServiceDataFetcher
from Services.fundamentals_services.FundamentalServiceFormatter import FundamentalServiceFormatter


class FundamentalService:
    def __init__(self):
        pass

    def getStockNews(self, symbol):
        return FundamentalServiceDataFetcher().fetchStockNews(symbol)

    def getStockDetails(self, symbol):
        fetcher = FundamentalServiceDataFetcher()
        data = fetcher.fetchStockDetails(symbol)

        # format data
        data = FundamentalServiceFormatter(data).formatFetchedStockDetails(symbol)

        # calculate additional data & estimations
        calculatorFacade = FundamentalServiceCalculationFacade(data)
        calculatorFacade.calculateAdditionalData()
        calculatorFacade.calculatePredictions()

        return data
