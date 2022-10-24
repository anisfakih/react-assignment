import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./Registration.css";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [registered, setRegistered] = useState(false);

  const onClick = () => {
    setRegistered(false);
    let emailVal = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;
    let passwordVal = /^(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#\$&*~]).{7,}$/;
    let isError = 0,
      isError2 = 0,
      isError3 = 0,
      isError4 = 0;

    if (!email.match(emailVal)) {
      console.log("email wrong");
      setErrorEmail(true);
      isError = 1;
    } else {
      setErrorEmail(false);
      isError = 0;
    }
    if (!password.match(passwordVal)) {
      console.log("pass wrong");
      setErrorPassword(true);
      isError2 = 1;
    } else {
      setErrorPassword(false);
      isError2 = 0;
    }

    if (password !== confirmPassword) {
      console.log("pass wrong");
      setErrorConfirmPassword(true);
      isError3 = 1;
    } else {
      setErrorConfirmPassword(false);
      isError3 = 0;
    }

    if (name.length === 0) {
      console.log("name wrong");
      setErrorName(true);
      isError4 = 1;
    } else {
      setErrorName(false);
      isError4 = 0;
    }

    console.log(isError, isError2, isError3, isError4);

    if (isError === 0 && isError2 === 0 && isError3 === 0 && isError4 === 0) {
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setRegistered(true);
    }
  };

  return (
    <>
      <div className="container1">
        {registered && (
          <span style={{ color: "green", fontSize: "20px" }}>
            Registered Successfully
          </span>
        )}
        {errorName && <span>Invalid Name</span>}
        <Input
          text="Name"
          type="text"
          value={name}
          setValue={setName}
          error={errorName}
        />
        {errorEmail && <span>Invalid Email</span>}
        <Input
          text="Email"
          type="email"
          value={email}
          setValue={setEmail}
          error={errorEmail}
        />
        {errorPassword && (
          <span>
            Your Password should contain at least 7 characters one Capital
            letter one number and one special character.
          </span>
        )}
        <Input
          text="Password"
          type="password"
          value={password}
          setValue={setPassword}
          error={errorPassword}
        />
        {errorConfirmPassword && <span>Passwords do not match</span>}
        <Input
          text="Confirm Password"
          type="password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          error={errorConfirmPassword}
        />
        <Button text="Submit" onClick={onClick} />
      </div>
    </>
  );
};

export default Registration;
