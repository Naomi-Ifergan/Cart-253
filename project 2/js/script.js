// Predator-Prey Simulation
// by Naomi Ifergan
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

//Background image
let zooBackground;

// Our predator
let zookeeper;


// The three prey
let antelope;
let zebra;
let monkey;
let tiger;
let lion;

let state = "TITLE";
let prey=[];
let numPrey = 100;

// This variable tells us what state the program is in


function preload(){
//placing background image for the game
zooBackground = loadImage('assets/images/zoo.jpg');
imageZookeeper= loadImage('assets/images/zookeeper.png');
imageAntelope= loadImage('assets/images/antelope.png');
imageZebra= loadImage('assets/images/zebra.png');
imageMonkey= loadImage('assets/images/monkey.png');
imageTiger= loadImage('assets/images/tiger.png');
imageLion= loadImage('assets/images/lion.png');

}


// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
function setup() {
  createCanvas(1000,600);
  //Setting up predator (zookeeper)
  //using arrow keys
  zookeeper= new Predator(100, 300, 5, 100,imageZookeeper);

let preyImages = [imageAntelope,imageZebra,imageMonkey,imageTiger,imageLion];
  //Setting up prey
  antelope = new Prey(100, 100, 10, 40,imageAntelope);
  zebra = new Prey(100, 100, 8, 35,imageZebra);
  monkey = new Prey(100, 100, 20, 10,imageMonkey);
  tiger = new Prey (100, 100,10, 30,imageTiger);
  lion = new Prey (100,100, 15,20,imageLion);

  for (let i = 0; i < numPrey; i++) {
    let preyX = random(0, width);
    let preyY = random (0, height);
    let preySpeed = random (2,10);
    let preyRadius = random (3,50);
    let randomIndex = floor (random(0,5));
    let newPrey = new Prey (preyX, preyY, preySpeed, preyRadius, preyImages[randomIndex]);
    prey.push(newPrey);
  }
}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // placing background image
  imageMode(CENTER);
image(zooBackground,width/2,height/2, width,height);

for (let i = 0; i< prey.length; i++) {
  prey[i].move();
  prey[i].display();
}
  if (state === "TITLE") {
    displayTitleScreen(); // We will imagine we have a function to show the title stuff
  }

  else if (state === "PLAY") {

    // Handle input for the tiger
    zookeeper.handleInput();

    // Move all the "animals"
    zookeeper.move();
    antelope.move();
    zebra.move();
    monkey.move();
    tiger.move();
    lion.move();

    // Handle the tiger eating any of the prey
    zookeeper.handleEating(antelope);
    zookeeper.handleEating(zebra);
    zookeeper.handleEating(monkey);
    zookeeper.handleEating(tiger);
    zookeeper.handleEating(lion);

    // Display all the "animals"
    zookeeper.display();
    antelope.display();
    zebra.display();
    monkey.display();
    tiger.display();
    lion.display();

  //display the zookeeper's Score
  displayScore();
  if (zookeeper.health== 0) {
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
  //It's not working:( 
}
  }


  function mousePressed() {
  if (state === "TITLE") {
    // If we were on the title we need to switch to instructions
    state = "PLAY";
  }
    }


function displayScore (){
  textAlign(CENTER,CENTER);
  fill(0);
  textSize(50);
  textFont("Arial");
  text("Score:" + (zookeeper.score),width/2,30);
}

function displayTitleScreen(){
rectMode(CENTER);
fill(250);
rect(500,300,700,300);
textSize(20);
textAlign(CENTER,CENTER);
fill(0);
text(" Welcome to Montreal's largest zoo. \n I'm Bob, the zookeeper. \n Unfortunetely, we are closed today due to the escape of some of the animals.\n Help me catch them so we can open the zoo! \n Use the arrow keys to catch them!\n Click to play! ", width/2,height/2)
}
function displayGameOver(){
  rectMode(CENTER);
  fill(204,0,0);
  rect(500,300,700,300);
  textSize(20);
  textAlign(CENTER,CENTER);
  fill(0);
  text("GAMEOVER!\n You failed to catch all the animals. \n Thanks for trying! \n Refresh to play again", width/2,height/2)
}
