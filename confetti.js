requestAnimFrame = (function() {
    return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        }
    );
})();

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var width = 0;
var height = 0;

window.onresize = function onresize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
};

window.onresize();

var mouse = {
    X: 0,
    Y: 0,
};

window.onmousemove = function onmousemove(event) {
    mouse.X = event.clientX;
    mouse.Y = event.clientY;
};

var particules = [];
var gouttes = [];
var nombrebase = 5;
var nombreb = 2;

function Rain(X, Y, nombre) {
    if (!nombre) {
        nombre = nombreb;
    }
    while (nombre--) {
        particules.push({
            vitesseX: Math.random() * 0.25,
            vitesseY: Math.random() * 9 + 1,
            X: X,
            Y: Y,
            alpha: 1,
            couleur: "hsla(" + controls.color + "," + controls.saturation + "%, " + controls.lightness + "%," + controls.opacity + ")",
        });
    }
}

function explosion(X, Y, couleur, nombre) {
    if (!nombre) {
        nombre = nombrebase;
    }
    while (nombre--) {
        gouttes.push({
            vitesseX: Math.random() * 4 - 2,
            vitesseY: Math.random() * -4,
            X: X,
            Y: Y,
            radius: 0.65 + Math.floor(Math.random() * 1.6),
            alpha: 1,
            couleur: couleur,
        });
    }
}

function rendu(ctx) {
    // Le code de rendu actuel reste inchangé ici
}

function update() {
    // Le code de mise à jour actuel reste inchangé ici
}

(function boucle() {
    requestAnimFrame(boucle);
    update();
    rendu(ctx);
})();
