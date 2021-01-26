var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var edges;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	fairy.setCollider("rectangle",0,0,600,fairy.height);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	edges = createEdgeSprites();
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  fairyVoice.play();

  if(keyDown("right_arrow")){
     fairy.x=fairy.x+5;
  }
  if(keyDown("left_arrow")){
	fairy.x=fairy.x-5;
 }
 if(keyDown("down_arrow")){
	star.velocityY=3;
 }
 if(star.y>470){
	star.velocityY=0;
 }

 fairy.bounceOff(edges);

  drawSprites();

}

function keyPressed() {
	//write code here
}
