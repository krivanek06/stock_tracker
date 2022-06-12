from datetime import datetime
from math import isnan
from re import sub

from dateutil.relativedelta import relativedelta

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


def changeUnsupportedCharacters(value: str):
    value = value.translate(str.maketrans(unsupportedCharacter))
    value = value.translate(str.maketrans(unsupportedCharacterNumbers))
    return value


# https://stackoverflow.com/questions/50337256/how-to-change-values-in-a-nested-dictionary
def change_key(d, required_key, new_value):
    for k, v in d.items():
        if isinstance(v, dict):
            change_key(v, required_key, new_value)
        if k == required_key:
            d[k] = new_value


# change nan or "infinity" values for null
def check_value_correction(data):
    try:
        res = {}
        for k, v in data.items():
            if isinstance(v, dict):
                v = check_value_correction(v)
            elif isinstance(v, list):
                v = [check_value_correction(d) for d in v]
            elif v == 'Infinity' or ((isinstance(v, int) or isinstance(v, float)) and isnan(v)):
                v = None
            res[k] = v
        return res
    except:
        return data


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

