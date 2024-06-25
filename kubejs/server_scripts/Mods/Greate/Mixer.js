ServerEvents.recipes(event => {
    event.recipes.greate.mixing('minecraft:turtle_helmet', [
		'kubejs:unf_turtle_helmet',
		Fluid.of('create:potion', 576, {Bottle:'REGULAR', Potion:'minecraft:water_breathing'})
	]).heated()

	event.recipes.greate.mixing('create:rose_quartz', [
		'4x minecraft:redstone',
		'minecraft:quartz'
	])

	event.recipes.greate.mixing(Fluid.of('gtceu:rubber', 144), [
		Item.of('gtceu:raw_rubber_dust', 3),
		Item.of('gtceu:sulfur_dust', 1)
	]).heated()
})