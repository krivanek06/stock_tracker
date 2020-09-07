from bs4 import BeautifulSoup
from requests import get

'''
    transform {'Test (With % is)' : 55} -> {'Test_With_Pct_is' : 55} 
'''
unsupportedCharacter =  {'-': '', '/': '', '*': '', '%': 'Pct', '&': '', ',': '', ' ': '', '(': '', ')': '', '.': '',
                         '1': '', '0': '', '2': '', '3': '', "4": '', '5': '', '6': '', '7': '', '8': '', '9': ''}

def changeUnsupportedCharactersForDictKey(data):
    res = {}
    for k, v in data.items():
        k = k.translate(str.maketrans(unsupportedCharacter))
        res[k] = v
    return res


def changeUnsupportedCharacters(value):
    value = value.translate(str.maketrans(unsupportedCharacter))
    return value


def force_float(elt):
    try:
        return float(elt)
    except:
        return elt

def force_float_skipping_last_char(value):
    try:
        return float(value[0:-1])
    except:
        return value


def parseMultipleDropdownTables(site):
    soup = BeautifulSoup(get(site).text, features="lxml")
    tables = soup.find_all('table')
    result = {}
    for table in tables:
        # The first tr contains date
        dateTime = [th.get_text() for th in table.find("tr").find_all("th")]
        if dateTime != []:
            result['dateTime'] = dateTime[1:]
            result['dateTime'][0] = result['dateTime'][0].replace('As of Date: ', '').replace('Current', '')


        # save each line
        lines = []
        for row in table.find_all("tr")[1:]:
            line = [td.get_text() for td in row.find_all("td")]
            if line != []:
                lines.append(line)

        for line in lines:
            result[changeUnsupportedCharacters(line[0])] = line[1:] if len(line) > 2 else line[1]
    return result






