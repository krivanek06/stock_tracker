import os
import json


class FileManagerService:
    def __init__(self, rootFolder):
        self.FOLDER = rootFolder
        if not os.path.exists(self.FOLDER):
            os.makedirs(self.FOLDER)

    def getJsonFile(self, document):
        if os.path.exists(self.FOLDER + "/" + document):
            with open(self.FOLDER + "/" + document, encoding='utf-8') as f:
                data = json.load(f)
            return data
        return None

    def saveFile(self, document, data):
        with open(self.FOLDER + "/" + document, "w+", encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)