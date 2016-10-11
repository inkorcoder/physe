MouseControls = ->

	@x = 0
	@y = 0

	@initialize = (element)->

		element.addEventListener 'mousemove', (e)=>
			@x = e.pageX
			@y = e.pageY
			return
		return

	return