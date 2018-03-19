if (!localStorage.getItem("click")) {
    localStorage.setItem("click", 0)
}
window.addEventListener("click", function () {
    localStorage.setItem("click", parseInt(localStorage.getItem("click")) + 1)
})