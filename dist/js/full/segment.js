
/*

(*) <[x,y]
	\					 |
						 |
		\				 |
						 | <[vecy]
			\			 |
						 |
				\		 |
						 |
					\	 |
						 |
						\▼
−−−−−−−−−−−►(*) <[x+vecx, y+vecy]
	^
[vecx]

> x,y 						- start point
> x+vecx, y+vecy	- end point
 */
var Segment;

Segment = function(x, y, vecx, vecy) {
  this.x = x;
  this.y = y;
  this.vecx = vecx;
  this.vecy = vecy;
  this.draw = function(width, color) {
    ctx.beginPath();
    ctx.lineWidth = width || 2;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.vecx, this.y + this.vecy);
    ctx.strokeStyle = color || '#000';
    ctx.stroke();
  };
  this.getLength = function() {
    return Math.sqrt(this.vecx * this.vecx + this.vecy * this.vecy);
  };
  this.getNormal = function() {
    var x1, x2, y1, y2;
    x1 = this.y;
    y1 = this.x + this.vecx;
    y2 = this.x;
    x2 = this.y + this.vecy;
    return new Segment(x1, x2, x2 - x1, y2 - y1);
  };
  this.getCenter = function() {
    x = (this.x + this.x + this.vecx) / 2;
    y = (this.y + this.y + this.vecy) / 2;
    return new Point(x, y);
  };
  this.getUnit = function() {
    return new Segment(0, 0, this.vecx / this.getLength(), this.vecy / this.getLength());
  };
  this.multiplyBy = function(multiplier) {
    this.vecx *= multiplier;
    this.vecy *= multiplier;
  };
  this.intersectWith = function(segment) {
    var a, b, denominator, numerator1, numerator2, result, x1, x2, x3, x4, y1, y2, y3, y4;
    x1 = this.x;
    x2 = this.x + this.vecx;
    x3 = segment.x;
    x4 = segment.x + segment.vecx;
    y1 = this.y;
    y2 = this.y + this.vecy;
    y3 = segment.y;
    y4 = segment.y + segment.vecy;
    denominator = a = b = numerator1 = numerator2 = void 0;
    result = {
      x: null,
      y: null,
      onLine1: false,
      onLine2: false
    };
    denominator = (y4 - y3) * (x2 - x1) - ((x4 - x3) * (y2 - y1));
    if (denominator === 0) {
      return result;
    }
    a = y1 - y3;
    b = x1 - x3;
    numerator1 = (x4 - x3) * a - ((y4 - y3) * b);
    numerator2 = (x2 - x1) * a - ((y2 - y1) * b);
    a = numerator1 / denominator;
    b = numerator2 / denominator;
    result.x = x1 + a * (x2 - x1);
    result.y = y1 + a * (y2 - y1);
    if (a > 0 && a < 1) {
      result.onLine1 = true;
    }
    if (b > 0 && b < 1) {
      result.onLine2 = true;
    }
    return result;
  };
  this.project = function(segmentOnto) {
    var d, dp, multiplier, onto, rx, ry, vec;
    vec = new Vector(this.vecx, this.vecy);
    onto = new Vector(segmentOnto.vecx, segmentOnto.vecy);
    d = onto.dot(onto);
    if (d > 0) {
      dp = vec.dot(onto);
      multiplier = dp / d;
      rx = onto.x * multiplier;
      ry = onto.y * multiplier;
      return new Point(rx, ry);
    }
    return new Point(0, 0);
  };
};
