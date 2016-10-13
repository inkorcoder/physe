var i, render, setCanvasSize;

(setCanvasSize = function() {
  canvas.width = window.width = window.innerWidth;
  return canvas.height = window.height = window.innerHeight;
})();

window.onresize = setCanvasSize;

i = 0;

(render = function() {
  var point, rect1, rect2;
  requestAnimationFrame(render);
  ctx.clearRect(0, 0, width, height);
  point = new Point(mouse.x, mouse.y);
  point.draw(2, 'red');
  rect1 = new Rectangle(100, 100, 200, 150);
  rect1.draw('blue');
  rect2 = new Rectangle(mouse.x, mouse.y, 100, 50);
  rect2.draw('blue');
  if (rect1.hasRect(rect2)) {
    rect1.draw('red');
    rect2.draw('red');
  }
  return i++;
})();
