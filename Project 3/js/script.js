      // "A minute to win it"
      // by Naomi Ifergan
      //
      // This game is based on real life basketball.
      // However, the players only have 1 minute to score as much as he can before time runs out!


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
      let countdown;

  function preload(){
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
      //set up players
      nbaPlayer = new Predator(100, 100, 5, 100,nbaPlayerImg);
      player2 = new Predator (200,10,5,100,player2Img);

      let preyImages = [basketballImg];
      basketball = new Prey (5,30,7,0, basketballImg);

    //arrays
  for (let i= 0; i < numPrey; i++){
      let preyX = random(0, width);
      let preyY = random (0, height);
      let preySpeed = random (2,10);
      let preyRadius = random (3,50);
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
      nbaPlayer.handleEating(basketball);
      player2.handleEating (basketball);

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
      fill(0);
      textSize(50);
      textFont("Arial");
      text("Team Blue:" + (nbaPlayer.score),1000,50);
      text("Team Red:" + (player2.score),200,50);

      }

    function displayTitleScreen(){
      //Title page
      ellipseMode(CENTER);
      fill(255,140,0); //orange
      ellipse(width/2,height/2,300,300);
      textSize(15);
      textAlign(CENTER,CENTER);
      fill(0);
      text(" Welcome to my court! \n You have 1 minute to beat your opponent. \n Player 1 use ARROW keys to move. \n Player 2 use WASD keys to move.  \n Click to play!\n ", width/2,height/2)
      }


    function displayGameOver(){
      //Gameover page
      ellipseMode(CENTER);
      fill(204,0,0);
      ellipse(width/2,height/2,300,300);
      textSize(20);
      textAlign(CENTER,CENTER);
      fill(0);
      text("GAMEOVER!", width/2,height/2)
      }
