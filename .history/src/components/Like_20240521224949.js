import React from "react";
import { useDispatch } from "react-redux";
import { addPostLike } from "../actions/post.action";

const Like = ({ post }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    const postValue = {
      ...post,
      likes: post.likes + 1
    }
    dispatch(addPostLike(postValue));
  }

  return (
    <div>
      <img src="./icons/clap.png" className="clap" alt="clap" onClick={handleClick} />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
