Circle = (x, y, r)->

	@x = x
	@y = y
	@r = r
	@radiusLine = new Segment @x, @y, @r, 0

	@hasPoint = (px, py)->
		segment = new Segment @x, @y, px-@x, py-@y
		if segment.getLength() <= @radiusLine.getLength()
			return on
		else return off

	@draw = (color)->

		ctx.beginPath()
		ctx.arc @x, @y, @r, 0, pi2, off
		ctx.fillStyle = color or '#000'
		ctx.fill()
		ctx.strokeStyle = color or '#000'
		ctx.stroke()

		@radiusLine.draw 2, 'blue'

		return @

	return @