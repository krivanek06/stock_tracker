from requests import get
from datetime import datetime
import environments_keys


class EconomicNewsApi:
    def __init__(self):
        self.API_KEY = environments_keys.NEWS_API_KEY

    # fetch news if older than 6 hours else return from file
    def getNews(self):
        business_news = \
        get('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=' + self.API_KEY).json()[
            'articles']
        # filter only those which has image and description
        business_news_valid = [article for article in business_news if article['description'] and article['urlToImage']]

        # format data fot same object as news for stock details
        result = [{
            'datetime': datetime.strptime(d['publishedAt'], "%Y-%m-%dT%H:%M:%SZ").timestamp(),  #
            'headline': d['title'].split(' - ')[0],
            'sourceName': d['source'].get('name'),
            'summary': d['description'],
            'url': d['url'],
            'image': d['urlToImage']
        } for d in business_news_valid]
        return result