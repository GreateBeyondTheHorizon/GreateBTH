ServerEvents.recipes(event => {
	event.recipes.gtceu
		.circuit_assembler('kubejs:circuit_assembler_nano_processor')
		.duration(200)
		.circuit(1)
		.recipeConditions('cleanroom')
		.itemInputs([
			'kubejs:inter_nano_processor',
			'2x gtceu:smd_resistor',
			'2x gtceu:smd_capacitor',
			'2x gtceu:smd_transistor',
			'2x #forge:wires/fine/electrum',
		])
		.itemOutputs('2x gtceu:nano_processor')
		.EUt(600)

	event.recipes.gtceu
		.circuit_assembler('kubejs:circuit_assembler_nano_processor_cheap')
		.duration(100)
		.recipeConditions('cleanroom')
		.itemInputs([
			'kubejs:inter_nano_processor',
			'6x #forge:wires/fine/electrum',
		])
		.itemOutputs('gtceu:nano_processor')
		.EUt(600)
})
