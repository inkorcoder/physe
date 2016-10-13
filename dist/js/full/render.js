var i, render, setCanvasSize;

(setCanvasSize = function() {
  canvas.width = window.width = window.innerWidth;
  return canvas.height = window.height = window.innerHeight;
})();

window.onresize = setCanvasSize;

i = 0;

(render = function() {
  var point, rect;
  requestAnimationFrame(render);
  ctx.clearRect(0, 0, width, height);
  point = new Point(mouse.x, mouse.y);
  point.draw(2, 'red');
  rect = new Rectangle(100, 100, 300, 200);
  rect.draw('blue');
  if (rect.hasPoint(point.x, point.y)) {
    rect.draw('red');
  }
  return i++;
})();
