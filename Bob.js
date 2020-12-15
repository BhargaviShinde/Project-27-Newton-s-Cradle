class Bob {
    constructor(x, y, r) {
      var options = {
          isStatic : false,
          restitution:1.25,
          density:1
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(x, y, r, options);
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      //push();
      //translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      fill("pink");
      ellipse(pos.x,pos.y,this.r);
      //pop();
    }
  }
