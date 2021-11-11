var canvas,bg;
var together;
var tom, tomImg1,tomImg2,tomImg3,tomImg4;
var jerry, jerryImg1,jerryImg2,jerryImg3,jerryImg4;

function preload() {
    //carga aquí las imágenes
    bg = loadImage("imagenes/garden.png");
    tomImg1 = loadAnimation('imagenes/tomOne.png');
    tomImg2 = loadAnimation('imagenes/tomThree.png', 'imagenes/tomTwo.png');
    tomImg4 = loadAnimation('imagenes/tomFour.png');

    jerryImg1 = loadAnimation('imagenes/jerryOne.png');
    jerryImg2 = loadAnimation('imagenes/jerryTwo.png', 'imagenes/jerryThree.png');
    jerryImg3 = loadAnimation('imagenes/jerryFour.png');

    

}

function setup(){
    canvas = createCanvas(1000,800);
    //crea aquí los sprites de Tom y Jerry
    tom = createSprite(740,710,100,100);
    tom.addAnimation('gato',tomImg1);
    tom.scale = 0.13;

    jerry = createSprite(200,710,100,100);
    jerry.addAnimation('raton', jerryImg1);
    keyPressed();
    jerry.scale = 0.13;

    jerry.setCollider('rectangle', 0, 0, 200,200);

}

function draw() {

    background(bg);
   


    //Escribe aquí la condición para evaluar si Tom y Jerry chocan
    if (tom.isTouching(jerry)) {
        jerry.addAnimation('ratonMiedo', jerryImg3);
        jerry.changeAnimation('ratonMiedo', jerryImg3);

        tom.addAnimation('tomLlega', tomImg4);
        tom.changeAnimation('tomLlega', tomImg4);
        tom.velocityX = 0;

   
    }
   
    drawSprites();
}


function keyPressed(){

if (keyCode === 37 ) {
    jerry.addAnimation('ratonMolestando', jerryImg2);
    jerry.changeAnimation('ratonMolestando', jerryImg2);
    jerry.frameDelay = 25;

    tom.addAnimation('tomCaminando', tomImg2);
    tom.changeAnimation('tomCaminando');
    tom.frameDelay = 6;
    tom.velocityX = -5;
}
}