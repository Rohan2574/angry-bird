class Log{
    constructor(x,y,h,angle){
        var box_options ={
            isStatic: false,
            restitution:0.1,
            friction:0.9
        }
        
        this.box = Bodies.rectangle(x,y,20,h,box_options);
        this.w=20;
        this.h=h;
        Matter.Body.setAngle(this.box,angle)
        World.add(world,this.box); 
    }
    display(){
        rectMode(CENTER);
        push()
        translate(this.box.position.x,this.box.position.y)
        rotate(this.box.angle)
        fill("blue");
        rect(0,0,this.w,this.h);
        pop()   
    }
}