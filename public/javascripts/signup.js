const signupBtn = document.querySelector(".signup-container form button");
const signupContainer = document.querySelector(".signup-container");

signupBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Stop default form submission
  signupContainer.classList.add("animate-border"); // Add animation class

  // Delay real submission until animation finishes
  setTimeout(() => {
    e.target.closest("form").submit(); // Submit manually after animation
  }, 1000);
});
