const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
    background_Img = loadImage('Background.png');
}

function setup() {
    createCanvas(1366, 656);
    
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600, 600, 1200, 20);
    
    hero = new Hero(200, 300, 100);
    
    rope = new Fly(this.hero, {x: 200, y: 150});
}

function draw() {
    background(background_Img);
    
    ground.display();
    hero.display();
    rope.display();
}