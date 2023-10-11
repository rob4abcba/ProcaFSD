import { useState } from "react";
import Validation from "./Validation";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  function handleInput(event) {
    const newObj = { ...values, [event.target.name]: event.target.value };
    setValues(newObj);
  }

  function handleValidation(event) {
    event.preventDefault();
    setErrors(Validation(values));
  }

  return (
    <div className="row">
      <div className="col-sm-6 offset-3">
        <form onSubmit={handleValidation}>
          <div class="mb-3">
            <label for="" class="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="form-control"
              placeholder=""
              aria-describedby="helpId"
              onChange={handleInput}
            />
            <small id="helpId" class="text-muted">
              {" "}
              your email address
            </small>
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>

          <div class="mb-3">
            <label for="" class="form-label">
              Password
            </label>
            <input
              type="text"
              name="password"
              id="password"
              class="form-control"
              placeholder=""
              aria-describedby="helpId"
              onChange={handleInput}
            />
            <small id="helpId" class="text-muted">
              Your password
            </small>
            {errors.password && (
              <p className="text-danger">{errors.password}</p>
            )}
          </div>

          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
