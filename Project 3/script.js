// "Catch Me If You Can"
// by Naomi Ifergan
//
// This game is based on real life basketball. However, the player has 1 minute to score as much as he can before time runs out!


//our background image
let courtBackground;

// Our predator
let nbaPlayer;

// The three prey
let basketball;

// introduction page
let state = "TITLE";

//arrays
//the number of preys that will be simulated
let prey=[];
let numPrey = 25;

function preload(){
//placing background image for the game
courtBackground = loadImage('assets/images/court.jpg');

//placing nbaPlayer (predator)
nbaPlayerImg = loadImage('assets/images/nbaPlayer.png');

//placing basketball (prey)
basketballImg = loadImage('assets/images/basketball.png');
}
// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
function setup() {
  createCanvas(500,500);
  //set up predator and prey
  nbaPlayer = new Predator(100, 100, 5, 100,nbaPlayerImg);
  basketball = new Prey(100, 100, 10, 50, basketballImg);

  let preyImage = [basketballImg];
    //Setting up prey
   basketball = new Prey(100, 100, 10, 40,basketballImg);

   //arrays
   for (let i = 0; i < numPrey; i++) {
     let preyX = random(0, width);
     let preyY = random (0, height);
     let preySpeed = random (2,10);
     let preyRadius = random (3,50);
     let randomIndex = floor (random(0,5));
     let newPrey = new Prey (preyX, preyY, preySpeed, preyRadius, preyImage[randomIndex]);
     prey.push(newPrey);
   }
 }


// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // placing background image
  imageMode(CENTER);
image(courtBackground,width/2,height/2, width,height);

//arrays
for (let i = 0; i< prey.length; i++) {
  prey[i].move();
  prey[i].display();
}
if (state === "TITLE") {
   displayTitleScreen(); // We will imagine we have a function to show the title stuff
 }

 else if (state === "PLAY") {


  // Handle input for the nbaPlayer
  nbaPlayer.handleInput();

  // Move the player and basketballs
  nbaPlayer.move();
  basketball.move();

  // Handle the player "eating" the prey (basketballs)
  nbaPlayer.handleEating(basketball);


  // Display the player and the basketballs
  nbaPlayer.display();
  basketball.display();

  //display the nbaPlayer's Score
    displayScore();
    if (nbaPlayer.health== 0) {
      state= "GAMEOVER"
    }
    }
    else if (state === "GAMEOVER") {
      displayGameOver();
  }

  }

  function mousePressed() {
  if (state === "GAMEOVER") {
    // If we are on the gameover page, we want to play again
    state = "PLAY";

  }
    }


    function mousePressed() {
    if (state === "TITLE") {
      // If we were on the title we need to switch to instructions
      state = "PLAY";
    }
      }

  //display the score throughout the game
  function displayScore (){
    textAlign(CENTER,CENTER);
    fill(0);
    textSize(50);
    textFont("Arial");
    text("Score:" + (zookeeper.score),width/2,30);
  }

  // Introduction page
  function displayTitleScreen(){
  ecllipseMode(CENTER);
  fill(255,140,0); //orange
  ecllipse(500,300,700,300);
  textSize(20);
  textAlign(CENTER,CENTER);
  fill(0);
  text("Hey there basketball fan, welcome to my court! \n ", width/2,height/2)
  }
  //Gameover page
  function displayGameOver(){
    rectMode(CENTER);
    fill(204,0,0);
    rect(500,300,700,300);
    textSize(20);
    textAlign(CENTER,CENTER);
    fill(0);
    text("GAMEOVER!", width/2,height/2)
  }

}
