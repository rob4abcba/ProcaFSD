import { useState } from "react";
import React from "react";

const StateCheck = () => {
  let [count, setCount] = useState(27);
  let [place, setPlace] = useState("Princeton");
  let [style, setStyle] = useState({ display: "block" });

  let clickHandler = () => {
    count++;
    setCount(count);
  };

  let placeHandler = () => {
    setPlace("Hyderabad");
  };

  let styleHandler = () => {
    //change display to 'none'
    // setStyle({display:'none'});
    let dis = style.display == "block" ? "none" : "block";
    setStyle({ display: dis });
  };
  return (
    <React.Fragment>
      <h1> State Check </h1>
      <h2> Counter</h2>
      <button onClick={clickHandler}> {count}</button>

      <h2> Change place</h2>
      <p> {place}</p>
      <button onClick={placeHandler}> Click to relocate</button>

      <h2> Show Hide test</h2>
      <p style={style}> This should show/hide</p>
      <button onClick={styleHandler}> Click to Show/Hide </button>
    </React.Fragment>
  );
};

export default StateCheck;
