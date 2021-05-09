class Hero {
    constructor(x, y, r) {
        var options = {
            frictionAir : 1,
            density : 0.4
        }
        
        this.r = r;
        this.x = x;
        this.y = y
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        this.image = loadImage('Superhero.png');
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*3, this.r*3);
        pop();
    }
}