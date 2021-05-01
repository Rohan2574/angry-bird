class Pig{
    constructor(x,y){
        var box_options ={
            isStatic: false,
            restitution:0.1,
            friction:0.9
        }
        
        this.box = Bodies.rectangle(x,y,50,50,box_options);
        this.w=50;
        this.h=50;
        World.add(world,this.box); 
    }
    display(){
        rectMode(CENTER);
        push()
        translate(this.box.position.x,this.box.position.y)
        rotate(this.box.angle)
        fill("green");
        rect(0,0,this.w,this.h);
        pop()   
    }
}