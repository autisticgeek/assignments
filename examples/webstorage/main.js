var str= "IM A STRING";
var num = 10;
var bool = true;
var obj = {
    key:"value",
    method: function(){
        console.log("Hello");
    }
};
var arr = [4,true,"yellow"]

localStorage.setItem("str",str);
localStorage.setItem("num",num);
localStorage.setItem("bool",bool);
localStorage.setItem("obj",JSON.stringify(obj));
localStorage.setItem("arr",JSON.stringify(arr));

