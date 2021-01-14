class Paper{
    constructor(x,y,r){
    var option={
        isStatic : false,
        restitution : 0.3,
        friction : 0.5,
        density : 1.2 
    }
    Matter.bodies.circle(150,380,240);
    drawSprites();
  }
}