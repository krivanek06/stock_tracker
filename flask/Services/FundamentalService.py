from Services.fundamentals_services.FundamentalServiceCalculationFacade import \
    FundamentalServiceCalculationFacade
from Services.fundamentals_services.FundamentalServiceDataFetcher import \
    FundamentalServiceDataFetcher
from Services.fundamentals_services.FundamentalServiceFormatter import \
    FundamentalServiceFormatter


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

       
        calculatorFacade = FundamentalServiceCalculationFacade(data)
        data['calculations'] = calculatorFacade.calculateAdditionalData()

        # add beta to summary
        if data.get('summary') is not None:
            data['summary']['beta'] =  data['calculations']['beta']

         # calculate estimations for stocks
        if data.get('summary', {}).get('symbolType') == 'STOCK' or data.get('summary', {}).get('symbolType') == 'ADR': 
            calculatorFacade.calculatePredictions()

        return data
