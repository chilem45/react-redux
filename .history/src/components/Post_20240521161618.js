import React, { useState } from "react";
import { useSelector } from "react-redux";
import Like from "./Like";
import { isEmpty } from "./Utils";

const Post = ({ post }) => {
  const [editToggle, setEditToggle] = useState(false);
  const user = useSelector((state) => state.userReducer);

  const handleChange = (e) => ({
    e.preventDefault();
  })
  return (
    <div className="post">
      {!isEmpty(user) && user.pseudo === post.author && (

        <div className="edit-delete">
          <img
            src="./icons/edit.svg"
            alt="edit"
            onClick={() => setEditToggle(!editToggle)}
          />
          <img
            src="./icons/delete.svg"
            alt="delete"
          />
        </div>
      )}

      <h2>{post.title}</h2>
      <img
        src="https://picsum.photos/1500/400"
        className="post-img"
        alt="img-post"
      />

      {editToggle ? (
        <form>
          <textarea autoFocus={true} defaultValue={post.content}></textarea>
          <input type="submit" value="Valider modification"
            onSubmit={(e) => { handleChange(e) }} />
        </form>
      ) : (
        <p>{post.content}</p>
      )}

      <div className="author">
        <h5>{post.author}</h5>
        <Like likes={post.likes} />
      </div>
    </div>
  );
};

export default Post;
