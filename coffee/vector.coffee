Vector = (x, y)->

	@x = x
	@y = y

	@draw = (size, color)->
		ctx.beginPath()
		ctx.arc @x, @y, size, 0, pi2, off
		ctx.fillColor = color or '#000'
		ctx.fill()
		ctx.strokeStyle = color or '#000'
		ctx.stroke()
		return

	# adding
	@addTo = (vector)->
		new Vector @x += vector.x, @y += vector.y

	# substracting
	@substractFrom = (vector)->
		new Vector @x -= vector.x, @y -= vector.y

	# multiplying
	@multiplyBy = (multiplier)->
		new Vector @x *= multiplier, @y *= multiplier

	# getting length
	@getLength = ->
		Math.sqrt @x*@x + @y*@y

	# cross
	@cross = (vector)->
		@x * vector.x - @y * vector.y

	# dot
	@dot = (vector)->
		@x * vector.x + @y * vector.y

	return