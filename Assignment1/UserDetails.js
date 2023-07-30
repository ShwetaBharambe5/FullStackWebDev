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
  
      // Get existing user data from local storage
      var usersData = localStorage.getItem("usersData");
      var users = usersData ? JSON.parse(usersData) : {}; // Parse existing data or create an empty object
  
      // Store the user details in the object with email as the key
      users[email] = userDetails;
  
      // Save the updated object back to local storage
      localStorage.setItem("usersData", JSON.stringify(users));
  
      // Clear the form fields after submission (optional)
      form.reset();
  
      // Display a success message (optional)
      alert("User details submitted successfully!");
    });
  });
  