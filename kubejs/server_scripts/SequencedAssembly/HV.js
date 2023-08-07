// priority: 0

ServerEvents.recipes(event => {
    let interAdvCirc = 'kubejs:inter_advanced_integrated_circuit'
    let interMicroProcCirc = 'kubejs:inter_micro_processor_assembly'

    event.recipes.createSequencedAssembly([
        'gtceu:advanced_integrated_circuit'
],	interAdvCirc, [
	event.recipes.createDeploying(interAdvCirc, [interAdvCirc, ['gtceu:transistor','gtceu:smd_transistor']]),
	event.recipes.createDeploying(interAdvCirc, [interAdvCirc, 'gtceu:electrum_fine_wire']),
	event.recipes.createDeploying(interAdvCirc, [interAdvCirc, 'gtceu:electrum_fine_wire']),
	event.recipes.createDeploying(interAdvCirc, [interAdvCirc, 'gtceu:annealed_copper_bolt']),
	event.recipes.createDeploying(interAdvCirc, [interAdvCirc, 'gtceu:annealed_copper_bolt']),
	]).transitionalItem(interAdvCirc).loops(4)

    event.recipes.createSequencedAssembly([
        'gtceu:micro_processor_assembly'
],	interMicroProcCirc, [
	event.recipes.createDeploying(interMicroProcCirc, [interMicroProcCirc, 'gtceu:red_alloy_fine_wire']),
	event.recipes.createDeploying(interMicroProcCirc, [interMicroProcCirc, 'gtceu:red_alloy_fine_wire']),
	event.recipes.createDeploying(interMicroProcCirc, [interMicroProcCirc, ['gtceu:inductor', 'gtceu:smd_inductor']]),
	event.recipes.createDeploying(interMicroProcCirc, [interMicroProcCirc, ['gtceu:capacitor', 'gtceu:smd_capacitor']]),
	event.recipes.createDeploying(interMicroProcCirc, [interMicroProcCirc, ['gtceu:capacitor', 'gtceu:smd_capacitor']])
	]).transitionalItem(interMicroProcCirc).loops(4)
})