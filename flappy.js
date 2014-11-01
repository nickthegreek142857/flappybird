// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(790, 400, Phaser.AUTO, 'game', stateActions);


var score
score=0

var x=100;
var y=200;
var pipes;
var player;

/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
game.load.image("playerImg", "assets/jamesBond.gif");

    game.load.image("playerImg2", "assets/flappy_batman.png")
    game.load.image("playerImg3", "assets/flappy.png")
    game.load.image("Pipe", "assets/pipe.png")
    game.load.audio("score", "assets/point.ogg") ;

}

/*
 * Initialises the game. This function is only called once.
 */
function create() {
    // set the background colour of the scene
    game.stage.setBackgroundColor('#3399FF');
    game.add.text(300, 10, "Welcome to my game!",{font: "20px Arial",fill: "#F3D3A3" });


    game.add.audio("score");
    //game.input.onDown.add(clickHandler) ;



game.input
    .keyboard
    .addKey(Phaser.Keyboard.SPACEBAR)
    .onDown.add(spaceHandler);


    game.input
        .keyboard
        .addKey(Phaser.Keyboard.SPACEBAR)
        .onDown.add(player_jump);

  //var rightkey=game.input.keyboard
      //.addKey(Phaser.Keyboard.RIGHT);

     // rightkey.onDown.add(moveRight);
    //var leftkey=game.input.keyboard
      //  .addKey(Phaser.Keyboard.LEFT);

        //leftkey.onDown.add(moveLeft);
    //var upkey=game.input.keyboard
      //  .addKey(Phaser.Keyboard.UP);

//        upkey.onDown.add(moveUp);

  //  var downkey=game.input.keyboard
    //    .addKey(Phaser.Keyboard.DOWN);

      //  downkey.onDown.add(moveDown);


   // var gap

/*

    for (var count2=1; count2<=6; count2++) {

        gap=Math.floor(7*Math.random())+1
        for (var rep=1;rep<gap;rep++)
        {
            game.add.sprite(150 * (count2 - 1), 50 * rep - 50, "Pipe")
        }
        for (var rep=gap+ 2; rep<=8; rep++)
        {
            game.add.sprite(150*count2-150, 50*rep-50,"Pipe")
        }
    }
*/
 game.physics.startSystem(Phaser.Physics.ARCADΕ);


    player=game.add.sprite(790/2, 400/2, "playerImg3");
    game.physics.arcade.enable(player);
    player.anchor.setTo(0.5, 0.5) ;



    player.checkWorldBounds = true;

    player.body.velocity.y=-100;

    player.body.gravity.y=400;

    pipes=game.add.group();
    game.time.events.loop(1.5*Phaser.Timer.SECOND,generate_pipes)
}

/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {
    game.physics.arcade.overlap(player,pipes,game_over);

    
}
function clickHandler (event) { game.add.sprite(event.x,event.y, "playerImg3"); game.sound.play("score") }


function spaceHandler () {game.sound.play("score");  }

function moveRight() {player.x=player.x+1}

function moveLeft() {player.x=player.x-1}

function moveUp() {player.y=player.y-1}

function moveDown() {player.y=player.y+1}

function player_jump(){
    player.body.velocity.y=-200;
}


function add_pipe_part(x,y,pipe_part) {

    var pipe=pipes.create(x,y,pipe_part);
    game.physics.arcade.enable(pipe);
    pipe.body.velocity.x=-200;
}

function generate_pipes() {

        gap = Math.floor(6 * Math.random()) + 1;
        for (var rep = 0; rep < gap; rep++) {
            add_pipe_part(900,rep *50,"Pipe");
        }
        for (var rep = gap + 2; rep < 8; rep++) {
            add_pipe_part(900,rep *50,"Pipe");
        }

}

function game_over() {
   // alert("GAME OVER!");
    location.reload();
}