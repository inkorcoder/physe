var Circle;

Circle = function(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.draw = function(size, color) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, size, 0, pi2, false);
    ctx.fillStyle = color || '#000';
    ctx.fill();
  };
};
