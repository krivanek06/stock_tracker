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