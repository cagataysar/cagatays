
var upwards = document.getElementsByClassName("toTop")[0]

window.addEventListener("scroll", function (){

    const distance = window.scrollY;
    if (distance > 100) {
        upwards.classList.add("showButton");
    } else {
        upwards.classList.remove("showButton")
    }
});

upwards.addEventListener("click", function () {

    window.scrollTo(0,0)
});

upwards.addEventListener("mousemove", function (){

    upwards.innerHTML = "&#8679";
});

upwards.addEventListener("mouseout", function (){

    upwards.innerHTML = "Up";
});