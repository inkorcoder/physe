requestAnimationFrame = (
	window.requestAnimationFrame or
	window.mozRequestAnimationFrame or
	window.webkitRequestAnimationFrame or
	window.msRequestAnimationFrame
)

canvas = document.getElementsByTagName('canvas')[0]
ctx = canvas.getContext '2d'

width = 0
height = 0

pi2 = Math.PI * 2

mouse = new MouseControls()
mouse.initialize canvas