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
	circle2 = new Circle(250, 120, 75).draw 'silver'


	if circle1.hasPoint mouse.x, mouse.y
		circle1.draw 'green'

	if circle2.hasPoint mouse.x, mouse.y
		circle2.draw 'green'

	point = new Point(mouse.x, mouse.y).draw 5, 'orange'

	toMouse1 = new Segment mouse.x, mouse.y, circle1.x-mouse.x, circle1.y-mouse.y
	toMouse1.draw 2, 'red'
	toMouse2 = new Segment mouse.x, mouse.y, circle2.x-mouse.x, circle2.y-mouse.y
	toMouse2.draw 2, 'red'
	i++