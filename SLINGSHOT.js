class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.042,
            length: 20
        }
        this.pointB=pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
   
    fly(){
        this.sling.bodyA = null;
    }
    display(){
      
        if(this.sling.bodyA){   
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB
        strokeWeight(10);
        stroke("brown")
        line(pointA.x+35, pointA.y+330, pointB.x+50, pointB.y+305); 
        }
        
    }
 } 