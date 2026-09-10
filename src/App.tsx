import type { ArticleType, NewArticle } from "./types/Article";

import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router";
import ArticlePage from "./pages/ArticlePage";
import CreateArticlePage from "./pages/CreateArticlePage";

const apiUrl = "http://localhost:3005/api/articles";

const App = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);

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
    <>
      <header>
        <nav>
          <Link to="/">Artiklar</Link>
          <Link to="/create">Skapa artikel</Link>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={<ArticlePage articles={articles}></ArticlePage>}
        ></Route>
        <Route
          path="/create"
          element={
            <CreateArticlePage onAddArticle={addArticle}></CreateArticlePage>
          }
        ></Route>
      </Routes>
    </>
  );
};
export default App;
