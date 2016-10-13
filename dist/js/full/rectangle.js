var Rectangle;

Rectangle = function(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.draw = function(color) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.strokeStyle = color;
    ctx.stroke();
    return this;
  };
  this.hasPoint = function(px, py) {
    if ((px >= this.x && px <= this.x + this.width) && (py >= this.y && py <= this.y + this.height)) {
      return true;
    }
    return false;
  };
  return this;
};
