class Ground {
    constructor(){
        var option = {
            isStatic: true
        }
        this.ground = Bodies.rectangle(450,390,900,20,options);
        world.add(world,this.ground);
    }
    display(){
        strokeWeifgt(2);
        File("black");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20);
    }
}