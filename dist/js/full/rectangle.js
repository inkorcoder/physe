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
    var pt;
    px = px;
    py = py;
    if (arguments.length === 1) {
      pt = new Point(px.x, px.y);
      px = pt.x;
      py = pt.y;
    }
    if ((px >= this.x && px <= this.x + this.width) && (py >= this.y && py <= this.y + this.height)) {
      return true;
    }
    return false;
  };
  this.hasRect = function(rect) {
    if ((this.x < rect.x + rect.width) && (this.x + this.width > rect.x) && (this.y < rect.y + rect.height) && (this.y + this.height > rect.y)) {
      return true;
    }
    return false;
  };
  return this;
};
