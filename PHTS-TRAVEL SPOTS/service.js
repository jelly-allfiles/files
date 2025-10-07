document.getElementById("serviceForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // You can add code here to handle the form submission (e.g., send data to a server)
    console.log("Form submitted:");
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);
    
    // Clear form fields after submission
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
 
     if(name == " " || email == " " || message == " "){
         alert("Please Fill up all necessary informations! " + "Thank You!");
     }else{
         //Code to submit the form or perform other actions
 
         // ...
         //redirect the user to another page
 
         //window.locationhref = "thankyou.html"
     }
});

