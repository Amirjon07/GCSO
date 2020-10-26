var car,wall,speed,weight
function setup() {
  createCanvas(800,400);
  car=createSprite(400, 200, 50, 50);
  car.shapeColor=("white")
  wall=createSprite(700, 200, 50, 200);
  wall.shapeColor=("gray")
  speed=random(55,90)
  car.velocityX=speed
  weight=random(800,1500)
}

function draw() {
  background(0);  
  if (wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0
    var damage=0.5*speed*speed*weight/22509
    if (damage>180){
      car.shapeColor=("Red")
    }
  if (damage>180&&damage<100){
    car.shapeColor=("Yellow")
  }
  if (damage<100){
    car.shapeColor=("green")
  }
  }
  drawSprites();
}