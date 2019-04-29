import React, { useState, useEffect } from "react";
import Axios from "../../../axios/Axios";

import style from "./Home.module.css";

export default function Home() {
  //State holding data for the page-content
  const [pageData, setPageData] = useState();
  const [pageIsLoaded, setPageIsLoaded] = useState(false);

  //State holding data for posts
  const [postData, setPostData] = useState();
  const [postsIsLoaded, setPostsIsLoaded] = useState(false);

  //State for error handling
  const [errorMsg, setErrMsg] = useState(null);
  const [hasError, setHasError] = useState(false);

  //Fetches the by by id 8 (the "home" page) and adds the data to state
  const fetchPageData = () => {
    Axios.get(`v2/pages/8`)
      .then(res => {
        setPageData(res.data);
        setPageIsLoaded(true);
      })
      .catch(err => {
        setHasError(true);
        setErrMsg(err.message);
      });
  };

  //Fetches all posts and stores the data in state
  const fetchPostData = () => {
    Axios.get(`v2/posts`)
      .then(res => {
        setPostData(res.data);
        setPostsIsLoaded(true);
      })
      .catch(err => {
        setHasError(true);
        setErrMsg(err.message);
      });
  };

  useEffect(() => {
    if (!pageIsLoaded) fetchPageData();
    if (!postsIsLoaded) fetchPostData();
  });

  //If everything is loaded, renders the page and posts
  if (pageIsLoaded && postsIsLoaded) {
    const title = pageData.title.rendered;
    const content = pageData.content.rendered;
    return (
      <div className={style.Home}>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />

        {postData.map(post => {
          const title = post.title.rendered;
          const content = post.content.rendered;
          return (
            <div key={post.id}>
              <h1>{title}</h1>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          );
        })}
      </div>
    );
    //Displays an error message when data could not be fetched
  } else if (hasError) {
    return (
      <div className={style.Home}>
        <h3>Something went wrong, please try again later...</h3>
        <small>Error message: {errorMsg}</small>
      </div>
    );
  }
  //When the page is loading, displays a message
  return <h3>Loading...</h3>;
}
