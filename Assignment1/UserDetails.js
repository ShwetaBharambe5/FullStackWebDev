document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("userForm");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Get form input values
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var age = document.getElementById("age").value;
  
      // Create an object to store the user details
      var userDetails = {
        name: name,
        email: email,
        age: age,
      };
  
      // Store the user details in local storage
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
  
      // Clear the form fields after submission (optional)
      form.reset();
  
      // Display a success message (optional)
      alert("User details submitted successfully!");
    });
  });
  