import React from "react";
import ListInput from "./ListInput/ListInput";
import Button from "../../UI/Button/Button";

import style from "./List.module.css";

const List = props => {
  return (
    <div>
      <Button clicked={() => console.log("click")} text="Add Reason" />
      <ListInput />
    </div>
  );
};

export default List;
