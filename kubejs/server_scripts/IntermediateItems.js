// priority: 0
ServerEvents.recipes(event => {
    let rawIntegratedCirc = 'kubejs:raw_integrated_circuit'
	let rawPlasticCircBoard = 'kubejs:raw_plastic_circuit_board'
    let rawPhenolicCircBoard = 'kubejs:raw_phenolic_circuit_board'

    event.recipes.createMixing([rawIntegratedCirc],
		[
			'gtceu:resin_printed_circuit_board',
			'gtceu:ilc_chip', 
			Fluid.of('gtceu:soldering_alloy', 72)
		])
	event.recipes.createMixing([rawPlasticCircBoard],
		[
			'gtceu:plastic_printed_circuit_board',
			'gtceu:cpu_chip', 
			Fluid.of('gtceu:soldering_alloy', 72)
		])
	event.recipes.createMixing([rawIntegratedCirc],
		[
			'gtceu:resin_printed_circuit_board',
			'gtceu:ilc_chip', 
			Fluid.of('gtceu:tin', 144)
		])
	event.recipes.createMixing([rawPlasticCircBoard],
		[
			'gtceu:plastic_printed_circuit_board',
			'gtceu:cpu_chip', 
			Fluid.of('gtceu:tin', 144)
		])
    event.recipes.createSequencedAssembly([
        rawPhenolicCircBoard
],	'gtceu:phenolic_printed_circuit_board', [
	event.recipes.createDeploying(rawPhenolicCircBoard, [rawPhenolicCircBoard, '#forge:circuits/lv']),
	event.recipes.createFilling(rawPhenolicCircBoard, [rawPhenolicCircBoard, Fluid.of('gtceu:soldering_alloy', 36)])
	]).transitionalItem(rawPhenolicCircBoard).loops(2)

	event.recipes.createSequencedAssembly([
		rawPhenolicCircBoard
],	'gtceu:phenolic_printed_circuit_board', [
	event.recipes.createDeploying(rawPhenolicCircBoard, [rawPhenolicCircBoard, '#forge:circuits/lv']),
	event.recipes.createFilling(rawPhenolicCircBoard, [rawPhenolicCircBoard, Fluid.of('gtceu:tin', 72)])
	]).transitionalItem(rawPhenolicCircBoard).loops(2)

})