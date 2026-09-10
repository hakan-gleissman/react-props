import Section from "./components/Section";
import Article from "./components/Article";
import type { ArticleType, NewArticle } from "./types/Article";
import ArticleForm from "./components/ArticleForm";
import { useEffect, useState } from "react";
// const articlesList: ArticleType[] = [
//   {
//     id: 1,
//     title: "Artikel här",
//     description: "Beskrivning",
//     category: "news",
//   },
//   {
//     id: 2,
//     title: "Blogg här",
//     description: "Beskrivning",
//     category: "blog",
//   },
// ];

const apiUrl = "http://localhost:3005/api/articles";

const App = () => {
  const [articleId, setArticleId] = useState(3);
  const [articles, setArticles] = useState<ArticleType[]>([]);

  const news: ArticleType[] = articles.filter(
    (article) => article.category === "news",
  );
  const blogs: ArticleType[] = articles.filter(
    (article) => article.category === "blog",
  );

  const fetchArticles = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Kunde inte hämta");
      }
      const result: ArticleType[] = await response.json();
      setArticles(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const executeFetch = async () => {
      await fetchArticles();
    };
    executeFetch();
  }, []);

  const addArticle = async (newArticle: NewArticle) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newArticle),
      });
      if (!response.ok) {
        throw new Error("Kunde inte skapa artikel");
      }
    } catch (error) {
      console.log(error);
    }
    await fetchArticles();
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
