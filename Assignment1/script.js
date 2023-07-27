document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    const inputElement = document.getElementById("inputValue");
    const submitButton = document.getElementById("submitButton");
  
    // Click event handling
    submitButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent form submission
  
      const inputValue = inputElement.value.trim(); // Get the input value and remove leading/trailing whitespaces
  
      // Perform necessary validations
      if (inputValue === "") {
        console.log("Please enter a value.");
      } else {
        console.log("Input value:", inputValue);
      }
    });
  
    // Mouseover event handling
    inputElement.addEventListener("mouseover", function() {
      console.log("Mouseover event occurred.");
    });
  
    // Mouseout event handling
    inputElement.addEventListener("mouseout", function() {
      console.log("Mouseout event occurred.");
    });
  });
  