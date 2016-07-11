var mySound;
var mySound2;

function preload() {
  mySound = loadSound('sound.mp3');
  mySound2 = loadSound('sound2.wav');
}

function setup() {
  createCanvas(500, 500)
  mySound.setVolume(0.1);
}

function draw() {
	ellipse(100, 100, 200, 200);
	ellipse(300, 300, 200, 200);
}

function mouseClicked(){
  var d1 = dist(mouseX, mouseY, 100, 100);
  var d2 = dist(mouseX, mouseY, 300, 350);
  if (d1 < 100) {
    mySound.play()
  }
  if (d2 < 100) {
    mySound2.play()
  }
}