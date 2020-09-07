export interface NewsArticleWrapper {
    economicNews: NewsArticle[];
}

export interface NewsArticle {
    datetime: number;
    headline: string;
    image: string;
    sourceName: string;
    summary: string;
    url: string;
}

