var img;

function preLoad(){
  img = loadImage("niceguy.jpg")
}

function setup() {
  var c = createCanvas(236, 245)
  c.parent('container')

  img.loadPixels()
}

function draw() {
  for (i = 0; i <= img.pixels.length; i = i + 4){
    //img.pixels[i] = 180
    img.pixels[i + 1] = 25
    //img.pixels[i + 2] = 300
    img.pixels[i + 3] = 255
  }

  img.updatePixels()

  image(img, 0, 0, 236, 245)
}