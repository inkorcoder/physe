Rectangle = (x, y, width, height)->

	@x = x
	@y = y
	@width = width
	@height = height

	@draw = (color)->

		ctx.beginPath()
		ctx.rect @x, @y, @width, @height
		ctx.strokeStyle = color
		ctx.stroke()

		return @

	@hasPoint = (px, py)->

		px = px
		py = py

		if arguments.length is 1
			pt = new Point px.x, px.y
			px = pt.x
			py = pt.y


		if (px >= @x and px <= @x + @width) and (py >= @y and py <= @y + @height)
			return on
		return off

	return @