from re import sub
from json import dumps, loads
from requests import get


class CustomYahooParser:
    def __init__(self):
        pass

    '''
        parse whole html sites
    '''

    def parse_json(self, url, *jsonPathArgs):
        try:
            html = get(url=url).text # downlaod whole html as text

            # find only the important part in html
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
            print('Exception in parse_json , error: ' + str(e) + ' jsonPathArgs: ', jsonPathArgs)
            return []
