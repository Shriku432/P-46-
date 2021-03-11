var pitch,pitchImage
var batsmen,batsmen1Image
var bowler,bowlerImage
var batsmen2,batsmen2Image
var ballGroup

function preload(){

pitchImage = loadAnimation("pitch.jpg")
batsmen1Image = loadAnimation("batsmen.png")
bowlerImage = loadAnimation("bowler.png")
batsmen2Image= loadAnimation("batsmen 2.png")
ballGroup= new Group()
batsmenHit= loadAnimation("batsmenHit.png")
ballImage= loadImage("ball.png")

}

function setup() {
  createCanvas(displayWidth+100,displayHeight+100);
  pitch = createSprite(800,50,displayWidth,displayHeight);
  pitch.addAnimation("pitch",pitchImage)
  pitch.scale=8

  batsmen = createSprite(800,550);
  batsmen.addAnimation("bat1",batsmen1Image)
  batsmen.scale= 1.3
  batsmen.debug=true
  batsmen.setCollider("rectangle",0,0,70,70)

  batsmen2 = createSprite(712,250,20,40)
  batsmen2.addAnimation("bat2",batsmen2Image)
  batsmen2.scale=0.2

  bowler = createSprite(831,247,20,40)
  bowler.addAnimation("bowl",bowlerImage)
  bowler.scale=0.2
 
}

function draw() {
  background(255,255,255);  
 
  // to bowl 
if(keyWentDown("space")){
ball()
}

// batsman to bat
if(keyWentDown("a"))
{
  batsmen.changeAnimation("hit",batsmenHit)
}


if(keyWentUp("a"))
{
  batsmen.changeAnimation("bat1",batsmen1Image)
}

   drawSprites();
   textSize(50)
   text(mouseX+ " " +mouseY,mouseX,mouseY)

  if(ballGroup.isTouching(batsmen)){
  ballGroup.setVelocityYEach(-8)
  var rand=Math.round(random(-2,2))
  ballGroup.setVelocityXEach(rand)
  }
  if(ballGroup.velocityX>0)
  {
    ballGroup.destroyEach()
  }
  




}

function ball(){

bowl = createSprite(bowler.x,bowler.y,20,20)
bowl.addImage(ballImage)
bowl.scale=0.05
var rand= Math.round(random(10,15))
bowl.visible=true
bowl.velocityY=rand
ballGroup.add(bowl)
bowl.debug=true





}
