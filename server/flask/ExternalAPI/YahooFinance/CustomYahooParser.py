from re import sub
from json import dumps, loads
from requests import get
from ExternalAPI import utils
from bs4 import BeautifulSoup



class CustomYahooParser:
    def __init__(self):
        pass

    '''
        parse whole html sites
    '''

    def parse_json(self, url, *jsonPathArgs):
        try:
            html = get(url=url).text

            json_str = html.split('root.App.main =')[1].split('(this)')[0].split(';\n}')[0].strip()
            data = loads(json_str)['context']['dispatcher']['stores']
            for path in jsonPathArgs:
                data = data[path]

            # return data
            new_data = dumps(data).replace('{}', 'null')
            new_data = sub(r'\{[\'|\"]raw[\'|\"]:(.*?),(.*?)\}', r'\1', new_data)

            json_info = loads(new_data)

            return json_info
        except Exception as e:
            return None

    def parseAnalysisInfo(self, site):
        # parse multiple html table dropdown data order
        # example -> https://finance.yahoo.com/quote/AAPL/analysis?p=AAPL
        soup = BeautifulSoup(get(site).text, features="lxml")
        tables = soup.find_all('table')
        result = {}

        for table in tables:
            # The first tr contains the field names, keys.
            headings = [th.get_text() for th in table.find("tr").find_all("th")]
            lines = []
            # save each line
            for row in table.find_all("tr")[1:]:
                line = [td.get_text() for td in row.find_all("td")]
                lines.append(line)

            tmpContainer = []
            # parse dropdown lines
            for i in range(1, len(headings)):
                tmpObject = {line[0]: line[i] for line in lines}
                tmpObject['name'] = headings[i]
                tmpObject = utils.changeUnsupportedCharactersForDictKey(tmpObject)
                tmpContainer.append(tmpObject)

            result[utils.changeUnsupportedCharacters(headings[0])] = tmpContainer
        return result

    def get_json(self, url, proxy=None):
        html = get(url=url, proxies=proxy).text

        if "QuoteSummaryStore" not in html:
            html = get(url=url, proxies=proxy).text
            if "QuoteSummaryStore" not in html:
                return {}

        json_str = html.split('root.App.main =')[1].split('(this)')[0].split(';\n}')[0].strip()
        data = loads(json_str)['context']['dispatcher']['stores']['QuoteSummaryStore']

        # return data
        new_data = dumps(data).replace('{}', 'null')
        new_data = sub(r'\{[\'|\"]raw[\'|\"]:(.*?),(.*?)\}', r'\1', new_data)

        return loads(new_data)
