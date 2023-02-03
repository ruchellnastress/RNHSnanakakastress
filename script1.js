const loginForm = document.querySelector("#login-form");
const registerForm = document.querySelector("#register-form");
const switchToRegister = document.querySelector("#switch-to-register");
const switchToLogin = document.querySelector("#switch-to-login");

switchToRegister.addEventListener("click", function (event) {
  event.preventDefault();
  loginForm.style.transform = "translateX(-100%)";
  registerForm.style.transform = "translateX(0%)";
});

switchToLogin.addEventListener("click", function (event) {
  event.preventDefault();
  loginForm.style.transform = "translateX(0%)";
  registerForm.style.transform = "translateX(100%)";
});
