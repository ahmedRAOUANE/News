export type ArticleType = {
    source: {
        id: string;
        name: string;
    },
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export type sourceType = {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export type ModalType = "" | "login" | "register" | "category" | "filters";

export interface ModalStateType {
    isOpen: boolean;
    type: ModalType;
}

export type FiltersType = "sources" | "category" | "country" | "language" | "keywords" | "from" | "to" | "sort";

export interface FilterParams {
    sources?: string;
    category?: string;
    country?: string;
    language?: string;
    keywords?: string;
    from?: string;
    to?: string;
    sort?: string;
}