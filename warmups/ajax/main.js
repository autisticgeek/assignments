var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {  
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        var name = data[0].title;
        document.getElementById("demo1").innerHTML = "JSON results: " + jsonData;
        document.getElementById("demo2").innerHTML = name;
    }
};

xhr.open("GET", "https://api.vschool.io/ben/todo", true);  
xhr.send();