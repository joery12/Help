let toggleState = false;

let toggleNav = function() {
    let getColorsNav = document.querySelector(".nav-colors");
    let getColorsNavUl = document.querySelector(".nav-colors ul");
    let getColorsNavHome = document.querySelector(".colorlist-home");
    let getColorsNavBlue = document.querySelector(".colorlist-blue");
    let getColorsNavRed = document.querySelector(".colorlist-red");
    let getColorsNavYellow = document.querySelector(".colorlist-yellow");
    let getColorsNavGreen = document.querySelector(".colorlist-green");
    let getColorsNavOrange = document.querySelector(".colorlist-orange");



    if (toggleState === false) {
        getColorsNav.style.width = "200px";
        getColorsNavUl.style.visibility = "visible";
        getColorsNavHome.style.opacity = "1";
        getColorsNavBlue.style.opacity = "1";
        getColorsNavRed.style.opacity = "1";
        getColorsNavYellow.style.opacity = "1";
        getColorsNavGreen.style.opacity = "1";
        getColorsNavOrange.style.opacity = "1";

        toggleState = true;

    } else if (toggleState === true) {
        getColorsNav.style.width = "50px";
        getColorsNavUl.style.visibility = "hidden";
        getColorsNavHome.style.opacity = "0";
        getColorsNavBlue.style.opacity = "0";
        getColorsNavRed.style.opacity = "0";
        getColorsNavYellow.style.opacity = "0";
        getColorsNavGreen.style.opacity = "0";
        getColorsNavOrange.style.opacity = "0";

        toggleState = false;
    }

}

const blueBackground = document.querySelecttor("body");
blueBackground.addEventListener("click", function() { body.classList.add("blue-background") });