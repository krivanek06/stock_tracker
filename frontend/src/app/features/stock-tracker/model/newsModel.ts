// ------------------------
// Economic news
export interface NewsArticleWrapper {
    economicNews: NewsArticle[];
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


// ----------------------------
// Stock news

export interface StockNewsWrapper {
    stockNews: StockNews;
}

export interface StockNews {
    category: string;
    datetime: number;
    headline: string;
    id: number;
    image: string;
    related: string;
    source: string;
    summary: string;
    url: string;
}
