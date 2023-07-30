//A p5 script for a rotating fractal ferm

var animate = true; //Turn this to true if your computer can handle it at the level of detail that you've set
var frames_per_second = 35 //Increase to speed up animation
var angle = 0; //You can change this manually, or use the slider in the output
var limit = 3; //Turn this up for less lag. A good number for smooth animation is 4
var scrub = 0.01; //Slider bar scrubbing detail
var animMult = 0.0002; //Multiply animation speed
var sizeMult = 0.33; //Fractal size relative to screen. Larger multipliers will increase detail
var brLenRatio = 0.75; //Size of child branch relative to parent
var canvasSize = 600;

function setup() {
  createCanvas(canvasSize, canvasSize);
  slider = createSlider(0, TWO_PI, QUARTER_PI, scrub);
  frameRate(frames_per_second);
}

function draw() {

  if (animate === true) {
    angle = slider.value() + (millis() * animMult);
  } else {
    angle = slider.value();
  }
  
  stroke(angle); // dynamically update? // add color?
  strokeWeight(3); // increase for thicker line
  background(125); // dynamically update?

  translate(width / 2, height);
  branch(height * sizeMult);
}

function branch(length) {

  line(0, 0, 0, -length);

  translate(0, -length);

  push();
  rotate(angle);
  if (length > limit) {
    branch(length * 0.5 + (0.5 * random()) * brLenRatio);
  }
  pop();

  push();
  rotate(-angle);
  if (length > limit) {
    branch(length * brLenRatio);
  }
  pop();

}
