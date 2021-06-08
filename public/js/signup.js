//create handler for new user sign up
const signUpFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup").nodeValue.trim();
  const password = document.querySelector("password-signup").nodeValue.trim();
};

if (username && password) {
  //need new user route???
  const response = await fetch(`api/????`, {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else alert("Falied to sign up");
}

document
  .querySelector("signup-button")
  .addEventListener("submit", signUpFormHandler);
