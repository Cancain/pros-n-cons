import React from "react";

import style from "./Layout.module.css";
import Content from "../Content/Content";
import MobileMenuBtn from "../../Components/UI/MobileMenuBtn/MobileMenuBtn";

const Layout = props => {
  return (
    <div className={style.Layout}>
      <Content />
      <MobileMenuBtn />
    </div>
  );
};

export default Layout;
