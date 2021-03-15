var canvas, box, surface1, surface2, surface3, surface4;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    box=createSprite(random(10,750),300,20,20)
    box.shapeColor="white"
    box.velocityX=3
    box.velocity=3


    surface1=createSprite(100,590,180,20)
    surface1.shapeColor="blue"



    surface2=createSprite(300,590,180,20)
    surface2.shapeColor="green"
    
    surface3=createSprite(500,590,180,20)
    surface3.shapeColor="red"



    surface4=createSprite(700,590,180,20)
    surface4.shapeColor="yellow"


    //create box sprite and give velocity

}

function draw() {
    background(rgb(10,10,10));


    if(box,x<0){
        music.stop()
        box=velocityX=3
    }
    else if(box.x>800){
        music.stop()
        box.velocityX=-3
    }

if(isTouching(box,surface4)){

    music.play()
    box.shapeColor="blue"
    bounceOff(box,surface4)
}


else if(isTouching(box,surafce2)){
    music.stop
    box.shapeColor="green"
    bounceOff(box,surface2)
}


else if(isTouching(box,surafce3)){
    music.stop
    box.shapeColor="red"
    bounceOff(box,surface3)
}


else if(isTouching(box,surafce1)){
    music.stop
    box.shapeColor="yellow"
    bounceOff(box,surface1)
}

}


if(box.y<0){
    music.stop()
    box.VelocityY=3

}












    //add condition to check if box touching surface and make it box






