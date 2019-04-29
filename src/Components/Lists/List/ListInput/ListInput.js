import React from "react";
import Input from "../../../UI/Input/Input";

import style from "./ListInput.module.css";

const options = [1, 2, 3, 4, 5];

const ListInput = props => {
  return (
    <div className={style.ListInput}>
      <Input type="input" width="100%" height="50%" />
      <Input type="dropDown" options={options} />
    </div>
  );
};

export default ListInput;
