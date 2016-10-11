var i, render, setCanvasSize;

(setCanvasSize = function() {
  canvas.width = window.width = window.innerWidth;
  return canvas.height = window.height = window.innerHeight;
})();

window.onresize = setCanvasSize;

i = 0;

(render = function() {
  var inter, line1, line2;
  requestAnimationFrame(render);
  ctx.clearRect(0, 0, width, height);
  line1 = new Segment(100, 100, mouse.x - 100, mouse.y - 100);
  line1.draw(2, 'blue');
  line2 = new Segment(50, 120, 300, 175);
  line2.draw(2, 'red');
  inter = line1.intersectWith(line2);
  if (inter.onLine2) {
    new Point(inter.x, inter.y).draw(5);
  }
  return i++;
})();
