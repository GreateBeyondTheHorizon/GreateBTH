// priority: 0
ServerEvents.recipes(event => {
    let rawPhenolicCircBoard = 'kubejs:raw_phenolic_circuit_board'
	let interAdvCirc = 'kubejs:inter_advanced_integrated_circuit'
	let interMicroProcCirc = 'kubejs:inter_micro_processor_assembly'
	let rawEpoxyCircBoard = 'kubejs:raw_epoxy_circuit_board'
	let interNanoProc = 'kubejs:inter_nano_processor'
	let incNanoProc = 'kubejs:inc_nano_processor'

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

	event.recipes.createMixing([interAdvCirc],
		[
			'2x gtceu:good_integrated_circuit',
			'2x gtceu:ram_chip',
			'2x gtceu:ilc_chip',
			Fluid.of('gtceu:tin', 144)
		]).heated()
	event.recipes.createMixing([interAdvCirc],
		[
			'2x gtceu:good_integrated_circuit',
			'2x gtceu:ram_chip',
			'2x gtceu:ilc_chip',
			Fluid.of('gtceu:soldering_alloy', 72)
		]).heated()

	event.recipes.createSequencedAssembly([ //textureneed for intermediate item
			interMicroProcCirc
	],	'gtceu:plastic_printed_circuit_board', [
		event.recipes.createDeploying('gtceu:plastic_printed_circuit_board', ['gtceu:plastic_printed_circuit_board', 'gtceu:micro_processor']),
		event.recipes.createDeploying('gtceu:plastic_printed_circuit_board', ['gtceu:plastic_printed_circuit_board', 'gtceu:ram_chip']),
		event.recipes.createDeploying('gtceu:plastic_printed_circuit_board', ['gtceu:plastic_printed_circuit_board', 'gtceu:ram_chip']),
		event.recipes.createFilling('gtceu:plastic_printed_circuit_board', ['gtceu:plastic_printed_circuit_board', Fluid.of('gtceu:tin', 144)])
		]).transitionalItem('gtceu:plastic_printed_circuit_board').loops(2)

	event.recipes.createSequencedAssembly([
			interMicroProcCirc
	],	'gtceu:plastic_printed_circuit_board', [
		event.recipes.createDeploying('gtceu:plastic_printed_circuit_board', ['gtceu:plastic_printed_circuit_board', 'gtceu:micro_processor']),
		event.recipes.createDeploying('gtceu:plastic_printed_circuit_board', ['gtceu:plastic_printed_circuit_board', 'gtceu:ram_chip']),
		event.recipes.createDeploying('gtceu:plastic_printed_circuit_board', ['gtceu:plastic_printed_circuit_board', 'gtceu:ram_chip']),
		event.recipes.createFilling('gtceu:plastic_printed_circuit_board', ['gtceu:plastic_printed_circuit_board', Fluid.of('gtceu:soldering_alloy', 72)])
		]).transitionalItem('gtceu:plastic_printed_circuit_board').loops(2)
		
	event.recipes.createMixing([rawEpoxyCircBoard],
		[
			'gtceu:epoxy_printed_circuit_board',
			'gtceu:nano_cpu_chip',
			Fluid.of('gtceu:soldering_alloy', 72)
		]).heated()
	event.recipes.createMixing([rawEpoxyCircBoard],
		[
			'gtceu:epoxy_printed_circuit_board',
			'gtceu:nano_cpu_chip',
			Fluid.of('gtceu:tin', 144)
		]).heated()
			
	event.recipes.createSequencedAssembly([
			interNanoProc
	],	rawEpoxyCircBoard, [
		event.recipes.createDeploying(incNanoProc, [incNanoProc, 'gtceu:smd_resistor']),
		event.recipes.createDeploying(incNanoProc, [incNanoProc, 'gtceu:smd_capacitor']),
		event.recipes.createDeploying(incNanoProc, [incNanoProc, 'gtceu:smd_transistor']),
		event.recipes.createDeploying(incNanoProc, [incNanoProc, 'gtceu:electrum_fine_wire']),
		]).transitionalItem(incNanoProc).loops(6)

	event.recipes.createSequencedAssembly([
			interNanoProc
	],	rawEpoxyCircBoard, [
		event.recipes.createDeploying(incNanoProc, [incNanoProc, 'gtceu:advanced_smd_resistor']),
		event.recipes.createDeploying(incNanoProc, [incNanoProc, 'gtceu:advanced_smd_capacitor']),
		event.recipes.createDeploying(incNanoProc, [incNanoProc, 'gtceu:advanced_smd_transistor']),
		event.recipes.createDeploying(incNanoProc, [incNanoProc, 'gtceu:electrum_fine_wire']),
		event.recipes.createDeploying(incNanoProc, [incNanoProc, 'gtceu:electrum_fine_wire']),
		]).transitionalItem(incNanoProc).loops(2)
})