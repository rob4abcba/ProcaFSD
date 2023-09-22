import React from "react"; // second way
// import { Component } from "react"; // one way of importing
//class IDcardClass extends Component {

class IDcardClass extends React.Component {
  // constructor(props){
  //     super(props);
  // }

  render() {
    return (
      <div className="card w-25 float-start mx-1 my-1">
        <div className="card-body bg-warning">
          <h4 className="card-title bg-success">{this.props.name}</h4>
          <p className="card-text">{this.props.des + " " + this.props.age} </p>
        </div>
      </div>
    );
  }
}

export default IDcardClass;
