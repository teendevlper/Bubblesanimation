var bubbles = [];

function setup() {
  createCanvas(600,600);
 
 bubble0 = new Bubbles();
 bubble1 = new Bubbles();
 bubble2 = new Bubbles();
 bubble3 = new Bubbles();
 bubble4 = new Bubbles();
 bubble5 = new Bubbles();
}

function draw() {
  background(0);
  
  bubble0.move();
  bubble1.move();
  bubble2.move();
  bubble3.move();
  bubble4.move();
  bubble5.move();
  
  bubble0.display();
  bubble1.display();
  bubble2.display();
  bubble3.display();
  bubble4.display();
  bubble5.display();
 }