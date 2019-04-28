import React, { useState, useEffect } from "react";
import Axios from "../../../axios/Axios";

const ListMaker = props => {
  const [pageData, setPageData] = useState();
  const [pageDataIsLoaded, setPageDataIsLoaded] = useState();

  const fetchPageData = () => {
    Axios.get("v2/pages/18")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!pageDataIsLoaded) fetchPageData();
  });

  return (
    <div>
      <h4>ListMaker</h4>
    </div>
  );
};

export default ListMaker;
