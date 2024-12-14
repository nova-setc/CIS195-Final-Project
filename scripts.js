//variable for email box
var emailDiv = document.getElementById("hidden-email");
var arrowReveal = document.getElementById("email-reveal");
var arrowHide = document.getElementById("email-hide");

function showEmail() {
  emailDiv.style.display = "block";
  arrowReveal.style.display = "none";
}

function hideEmail() {
  emailDiv.style.display = "none";
  arrowReveal.style.display = "block";
}