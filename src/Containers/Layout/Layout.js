import React from "react";

import style from "./Layout.module.css";
import Header from "../Header/Header";
import Content from "../Content/Content";

const Layout = props => {
  return (
    <div className={style.Layout}>
      <Header />
      <Content />
    </div>
  );
};

export default Layout;
