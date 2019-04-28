import React from "react";
import Router from "../../hoc/Router/Router";

import style from "./Content.module.css";

const Content = props => {
  return (
    <div className={style.Content}>
      <Router />
    </div>
  );
};

export default Content;
