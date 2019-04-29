import React, { useState } from "react";
import ListInput from "./ListInput/ListInput";
import Button from "../../UI/Button/Button";

import style from "./List.module.css";

const List = props => {
  const [numOfInputs, setNumOfInputs] = useState(1);

  const items = [];
  for (let i = 0; i < numOfInputs; i++) {
    items.push(<ListInput key={i} />);
  }

  const incrementInputs = () => {
    setNumOfInputs(numOfInputs + 1);
  };

  return (
    <div className={style.List}>
      <h3>{props.text}</h3>
      <Button clicked={() => console.log("click")} text="Add Reason" />
      {items}
    </div>
  );
};

export default List;
