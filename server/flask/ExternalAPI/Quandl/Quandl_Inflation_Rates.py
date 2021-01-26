from ExternalAPI.Quandl.QuandlRequester import QuandlRequester





class Quandl_Requester_Inflation_Rates(QuandlRequester):
    def __init__(self):
        super(Quandl_Requester_Inflation_Rates, self).__init__()
        self.indexes = {'USA': 'USA', 'GBR': 'UK', 'CHE': 'Switzerland', 'ITA': 'Italy', 'FRA': 'France',
                        'EUR': 'Europe', 'DEU': 'Germany', 'NZL': 'New Zealand', 'JPN': 'Japan', 'CAN': 'Canada',
                        'AUS': 'Australia', 'RUS': 'Russia', 'ARG': 'Argentina'}

    # , , , CAN, ,  Switzerland, RUS,
    # USA, EUROPE, UK, CAN, JAPAN,  Switzerland, RUS, AUS

    def getConsumer(self, prefix):
        fullname = self.indexes[prefix]
        consumer = self._generatInformationProvider('RATEINF/CPI_' + prefix, [fullname + ' consumer index'], 'inflation_rates_' + fullname)
        consumerYOY = self._generatInformationProvider('RATEINF/INFLATION_' + prefix, [fullname + ' YOY inflation'])

        consumerYOY['result'][0]['visible'] = False
        consumer['result'] = [consumer['result'][0], consumerYOY['result'][0]]

        return consumer

    def getPartialData(self):
        #result = {k.lower(): self.getConsumer(k) for k in self.indexes.keys()}
        #self._formatTimestampForMultipleData(result) #  Consumer price
        result = self.loadMainDataForSection('Inflation rate')
        result = self._formatTimestampForMultipleData(result)
        return {'inflation_rate': result}
