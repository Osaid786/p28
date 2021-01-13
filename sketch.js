
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1,box2,box3,stone,sling
var mango1,mango2,mango3,mango4,mango5,mango6;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    box1=new Box(450,340);
    box2=new Box2(500,250);
	box3=new Boy(50,305);
	stone=new Stone(35,330);
	
	mango1 = new Mango(450,50);
    mango2 = new Mango(350,100);
	mango3 = new Mango(50,20);
	mango4 = new Mango(90,5);
	mango5 = new Mango(50,54);
	mango6 = new Mango(15,14);
	
	sling = new SlingShot(stone.body,{x:50,y:305});
	
	Engine.run(engine);

  
}


function draw() {
 background(220);
 Engine.update(engine)

 box1.display();
 box2.display();
 box3.display();
 stone.display();
 
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();

detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);
detectCollision(stone,mango6);
 
}

function keyPressed(){
  if (keyCode === UP_ARROW) {

    
    Matter.Body.applyForce(stone.body,stone.body.position,{x:55,y:-20})
	Matter.Body.setPosition(stone.body,{x:200,y:340})
	
	
	 }
}

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    
	if(distance<=lmango.radius+lmango.radius){
      Matter.Body.setStatic(lmango.body,false)

	}
}




