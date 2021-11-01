from datetime import datetime
from json import dump, load
from os import makedirs, path


class FileManagerService:
    def __init__(self):
        self.FOLDER = 'resource'
        #if not path.exists(self.FOLDER):
        #    makedirs(self.FOLDER)

    def getJsonFile(self, document):
        if path.exists(self.FOLDER + "/" + document):
            with open(self.FOLDER + "/" + document, encoding='utf-8') as f:
                data = load(f)
            return data
        return None

    def getDocumentLastModification(self, document):
        fileLastModification = self.__getDocumentLastModificationTimestamp(document)
        if fileLastModification is None:
            return None

        today = datetime.today()
        fileLastModification = datetime.fromtimestamp(fileLastModification)

        diff = today - fileLastModification
        days, seconds = diff.days, diff.seconds
        hours = days * 24 + seconds // 3600
        minutes = (seconds % 3600) // 60
        seconds = seconds % 60

        print(today)
        print(fileLastModification)
        print(document, days, hours, minutes, seconds)

        return days, hours, minutes, seconds

    def saveFile(self, document, data):
        with open(self.FOLDER + "/" + document, "w+", encoding='utf-8') as f:
            dump(data, f, ensure_ascii=False, indent=4)

    def __getDocumentLastModificationTimestamp(self, document):
        if path.exists(self.FOLDER + "/" + document):
            return path.getmtime(self.FOLDER + "/" + document)
        return None
