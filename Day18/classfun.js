class MyClassComp extends React.Component {
  render() {
    return <h1> Hello from Class </h1>;
  }
}

let MyFunComp = () => {
  return <h1> Hello from Functional Component </h1>;
};

// 4 create root from div
let rootnode = ReactDOM.createRoot(document.getElementById("root"));
rootnode.render([<MyClassComp />, <MyFunComp />]);
