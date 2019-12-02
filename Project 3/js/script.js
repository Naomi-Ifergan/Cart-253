      // "A minute to win it"
      // by Naomi Ifergan
      //
      // This game is based on real life basketball.
      // However, the players only have 1 minute to score as much as he can before time runs out!

// testing

      //our background image
      let courtBackground;

      // player 1
      let nbaPlayer;

      // player 2
      let player2;

      //basketballs
      let basketball;

      //arrays
      //number of preys that will be simulated
      let prey = [];
      let numPrey = 10;

      // introduction page
      let state = "TITLE";

     //1 minute timer
      let countdown= 60

      let cheering;

  function preload(){

    //sound effects
     cheering = loadSound(["assets/sounds/cheering.ogg"]);
     buzzer = loadSound (["assets/sounds/buzzer.ogg"]);
      //placing background image for the game
      courtBackground = loadImage('assets/images/court.jpg');

      //placing nbaPlayer
      nbaPlayerImg = loadImage('assets/images/nbaPlayer.png');

      //placing player 2
      player2Img = loadImage ('assets/images/player2.png');

      //placing basketballs
      basketballImg = loadImage ('assets/images/basketball.png');
      }

      // setup()
      //
      // Sets up a canvas
      // Creates objects for the players

  function setup() {
      createCanvas(windowWidth,windowHeight);
      cheering.play();

      //set up players
      nbaPlayer = new Predator(1100, 500, 5, 100,UP_ARROW,DOWN_ARROW,LEFT_ARROW,RIGHT_ARROW,32,nbaPlayerImg);
      player2 = new Predator (200,500,5,100,87,83,65,68,32,player2Img);

      let preyImages = [basketballImg];
      //basketball = new Prey (5,30,7,0, basketballImg);

    //arrays
  for (let i= 0; i < numPrey; i++){
      let preyX = random(0, width);
      let preyY = random (0, height);
      let preySpeed = random (2,10);
      let preyRadius = 50;
      let randomIndex = floor (random(0,1));
      let newPrey = new Prey (preyX, preyY, preySpeed, preyRadius, preyImages[randomIndex]);
     prey.push(newPrey);
      }
      }


      // draw()
      //
      // Handles input, movement, eating, and displaying for the system's objects

   function draw() {
      //placing background image
      imageMode(CENTER);
      image(courtBackground,width/2,height/2, width,height);


      //arrays
    for (let i = 0; i< prey.length; i++) {
      prey[i].move();
      prey[i].display();
      }

      if (state === "TITLE") {
       displayTitleScreen();
       // We will imagine we have a function to show the title stuff
      }

      else if (state === "PLAY") {


      // Handle input for the Players
      nbaPlayer.handleInput();
      player2.handleInput();
      //
      // Move the players
      nbaPlayer.move();
      player2.move();

      // Handle the player "eating" the prey (basketballs)
      for (let i = 0; i< prey.length; i++) {
      nbaPlayer.handleEating(prey[i]);
      player2.handleEating (prey[i]);
      }
      nbaPlayer.handleCollision (player2);

      // Display the player and the basketballs
      nbaPlayer.display();
      player2.display();

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


    function displayScore (){
      //display the score throughout the game
      textAlign(CENTER,CENTER);
      textSize(50);
      textFont("Colonna MT");
      fill(0,0,179);
      text("Team Blue:" + (nbaPlayer.score),1000,50);
      fill(204,0,0);
      text("Team Red:" + (player2.score),200,50);

      }

    function displayTitleScreen(){
      push();
      //Title page
      ellipseMode(CENTER);
      fill(255,140,0); //orange
      ellipse(width/2,height/2,300,300);
      textSize(15);
      textAlign(CENTER,CENTER);
      fill(0);
      text(" Welcome to my court! \n You have 1 minute to beat your opponent. \n Player 1 use ARROW keys to move. \n Player 2 use WASD keys to move. \n Avoid collision between players. \n Click to play!\n ", width/2,height/2)
      pop();
      }


    function displayGameOver(){
      //Gameover page
      // buzzer sound when game is over
      buzzer.play();
      ellipseMode(CENTER);
      fill(204,0,0); //red
      ellipse(width/2,height/2,500,500);
      textSize(20);
      textAlign(CENTER,CENTER);
      fill(0);
      text("GAMEOVER! \n You ran out of time. \n Seems like you couldn't beat you opponent. \n Click to play again", width/2,height/2);


}
