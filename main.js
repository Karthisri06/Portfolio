document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Simulate a successful form submission
    document.getElementById('success-message').textContent = "Message sent successfully!";
    document.getElementById('success-message').style.display = 'block';

    // Optional: Clear the form after submission
    document.getElementById('contact-form').reset();

    // Hide the message after a few seconds (optional)
    setTimeout(function() {
        document.getElementById('success-message').style.display = 'none';
    }, 5000); // Hide after 5 seconds
});
