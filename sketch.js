
var rocket,rocketImg

var space,spaceImg

var alien1,alien1Img,alien2,alien2Img,alien3,alien3Img

var alien2Group,alien3Group,alien1Group

var fireballSound,hitSound,destroySound,fireballGroup,fireballImg

var restart,restartImg
var gameOver,gameOverImg

var score
var PLAY=1;
var END=0;
var gameState=PLAY;


function preload(){ 


rocketImg=loadImage("rocket1.png");
spaceImg=loadImage("space.png")
fireballImg=loadImage("fireball1.png")
alien1Img=loadImage("alien1.png")
alien2Img=loadImage("alien2.png")
alien3Img=loadImage("alien3.png")
fireballSound=loadSound("fireballsound.wav")
destroySound=loadSound("destroy sound.wav")
hitSound=loadSound("hitsound.wav")
restartImg=loadImage("restart.png")
gameOverImg=loadImage("gameover.png")

}

function setup() {
 createCanvas(600,600);


space=createSprite(300,300)
space.addImage("space",spaceImg)


rocket= createSprite(100,550,10,20);
rocket.addImage("rocket1",rocketImg);
rocket.scale=0.2

fireballGroup=new Group();
alien1Group=new Group();
alien2Group=new Group();
alien3Group=new Group();

gameOver=createSprite(300,250,0,0)
gameOver.addImage("gameOver",gameOverImg)
gameOver.scale=0.5
gameOver.visible=false

restart=createSprite(300,300,0,0)
restart.addImage("restart",restartImg)
restart.scale=0.02
restart.visible=false


score=0

}

function draw() {
 background("0")

 
if(gameState===PLAY){

  var select_alien = Math.round(random(1,3));
  
  if (World.frameCount % 50 == 0) {
   switch(select_alien){
     case 1: alien1();
     break;
     case 2:alien2();
     break;
     case 3:alien3();
     break;
     default:break;
   }
 }
  if(keyDown("space")){

    createFireball();
    fireballSound.play()
   }
 
   if(keyDown("LEFT_ARROW")){
    
    rocket.x = rocket.x -20;

  
}

if(keyDown("RIGHT_ARROW")){
  rocket.x = rocket.x + 20;


}
  if(fireballGroup.isTouching(alien1Group)){
    

         hitSound.play()
         alien1Group.destroyEach()
         fireballGroup.destroyEach()
         score=score+1
         

    }

      if(fireballGroup.isTouching(alien2Group)){

           hitSound.play()
           alien2Group.destroyEach()
           fireballGroup.destroyEach()
           score=score+5
           
      
      }
    
    
    
      if(fireballGroup.isTouching(alien3Group)){
    
            hitSound.play()
            alien3Group.destroyEach()
            fireballGroup.destroyEach()
            score=score+10
            
        
        }

  
  

  
if(alien1Group.isTouching(rocket)){

  destroySound.play()
  fireballGroup.destroyEach()
  alien1Group.setVelocityYEach(0);
  alien2Group.setVelocityYEach(0);
  alien3Group.setVelocityYEach(0);
  restart.visible=true
  gameOver.visible=true
  rocket.visible=false

 
 
  
   }



if(alien2Group.isTouching(rocket)){

  
  destroySound.play()
  fireballGroup.destroyEach()
  alien1Group.setVelocityYEach(0);
  alien2Group.setVelocityYEach(0);
  alien3Group.setVelocityYEach(0);
  restart.visible=true
  gameOver.visible=true
  rocket.visible=false



  
 


  }

  if(alien3Group.isTouching(rocket)){

  
   destroySound.play()
   fireballGroup.destroyEach()
   rocket.destroy()
   alien1Group.setVelocityYEach(0);
   alien2Group.setVelocityYEach(0);
   alien3Group.setVelocityYEach(0);
   restart.visible=true
   gameOver.visible=true
   rocket.visible=false
  
   
 

  }

  
}

if (mousePressedOver(restart)){
 reset()

}


    drawSprites()

    stroke("yellow");
    fill("yellow");
    textSize(20);
    text("SCORE:"+score, 490,30)
}

function createFireball() {
    var fireball= createSprite(100, 100, 60, 10);
    fireball.addImage("fireball",fireballImg);
    fireball.y = 550;
    fireball.x=rocket.x;
    fireball.velocityY = -4;
    fireball.lifetime = 200;
    fireball.scale = 0.1;
    fireballGroup.add(fireball);
     
  }

  
function alien1(){

   var alien1=createSprite(550,200,0,0)
   alien1.x=Math.round(random(100,550))
   alien1.addImage("alien1",alien1Img)
   alien1.scale=0.1
   alien1.velocityY=3
   alien1Group.add(alien1)
   alien1Group.setLifetimeEach=50


}

function alien2(){

   var alien2=createSprite(550,200,0,0)
    alien2.x=Math.round(random(100,550))
    alien2.addImage("alien2",alien2Img)
    alien2.scale=0.1
    alien2.velocityY=3
    alien2Group.add(alien2)
    alien2Group.setLifetimeEach=50
    
    
    
    }
    
    function alien3(){

    var alien3=createSprite(550,200,0,0)
        alien3.x=Math.round(random(100,550))
        alien3.addImage("alien3",alien3Img)
        alien3.scale=0.1
        alien3.velocityY=3
        alien3Group.add(alien3)
        alien3Group.setLifetimeEach=50
        
        
        
        }

    function reset(){
   gameState=PLAY
   restart.visible=false
   gameOver.visible=false
   alien1Group.destroyEach()
   alien2Group.destroyEach()
   alien3Group.destroyEach()
   score=0
   rocket.visible=true
 
  }