// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page refresh on form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Displaying form data in an alert (can replace with backend functionality later)
    alert(`Thank you for reaching out, ${name}!\n\nYour email: ${email}\nMessage: ${message}`);

    // Clear the form fields
    document.getElementById('contactForm').reset();
});
