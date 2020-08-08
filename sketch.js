const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var groundSprite;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,790,480,20);

  for(var k=0; k<=width; k=k+80){
    divisions.push(new Divisions(k,height - divisionHeight/2,10,divisionHeight));
  }

  for(var j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75,10))
  }
  
  for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175,10))
  }

  for(var i=40; i<=width; i=i+50){
    plinkos.push(new Plinko(i,275,10))
  }
  
  for(var i=15; i<=width-10; i=i+50){
    plinkos.push(new Plinko(i,375,10))
  }

  groundSprite = createSprite(240,790,480,20);

}

function draw() {
  background("black"); 

  Engine.update(engine); 

  groundSprite.shapeColor = "yellow";

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }

  for(var i = 0; i < plinkos.length;i++){
    plinkos[i].display()
  }

  for(var j = 0; j < divisions.length;j++){
    divisions[j].display()
  }

  for(var a = 0; a < particles.length;a++){
    particles[a].display()
  }

  drawSprites();

}