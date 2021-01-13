class Box2{
    constructor(x,y,width,height){
        var options = {
            'isStatic': true,
            
        }

        this.body=Bodies.rectangle(x,y,20,10,options)
        this.width=50
        this.height=350
        this.image=loadImage("IMAGES/tree.png")
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
       
        push();
        translate(pos.x,pos.y)
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height)
        pop();


    }
}