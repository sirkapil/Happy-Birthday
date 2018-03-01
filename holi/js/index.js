var parentElem = document.getElementById("theEffect");
var screenW = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var screenH = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

appendRandomCircle();

setInterval(function () {
  appendRandomCircle();
}, 100);

setTimeout(function () {
  setInterval(function () {
    var element = document.getElementsByClassName("circle")[0];
    element.outerHTML = "";
    delete element;
  },150);
}, 15000);

setInterval(function() {
  document.body.style.background= '#'+Math.floor(Math.random()*16777215).toString(16);
}, 3000);

function appendRandomCircle() {
  var circle = document.createElement("div");
  var randomDimension = Math.floor(Math.random()*10)*15;
  var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  var randomTop = Math.random()*screenH;
  var randomLeft = Math.random()*screenW;
  var animationClasses = ["right", "rubberBand", "shake", "left", "swing", "bounce", "flash", "pulse", "wobble", "flip", "lightSpeedIn", "rollIn"];
  circle.style.width = randomDimension + "px";
  circle.style.height = randomDimension + "px";
  circle.style.backgroundColor = randomColor;
  circle.className += " circle ";
  circle.className += animationClasses[Math.floor(Math.random() * animationClasses.length)];
  circle.style.left = randomLeft + "px";
  circle.style.top = randomTop + "px";
  
  parentElem.appendChild(circle);
}