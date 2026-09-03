type ArticleCategory = "news" | "blog";

export type ArticleType = {
  id: number;
  title: string;
  description: string;
  category: ArticleCategory;
};
