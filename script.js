document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMsg = document.getElementById("form-message");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    errorMsg.textContent = "Please fill in all fields.";
    return;
  }

  if (!emailPattern.test(email)) {
    errorMsg.textContent = "Please enter a valid email address.";
    return;
  }

  errorMsg.style.color = "green";
  errorMsg.textContent = "Message sent successfully!";
  this.reset();
});