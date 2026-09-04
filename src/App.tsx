import Section from "./components/Section";
import Article from "./components/Article";
import type { ArticleType } from "./types/Article";
import ArticleForm from "./components/ArticleForm";

const articles: ArticleType[] = [
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

const news: ArticleType[] = articles.filter(
  (article) => article.category === "news",
);
const blogs: ArticleType[] = articles.filter(
  (article) => article.category === "blog",
);

const App = () => {
  return (
    <main>
      <section>
        <ArticleForm></ArticleForm>
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
