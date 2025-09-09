import { BlockModel } from "./block.model";

export interface ArticleModel {
    _id: string;
    title: string;
    excerpt: string;
    photo: string;
    tags: string[];
    status: string;
    author: string;
    publishedAt: string;
    blocks: BlockModel[];
    isFeatured: boolean;
    createdAt: string;
    updatedAt: string;
}
