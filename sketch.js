const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(800,400);
  

  engine = Engine.create();
  world = engine.world;

  object1_options = { 
    isStatic:false
  }

  object1 = Bodies.rectangle(400, 100, 50, 50, object1_options);
  World.add(world, object1);

  console.log(object1);
  console.log(object1.position.y);
  console.log(object1.position.x);


}

function draw() {
  background(255,255,255);
  
  rect(object1.position.x, object1.position.y, 50, 50);
  rect(400, 300, 50, 50);

  drawSprites();
}