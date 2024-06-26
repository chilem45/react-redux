import React from "react";
import { useSelector } from "react-redux";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import User from "./components/User";
import { isEmpty } from "./components/Utils";

const App = () => {
  const posts = useSelector((state) => state.postReducer);
  const users = useSelector((state) => state.userReducer);
  return (
    <div>
      <h1>Extreme</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">
          {!isEmpty(posts) && posts.map((post, index) =>
            <Post post={post} key={index} />
          )
          }</div>
        {!isEmpty(users) && users.mpa((user, index) =>
          <User user={user} key={user.id} />)}
      </div>
    </div>
  );
};

export default App;
