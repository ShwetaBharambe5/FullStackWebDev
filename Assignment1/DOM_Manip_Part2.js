document.addEventListener("DOMContentLoaded", function () {
    var itemList = document.querySelector("#items");
    itemList.parentElement.style.backgroundColor = "#f4f4f4";

    console.log(itemList.firstChild);
    
    console.log(itemList.firstElementChild);
    itemList.firstElementChild.textContent = "First Item";

    console.log(itemList.lastChild);
    
    console.log(itemList.lastElementChild);
    itemList.lastElementChild.textContent = "Last Item";

    console.log(itemList.nextSibling);
    console.log(itemList.nextElementSibling);

    console.log(itemList.previousSibling);
    console.log(itemList.previousElementSibling);
    itemList.previousElementSibling.style.color = "green";

    var newDiv = document.createElement("div");
    newDiv.className = "hello";
    newDiv.id = "hello1";
    newDiv.setAttribute('title','Hello Div');

    //Create and Add Child Element
    var newDivText = document.createTextNode("Hello World");

    newDiv.style.fontSize = "30px";

    newDiv.appendChild(newDivText);

    var container = document.querySelector('header .container');

    var h1 = document.querySelector("header h1");

    console.log(newDiv);

    container.insertBefore(newDiv, h1);

    //Another example
    const newListItem = document.createElement("li");
    newListItem.textContent = "Hello World";

    //Select the first existing <li> element ("Item 1")
    const existingListItem = document.querySelector("#items li");

    //Insert the new <li> element before the first existing <li> element
    existingListItem.parentNode.insertBefore(newListItem, existingListItem);

});