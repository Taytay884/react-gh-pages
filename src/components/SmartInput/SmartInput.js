// USAGE: Most pass as props updateInput func and value. (no value = '')

import React from "react";

const SmartInput = props => {
  const handleInput = e => {
    const value = e.target.value;
    props.updateInput({ [props.id]: value });
  };

  return (
    <input
      className="default-input"
      type={props.type || "text"}
      id={props.id}
      onInput={handleInput}
      value={props.value}
    />
  );
};

export default SmartInput;
