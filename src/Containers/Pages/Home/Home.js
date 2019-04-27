import React, { useState, useEffect } from "react";
import Axios from "../../../axios/Axios";

export default function Home() {
  //State holding data for the page-content
  const [pageData, setPageData] = useState();
  const [pageIsLoaded, setPageIsLoaded] = useState(false);

  //State holding data for posts
  const [postData, setPostData] = useState();
  const [postsIsLoaded, setPostsIsLoaded] = useState(false);

  const fetchPageData = () => {
    Axios.get(`v2/pages`)
      .then(res => {
        setPageData(res.data);
        setPageIsLoaded(true);
      })
      .catch(err => console.log(err));
  };

  const fetchPostData = () => {
    Axios.get(`v2/posts`)
      .then(res => {
        setPostData(res.data);
        setPostsIsLoaded(true);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    console.log("in useEffect");
    if (!pageIsLoaded) fetchPageData();
    if (!postsIsLoaded) fetchPostData();
  });

  if (pageIsLoaded && postsIsLoaded) {
    const title = pageData[0].title.rendered;
    const content = pageData[0].content.rendered;
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
  return <h3>Loading...</h3>;
}
