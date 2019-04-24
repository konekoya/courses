import React, { useState } from "react";

import Email from "./Email";
import Error from "./Error";
import Success from "./Success";

const SUCCESS_CLS = "is-success";
const FAILED_CLS = "is-failed";
const FOCUS_CLS = "is-focus";
const VALID_EMAIL = "joshua@gmail.com";

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

    if (text === VALID_EMAIL) {
      setCls(SUCCESS_CLS);
    } else {
      setCls(FAILED_CLS);
    }
  };

  const renderIcon = () => {
    const iconProps = { width: 15, height: 15 };

    if (cls === "") {
      return (
        <div data-testid="icon-wrapper" className="icon-wrapper">
          <Email className="success-icon" fill="gray" {...iconProps} />
        </div>
      );
    } else if (cls === SUCCESS_CLS) {
      return (
        <div data-testid="icon-wrapper" className="icon-wrapper success">
          <Success className="success-icon" fill="white" {...iconProps} />
        </div>
      );
    } else if (cls === FAILED_CLS) {
      return (
        <div data-testid="icon-wrapper" className="icon-wrapper error">
          <Error className="error-icon" fill="white" {...iconProps} />
        </div>
      );
    }
  };

  const focusCls = focus ? FOCUS_CLS : "";
  const labelCls = focus ? "is-active" : "";
  const placeHolder = focus ? "" : "Email";
  const labelText =
    focus && cls === FAILED_CLS ? "Email format is invalid!" : "Email";

  return (
    <form data-testid="form" onSubmit={handleSubmit}>
      <div className={`form-group ${cls} ${focusCls}`}>
        <label
          data-testid="label"
          htmlFor="input"
          className={`${labelCls} ${cls}`}
        >
          {labelText}
        </label>
        <input
          id="input"
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
