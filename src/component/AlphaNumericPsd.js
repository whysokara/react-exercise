import React, { useState } from "react";

const AlphaNumericPsd = () => {
  const [psd, setPsd] = useState("");
  const [msg, setMsg] = useState("");

  const checkAlphaNumeric = (e) => {
    let value = e.target.value;
    setPsd(value);

    let hasNumber = /\d/;
    if (!hasNumber.test(value)) {
      setMsg("Should contain a number");
    } else {
      setMsg("");
    }
  };

  return (
    <>
      <h2>AlphaNumeric Password</h2>
      Password: {""}
      <input
        type="password"
        value={psd}
        onChange={checkAlphaNumeric}
        placeholder="Enter your Password"
      />
      <div>{msg}</div>
    </>
  );
};

export default AlphaNumericPsd;
