import React, { useRef } from "react";
import { useSelector } from "react-redux";

const PostForm = () => {
  const form = useRef();
  const user = useSelector(state => state.userReducer);

  const handleForm = async (e) => {
    e.preventDefault();
    const postData = {
      author: User.pseudo,

    }
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
