import { useState } from "react";
import type { ArticleCategory, NewArticle } from "../types/Article";

type ArticleFormProps = {
  onAddArticle: (article: NewArticle) => void;
};

const ArticleForm = ({ onAddArticle }: ArticleFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Nyheter");

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    let categoryTemp: ArticleCategory = "news";
    if (category === "blog") {
      categoryTemp = "blog";
    }

    onAddArticle({ title, description, category: categoryTemp });
    setTitle("");
    setDescription("");
    setCategory("Nyheter");
  };

  return (
    <>
      <p>{title}</p>
      <p>{description}</p>
      <form onSubmit={handleSubmit} action="#" method="POST">
        <label htmlFor="title">Titel</label>
        <input
          type="text"
          value={title}
          id="title"
          required
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="description">Beskrivning</label>
        <input
          type="text"
          value={description}
          id="description"
          required
          onChange={(event) => setDescription(event.target.value)}
        />
        <label htmlFor="category">Kategori</label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="news">Nyhet</option>
          <option value="blog">Blogg</option>
        </select>
        <button type="submit">Spara artikel</button>
      </form>
    </>
  );
};
export default ArticleForm;
