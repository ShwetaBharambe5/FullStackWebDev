document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("UserAppointmentForm");
    var userList = document.getElementById("userList");
  
    // Function to display user data in the list
    function displayUserData() {
      userList.innerHTML = "";
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key !== "usersData") {
          var user = JSON.parse(localStorage.getItem(key));
          var listItem = document.createElement("li");
          listItem.innerHTML = `
            <p>Name: ${user.name}</p>
            <p>Email: ${user.email}</p>
            <p>phone: ${user.phone}</p>
            <button data-email="${user.email}" class="deleteBtn">Delete</button>
          `;
          userList.appendChild(listItem);
        }
      }
    }
  
    // Function to store user data in local storage
    function storeUserData(userDetails) {
      var email = userDetails.email;
      localStorage.setItem(email, JSON.stringify(userDetails));
    }
  
    // Function to delete user data from local storage
    function deleteUser(email) {
      localStorage.removeItem(email);
    }
  
    // Display existing user data on page load
    displayUserData(); // Call the function to show user data on page load
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Get form input values
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;
  
      // Create an object to store the user details
      var userDetails = {
        name: name,
        email: email,
        phone: phone,
      };
  
      // Store the user details in local storage
      storeUserData(userDetails);
  
      // Clear the form fields after submission (optional)
      form.reset();
  
      // Display the updated user data in the list immediately after submission
      displayUserData();
  
      // Display a success message (optional)
      alert("User details submitted successfully!");
    });
  
    userList.addEventListener("click", function (e) {
      if (e.target.classList.contains("deleteBtn")) {
        var email = e.target.dataset.email;
        // Remove user data from local storage
        deleteUser(email);
        // Update the list to reflect the changes
        displayUserData();
      }
    });
  });
  