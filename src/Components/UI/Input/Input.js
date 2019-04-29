import React from "react";

const Input = props => {
  const style = {
    width: props.width,
    height: props.height
  };

  const input = <input style={style} placeholder={props.placeholder} />;

  let dropDown = null;
  if (props.options)
    dropDown = (
      <select>
        {props.options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    );

  switch (props.type) {
    case "input":
      return input;
    case "dropDown":
      return dropDown;
    default:
      return input;
  }
};

export default Input;
