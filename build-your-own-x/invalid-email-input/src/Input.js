import React, { useState } from "react";

import Email from "./Email";
import Error from "./Error";

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
      return <Email width={15} height={15} fill="gray" />;
    } else if (cls === "is-failed") {
      return <Error width={15} height={15} fill="white" />;
    }
  };

  const focusCls = focus ? "is-focus" : "";
  const labelCls = focus ? "is-active" : "";
  const placeHolder = focus ? "" : "Email";

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className={labelCls}>Email</label>
        <input
          className={`${cls} ${focusCls}`}
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
