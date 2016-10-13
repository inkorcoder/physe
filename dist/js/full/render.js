var i, render, setCanvasSize;

(setCanvasSize = function() {
  canvas.width = window.width = window.innerWidth;
  return canvas.height = window.height = window.innerHeight;
})();

window.onresize = setCanvasSize;

i = 0;

(render = function() {
  var a, b, circle1, point3, segment, segment2, segment3, segment4;
  requestAnimationFrame(render);
  ctx.clearRect(0, 0, width, height);
  circle1 = new Circle(mouse.x, mouse.y, 50).draw('silver');
  segment = new Segment(100, 100, 100, 200);
  segment.draw(2, '#000');
  segment2 = new Segment(100, 100, circle1.x - 100, circle1.y - 100);
  point3 = segment2.project(segment);
  segment3 = new Segment(segment.x, segment.y, point3.x, point3.y);
  segment4 = new Segment(circle1.x, circle1.y, (segment3.x + segment3.vecx) - circle1.x, (segment3.y + segment3.vecy) - circle1.y);
  if (circle1.hasPoint(segment.x + segment.vecx, segment.y + segment.vecy)) {
    circle1.draw('rgba(250,0,0,.5)');
  } else if (circle1.hasPoint(segment.x, segment.y)) {
    circle1.draw('rgba(250,0,0,.5)');
  } else if (segment4.getLength() <= circle1.radiusLine.getLength()) {
    if (segment.getLength() >= segment3.getLength()) {
      a = new Vector(segment.vecx, segment.vecy);
      b = new Vector(segment3.vecx, segment3.vecy);
      if (0 < b.dot(a)) {
        circle1.draw('rgba(250,0,0,.5)');
      }
    }
  }
  return i++;
})();
