import React from "react";
import ReactDOM from "react-dom";

const Greet = () => {
  return <h1>Hello</h1>;
};

// Render to root
let rootnode = ReactDOM.createRoot(document.getElementById("root"));
rootnode.render(<Greet />);
