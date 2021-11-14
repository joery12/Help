let toggleState = false;

let toggleNav = function() {
    let getColorsNav = document.querySelector(".nav-colors");
    let getColorsNavUl = document.querySelector(".nav-colors ul");
    let getColorsNavHome = document.querySelector(".nav-colors li .colorlist-home");
    let getColorsNavBlue = document.querySelector(".nav-colors li .colorlist-blue");
    let getColorsNavRed = document.querySelector(".nav-colors li .colorlist-red");
    let getColorsNavYellow = document.querySelector(".nav-colors li .colorlist-yellow");
    let getColorsNavGreen = document.querySelector(".nav-colors li .colorlist-green");
    let getColorsNavOrange = document.querySelector(".nav-colors li .colorlist-orange");



    if (toggleState === false) {
        getColorsNav.style.width = "300px";
        getColorsNavUl.style.visibilty = "visible";
        getColorsNavHome.style.opacity = "1";
        getColorsNavBlue.style.opacity = "1";
        getColorsNavRed.style.opacity = "1";
        getColorsNavYellow.style.opacity = "1";
        getColorsNavGreen.style.opacity = "1";
        getColorsNavOrange.style.opacity = "1";

        toggleState = true;
    }

}