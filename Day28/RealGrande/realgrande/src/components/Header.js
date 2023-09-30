import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="row bg-warning d-flex align-items-center">
      <div className="col-sm-3">
        <Link to="/">
          {" "}
          <img className="logo" src="/imgs/logo.png" alt="logo here" />{" "}
        </Link>
      </div>
      <div className="col-sm-5">
        <p className="m-0 tagline"> Your real estate destination!</p>
      </div>
      <div className="col-sm-4">
        <button className="btn btn-primary mx-3"> Login </button>
        <button className="btn btn-success"> SignUp </button>
      </div>
      {/* <h1 className="bg-warning"> Header!</h1>  */}
    </div>
  );
};
export default Header;
