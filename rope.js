class rope{
    constructor(body1,point2){

        var poss={
            bodyA:body1,
            pointB:point2,
            length:60,
            stiffness:0.2
        }

        this.a=Matter.Constraint.create(poss);
        World.add(world,this.a);
        this.po=point2;

    }
    attach(body){
       this.a.bodyA=body;
    }

    display(){

        if(this.a.bodyA){

            var pos=this.a.bodyA.position;

            line(pos.x,pos.y,this.po.x,this.po.y);
    
        }  
    }

    fly(){
        this.a.bodyA=null;
    }
        
    
}

