function meme() {
var txt;
var r = confirm("You have summoned stonks man. Do you accept his overlordship?");
if (r == true) {
  txt = "He respects your humility.";
} 
else {
  txt = "So you have chosen...death!";
}
  alert(txt);
}

function magentaback(){
 var dCP = document.getElementById("CP");
 dCP.className = "magentaback";
}

function greenback(){
 var dsquares = document.getElementById("squares");
 dsquares.className = "greenback";
  var ctx = dsquares.getContext("2d");
  ctx.fillStyle = "red";
  ctx.fillRect(50,50,50,20);
  ctx.font = "15px Arial";
  ctx.fillText ("You've been bamboozled! It's a rectangle!", 5, 40);
}

function docolor(){
  var dcolorland = document.getElementById("colorland");
  var colorinput = document.getElementById("clr");
  var color = colorinput.value;
  dcolorland.style.backgroundColor = color;
}

function dorect() {
  var dcolorland=document.getElementById("colorland");
  var sizeinput = document.getElementById ("sldr");
  var size = sizeinput.value;
  var ctx = dcolorland.getContext("2d"); ctx.clearRect(0,0,dcolorland.width,dcolorland.height);
  ctx.fillStyle = "red";
  ctx.fillRect (50,50,5*size,2*size);
}

var image;

function upload(){
  var imgcanvas = document.getElementById("uploader");
  var fileinput = document.getElementById("finput");
  output = new SimpleImage(fileinput);
  output.drawTo(imgcanvas);
}

function makeGray(){
  for (var pixel of image.values()) {
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var imgcanvas = document.getElementById("uploader")
  image.drawTo(imgcanvas);
}

var fgimage = null;
function loadForegroundImage() {
  var imgFile = document.getElementById("fgfile");
  fgImage = new SimpleImage(imgFile);
  var canvas = document.getElementById("fgcanvas");
  fgImage.drawTo(canvas)
}

var bgimage = null;
function loadBackgroundImage() {
  var imgFile = document.getElementById("bgfile");
  bgImage = new SimpleImage(imgFile);
  var canvas = document.getElementById("bgcanvas");
  bgImage.drawTo(canvas)
}

function greenScreen() {
  If (fgImage == null || !fgImage.complete()) {
    Alert("Foreground not loaded!");
    Return;
  }
  If(bgImage == null || ! bgImage.complete()) {
    Alert("Background not loaded!");
  }
  clearCanvas();
}

var greenThreshold = for(var pixel of fgImage.values()){
 (pixel.getRed()+pixel.getBlue())/2
}

var output = new SimpleImage(fgImage.getWdith(), fgImage.getHeight());
for (var pixel of fgImage.values()) {
  var x = pixel.getX();
  var y = pixel.getY();
  If (pixel.getGreen() > greenThreshold) {
    var bgPixel = bgImage.getPixel(x,y);
    output.setPixel(x,y,bgPixel);
  }
  else {
    output.setPixel(x,y,pixel);
  }
}

function func1(){
  var txt = "Placeholder for Button 1"
  alert(txt)
}

function func2(){
  var txt = "Placeholder for Button 2"
  alert(txt)
}

function func3(){
  var txt = "Placeholder for Button 3"
  alert(txt)
}