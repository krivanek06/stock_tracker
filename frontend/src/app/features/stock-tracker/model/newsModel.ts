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
