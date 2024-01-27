// declairing btn variable
const subscribeBtn = document.getElementById("subscribe-btn");
const dismissBtn = document.getElementById('btn-dismiss');
// console.log(subscribeBtn);

// email validation
function validateEmail() {
  // declairing form, email and text variable
  const form = document.getElementById("form");
  const email = document.getElementById("email");
  const text = document.getElementById("text");
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Condition for if the email matches the email pattern 
  if (!emailPattern) {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please provide a valid email address";
    text.style.color = "#f44336";
    email.style.border = "1px solid red";
  } else {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Email is valid";
    text.style.color = "#4caf50";
    email.style.border = "1px solid green";
  };
 
  setTimeout(() => {
    text.innerHTML = "";
  }, 5000)
};

// function to prevent form default reload
const submitEmail = (e) => {
  e.preventDefault();

  const alart = document.getElementById("alart");
  const subscribeBtn = document.getElementById("subscribe-btn");
  const emailValue = document.getElementById('inputedEmail');
  const email = document.getElementById("email").value;

  // Condition for if the email input field is empty or filled
  if (email == "") {
    alart.innerHTML = "Email can not be empty";
    alart.style.color = "#f44336";

    setTimeout(() => {
      alart.innerHTML = "";
    }, 5000);
  } else {
    subscribeBtn.innerHTML = "Loading...";
    setTimeout(() => {
      location.href = "./successPage.html";
    }, 2000);
  }

    emailValue.innerHTML = `${email}.`;
};


subscribeBtn.addEventListener("click", submitEmail);