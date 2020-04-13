function setup() {
  createCanvas(400, 400);
}
function draw() {
  var skinLight = color(255, 213, 188);
  var skinMed = color(249, 199, 169);
  var skinDark = color(239, 182, 148);
  var hair = color(0, 0, 0);
  var shirt = color(45, 45, 45);
  var black = color(0, 0, 0);

  background(220);
  
  noStroke();
  fill(skinMed);
  rect(165, 200, 70, 100);
  
  fill(shirt);
  rect(115, 275, 170, 130);
  
  fill(shirt);
  ellipse(120, 395, 120, 240);
  
  fill(shirt);
  ellipse(280, 395, 120, 240);
  
  fill(skinMed);
  ellipse(199, 275, 70, 60);
  
  fill(skinDark);
  ellipse(199, 210, 80, 100);
  
 
  fill(skinMed);
  ellipse(199, 170, 120, 160);
  
  ellipse(138, 173, 20, 40);
  ellipse(260, 173, 20, 40);
  
  
  noStroke();
  fill(skinLight);
  ellipse(200, 199, 18, 15);
  
  fill(hair);     
  quad(265, 215, 160, 80, 258, 87, 260, 140);
  ellipse(240, 108, 19, 27);
  ellipse(190, 100, 100, 50);
  quad(145, 180, 155, 100, 141, 100, 137, 150);
  quad(120, 160, 170, 160, 170, 110, 140, 100);
  
  
  
  fill(black);
  ellipse(175, 173, 10, 12);
  ellipse(225, 173, 10, 12);
  stroke(black);
  strokeWeight(3);
  line(182, 159, 160, 160);
  line(213, 159, 233, 160);
  line(185, 222, 215, 222);
  
}
