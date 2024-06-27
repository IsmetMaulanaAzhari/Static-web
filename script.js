document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // You can add functionality to send the form data to your email or server here.

    alert('Thank you for contacting me, ' + name + '!');
    document.getElementById('contact-form').reset();
});
