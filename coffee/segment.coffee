###

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

###

Segment = (x, y, vecx, vecy)->

	@x = x
	@y = y
	@vecx = vecx
	@vecy = vecy

	@draw = (width, color)->
		ctx.beginPath()
		ctx.lineWidth = width or 2
		ctx.moveTo @x, @y
		ctx.lineTo @x+@vecx, @y+@vecy
		ctx.strokeStyle = color or '#000'
		ctx.stroke()
		return

	@getLength = ->
		Math.sqrt @vecx*@vecx + @vecy*@vecy

	@getNormal = ->
		x1 = @y
		y1 = @x + @vecx
		y2 = @x
		x2 = @y + @vecy
		new Segment x1, x2, x2-x1, y2-y1

	@getCenter = ->
		x = (@x + @x + @vecx) / 2
		y = (@y + @y + @vecy) / 2
		return new Point(x, y)

	@getUnit = ->
		new Segment 0, 0, @vecx / @getLength(), @vecy / @getLength()

	@multiplyBy = (multiplier)->
		@vecx *= multiplier
		@vecy *= multiplier
		return

	@intersectWith = (segment)->
		x1 = @x
		x2 = @x+@vecx
		x3 = segment.x
		x4 = segment.x+segment.vecx
		y1 = @y
		y2 = @y+@vecy
		y3 = segment.y
		y4 = segment.y+segment.vecy

		denominator = a = b = numerator1 = numerator2 = undefined

		result = 
			x: null
			y: null
			onLine1: false
			onLine2: false

		denominator = (y4 - y3) * (x2 - x1) - ((x4 - x3) * (y2 - y1))
		if denominator == 0
			return result

		a = y1 - y3
		b = x1 - x3

		numerator1 = (x4 - x3) * a - ((y4 - y3) * b)
		numerator2 = (x2 - x1) * a - ((y2 - y1) * b)

		a = numerator1 / denominator
		b = numerator2 / denominator

		# if we cast these lines infinitely in both directions, they intersect here:
		result.x = x1 + a * (x2 - x1)
		result.y = y1 + a * (y2 - y1)

		# if line1 is a segment and line2 is infinite, they intersect if:
		if a > 0 and a < 1
			result.onLine1 = true
		# if line2 is a segment and line1 is infinite, they intersect if:

		if b > 0 and b < 1
			result.onLine2 = true

		# if line1 and line2 are segments, they intersect if both of the above are true
		result

	return