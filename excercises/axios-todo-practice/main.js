var toDoURL = "https://api.vschool.io/wookiee/todo";
var toDoList = document.getElementById('list');


axios.get(toDoURL).then(
    function (response) {
        // console.log(response.data);
        for (let i = 0; i < response.data.length; i++) {
            toDoList.innerHTML += `<li>${response.data[i].title} <button onClick="del('${response.data[i]._id}')">DELETE</button> <button onClick="details('${response.data[i]._id}')">DETAILS</button></li>`
        }
    }
)

function del(id) {
    axios.delete(toDoURL + "/" + id).then(function (response) {
       // alert("Your todo was successfully deleted!")
        location.reload();
    }, function (response) {
        alert("There was a problem deleting your todo :(");
    });
};
function details(id){
    axios.get(`${toDoURL}/${id}`).then(
        function (response) {
             console.log(response.data);
             data= response.data;
             var done= "";
             if(data.title===true) {done = "checked"}
             
             document.getElementById('details').innerHTML = `<h1>${data.title}</h1><p>${data.description
             }</p><div>${data.price}</div><div><input type="checkbox" ${done}></div>`
        
            }
        
    )
}