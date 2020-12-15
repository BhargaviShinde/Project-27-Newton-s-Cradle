const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var BO1, BO2, BO3, BO4, BO5;
var roof;
var r1,r2,r3,r4,r5;

function setup() {
	createCanvas(800,800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	BO1 = new Bob(280,400,30);
	BO2 = new Bob(340,400,30);
	BO3 = new Bob(400,400,30);
	BO4 = new Bob(460,400,30);
	BO5 = new Bob(520,400,30);

	roof = new Roof(400,100,800,50);

	r1 = new Rope(BO1.body,{x:280,y:100});
	r2 = new Rope(BO2.body,{x:340,y:100});
	r3 = new Rope(BO3.body,{x:400,y:100});
	r4 = new Rope(BO4.body,{x:460,y:100});
	r5 = new Rope(BO5.body,{x:520,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("darkturquoise");
  Engine.update(engine);
  
  BO1.display();
  BO2.display();
  BO3.display();
  BO4.display();
  BO5.display();

  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  
  roof.display();

  drawSprites();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(BO5.body,BO5.body.position,{x:175,y:1});
	}
}



