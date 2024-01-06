ServerEvents.recipes(event => {
	event.recipes.gtceu
		.bender('kubejs:bending_scute')
		.duration(26)
		.circuit(1)
		.itemInputs('5x minecraft:scute')
		.itemOutputs('kubejs:unf_turtle_helmet')
		.EUt(24)

	event.recipes.gtceu
		.bender('kubejs:bending_ruthenium_trinium_americium_neutronate_ingot')
		.duration(26)
		.circuit(1)
		.itemInputs('gtceu:ruthenium_trinium_americium_neutronate_ingot')
		.itemOutputs('kubejs:ruthenium_trinium_americium_neutronate_plate')
		.EUt(24)
})
