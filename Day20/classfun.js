class MyClassComp extends React.Component {
  render() {
    return <h1> Hello from Class </h1>;
  }
}
let MyFunComp = () => {
  let { useState } = React;
  // the initial value is given in useState
  let [name, setName] = useState("Jane Doe");
  let [color, setColor] = useState("blue");
  let clickHandler = () => {
    console.log("in click handler");
    //change state
    setName("Frank Jones");
  };
  let setMyColor = () => {
    setColor("red");
  };
  return (
    <>
      <h1 style={{ color: color }}>
        {" "}
        Hello {name} from functional component. Color is {color}
      </h1>
      <button onClick={clickHandler}>
        {" "}
        Click me to change name (state variable)
      </button>
      <button onClick={setMyColor}> Click me to change color </button>
    </>
  );
};

let rootnode = ReactDOM.createRoot(document.getElementById("root"));
rootnode.render([<MyClassComp />, <MyFunComp />]);
