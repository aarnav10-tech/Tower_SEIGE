class slingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.01,
            length : 5
        }
        this.pointB = pointB;
        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot);
    }
    fly(){
        this.slingShot.bodyA = null;
    }
    attach(){
        this.slingShot.bodyA = ball.body;
    }
    display(){
        if(this.slingShot.bodyA){
        strokeWeight(2);
        line(this.slingShot.bodyA.position.x, this.slingShot.bodyA.position.y, this.pointB.x, this.pointB.y);
    }
    }
}