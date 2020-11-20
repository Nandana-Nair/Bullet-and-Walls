var bullet,wall;
var speed,weight;
var thickness;
var bulletRightEdge,wallLeftEdge;




function setup() {


  createCanvas(1600,400);
 

  wall=createSprite(1000,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)

  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,50,50);
  bullet.shapeColor="black";
  bullet.velocityX=speed;
  thickness=random(22,83);
}

function draw() {
  background(255,255,255);  

  if(wall.x-bullet.x<=(bullet.width+wall.width)/2){

    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    console.log(deformation);
    if(deformation>180){

      bullet.shapeColor="blue";

    }

    if(deformation<180&&deformation>100){

      bullet.shapeColor="green";
    }

    if(deformation<100){

      bullet.shapeColor="yellow";
    }
  }

  if (hasCollided(bullet,wall))
  {
   bullet.velocityX=0;
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  }
  if (damage>10)

  {


    wall.shapeColor=color(225,0,0);

  }
  if(damage<10)
  {
   wall.shapeColor=color(0,255,0);

  }
  drawSprites();
}

function hasCollided(bullet,wall){

  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x
  if(bulletRightEdge>=wallLeftEdge)
    {

     return true;

    }
       
     return false;

}