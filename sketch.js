var snow1;
var bg;
function preload(){
bg=loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,800);
  snow1=new snow(30,30,20);
  

}

function draw() {
  background(255,255,255);  

image(bg,50,10,800,500);
snow1.display();

  drawSprites();
}