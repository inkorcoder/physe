do setCanvasSize = ->
	canvas.width = window.width = window.innerWidth
	canvas.height = window.height = window.innerHeight

window.onresize = setCanvasSize

i = 0
do render = ->

	requestAnimationFrame render

	ctx.clearRect 0, 0, width, height

	# s = new Segment(200, 200, mouse.x-200, mouse.y-200)
	# s.draw 2, '#d99'
	# n = s.getNormal()
	# n.draw 2, '#090'

	# c1 = s.getCenter()
	# c1.draw 5, '#faa'
	# c2 = n.getCenter()
	# c2.draw 4

	# u = n.getUnit()
	# u.multiplyBy 50
	# u.draw 2, 'green'

	# un = new Segment c1.x, c1.y, u.vecx, u.vecy
	# un.multiplyBy 50
	# un.draw 2, 'green'

	# line1 = new Segment 100, 100, mouse.x-100, mouse.y-100
	# line1.draw 2, 'blue'

	# line2 = new Segment 50, 120, 300, 175
	# line2.draw 2, 'red'

	# inter = line1.intersectWith(line2)
	# console.log inter
	# new Point(inter.x, inter.y).draw(5) if inter.onLine2

	# circle1 = new Circle(
	# 	Math.random() * width
	# 	Math.random() * height
	# 	Math.random() * 100
	# ).draw 'silver'

	# circle2 = new Circle(
	# 	Math.random() * width
	# 	Math.random() * height
	# 	Math.random() * 100
	# ).draw 'silver'

	circle1 = new Circle(100, 100, 50).draw 'silver'
	circle2 = new Circle(mouse.x, mouse.y, 75).draw 'silver'

	seg = new Segment(
		circle1.x, circle1.y
		circle2.x-circle1.x, circle2.y-circle1.y
	)
	seg.draw 2, 'red'

	if seg.getLength() <= circle1.radiusLine.getLength()+circle2.radiusLine.getLength()
		circle1.draw 'green'
		circle2.draw 'green'

	i++