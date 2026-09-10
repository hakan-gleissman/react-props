import { useNavigate } from "react-router";
import ArticleForm from "../components/ArticleForm";
import type { NewArticle } from "../types/Article";

type CreateArticlePageProps = {
  onAddArticle: (article: NewArticle) => Promise<void>;
};

const CreateArticlePage = ({ onAddArticle }: CreateArticlePageProps) => {
  const navigate = useNavigate();

  const executeOnAddArticle = async (newArticle: NewArticle) => {
    await onAddArticle(newArticle);

    navigate("/");
  };

  return (
    <main>
      <section>
        <h1>Skapa ny artikel</h1>
        <ArticleForm onAddArticle={executeOnAddArticle}></ArticleForm>
      </section>
    </main>
  );
};
export default CreateArticlePage;
