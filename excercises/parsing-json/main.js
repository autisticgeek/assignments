var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        console.log(data);
        for (var i = 1; i < data.results.length; i++) {
            //     document.getElementById('demo1').innerHTML += `${data.results[i].name} ` ;
            var listItem = document.createElement("li");
            var itemContent = document.createTextNode(data.results[i].name);
            listItem.appendChild(itemContent);
            document.getElementById('demo2').appendChild(listItem);
        }

    }
};

xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/?limit=949", true);
xhr.send();