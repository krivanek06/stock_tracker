import os
from requests import get
from private_data import enviroments
import json
from datetime import datetime
from dateutil import relativedelta
import time

class EconomicNews:
    def __init__(self):
        self.API_KEY = os.environ.get('NEWS_API_KEY')
        self.BUSINESS_FILENAME = "business_news.json"
        self.FOLDER = 'resource/stock_news_data'
        self.lastFetchedTimestamp = None # fetch news if older than 6 hours

        # create folder if does not exists
        if not os.path.exists(self.FOLDER):
            os.makedirs(self.FOLDER)

    # fetch stock news each 4-6 hours
    def __fetchAndSaveNews(self):
        business_news = get('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=' + self.API_KEY).json()['articles']
        #print(business_news)
        # format data fot same object as news for stock details
        result = [{
            'datetime': datetime.strptime(d['publishedAt'], "%Y-%m-%dT%H:%M:%SZ").timestamp(), #
            'headline': d['title'],
            'sourceName': d['source'].get('name'),
            'summary': d['description'],
            'url': d['url'],
            'image': d['urlToImage']
        } for d in business_news]

        with open(self.FOLDER + "/" + self.BUSINESS_FILENAME, "w+", encoding='utf-8') as f:
            json.dump(result, f, ensure_ascii=False, indent=4)

    def getJsonDataFromFile(self):
        # fetch news if older than 6 hours
        sixHourBefore = datetime.today() - relativedelta.relativedelta(hours=6)
        if self.lastFetchedTimestamp is None or self.lastFetchedTimestamp < sixHourBefore:
            self.lastFetchedTimestamp = datetime.today()
            self.__fetchAndSaveNews()
            print('fetched')

        with open(self.FOLDER + "/" + self.BUSINESS_FILENAME, encoding='utf-8') as f:
            result = json.load(f) # [self.BUSINESS_FILENAME[:-5]]

        return result
