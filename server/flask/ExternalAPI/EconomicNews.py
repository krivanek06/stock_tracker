from requests import get
from datetime import datetime
from Services import FileManagerService
from private_data import enviroments

class EconomicNews:
    def __init__(self):
        self.API_KEY = enviroments.NEWS_API_KEY
        self.BUSINESS_FILENAME = "business_news.json"
        self.__FOLDER = 'resource/other'
        self.fileManagerService = FileManagerService.FileManagerService()

    # fetch news if older than 6 hours else return from file
    def getJsonDataFromFile(self):
        lastFetched = self.fileManagerService.getDocumentLastModification(self.BUSINESS_FILENAME)
        if lastFetched is None or lastFetched[1] > 6:
            currentNews = self.__fetchNews()
            self.fileManagerService.saveFile(self.BUSINESS_FILENAME, currentNews)
            return currentNews
        return self.fileManagerService.getJsonFile(self.BUSINESS_FILENAME)

    # fetch stock news each 4-6 hours
    def __fetchNews(self):
        business_news = get('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=' + self.API_KEY).json()['articles']
        # filter only those which has image and description
        business_news_valid = [article for article in business_news if article['description'] and article['urlToImage']]

        # format data fot same object as news for stock details
        result = [{
            'datetime': datetime.strptime(d['publishedAt'], "%Y-%m-%dT%H:%M:%SZ").timestamp(), #
            'headline': d['title'],
            'sourceName': d['source'].get('name'),
            'summary': d['description'],
            'url': d['url'],
            'image': d['urlToImage']
        } for d in business_news_valid]
        return result