export default function Validation(values) {
  console.log("Validation.js: values =", values);
  const errors = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  //   const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]({8,20}$/;
  const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (values.email === "") {
    errors.email = "Email is Required!";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Email did not match acceptable pattern";
  }

  if (values.password === "") {
    errors.password = "Password is Required!";
  } else if (!password_pattern.test(values.password)) {
    errors.password = "Password did not match acceptable pattern";
  }

  return errors;
}
