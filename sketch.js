var car;
var wall;

var speed, weight;


function setup(){
createCanvas(1600,400);

speed=random(55,90);
weight=random(400,1500);

wall=createSprite(1500,60,20,800);
wall.shapeColor="white";

car=createSprite(50,200,50,50);
car.shapeColor="white";
car.velocityX=speed;

}

function draw(){
    background("black");
    
    //check
    if(isTouching(wall,car)){
       // deformation=true;
var deformation=0.5*weight*speed*speed/22500;

        if(deformation>=80){
          textSize(20);
          fill("white");
          text("bad",1200,200);
          car.shapeColor="yellow";
          car.velocityX=0;
        }

        if(deformation<80){
          textSize(20);
          fill("white");
          text("good",1200,200);
          car.shapeColor="green";
          car.velocityX=0;
        }

        if(deformation>180){
          textSize(20);
          fill("white");
          text("worse",1200,200);
          car.shapeColor="red";
          car.velocityX=0;
        }

        
    }

    else{car.shapeColor="white"}
    drawSprites();
}
