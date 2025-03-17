document.getElementById("contactForm").addEventListener("submit", function (event) {
    const name = document.getElementById("yourName").value;
    const email = document.getElementById("yourEmail").value;
    const message = document.getElementById("yourMessage").value;

    if (!name || !email || !message) {
        alert("All fields are required.");
        event.preventDefault();
    }
});
