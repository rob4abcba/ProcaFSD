// Try follow https://youtu.be/In0nB0ABaUk?si=xQcpFLAgCNSQfi1u

const email = document.getElementById("exampleInputEmail1");
const password = document.getElementById("exampleInputPassword1");
const form = document.getElementById("myFormId");
const errorElement = document.getElementById("errorBadPwd");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (email.value === "" || email.value == null) {
    messages.push("Email is required");
  }

  if (password.value.length < 6) {
    messages.push("Password must be at least 6 characters long");
  }

  if (password.value === "password") {
    messages.push("Password cannot be the word password");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});
