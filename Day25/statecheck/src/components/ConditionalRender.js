import AdminGreetings from "./AdminGreetings";
import CustomerGreetings from "./CustomerGreetings";

const ConditionalRender = (props) => {
  return (
    <div>
      <h1> ConditionalRender.js using Props </h1>
      {props.age > 18 ? (
        <h3> Yay! Can vote!</h3>
      ) : (
        <h3> Sorry, need to wait!</h3>
      )}

      <h1> ConditionalRender.js using props and components </h1>
      {props.role == "Customer" ? <CustomerGreetings /> : <AdminGreetings />}
    </div>
  );
};

export default ConditionalRender;
