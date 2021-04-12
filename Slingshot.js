class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body) {
        this.sling.bodyA = body
    }
    display(){
        image(this.sling1,200,40,40,180)
        image(this.sling2,172,45,40,100)

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if (pointA.x < 200) {
                strokeWeight(7);
            }else{
                strokeWeight(4);
            }
            stroke("#301608")
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y+10);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y+10);
            image(this.sling3,pointA.x-25,pointA.y-10,7,20)
        }

    }

    
}