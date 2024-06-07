import React from "react";
import { useDispatch } from "react-redux";

const Like = ({ post }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    const postValue = {
      ...post,
      likes: post.likes + 1
    }
    dis
  }

  return (
    <div>
      <img src="./icons/clap.png" className="clap" alt="clap" onClick={handleClick} />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
