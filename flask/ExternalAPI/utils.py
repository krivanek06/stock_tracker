from re import sub
from datetime import datetime

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


# data_aggregation - 1d, 5d, 1m ...
def getIntervalFromPeriod(period: str) -> (str, str):
    if period == '1d':
        return '1m', '1min'
    elif period in ['5d']:
        return '15m', '15min'
    elif period in ['1mo']:
        return '30m', '30min'
    elif period in ['3mo']:
        return '1h', '60min'
    elif period in ['6mo', '1y']:
        return '1d', 'daily'
    elif period in ['2y', '5y']:
        return '1wk', 'weekly'
    else:
        return '1mo', 'monthly'


def getPastDatetimeFromPeriod(period: str) -> datetime:
    now = datetime.now()
    subtracting = int(period[0])
    if period in ['1d', '5d']:
        return datetime(now.year, now.month, now.day - subtracting)
    elif period in ['1mo', '3mo', '6mo']:
        return datetime(now.year, now.month - subtracting, now.day)
    elif period in ['1y', '2y', '5y']:
        return datetime(now.year - subtracting, now.month, now.day)
    raise Exception(f'Cannot return datetime for period: {period}')
