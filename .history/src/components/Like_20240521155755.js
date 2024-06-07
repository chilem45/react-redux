import React from "react";

const Like = ({ likes }) => {
  return (
    <div>
      <img src="./icons/clap.png" className="clap" alt="clap" />
      <span>{likes}</span>
    </div>
  );
};

export default Like;
