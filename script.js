document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simulate form submission (in a real scenario, you would handle this with an AJAX request)
    setTimeout(function() {
        document.getElementById('contactForm').reset();
        document.getElementById('successMessage').style.display = 'block';
    }, 500); // Simulate a short delay
});
