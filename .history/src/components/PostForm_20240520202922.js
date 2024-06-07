import React, { useRef } from "react";
import { useSelector } from "react-redux";

const PostForm = () => {
  const form = useRef();
  const user = useSelector((state) => state.userReducer);

  const handleForm = async (e) => {
    e.preventDefault();
    const postData = {
      author: user.pseudo,
      title: form.current[0].value,
      content: form.current[1].value,
      likes: 0
    }
    console.log(postData);
  }
  return (
    <div className="form-container">
      <form ref={form} onSubmit={handleForm}>
        <input type="text" placeholder="Titre du poste" />
        <textarea placeholder="Postez vos pensées..."></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
