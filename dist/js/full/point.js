var Point;

Point = function(x, y) {
  this.x = x;
  this.y = y;
  this.draw = function(size, color) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, size, 0, pi2, false);
    ctx.fillStyle = color || '#000';
    ctx.fill();
  };
};
