import React from "react";
import List from "./List/List";
import Input from "../UI/Input/Input";

import style from "./Lists.module.css";

const Lists = props => {
  return (
    <div className={style.Lists}>
      <Input width="75%" placeholder="Name of decision" />
      <div className={style.Wrapper}>
        <List />
        <List />
      </div>
    </div>
  );
};

export default Lists;
