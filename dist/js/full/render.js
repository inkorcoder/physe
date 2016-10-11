var i, render, setCanvasSize;

(setCanvasSize = function() {
  canvas.width = window.width = window.innerWidth;
  return canvas.height = window.height = window.innerHeight;
})();

window.onresize = setCanvasSize;

i = 0;

(render = function() {
  var circle1, circle2, seg;
  requestAnimationFrame(render);
  ctx.clearRect(0, 0, width, height);
  circle1 = new Circle(100, 100, 50).draw('silver');
  circle2 = new Circle(mouse.x, mouse.y, 75).draw('silver');
  seg = new Segment(circle1.x, circle1.y, circle2.x - circle1.x, circle2.y - circle1.y);
  seg.draw(2, 'red');
  if (seg.getLength() <= circle1.radiusLine.getLength() + circle2.radiusLine.getLength()) {
    circle1.draw('green');
    circle2.draw('green');
  }
  return i++;
})();
