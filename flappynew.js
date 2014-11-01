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

var player

/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
game.load.image("playerImg", "assets/jamesBond.gif");

    game.load.image("playerImg2", "assets/flappy_batman.png")
    game.load.image("playerImg3", "assets/flappy.png")
    game.load.audio("score", "assets/point.ogg") ;

}

/*
 * Initialises the game. This function is only called once.
 */
function create() {
    // set the background colour of the scene
    game.stage.setBackgroundColor('#3399FF');
    game.add.text(300, 10, "Welcome to my game!",{font: "20px Arial",fill: "#F3D3A3" });

    game.add.sprite(10,340, "playerImg2");
    game.add.sprite(730,10,"playerImg2");
    game.add.sprite(10,10, "playerImg2");
    game.add.sprite(730,340,"playerImg2")
    game.add.audio("score");
    game.input.onDown.add(clickHandler) ;

    player=game.add.sprite(x,y,"playerImg3");

game.input
    .keyboard
    .addKey(Phaser.Keyboard.SPACEBAR)
    .onDown.add(spaceHandler);

  var rightkey=game.input.keyboard
      .addKey(Phaser.Keyboard.RIGHT);

      rightkey.onDown.add(moveRight);
    var leftkey=game.input.keyboard
        .addKey(Phaser.Keyboard.LEFT);

        leftkey.onDown.add(moveLeft);
    var upkey=game.input.keyboard
        .addKey(Phaser.Keyboard.UP);

        upkey.onDown.add(moveUp);

    var downkey=game.input.keyboard
        .addKey(Phaser.Keyboard.DOWN);

        downkey.onDown.add(moveDown);
}

/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {
    
}
function clickHandler (event) { game.add.sprite(event.x,event.y, "playerImg3"); game.sound.play("score") }


function spaceHandler () {game.sound.play("score");  }

function moveRight() {player.x=player.x+1}

function moveLeft() {player.x=player.x-1}

function moveUp() {player.y=player.y-1}

function moveDown() {player.y=player.y+1}