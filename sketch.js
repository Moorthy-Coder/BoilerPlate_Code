const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine;
var world;

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(255, 255, 255);
  Engine.update(engine);
}