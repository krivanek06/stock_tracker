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

        summary = data.get('summary', {})
       
        calculatorFacade = FundamentalServiceCalculationFacade()
        data['calculations'] = calculatorFacade.calculateAdditionalData(symbol, data)

        # add beta to summary
        if summary != {}:
            summary['beta'] =  data['calculations']['beta']

         # calculate estimations for stocks
        if summary.get('symbolType') == 'STOCK' or summary.get('symbolType') == 'ADR': 
            data['calculatedPredictions'] = calculatorFacade.calculatePredictions(data)

        return data
