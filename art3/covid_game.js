var imgX = 40;
var imgY = 40;
var imgSize = 140;
var score =0;
var gameState = "L1";

function preload() {
  img = loadImage('https://juyeongkang.github.io/virus.png');
  img2 = loadImage('https://juyeongkang.github.io/Mutate.png');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(150,75,0);
  if(gameState == "L1"){
    levelOne();
  }
  if(gameState == "L2"){
     levelTwo();
  }
  
  text(("Kill Point: " + score), width/2, 40);
  

} // end draw


function levelOne(){
  text("COVID-19", width/2, height-20);
  var distToImg= dist(imgX, imgY, mouseX, mouseY);
  if (distToImg <imgSize/2){
    imgX = random(width);
    imgY= random(height);
    score= score +1;
  }
  if(score>10){
     gameState = "L2";
  }
  
  
  image(img, imgX, imgY, 50, 50);
} // end level one


function levelTwo(){
   background(80,80,80);
  text("Mutant COVID-19", width/2, height-20);
  var distToImg2= dist(imgX, imgY, mouseX, mouseY);
  if (distToImg2 <imgSize/2){
    imgX = random(width);
    imgY= random(height);
    score= score +1;
  }
  if(score>20){

  fill(random(255));
  }
  
  
  image(img2, imgX, imgY, 100, 100);
} // end level Two
