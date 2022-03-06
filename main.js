// Input and Button Selectors
const emailInput = document.querySelector("#emailInput");
const submitButton = document.querySelector("#submitButton");

// Create Error Message
const errorPara = document.createElement("p");
errorPara.innerHTML = "Please provide a valid email";
errorPara.classList.add("error-text");

// Create Error Icon
const errorIcon = document.createElement("img");
errorIcon.src = "./images/icon-error.svg";
errorIcon.classList.add("error-icon");

// Validate email - Returns true or false
const checkEmail = () => {
  let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(emailInput.value);
};

// Handle Send Email Button - If true: removes errors and disables button and input.
// Button will turn green and display a check mark. If false: displays error border and
// error message and icon
const sendEmail = () => {
  if (checkEmail()) {
    emailInput.classList.remove("error");
    emailInput.disabled = "disabled";
    submitButton.disabled = "disabled";
    submitButton.innerHTML = "<p style='color: #fff;font-size:20px;'>✓</p>";
    errorPara.remove();
    errorIcon.remove();
  } else {
    emailInput.classList.add("error");
    emailInput.after(errorPara);
    emailInput.after(errorIcon);
  }
};

// Button Event Listener
submitButton.addEventListener("click", sendEmail);
