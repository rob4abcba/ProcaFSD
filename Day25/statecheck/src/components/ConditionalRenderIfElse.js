const ConditionalRenderIfElse = (props) => {
  if (props.role == "cust") {
    return (
      <div>
        {" "}
        <h1>ConditionalRenderIfElse.js: Customer</h1>{" "}
        <p> Welcome to our Christmas sale!</p>
      </div>
    );
  } else {
    return (
      <div>
        {" "}
        <h1>ConditionalRenderIfElse.js: Admin</h1>{" "}
        <p> Get back to work , stop shopping here!</p>
      </div>
    );
  }
};

export default ConditionalRenderIfElse;
