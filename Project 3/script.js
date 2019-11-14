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

  // Handle input for the tiger
  nbaPlayer.handleInput();

  // Move all the "animals"
  nbaPlayer.move();
  basketball.move();

  // Handle the tiger eating any of the prey
  nbaPlayer.handleEating(basketball);


  // Display all the "animals"
  nbaPlayer.display();
  basketball.display();

}
