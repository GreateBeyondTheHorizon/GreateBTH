// priority: 0
ServerEvents.recipes(event => {
	event.remove({id: 'greate:splashing/obsidian'})
	event.remove('gtceu:shaped/steam_macerator_steel')

	event.recipes.createFilling(Item.of('greate:rubber_belt_connector', 1), [
		'gtceu:wrought_iron_plate',
		Fluid.of('gtceu:rubber', 864)
	])

	event.recipes.greate.cutting('gtceu:stripped_rubber_log', ['gtceu:rubber_log'])
	event.recipes.greate.cutting('gtceu:stripped_rubber_wood', ['gtceu:rubber_wood'])
})