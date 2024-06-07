import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPost, getPosts } from "../actions/post.action";
import Like from "./Like";
import { isEmpty } from "./Utils";

const Post = ({ post }) => {
  const [editToggle, setEditToggle] = useState(false);
  const user = useSelector((state) => state.userReducer);
  const form = useRef(null);
  const dispatch = useDispatch();

  const submitHandleChange = ((e) => {
    e.preventDefault();
    if (editToggle) {
      const postEdited = {
        ...post,
        content: form.current[0].value
      }
      form.current.reset();
      dispatch(editPost(postEdited));
      setEditToggle(!editToggle);
      dispatch(getPosts());
    }
  })
  const deleteHandleChange = () => {

  }
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
        <form onSubmit={submitHandleChange} ref={form}>
          <textarea autoFocus={true} defaultValue={post.content}></textarea>
          <input type="submit" value="Valider modification"
          />
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
