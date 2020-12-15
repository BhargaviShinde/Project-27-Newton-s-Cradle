class Roof{
    constructor(x,y,width,height){
        var options={
            isStatic: true
        }

        this.y = y;
        this.x = x;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
    }

    display(){

        //var pos = this.body.position
        //push();
        //translate(pos.x,pos.y)
        rectMode(CENTER);
        fill("darkviolet");
        rect(this.x,this.y,this.width,this.height);
        
        //pop();
    }
}