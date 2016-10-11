var i, render, setCanvasSize;

(setCanvasSize = function() {
  canvas.width = window.width = window.innerWidth;
  return canvas.height = window.height = window.innerHeight;
})();

window.onresize = setCanvasSize;

i = 0;

(render = function() {
  var circle1, circle2, point, toMouse1, toMouse2;
  requestAnimationFrame(render);
  ctx.clearRect(0, 0, width, height);
  circle1 = new Circle(100, 100, 50).draw('silver');
  circle2 = new Circle(250, 120, 75).draw('silver');
  if (circle1.hasPoint(mouse.x, mouse.y)) {
    circle1.draw('green');
  }
  if (circle2.hasPoint(mouse.x, mouse.y)) {
    circle2.draw('green');
  }
  point = new Point(mouse.x, mouse.y).draw(5, 'orange');
  toMouse1 = new Segment(mouse.x, mouse.y, circle1.x - mouse.x, circle1.y - mouse.y);
  toMouse1.draw(2, 'red');
  toMouse2 = new Segment(mouse.x, mouse.y, circle2.x - mouse.x, circle2.y - mouse.y);
  toMouse2.draw(2, 'red');
  return i++;
})();
