var car,wall,car1,car2,car3;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90),
weight=random(400,1500)
 car=createSprite(50,150,50,50);
 wall=createSprite(1300, 200, 60,height/2);
  wall.shapeColor="black";
  car.velocityX=speed;
  car.weight=weight;
  
}

function draw() {
  background(80,80,80); 
 
  if (wall.x-car.x<car.width/2+wall.width/2) {
car.velocityX=0;
   
var deformation=0.5*weight*speed*speed/22509;
if(deformation>180)
{
car.shapeColor(255,0,0);
car.shapeColor(255,0,0);
car.shapeColor(255,0,0);
car.shapeColor(255,0,0);
}

if(deformation<180 && deformation>100){
car.shapeColor=color(230,230,0);
}
if(deformation<100){
car.shapeColor=color(0,255,0);
}
}
  
  drawSprites();
}