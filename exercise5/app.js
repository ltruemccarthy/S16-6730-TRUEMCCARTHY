var mySound;

function preload() {
  mySound = loadSound('sound.mp3');
}

function setup() {
  createCanvas(500, 500)
  mySound.setVolume(0.1);
  mySound.play();
}

