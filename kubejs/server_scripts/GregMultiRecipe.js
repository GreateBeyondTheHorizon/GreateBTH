ServerEvents.recipes(event => {

	event.remove({type: 'gtceu:ilmenite_ore'})


	event.recipes.gtceu.ore_proc('gtceu:multi') //'gtceu:test'
		.itemInputs('#forge:ores/ilmenite')
		.itemOutputs('2x gtceu:raw_ilmenite')
		.inputFluids('gtceu:sulfuric_acid 100')
    	.duration(100)
	    .EUt(512)
})