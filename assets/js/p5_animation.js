let angle = 0;

function setup() {
  let canvas = createCanvas(110, 110);
  canvas.parent("p5-visual01");
  noFill();
}

function draw() {
  background("transparent");
  translate(width / 2, height / 2);
  rotate(angle);
  
  let steps = 100;
  for (let i = 0; i < steps; i++) {
    let a1 = (TWO_PI / steps) * i;
    let a2 = (TWO_PI / steps) * (i + 1);

    let r1 = 45 + 1 * sin(20 * a1 + frameCount * 0.1);
    let r2 = 45 + 5 * sin(2 * a2 + frameCount * 0.10);

    let x1 = r1 * cos(a1);
    let y1 = r1 * sin(a1);
    let x2 = r2 * cos(a2);
    let y2 = r2 * sin(a2);

    let inter = map(i, 0, steps, 0, 1);
    let c = lerpColor(color('#7300ff'), color('#d000f5'), inter);
    stroke(c);
    strokeWeight(1.5);
    line(x1, y1, x2, y2);
    
  }

  angle += 0.01;
}