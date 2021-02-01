from bs4 import BeautifulSoup
from requests import get
from re import sub

'''
    transform {'Test (With % is)' : 55} -> {'Test_With_Pct_is' : 55} 
'''
unsupportedCharacter = {'-': '', '/': '', '*': '', '%': 'Pct', '&': '', ',': '', ' ': '', '(': '', ')': '', '.': '',
                        ':': '', ';': '', '=': ''}

unsupportedCharacterNumbers = {'1': 'One', '0': '', '2': 'Two', '3': 'Three', "4": 'Four', '5': 'Five', '6': 'Six',
                               '7': 'Seven', '8': 'Eight', '9': 'Nine'}


def changeUnsupportedCharactersForDictKey(data):
    res = {}
    for k, v in data.items():
        if isinstance(v, dict):
            v = changeUnsupportedCharactersForDictKey(v)
        k = changeUnsupportedCharacters(k)
        k = k[0].lower() + k[1:]
        res[k] = v

    return res


def changeUnsupportedCharacters(value):
    value = value.translate(str.maketrans(unsupportedCharacter))
    value = value.translate(str.maketrans(unsupportedCharacterNumbers))
    return value


def changeUnsupportedCharactersExceptNumber(value):
    value = value.translate(str.maketrans(unsupportedCharacter))
    return value


def cammelCaseToWord(name):
    return sub(r'(?<!^)(?=[A-Z])', ' ', name).lower().capitalize()


def force_round(number, roundNumber=4):
    try:
        return round(number, roundNumber) if number is not None else None
    except:
        return None


def force_float(elt):
    try:
        return float(elt)
    except:
        return None


def force_float_else_return_zero(elt):
    try:
        return float(elt)
    except:
        return 0


def force_float_skipping_last_char(value):
    try:
        return float(value[0:-1])
    except:
        return None


def parseMultipleDropdownTables(site):
    try:
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
    except Exception as e:
        print('Exception in parseMultipleDropdownTables: ' + str(e))
        return None
