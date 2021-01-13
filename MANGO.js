class Mango{
    constructor(x,y,radius){
        var options = {
            'isStatic': true,
            'restitution': 0.3,
            'friction': 1,
            'density': 1.2
           
        }
        this.body = Bodies.circle(x,y,30,options)
        this.radius = 30
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position

        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("orange")
        circle(pos.x,pos.y,this.radius)

    }
}