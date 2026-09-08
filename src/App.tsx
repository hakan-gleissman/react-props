import Section from "./components/Section";
import Article from "./components/Article";
import type { ArticleType, NewArticle } from "./types/Article";
import ArticleForm from "./components/ArticleForm";
import { useState } from "react";

const articlesList: ArticleType[] = [
  {
    id: 1,
    title: "Första nyheten",
    category: "news",
    description: "Beskrivning..",
  },
  {
    id: 2,
    title: "Första bloggen",
    category: "blog",
    description: "Beskrivning..",
  },
];

const App = () => {
  const [articleId, setArticleId] = useState(3);
  const [articles, setArticles] = useState<ArticleType[]>(articlesList);

  const news: ArticleType[] = articles.filter(
    (article) => article.category === "news",
  );
  const blogs: ArticleType[] = articles.filter(
    (article) => article.category === "blog",
  );

  const addArticle = (newArticle: NewArticle) => {
    const article: ArticleType = {
      id: articleId,
      ...newArticle,
    };
    setArticleId(articleId + 1);
    setArticles([...articles, article]);
  };
  return (
    <main>
      <section>
        <ArticleForm onAddArticle={addArticle}></ArticleForm>
      </section>
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
export default App;
