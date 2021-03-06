var Circle;

Circle = function(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.radiusLine = new Segment(this.x, this.y, this.r, 0);
  this.hasPoint = function(px, py) {
    var segment;
    segment = new Segment(this.x, this.y, px - this.x, py - this.y);
    if (segment.getLength() <= this.radiusLine.getLength()) {
      return true;
    } else {
      return false;
    }
  };
  this.draw = function(color) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, pi2, false);
    ctx.fillStyle = color || '#000';
    ctx.fill();
    ctx.strokeStyle = color || '#000';
    ctx.stroke();
    this.radiusLine.draw(2, 'blue');
    return this;
  };
  return this;
};
