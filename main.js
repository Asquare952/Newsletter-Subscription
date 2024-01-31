// declairing btn variable
const subscribeBtn = document.getElementById("subscribe-btn");
const form = document.getElementById("form");
const firstPage = document.getElementById("first_contianer");
const successPage = document.getElementById("second_container");
function valid(email) {
  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailPattern.test(String(email).toLocaleLowerCase());
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const text = document.getElementById("text");
  const alart = document.getElementById("alart");
  // Condition for if the email matches the email pattern
  if (email.trim() == "") {
    form.classList.add("error");
    alart.innerHTML = "Email cannot be empty";
    alart.style.color = "#f44336";
    setTimeout(() => {
      alart.innerHTML = "";
    }, 5000);
  } else if (!valid(email)) {
    form.classList.add("error");
    text.innerHTML = "Please provide a valid email address";
    text.style.color = "#f44336";
    email.style.border = "1px solid red";
  } else {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Email is valid";
    text.style.color = "#4caf50";

    setTimeout(() => {
      text.innerHTML = "";
    }, 5000);

    subscribeBtn.innerHTML = "Loading...";

    const emailValue = document.getElementById("inputedEmail");
    setTimeout(() => {
      firstPage.style.display = "none";
      successPage.style.display = "flex";
      emailValue.innerHTML = `${email}.`;
    }, 3000);
  }

  const dismissBtn = document.getElementById("btn-dismiss");
   
  dismissBtn.addEventListener('click', () => {
    location.reload();
  })
});

// function to prevent form default reload
// const submitEmail = (e) => {

// };

console.log(form);
