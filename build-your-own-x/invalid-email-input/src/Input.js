import React, { useState } from "react";

const Input = () => {
  const [text, setText] = useState("");
  const [cls, setCls] = useState("");

  const handleChange = e => {
    setText(e.target.value);
    setCls("");
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log({ text });
    if (text === "joshua") {
      console.log("success!");

      setCls("is-success");
    } else {
      setCls("is-failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Just for you!</label>
        <input
          className={cls}
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Email"
        />
      </div>
    </form>
  );
};

export default Input;
