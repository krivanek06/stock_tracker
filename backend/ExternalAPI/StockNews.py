import os
from requests import get
import enviroments
import json


class StockNews:
    def __init__(self):
        self.API_KEY = os.environ.get('NEWS_API_KEY')
        self.BUSINESS_FILENAME = "business_news.json"
        self.WALL_STREET_FILENAME = "wallStreet_news.json"
        self.APPLE_FILENAME = "apple_news.json"
        self.FOLDER = 'resource/stock_news_data'

        if not os.path.exists(self.FOLDER):
            os.makedirs(self.FOLDER)

    # fetch stock news each 4-6 hours
    def fetchAndSaveNews(self):
        business_news = get('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=' + self.API_KEY)
        wallStreet_news = get('http://newsapi.org/v2/everything?domains=wsj.com&apiKey=' + self.API_KEY)
        apple_news = get('http://newsapi.org/v2/everything?q=apple&from=2020-06-07&to=2020-06-07&sortBy=popularity&apiKey=' + self.API_KEY)

        #with open(self.FOLDER + "/" + self.BUSINESS_FILENAME, "w+", encoding='utf-8') as f:
        #    json.dump(business_news.json(), f, ensure_ascii=False, indent=4)

        with open(self.FOLDER + "/" + self.WALL_STREET_FILENAME, "w+", encoding='utf-8') as f:
            json.dump(wallStreet_news.json(), f, ensure_ascii=False, indent=4)

        #with open(self.FOLDER + "/" + self.APPLE_FILENAME, "w+", encoding='utf-8') as f:
        #    json.dump(apple_news.json(), f, ensure_ascii=False, indent=4)

    def getJsonDataFromFile(self):
        result = {}
        #with open(self.FOLDER + "/" + self.BUSINESS_FILENAME, encoding='utf-8') as f:
        #    result[self.BUSINESS_FILENAME[:-5]] = json.load(f)

        with open(self.FOLDER + "/" + self.WALL_STREET_FILENAME, encoding='utf-8') as f:
            result['wallStreetNews'] = json.load(f)


        #with open(self.FOLDER + "/" + self.APPLE_FILENAME, encoding='utf-8') as f:
        #    result[self.APPLE_FILENAME[:-5]] = json.load(f)
        for key in result.keys():
            for art in result[key]['articles']:
                del art['content']

        return result
