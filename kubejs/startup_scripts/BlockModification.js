BlockEvents.modification(event => {
	event.modify("minecraft:oak_log", block => {
	  block.destroySpeed = 1
	  block.hasCollision = false
	  block.requiresTool = true
	})
})


