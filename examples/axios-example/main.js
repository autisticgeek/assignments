var todoUrl = "https://api.vschool.io/ben/todo/";

function createTodoProperty(elem, text) {
    var prop = document.createElement(elem);
    prop.innerHTML = text;
    return prop;
}

function createTodoInfo(todo, parent) {
    parent.appendChild(createTodoProperty("h3", todo.title));
    parent.appendChild(createTodoProperty("p", todo.description));
    parent.appendChild(createTodoProperty("p", todo.price));
}

function checkOff(label, checked) {
    if (checked) {
        label.style.textDecoration = "line-through";
    } else {
        label.style.textDecoration = "none";
    }
}

function addToDOM(todo) {

    let li = document.createElement("li");
    li.id = todo._id;

    // append todo info to the list item
    createTodoInfo(todo, li);

    // add delete button
    var button = document.createElement("button");
    button.innerText = "X";

    //tell the button to listen for clicks:
    button.addEventListener("click", function () {
        // remove todo from database and webpage:
        axios.delete(todoUrl + todo._id).then(function (response) {
            todoList.removeChild(li);
        })
    });
    //add button to li:
    li.appendChild(button);

    // create checkbox:
    let input = document.createElement("input");
    input.type = "checkbox";
    input.id = todo.id + "completed";
    input.checked = todo.completed;

    //create label:
    let label = document.createElement("label");
    label.innerText = "Status";
    label.htmlFor = input.id;
    //strike through label if needed:
    checkOff(li, todo.completed);
    label.appendChild(input);

    // listen for input changes:
    input.addEventListener("change", function (e) {
        let checked = e.target.checked;
        // make PUT request, sending an object with the completed property set to the input's new value:
        axios.put(todoUrl + todo._id, {
            completed: checked
        }).then(function (response) {
            checkOff(li, checked);
        })
    })
    // append label/input to li
    li.appendChild(label);

    //finally append the li element to the DOM
    todoList.appendChild(li);
}

var todoList = document.getElementById("todo-list");

axios.get(todoUrl).then(function (response) {
    var todos = response.data;
    for (var i = 0; i < todos.length; i++) {
        // create li element
        let todo = todos[i];
        addToDOM(todo);
    }
})

// posting
var form = document.getElementById("form");
var inputData = {};

form.addEventListener("submit", function (e) {
    e.preventDefault();
    // set the values of my inputs onto inputdata obj
    inputData.title = e.target.title.value;
    inputData.description = e.target.description.value;
    inputData.price = e.target.price.valueAsNumber;
    inputData.imgUrl = e.target.imgUrl.value;
    //post to server:
    axios.post(todoUrl, inputData).then(function (response) {
        var todo = response.data;
        addToDOM(todo);
    });
});