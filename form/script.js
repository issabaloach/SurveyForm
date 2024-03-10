const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 
  alert("Form submitted!");
  form.reset();
});
