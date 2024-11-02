function myfunction() {
  var a = "Rayans Birthday is on 3rd November";
  document.getElementById("demo").innerHTML = a;
  document.getElementById("demo").style.color = "green";
}

function validate(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const age = document.getElementById("age").value;
  const msgBox = document.getElementById("message");

  let message = "";

  if (email === "") {
    message = "please enter an email.";
    msgBox.style.color = "red";
  } else if (pass === "") {
    message = "password must be at least 8 characters.";
    msgBox.style.color = "red";
  } else if (age === "") {
    message = "Age must be between 12 and 50.";
    msgBox.style.color = "red";
  } else {
    message = "Login Successful!";
    msgBox.style.color = "green";
  }
  msgBox.innerText = message;
}
