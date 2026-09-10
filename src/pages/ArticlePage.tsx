import Article from "../components/Article";
import Section from "../components/Section";
import type { ArticleType } from "../types/Article";

type ArticlePageProps = {
  articles: ArticleType[];
};

const ArticlePage = ({ articles }: ArticlePageProps) => {
  const news: ArticleType[] = articles.filter(
    (article) => article.category === "news",
  );
  const blogs: ArticleType[] = articles.filter(
    (article) => article.category === "blog",
  );

  return (
    <main>
      <Section title="Nyheter">
        {news.map((news) => (
          <Article
            key={news.id}
            title={news.title}
            description={news.description}
          ></Article>
        ))}
      </Section>
      <Section title="Bloggar">
        {blogs.map((news) => (
          <Article
            key={news.id}
            title={news.title}
            description={news.description}
          ></Article>
        ))}
      </Section>
    </main>
  );
};
export default ArticlePage;
