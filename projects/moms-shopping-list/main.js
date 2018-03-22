// determine if list exist in local storage, if not set it to empty array.
if (!localStorage.getItem("list")) {
    localStorage.setItem("list", JSON.stringify([]))
}

// define page elements
var list = document.getElementById('list');
var addToList = document.getElementById('addToList')

// build the li and add it as a child.
var addThisToList =  function(i) {
    var li = document.createElement("li");
   // li.id = i;
    var t = document.createTextNode(storedList[i]);
    var button = document.createElement("button");
    button.innerText = `🗑`;
    button.name = storedList[i];
    button.addEventListener('click', function (e) {
        var myParent = e.target.parentNode;
        list.removeChild(myParent);
        storedList.splice(storedList.indexOf(this.name), 1)
        localStorage.setItem("list", JSON.stringify(storedList))
    })

    li.appendChild(button);

    var t = document.createTextNode(storedList[i]);
    li.appendChild(t)
    list.appendChild(li);
}

// function that will intercept and process the form, then reset the form.
var currentList = function (event) {
    event.preventDefault();
    storedList.push(addToList.itemName.value);
    addThisToList(storedList.length - 1);
    localStorage.setItem("list", JSON.stringify(storedList));
    addToList.reset();
}

//event listener for form.
addToList.addEventListener("submit", currentList)

// get list from localstorage
var storedList = JSON.parse(localStorage.getItem("list"));

// loop through items in list and call the function that turns them into li elemants
for (var i = 0; i < storedList.length; i++) {
    addThisToList(i);
}


