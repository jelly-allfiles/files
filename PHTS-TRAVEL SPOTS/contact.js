document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // You can add code here to send the form data to the service team via email or a database
    // For example, you can use AJAX to send the form data to a backend server for processing

    // Display a confirmation message
    alert('Thank you, ' + name + '! Your message has been sent to our service team.');
    document.getElementById('contactForm').reset();

    if(name == " " || email == " " || message == " "){
        alert("Please Fill up all necessary informations! " + "Thank You!");
    }else{
        //Code to submit the form or perform other actions

        // ...
        //redirect the user to another page

        //window.locationhref = "thankyou.html"
    }
});