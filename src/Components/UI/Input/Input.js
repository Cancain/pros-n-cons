import React from "react";

const Input = props => {
  const style = {
    width: props.width,
    height: props.height
  };
  return <input style={style} placeholder={props.placeholder} />;
};

export default Input;
