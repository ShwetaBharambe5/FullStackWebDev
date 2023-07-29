document.addEventListener("DOMContentLoaded", function () {
    // const headerTitleElement = document.getElementById('header-title');
    // if (headerTitleElement) {
    //   headerTitleElement.textContent = "Hello";
    //   headerTitleElement.style.border = "1px solid black";
    // }

    const addItemElement = document.querySelector('.title'); 
    if (addItemElement) {
      addItemElement.style.fontWeight = "bold";
      //addItemElement.style.color = "green";
    }

    var items = document.getElementsByClassName("list-group-item");
    // items[2].style.color = "green"

    for(var i=0; i<items.length; i++)
        items[i].style.fontWeight="bold";

    // var li_item = document.getElementsByClassName("list-item");
    // li_item[0].style.color="red";
    
    var li_items = document.getElementsByTagName("li");
    for(var i=0; i<items.length; i++)
        li_items[i].style.border="1px solid black";

    var secondItem = document.querySelector(".list-group-item:nth-child(2)");
    //secondItem.style.background = "green";

    var thirdItem = document.querySelector(".list-group-item:nth-child(3)");
    //thirdItem.style.display = "None";

    var LiItems = document.querySelectorAll("#items li");
    LiItems[1].style.color = "green";

    var oddItems = document.querySelectorAll("#items li:nth-child(odd)");
    for(var i=0; i<oddItems.length; i++)
        oddItems[i].style.background = "green";

  });
  