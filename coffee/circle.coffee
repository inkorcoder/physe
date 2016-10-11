Circle = (x, y, r)->

	@x = x
	@y = y
	@r = r

	@draw = (size, color)->

		ctx.beginPath()
		ctx.arc @x, @y, size, 0, pi2, off
		ctx.fillStyle = color or '#000'
		ctx.fill()
		# ctx.strokeStyle = color or '#000'
		# ctx.stroke()

		return

	return