import { useState } from "react";

const NewArticleForm = () => {
    const title = useState()
  
    const onChange = () => {
        console.log()
    }
  return (
    <form action="#" method="POST">
      <label htmlFor="title">Titel</label>
      <input type="text" id="title" onChange={onChange} />
    </form>
  );
};
export default NewArticleForm;
