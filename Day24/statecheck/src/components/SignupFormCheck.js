import { useState } from "react";
import React from "react";

const SignupFormCheck = () => {
  let [formObj, setFormObj] = useState({
    username: "",
    email: "",
    phone: "",
    age: "",
  });

  let formHandler = (e) => {
    setFormObj({ ...formObj, [e.target.name]: e.target.value });
    console.log(formObj);
  };

  let submitHandler = (e) => {
    e.preventDefault();
    console.log(" In Submit handler ----");
    console.log(formObj);
    console.log("submitted");
  };

  return (
    <>
      {/* Form to understand onblur and state change */}
      {/* Synthetic event e */}
      <br></br>
      <br></br> <br></br> <br></br>
      <h1>SignupFormCheck.js</h1>
      UserName is {formObj.username}
      <br></br>
      Email is {formObj.email}
      <br></br>
      Phone is {formObj.phone}
      <br></br>
      Age is {formObj.age}
      <br></br>
      <form>
        <input
          name="username"
          placeholder="username"
          onChange={(e) => formHandler(e)}
        />
        <input
          name="email"
          placeholder="email"
          onChange={(e) => formHandler(e)}
        />
        <input
          name="phone"
          placeholder="phone"
          onChange={(e) => formHandler(e)}
        />
        <input name="age" placeholder="age" onChange={(e) => formHandler(e)} />
        <button onClick={(e) => submitHandler(e)}> Submit</button>
      </form>
      <br></br>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
    </>
  );
};

export default SignupFormCheck;
