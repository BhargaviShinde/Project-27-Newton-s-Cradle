class Rope{
    constructor(bodyA, pointB){

        //this.offsetX = offsetX;
        //this.offsetY = offsetY;
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            //pointB:{x: this.offsetX, y: this.offsetY},
            stiffness: 0.04,
            length: 300
        }

        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        fill("white");
        strokeWeight(5);        
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        
    }
}