var bg, bgimg;
var snowfall, snowfallImg;
function preload(){
bgimg= loadImage("snow2.jpg");
snowfallImg= loadImage("snow ")
}

function setup() {

  createCanvas(1200,800);
  bg= createSprite(400, 400);
  bg.addImage(bgimg);
 
}

function draw() {
  background(255,255,255);  
  drawSprites();
}