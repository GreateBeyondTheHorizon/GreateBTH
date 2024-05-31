ServerEvents.recipes(event => {
	event.recipes.gtceu.extruder('kubejs:extrude_netherite_ingot')
		.duration(200)
		.itemInputs('minecraft:netherite_ingot')
		.notConsumable('gtceu:plate_extruder_mold')
		.itemOutputs('kubejs:netherite_plate')
		.EUt(56)
})
