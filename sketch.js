function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseX < width / 2) {
    background(240, 230, 210);
  } else {
    background(30, 40, 50);
  }

  strokeWeight(2);

if (mouseY < height / 2) {
  fill(200, 100, 80);
  stroke(50);

  rect(width /2 - 100, height / 2 - 100, 200, 200);
} else {
  fill(80, 150, 220);
  stroke(255);

  ellipse(width / 2, height / 2, 250, 250);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
