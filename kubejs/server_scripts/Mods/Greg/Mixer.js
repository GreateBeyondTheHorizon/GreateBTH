ServerEvents.recipes(event => {
	event.recipes.gtceu.mixer('rose_quartz')
		.itemInputs(['4x minecraft:redstone', 'minecraft:quartz'])
        .itemOutputs('create:rose_quartz')
        .EUt(7)
        .duration(100)

	event.recipes.gtceu.mixer('rubber') 
		.itemInputs(['3x gtceu:raw_rubber_dust', 'gtceu:sulfur_dust'])
        .outputFluids(Fluid.of('gtceu:rubber', 144))
        .EUt(7)
        .duration(100)
})