class Block{
    constructor(x, y, width, height) {
        var options = {
      
         
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.b=loadImage("polygon.png")
        this.Visble=255;
      }
      display(){
        if(this.body.speed<4){

          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle*180/PI);
          imageMode(CENTER);
          image(this.b,0,0,this.width, this.height);
          pop(); 
        }
        else{
          World.remove(world,this.body);
          push();
          this.Visble=this.Visble-5
          tint(255,this.Visble);
          image(this.b,this.body.position.x,this.body.position.y,this.width, this.height);
          pop();
        }
       
        
      

      }
}
