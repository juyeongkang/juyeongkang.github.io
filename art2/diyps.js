var img;
var initials ='JK'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://dma-git.github.io/images/74.png');
  img2 = loadImage('https://juyeongkang.github.io/house4.jpg');
  img3 = loadImage('https://juyeongkang.github.io/tower1.jpg');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(255);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
    background(0);
    
  } else if (toolChoice == '2') { // second tool

    stroke(255, 204, 0);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '3') { // third tool

    ellipseMode(RADIUS); 
    fill(255); //
    ellipse(mouseX, mouseY, 40, 40, 30, 30); 

    ellipseMode(CENTER); 
    noStroke(20)
    fill(255, 204, 0);
    ellipse(mouseX, mouseY, 30, 30, 40, 40);
  } else if (toolChoice == '4') {

    stroke(0, 0, 255);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (key == '5') { // this tool calls a function
    stroke(135,206,235);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
    
    
    
    // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

    ellipseMode(RADIUS); 
    fill(255, 190, 0); //
    ellipse(mouseX, mouseY, 35, 34, 26, 24); 

    ellipseMode(CENTER); 
    noStroke(20)
    fill(255, 204, 0);
    ellipse(mouseX, mouseY, 30, 30, 40, 40);
  } else if (toolChoice == '7') {

    image(img2, mouseX, mouseY);
  } else if (toolChoice == '8') {
    image(img3, mouseX, mouseY);

  } else if (toolChoice == '9') {
    noStroke(20)
    ellipse(mouseX, mouseY, 53, 46, 55, 55)
    
  } else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 70, 130);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clearsg4 the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(255); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}1

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
