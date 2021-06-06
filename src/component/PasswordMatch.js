import { useState } from "react";

const PasswordMatch = () => {
  const [pswd, setPswd] = useState("");
  const [cPswd, setCpswd] = useState("");

  const changePswdHandler = (event) => {
    let val = event.target.value;
    setPswd(val);
  };

  const changeCPswdHandler = (event) => {
    let val = event.target.value;
    setCpswd(val);
  };

  const CheckPasswordMatch = () => {
    if (pswd !== cPswd) {
      return <div>Passwords do not match</div>;
    } else {
      return <div>Password Matched</div>;
    }
    return <></>;
  };

  return (
    <>
      <h2>Password Match</h2>
      Password:{" "}
      <input
        type="password"
        value={pswd}
        placeholder="Enter Password"
        onChange={changePswdHandler}
      />
      <br />
      Confirm Password:{" "}
      <input
        type="password"
        value={cPswd}
        placeholder="Confirm Password"
        onChange={changeCPswdHandler}
      />
      <CheckPasswordMatch />
    </>
  );
};

export default PasswordMatch;
