var btn = document.getElementById("btn");
var mobilenav = document.getElementById("mobilenav");

mobilenav.style.left = "-991px";

btn.onclick = function(){
    if(mobilenav.style.left == "-991px"){
        mobilenav.style.left = "0";
        btn.src = "images/icon-close.svg";
    }

    else{
        mobilenav.style.left = "-991px";
        btn.src = "images/icon-hamburger.svg";
    }
}