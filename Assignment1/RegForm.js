document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myForm").addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;


      // Basic validation (check if fields are not empty)
      if (!name || !email || !phone || !date ||!time) {
        alert("Please fill in all fields.");
        return;
      }

      // Here, you can add additional validation or submit the form to a server.
      // For this example, we'll just log the form data.
      console.log("Form data:");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("phone:", phone);
      console.log("date:", date);
      console.log("time:", time);
      alert("Form submitted successfully!");
      document.getElementById("myForm").reset();
    });
});