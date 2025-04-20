const loginBtn = document.querySelector(".login-container form button");
const loginContainer = document.querySelector(".login-container");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault(); 
  loginContainer.classList.add("animate-border");

  setTimeout(() => {
    e.target.closest("form").submit(); 
  }, 1000); 
});
