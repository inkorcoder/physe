var Vector;

Vector = function(x, y) {
  this.x = x;
  this.y = y;
  this.draw = function(size, color) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, size, 0, pi2, false);
    ctx.fillColor = color || '#000';
    ctx.fill();
    ctx.strokeStyle = color || '#000';
    ctx.stroke();
  };
  this.addTo = function(vector) {
    return new Vector(this.x += vector.x, this.y += vector.y);
  };
  this.substractFrom = function(vector) {
    return new Vector(this.x -= vector.x, this.y -= vector.y);
  };
  this.multiplyBy = function(multiplier) {
    return new Vector(this.x *= multiplier, this.y *= multiplier);
  };
  this.getLength = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  };
  this.cross = function(vector) {
    return this.x * vector.x - this.y * vector.y;
  };
  this.dot = function(vector) {
    return this.x * vector.x + this.y * vector.y;
  };
};
