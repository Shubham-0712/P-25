class Paper{

    constructor(x,y,r){

    this.x = x;
    this.y = y;
    this.r = r;
    this.image = loadImage("paper.png");
    var options ={
    
      isStatic:false,
      restitution:0.3,
      friction:0,
      density:1.2


    }
    this.body =  Bodies.circle(this.x, this.y, this.r, options);

    World.add(world, this.body);



    }

   display(){
   
    imageMode(CENTER);
    image(this.image, this.body.position.x,this.body.position.y,this.r*2,this.r*2);


   }



}