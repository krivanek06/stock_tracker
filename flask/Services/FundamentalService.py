from Services.fundamentals_services.FundamentalServiceCalculationFacade import FundamentalServiceCalculationFacade
from Services.fundamentals_services.FundamentalServiceDataFetcher import FundamentalServiceDataFetcher
from Services.fundamentals_services.FundamentalServiceFormatter import FundamentalServiceFormatter
from Services.FileManagerService import FileManagerService


class FundamentalService:
    def __init__(self):
        pass

    def getStockDetails(self, symbol):
        fetcher = FundamentalServiceDataFetcher()

        data = FileManagerService().getJsonFile(symbol)
        if data is None:
            data = fetcher.fetchStockDetails(symbol)
            FileManagerService().saveFile(symbol, data)

        #  data = fetcher.fetchStockDetails(symbol)

        # format data
        data = FundamentalServiceFormatter(data).formatFetchedStockDetails(symbol)

        # calculate additional data & estimations
        calculatorFacade = FundamentalServiceCalculationFacade(data)
        calculatorFacade.calculateAdditionalData()
        calculatorFacade.calculatePredictions()

        return data



