type ArticleProps = {
  title: string;
  description: string;
};
const Article = ({ title, description }: ArticleProps) => {
  return (
    <article className="article-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
};
export default Article;
