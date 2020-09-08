var sword ;
var swordImage,fruit1,fruit2,fruit3,
fruit4,monster,gameoverImage;
var score;
var gameState=1;var PLAY=1; var END=0;
var fruitsGroup,enemyGroup;
var fruits;


function preload(){
  
  
 swordImage = loadImage("sword.png");
  fruit1=loadImage("fruit1.png");
 fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  monsterImage=loadImage("alien1.png");
   monsterImage=loadImage("alien2.png");
  gameoverImage=loadImage("gameover.png");
}



function setup() {
  createCanvas(600, 600);
  
 
  
  // creating bow to shoot arrow
  sword = createSprite(480,220,20,50);
  sword.addImage(swordImage); 
  sword.scale = 0.7;
  sword.setCollider("rectangle",0,0,40,40);
  //sword.debug=true;
 
  score=0;
  
  fruitsGroup=createGroup();
  enemyGroup=createGroup();
}

function draw() {
  background("lightBlue");
  
  

  if(gameState===PLAY){
      fruit();
enemy(); 
  sword.y = World.mouseY;
  sword.x=World.mouseX;
  
    
  } 
  if(fruitsGroup.isTouching(sword)){
     fruitsGroup.destroyEach();
    
  score=score+2;
     
     
     }
  if(enemyGroup.isTouching(sword)){
  gameState=END;
    fruitsGroup.destroyEach();
    enemyGroup.destroyEach();
    score.visible=false;
    sword.addImage(gameoverImage);
    sword.x=200;
    sword.y=200;
  sword.scale=2;
  
  
  }
    
 
  drawSprites();

  textSize(20);
  stroke("blue");
  text("score: "+ score, 500,50);
     
}


function fruit(){
if(World.frameCount%80===0){
fruits=createSprite(400,200,20,20);
  fruits.scale=0.2;
  r=Math.round(random(1,4));
  if(r==1){
    fruits.addImage(fruit1);
  }else if (r==2){
    fruits.addImage(fruit2);
  }else if (r==3){
    fruits.addImage(fruit3);
  }else if (r==4){
      fruits.addImage(fruit4)
  }
  
  fruits.y=Math.round(random(50,340));
  fruits.velocityX=-7;
  fruits.setLifetime=100;
  fruitsGroup.add(fruits);
}
}

function enemy(){
if(World.frameCount%200===0){
monster=createSprite(400,200,20,20);
  monster.addAnimation("moving",monsterImage);
  monster.y==Math.round(random(100,300));
  monster.velocityX=-8;
  monster.setLifetime=50;
  enemyGroup.add(monster);
}
}




