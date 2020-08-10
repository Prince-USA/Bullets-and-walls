var bullet, wall, speed, weight,thickness,bulletRightedge,wallLeftedge

function setup() {
    createCanvas(1600, 400);
    speed = random(223, 321);
    weight = random(30, 52);
    thickness = random(22,83)
    bullet = createSprite(50, 200, 40, 10);
    bullet.shapeColor = color(120,120,120)
    wall = createSprite(1200, 200, thickness, height/2);
    wall.shapeColor = color(80, 80, 80);
}

function draw() {
    background(255,255,255);
    bullet.velocityX = speed;

    if (hasCollided(bullet,wall)) {
        var damage = 0.5 * weight * speed * speed / thickness * thickness * thickness
        if (damage > 10) {
            bullet.shapeColor = color(255, 0, 0);
        }
        if (damage < 10) {
            bullet.shapeColor = color(0, 255, 0);
        }
    }

    drawSprites();
}
function hasCollided(object1, object2) {
    bulletRightedge = bullet.x + bullet.width
    wallLeftedge = wall.x
    if (bulletRightedge >= wallLeftedge) {
        bullet.velocityX = 0;
        return true
    }
    else {
        return false
    }


}
