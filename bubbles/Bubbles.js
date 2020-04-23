class Bubbles {
  
  constructor() {
    var example = [];

    var radius = random(100,200);
    this.x = random(0,width);
    this.y = random(0,height);
    this.width = radius;
    this.height = radius;
    this.velocityX = (+3,-3);
    this.velocityY = (+3,-3);
    this.color = 'red';
    
    this.display = function() {
      stroke(100);
      fill(this.color);
      ellipse(this.x, this.y, this.velocityX, this.velocityY);
    }
    this.move = function() {
      this.x = this.x + this.velocityX;
      this.y = this.y + this.velocityY;
    }
  }
}