document.addEventListener("DOMContentLoaded", function () {
    const headerTitleElement = document.getElementById('header-title');
    if (headerTitleElement) {
      headerTitleElement.textContent = "Hello";
      headerTitleElement.style.border = "1px solid black";
    }

    const addItemElement = document.querySelector('.title'); 
    if (addItemElement) {
      addItemElement.style.fontWeight = "bold";
      addItemElement.style.color = "green";
    }

  });
  