
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 boxPosition=width/2-100
	 boxY=610;
	 boxleftSprite = createSprite(boxPosition,boxY,20,100);
	 boxleftSprite.shapeColor = color(255,0,0);

	 boxLeftBody = Bodies.rectangle(boxPosition+20,boxY,20,100,{isStatic:true})
	 boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper = new Paper(150,380,40);

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		matter.body.applyForce(paperObject.Body,paperObject.body.position,{x:85,y:-85});
	}
}



