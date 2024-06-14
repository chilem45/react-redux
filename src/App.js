import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import User from "./components/User";
import { isEmpty } from "./components/Utils";
import { Suspense } from 'react';

const App = () => {
  const posts = useSelector((state) => state.postReducer);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      i18n.changeLanguage('es'); 
    }, 9000);
  });

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
        <h1>{t('main.header')}</h1>
        <User />
      </div>
    </div>
  );
};

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  )
}
