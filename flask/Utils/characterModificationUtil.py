from re import sub
from datetime import datetime
from dateutil.relativedelta import relativedelta
from math import isnan
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
        if isnan(number):
            return None
        return round(number, roundNumber)
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
    elif period in ['6mo', '1y', '2y']:
        return '1d', 'daily'
    elif period in ['5y']:
        return '1wk', 'weekly'
    else:
        return '1mo', 'monthly'


def getPastDatetimeFromPeriod(period: str) -> datetime:
    if period.upper() == 'MAX':
        return datetime(1920, 1, 1)

    now = datetime.now()
    if period in ['1d', '5d']:
        subtracting = int(period[:-1])
        return now + relativedelta(days=-subtracting)
    elif period in ['1mo', '3mo', '6mo']:
        subtracting = int(period[:-2])
        return now + relativedelta(months=-subtracting)
    elif period in ['1y', '2y', '5y', '10y']:
        subtracting = int(period[:-1])
        return now + relativedelta(years=-subtracting)
    raise Exception(f'Cannot return datetime for period: {period}')