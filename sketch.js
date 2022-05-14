var ball;
var db;
var form,player,game;
var position; //undefined
var bgImg;
var gs;
var pc;
var car1,car2, car1Img, car2Img;
var allPlayers;
function preload(){
    bgImg=loadImage("assets/background.png");
    car1Img = loadImage("assets/car1.png");
    car2Img = loadImage("assets/car2.png");
    track = loadImage("assets/track.jpg");
}

function setup(){
    db = firebase.database();
    //console.log(db);
    createCanvas(500,500);
    game= new Game();
    game.getState();
    game.start();

}

function draw(){
    background(bgImg);
     if(pc===2){
         game.update(1)
     }

     if(gs===1){
         game.play()
     }

    //drawSprites();
}
function windowResize(){
    resizeCanvas(windowWidth,windowHeight)

}



/*
Objects required in the game:

    1. Form
        - input box
        - play button

    2. Player
        - Player's info:
            - player's name
            - rank
            - distance
            - score
        - Player count
    
    3. Game
        - Game states:
            - Start - Wait - 0
            - Play - 1
            - End - 2
        - Displaying all the components of the game
*/

