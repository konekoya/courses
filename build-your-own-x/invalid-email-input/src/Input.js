import React, { useState } from "react";

import Email from "./Email";
import Error from "./Error";
import Success from "./Success";

const Input = () => {
  const [text, setText] = useState("");
  const [cls, setCls] = useState("");
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
    setCls("");
  };

  const handleChange = e => {
    setText(e.target.value);

    // clear the classes
    setCls("");
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log({ text });
    if (text === "joshua") {
      setCls("is-success");
    } else {
      setCls("is-failed");
    }
  };

  const renderIcon = () => {
    if (cls === "") {
      return (
        <div className="icon-wrapper">
          <Email className="success-icon" width={15} height={15} fill="gray" />
        </div>
      );
    } else if (cls === "is-success") {
      return (
        <div className="icon-wrapper success">
          <Success
            className="success-icon"
            width={15}
            height={15}
            fill="white"
          />
        </div>
      );
    } else if (cls === "is-failed") {
      return (
        <div className="icon-wrapper error">
          <Error className="error-icon" width={15} height={15} fill="white" />
        </div>
      );
    }
  };

  const focusCls = focus ? "is-focus" : "";
  const labelCls = focus ? "is-active" : "";
  const placeHolder = focus ? "" : "Email";
  const labelText =
    focus && cls === "is-failed" ? "Email format is invalid!" : "Email";

  return (
    <form onSubmit={handleSubmit}>
      <div className={`form-group ${cls} ${focusCls}`}>
        <label className={`${labelCls} ${cls}`}>{labelText}</label>
        <input
          type="text"
          value={text}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={placeHolder}
        />
        {renderIcon()}
      </div>
    </form>
  );
};

export default Input;
