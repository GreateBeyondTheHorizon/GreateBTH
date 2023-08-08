// priority: 0

console.info('Ores Modified')

WorldgenEvents.remove(event => {
	event.removeOres(props => {
	props.worldgenLayer = 'underground_ores'
	props.blocks = [/minecraft:(.*)/, /create:(.*)/, /byg:(.*)/]
	})
})