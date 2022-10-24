import React from "react";
import "./Input.css";

const Input = ({ text, type, value, setValue, error }) => {
  return (
    <>
      <div className="input">
        <label htmlFor="">{text}</label>
        <input
          type={type}
          placeholder={text}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ border: error ? "1px solid red" : "" }}
        />
      </div>
    </>
  );
};

export default Input;
