var sun,mercury,venus,earth,mars;
var sun1, mercury1,venus1,earth1,mars1;

function preload(){
  sun1 = loadImage("sun.png");
  mercury1 = loadImage("mercury.png");
  venus1 = loadImage("venus.png");
  earth1 = loadImage("earth.png");
  mars1 = loadImage("mars.png")
}

function setup() {
  var canvas = createCanvas(1200,800);
 sun= createSprite(550,350,50,50);
  sun.addImage(sun1);
 sun.scale = 0.4;
 sun.setCollider("circle",0,0,250);
 sun.debug = true;
 mercury = createSprite(275,350,50,50);
  mercury.addImage(mercury1);
 mercury.scale = 0.2;
 mercury.setCollider("circle",0,0,400);
 mercury.debug = true;
venus = createSprite(75,350,50,50);
  venus.addImage(venus1);
 venus.scale = 0.25;
 venus.setCollider("circle",0,0,300);
 venus.debug = true;
 earth = createSprite(850,350,50,50);
  earth.addImage(earth1);
 earth.scale =0.5;
earth.setCollider("circle",0,0,175);
 earth.debug = true;
 mars = createSprite(1100,350,50,50);
  mars.addImage(mars1);
mars.scale = 0.25;
 mars.setCollider("circle",0,0,350);
 mars.debug = true;
 
  
}

function draw() {
  if(frameCount%80 === 0){
    sun.scale = sun.scale+0.15;
  }
if(sun.collide(mercury)){
mercury.destroy();
 }
 if(sun.collide(venus)){
venus.destroy();
 }
if(sun.collide(earth)){
earth.destroy();
  }
if(sun.collide(mars)){
mars.destroy();
 }
                                          
  background(2);  
  drawSprites();
}