class Stone{
    constructor(x,y,radius){
        var options = {
            'isStatic':false,
            'restitution':0,
            'friction':0,
            'density':1.2
        }
        this.body=Bodies.circle(x,y,20)
        this.radius=20
        World.add(world,this.body)

    }

    display(){
        var pos=this.body.position

        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("black")
        circle(pos.x,pos.y,this.radius)
        pop();
    }
}