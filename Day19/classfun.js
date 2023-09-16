class MyClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: true };
  }
  render() {
    return <h1>Hello {this.props.nameprop} from Class component</h1>;
  }
}
let MyFunComp = ({ nameprop }) => {
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
        Hello {nameprop} and {name} from Functional component. Color is {color}
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
rootnode.render([
  <MyClassComp nameprop="Class Doe" />,
  <MyFunComp nameprop="Function Doe" />,
]);
