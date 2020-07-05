
export interface MarketNewsWrapper {
  economicNews: MarketNews;
}

export interface MarketNews {
  wallStreetNews: NewsArticleWrapper;
}

export interface NewsArticleWrapper {
  articles: NewsArticle[];
}

export interface NewsArticle {
  author?: string;
  description: string;
  publishedAt: string;
  source: NewsArticleSource;
  title: string;
  url: string;
  urlToImage: string;
}

export interface NewsArticleSource {
  id: string;
  name: string;
}
