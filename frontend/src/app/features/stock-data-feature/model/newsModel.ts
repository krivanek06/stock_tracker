export interface NewsArticleWrapper {
    economicNews: NewsArticle[];
}

export interface NewsArticle {
    datetime: string;
    headline: string;
    image: string;
    sourceName: string;
    summary: string;
    url: string;
}

