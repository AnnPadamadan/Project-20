var car;
var wall;
var speed;
var weight;
var deform;
var deformation;

function setup() {
  createCanvas(1600, 400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = (80, 80, 80);

  speed = random(55, 90);
  weight  = random(400, 1500)

  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
text("speed: "+Math.round(speed)+" "+"weight: "+Math.round(weight), 100, 370);
  if(car.x-wall.x<car.width/2+wall.width/2&&wall.x-car.x<car.width+wall.width&&
    car.y-wall.y<car.height/2+wall.height/2&&wall.y-car.y<car.height+wall.height){
      car.velocityX = 0;
     deform=  0.5*weight*speed*speed;
     deformation = deform/22500;
    }
if(deformation<100){
  car.shapeColor = "green";
  text("COMPLETELY SAFE", 100, 400);
}else if(deformation>100&&deformation<180){
  car.shapeColor = "yellow";
  text("SOME DAMAGE", 100, 400);
}else if(deformation>180){
  car.shapeColor = "red";
  text("NOT SAFE", 100, 400);
}
  drawSprites();
}



