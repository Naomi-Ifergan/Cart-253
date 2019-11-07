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


function preload(){
//placing background image for the game
zooBackground = loadImage('assets/images/Zoo.jpg');

imageZookeeper= loadImage('assets/images/zookeeper.png');
imageAntelope= loadImage('assets/images/antelope.png');
imageZebra= loadImage('assets/images/zebra.png');
imageMonkey= loadImage('assets/images/monkey.png');
}


// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
function setup() {
  createCanvas(1000,600);
  //Setting up predator (zookeeper)
  //using arrow keys
  zookeeper= new Predator(100, 100, 5, color(200, 200, 0), 40,UP_ARROW,DOWN_ARROW,LEFT_ARROW,RIGHT_ARROW,imageZookeeper);

  //Setting up prey
  antelope = new Prey(100, 100, 10, color(255, 100, 10), 50,imageAntelope);
  zebra = new Prey(100, 100, 8, color(255, 255, 255), 60,imageZebra);
  monkey = new Prey(100, 100, 20, color(255, 255, 0), 10,imageMonkey);
}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // placing background image
  imageMode(CENTER);
image(zooBackground,width/2,height/2, width,height);


  // Handle input for the tiger
  zookeeper.handleInput();

  // Move all the "animals"
  zookeeper.move();
  antelope.move();
  zebra.move();
  monkey.move();

  // Handle the tiger eating any of the prey
  zookeeper.handleEating(antelope);
  zookeeper.handleEating(zebra);
  zookeeper.handleEating(monkey);

  // Display all the "animals"
  zookeeper.display();
  antelope.display();
  zebra.display();
  monkey.display();

//display the zookeeper's Score
displayScore();

  function displayScore (){
    textAlign(CENTER,CENTER);
    fill(255);
    textSize(50);
    textFont("Arial");
    text("Score:" + (zookeeper.score),width/2,height/2);

    function startGame(){
  textSize(30);
  textAlign(CENTER,CENTER);
  fill(204,0,0);
  let startGameText= "Hi there! Welcome to Montreal's largest zoo. I'm Bob, the zookeeper. Unfortunetely, we are closed today due to the escape of the antelopes, zebras and monkeys. Help me catcch them so we an open the zoo! Use the arrow keys to catch them! "

}
  }
}
