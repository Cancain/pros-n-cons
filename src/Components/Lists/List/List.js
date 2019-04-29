import React, { useState } from "react";
import ListInput from "./ListInput/ListInput";
import Button from "../../UI/Button/Button";

import style from "./List.module.css";

const List = props => {
  const [numOfInputs, setNumOfInputs] = useState(1);

  const renderInputs = () => {
    for (let i = 0; i < numOfInputs; i++) {}
  };

  return (
    <div className={style.List}>
      <h3>{props.text}</h3>
      <Button clicked={() => console.log("click")} text="Add Reason" />
      <ListInput />
    </div>
  );
};

export default List;
