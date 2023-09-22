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
      UserName is {formObj.username} <br></br>
      Email is {formObj.email}
      Phone is {formObj.phone}
      Age is {formObj.age}
      <form>
        <input name="username" onChange={(e) => formHandler(e)} />
        <input name="email" onChange={(e) => formHandler(e)} />
        <input name="phone" onChange={(e) => formHandler(e)} />
        <input name="age" onChange={(e) => formHandler(e)} />
        <button onClick={(e) => submitHandler(e)}> Submit</button>
      </form>
      <br></br>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
    </>
  );
};

export default SignupFormCheck;
