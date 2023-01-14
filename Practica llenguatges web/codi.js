var elementsNav = document.getElementsByClassName("elementNav");

for (var i = 0; i < elementsNav.length; i++) {
    elementsNav[i].onmouseover = function () {
        this.style.color = "blue";
    }
    elementsNav[i].onmouseout = function () {
        this.style.color = "black";
    }
}


var vMODELATGE = document.getElementById("MODELATGE");
var vTEXTURITZACIO = document.getElementById("TEXTURITZACIO");
var vRIGGING = document.getElementById("RIGGING");
var vANIMACIO = document.getElementById("ANIMACIO");
var vRENDERITZACIO = document.getElementById("RENDERITZACIO");
var logo = document.getElementById("logoblender");

var PARAGRAF_MODELATGE = document.getElementById("PARAGRAF-MODELATGE");
var PARAGRAF_TEXTURITZACIO = document.getElementById("PARAGRAF-TEXTURITZACIO");
var PARAGRAF_RIGGING = document.getElementById("PARAGRAF-RIGGING");
var PARAGRAF_ANIMACIO = document.getElementById("PARAGRAF-ANIMACIO");
var PARAGRAF_RENDERITZACIO = document.getElementById("PARAGRAF-RENDERITZACIO");

vMODELATGE.addEventListener("click", function () {
    PARAGRAF_MODELATGE.style.display = "block";
    PARAGRAF_TEXTURITZACIO.style.display = "none";
    PARAGRAF_RIGGING.style.display = "none";
    PARAGRAF_ANIMACIO.style.display = "none";
    PARAGRAF_RENDERITZACIO.style.display = "none";
});

vTEXTURITZACIO.addEventListener("click", function () {
    PARAGRAF_MODELATGE.style.display = "none";
    PARAGRAF_TEXTURITZACIO.style.display = "block";
    PARAGRAF_RIGGING.style.display = "none";
    PARAGRAF_ANIMACIO.style.display = "none";
    PARAGRAF_RENDERITZACIO.style.display = "none";
});

vRIGGING.addEventListener("click", function () {
    PARAGRAF_MODELATGE.style.display = "none";
    PARAGRAF_TEXTURITZACIO.style.display = "none";
    PARAGRAF_RIGGING.style.display = "block";
    PARAGRAF_ANIMACIO.style.display = "none";
    PARAGRAF_RENDERITZACIO.style.display = "none";
});

vANIMACIO.addEventListener("click", function () {
    PARAGRAF_MODELATGE.style.display = "none";
    PARAGRAF_TEXTURITZACIO.style.display = "none";
    PARAGRAF_RIGGING.style.display = "none";
    PARAGRAF_ANIMACIO.style.display = "block";
    PARAGRAF_RENDERITZACIO.style.display = "none";
});

vRENDERITZACIO.addEventListener("click", function () {
    PARAGRAF_MODELATGE.style.display = "none";
    PARAGRAF_TEXTURITZACIO.style.display = "none";
    PARAGRAF_RIGGING.style.display = "none";
    PARAGRAF_ANIMACIO.style.display = "none";
    PARAGRAF_RENDERITZACIO.style.display = "block";
});

logo.addEventListener("click", function () {
    PARAGRAF_MODELATGE.style.display = "none";
    PARAGRAF_TEXTURITZACIO.style.display = "none";
    PARAGRAF_RIGGING.style.display = "none";
    PARAGRAF_ANIMACIO.style.display = "none";
    PARAGRAF_RENDERITZACIO.style.display = "none";
});

