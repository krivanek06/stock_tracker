from ExternalAPI.Quandl.Quandl import Quandl


# https://www.quandl.com/data/BLSN-BLS-International
class Quandl_Export(Quandl):
    def __init__(self):
        super(Quandl_Export, self).__init__()

    # Manufacturing -------------------------------------------------
    def getElectronicsManufatoring(self):
        return self._generatInformationProvider('BLSN/EIUCOASEANZ334', ['Electronics'])

    def getFurnitureManufatoring(self):
        return self._generatInformationProvider('BLSN/EIUCOASEANZ337', ['Furniture'])

    def getApparelManufatoring(self):
        return self._generatInformationProvider('BLSN/EIUCOASEANZ315', ['Apparel'])

    def getFoodManufatoring(self):
        return self._generatInformationProvider('BLSN/EIUCOASEANZ311', ['Food'])

    def getAgricultureManufatoring(self):
        return self._generatInformationProvider('BLSN/EIUCOASEANZ11', ['Agriculture'])

    def getMiningManufatoring(self):
        return self._generatInformationProvider('BLSN/EIUCOCANZ21', ['Mining'])

    # Export index -------------------------------------------------
    def getAsiaExportIndex(self):
        return self._generatInformationProvider('BLSN/EIUIH1422', ['Asia'])

    def getEuropeExportIndex(self):
        return self._generatInformationProvider('BLSN/EIUIH1421', ['Europe'])

    def getEuropeanUnionExportIndex(self):
        return self._generatInformationProvider('BLSN/EIUCOEECTOT', ['European Union'])

    def getFranceExportIndex(self):
        return self._generatInformationProvider('BLSN/EIUCOFRNTOT', ['France'])

    def getUKExportIndex(self):
        return self._generatInformationProvider('BLSN/EIUIH14211', ['United kingdom'])

    def getLatinAmiricaExportIndex(self):
        return self._generatInformationProvider('BLSN/EIUCOLATTOT', ['Latin America'])

    def getGermanyExportIndex(self):
        return self._generatInformationProvider('BLSN/EIUCOGERTOT', ['Germany'])

    def getJapanExportIndex(self):
        return self._generatInformationProvider('BLSN/EIUCOJPNTOT', ['Japan'])

    def getChinaExportIndex(self):
        return self._generatInformationProvider('BLSN/EIUCOCHNTOT', ['China'])

    def getCanadaExportIndex(self):
        return self._generatInformationProvider('BLSN/EIUCOCANTOT', ['Canada'])

    # Grouped data -------------------------------------------------
    def getDataFromAllManufactoring(self):
        result = {
            'Electronics': self.getElectronicsManufatoring(),
            'Furniture': self.getFurnitureManufatoring(),
            'Apparel': self.getApparelManufatoring(),
            'Food': self.getFoodManufatoring(),
            'Agriculture': self.getAgricultureManufatoring(),
            'Mining': self.getMiningManufatoring()
        }
        self._formatTimestampForMultipleData(result)

        return result

    def getDataFromAllExports(self):
        result = {
            'asia': self.getAsiaExportIndex(),
            'europe': self.getEuropeExportIndex(),
            'europeanUnion': self.getEuropeanUnionExportIndex(),
            'france': self.getFranceExportIndex(),
            'unitedkingdom': self.getUKExportIndex(),
            'latinAmerica': self.getLatinAmiricaExportIndex(),
            'germany': self.getGermanyExportIndex(),
            'japan': self.getJapanExportIndex(),
            'china': self.getChinaExportIndex(),
            'canada': self.getCanadaExportIndex()
        }
        self._formatTimestampForMultipleData(result)

        return result
