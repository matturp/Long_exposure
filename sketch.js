let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();
}

function draw() {
  //background(0);
  imageMode(CENTER);
  tint(255,2);
  //image(capture, mouseX, mouseY, width/4, height/4);
  image(capture, width/2, height/2, width/2, height/2);
  //filter(THRESHOLD,0.3);

/*   for (var a = 0; a < width; a = a + width/4){
    for (var b = 0; b < height; b = b + height/4){

      image(capture, a, b, width/4, height/4);
      filter(THRESHOLD,0.3);
    }
  } */


}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}