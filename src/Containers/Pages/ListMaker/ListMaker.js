import React, { useState, useEffect } from "react";
import Axios from "../../../axios/Axios";

import Lists from "../../../Components/Lists/Lists";

const ListMaker = props => {
  //State holding data for the page-content
  const [pageData, setPageData] = useState();
  const [pageDataIsLoaded, setPageDataIsLoaded] = useState();

  //State for error handling
  const [errorMsg, setErrorMsg] = useState();
  const [hasError, setHasError] = useState();

  //Fetches the by by id 18 (the "ListMaker" page) and adds the data to state
  const fetchPageData = () => {
    Axios.get("v2/pages/18")
      .then(res => {
        setPageData(res.data);
        setPageDataIsLoaded(true);
      })
      .catch(err => {
        setHasError(true);
        setErrorMsg(err.message);
      });
  };

  useEffect(() => {
    if (!pageDataIsLoaded) fetchPageData();
  });

  //If everything is loaded, renders the page
  if (pageDataIsLoaded) {
    const title = pageData.title.rendered;
    const content = pageData.content.rendered;
    return (
      <React.Fragment>
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <Lists />
      </React.Fragment>
    );

    //Displays an error message when data could not be fetched
  } else if (hasError) {
    return (
      <div>
        <h3>Something went wrong, please try again later...</h3>
        <small>Error message: {errorMsg}</small>
      </div>
    );
  }
  //When the page is loading, displays a message
  return <h3>Loading...</h3>;
};

export default ListMaker;
