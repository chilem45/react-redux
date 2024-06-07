import React from "react";

const Like = ({ post }) => {
  const handleClick = (e) => {

  }

  return (
    <div>
      <img src="./icons/clap.png" className="clap" alt="clap" onClick={handleClick} />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
