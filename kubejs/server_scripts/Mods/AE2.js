ServerEvents.recipes(event => {
	event.remove({ output: 'ae2:logic_processor' })
	event.remove({ output: 'ae2:calculation_processor' })
	event.remove({ output: 'ae2:engineering_processor' })
	event.remove({ id: 'ae2:charger/charged_certus_quartz_crystal' })
	
	// Energy acceptor
	event.remove({ output: 'ae2:energy_acceptor'})
	event.shaped(
		Item.of('ae2:energy_acceptor'),
		[
			'CCC',
			'ADA',
			'ABA'
		],
		{
			A:'ae2:fluix_block',
			B:'ae2:energy_cell',
			C:'gtceu:polyvinyl_chloride_foil',
			D:'#gtceu:circuits/hv'
		}
	)
	
	// Controller
	event.remove({ output: 'ae2:controller' })
	event.shaped(
		Item.of('ae2:controller'),
		[
			'CCC',
			'ADA',
			'ABA'
		],
		{
			A:'ae2:fluix_block',
			B:'ae2:chest',
			C:'gtceu:polyvinyl_chloride_foil',
			D:'#gtceu:circuits/hv'
		}
	)

	// Chest
	event.remove({ output: 'ae2:chest' })
	event.shaped(
		Item.of('ae2:chest'),
		[
			'EDE',
			'AFA',
			'CBC'
		],
		{
			A:'ae2:fluix_covered_cable',
			B:'ae2:terminal',
			C:'gtceu:polyethylene_foil',
			D:'#gtceu:circuits/mv',
			E:'minecraft:glass',
			F:'gtceu:hv_machine_casing'
		}
	)

	// Storage cells
	event.remove({ output: /ae2:(.*)_storage_cell_(.*)/ })
	for (const cellSize of global.AE2.CellSizes) {
		let transitionalItem = 'kubejs:incomplete_storage_cell'
		// Item
		event.recipes
			.createSequencedAssembly(
				['ae2:item_storage_cell_' + cellSize],
				'gtceu:polyethylene_plate',
				[
					event.recipes.createDeploying(transitionalItem, [
						transitionalItem,
						'gtceu:copper_single_cable',
					]),
					event.recipes.createDeploying(transitionalItem, [
						transitionalItem,
						'ae2:cell_component_' + cellSize,
					]),
					event.recipes.createDeploying(transitionalItem, [
						transitionalItem,
						'ae2:quartz_glass',
					]),
					event.recipes.createDeploying(transitionalItem, [
						transitionalItem,
						'gtceu:polyethylene_plate',
					]),
					event.recipes.createDeploying(transitionalItem, [
						transitionalItem,
						'gtceu:steel_screw',
					]),
					event.recipes.createDeploying(transitionalItem, [
						transitionalItem,
						'gtceu:steel_screw',
					]),
				]
			)
			.transitionalItem(transitionalItem)
			.loops(1)
		// Fluid
		event.recipes
			.createSequencedAssembly(
				['ae2:fluid_storage_cell_' + cellSize],
				'gtceu:annealed_copper_plate',
				[
					event.recipes.createDeploying(transitionalItem, [
						transitionalItem,
						'gtceu:copper_single_cable',
					]),
					event.recipes.createDeploying(transitionalItem, [
						transitionalItem,
						'ae2:cell_component_' + cellSize,
					]),
					event.recipes.createDeploying(transitionalItem, [
						transitionalItem,
						'ae2:quartz_glass',
					]),
					event.recipes.createDeploying(transitionalItem, [
						transitionalItem,
						'gtceu:annealed_copper_plate',
					]),
					event.recipes.createDeploying(transitionalItem, [
						transitionalItem,
						'gtceu:steel_screw',
					]),
					event.recipes.createDeploying(transitionalItem, [
						transitionalItem,
						'gtceu:steel_screw',
					]),
				]
			)
			.transitionalItem(transitionalItem)
			.loops(1)
	}
	for (const spatialCellSize of global.AE2.SpatialCellSizes) {
		let transitionalItem = 'kubejs:incomplete_storage_cell'
		// Spatial
		event.recipes
			.createSequencedAssembly(
				['ae2:spatial_storage_cell_' + spatialCellSize],
				'gtceu:ender_pearl_plate',
				[
					event.recipes.createDeploying(transitionalItem, [
						transitionalItem,
						'gtceu:copper_single_cable',
					]),
					event.recipes.createDeploying(transitionalItem, [
						transitionalItem,
						'ae2:spatial_cell_component_' + spatialCellSize,
					]),
					event.recipes.createDeploying(transitionalItem, [
						transitionalItem,
						'ae2:quartz_glass',
					]),
					event.recipes.createDeploying(transitionalItem, [
						transitionalItem,
						'gtceu:ender_pearl_plate',
					]),
					event.recipes.createDeploying(transitionalItem, [
						transitionalItem,
						'gtceu:steel_screw',
					]),
					event.recipes.createDeploying(transitionalItem, [
						transitionalItem,
						'gtceu:steel_screw',
					]),
				]
			)
			.transitionalItem(transitionalItem)
			.loops(1)
	}

	// Blank pattern
	event.remove({ output: 'ae2:blank_pattern' })
	event.shaped(
		Item.of('ae2:blank_pattern'),
		[
			'AEA',
			'BCB',
			'DDD'
		],
		{
			A:'ae2:quartz_glass',
			B:'gtceu:polyvinyl_chloride_foil',
			C:'#forge:gems/certus_quartz',
			D:'gtceu:stainless_steel_plate',
			E:'#gtceu:circuits/hv'
		}
	)

	// Cell workbench
	event.shaped(
		Item.of('ae2:cell_workbench'),
		[
			'BCB',
			'BAB',
			'BBB'
		],
		{
			A:'ae2:chest',
			B:'gtceu:stainless_steel_plate',
			C:'ae2:calculation_processor'
		}
	)
	
	// Storage wafers
	const storageBaseQualityOutput = {}
	storageBaseQualityOutput[global.Quality.UltraLow] = 4
	storageBaseQualityOutput[global.Quality.Low] = 8
	storageBaseQualityOutput[global.Quality.Medium] = 16
	storageBaseQualityOutput[global.Quality.High] = 32
	for (const [i, cellSize] of global.AE2.CellSizes.entries()) {
		for (const [material, quality] of Object.entries(global.AE2.WaferMaterialQualities)) {
			// Wafer
			let engravingOutput = 'kubejs:' + quality + '_' + cellSize + '_me_storage_wafer'
			let durationMultiplier = 2 ** (i + 1)
			event.recipes.gtceu
				.laser_engraver('kubejs:engrave_' + quality + '_' + cellSize + '_me_storage_wafer')
				.duration(durationMultiplier * 200)
				.itemInputs('gtceu:' + material + '_wafer')
				.notConsumable('#forge:lenses/certus')
				.itemOutputs(engravingOutput)
				.circuit(i)
				.EUt(1920)
			// Base
			let cuttingIdBase = 'kubejs:cutting_' + quality + '_' + cellSize + '_me_storage_base'
			let cuttingOutput = storageBaseQualityOutput[quality] + 'x kubejs:' + cellSize + '_me_storage_base'
			event.recipes.gtceu
				.cutter(cuttingIdBase + '_lubricant')
				.duration(durationMultiplier * 200)
				.inputFluids(Fluid.of('gtceu:lubricant', 250))
				.itemInputs(engravingOutput)
				.itemOutputs(cuttingOutput)
				.EUt(1920)
			event.recipes.gtceu
				.cutter(cuttingIdBase + '_distilled_water')
				.duration(durationMultiplier * 400)
				.inputFluids(Fluid.of('gtceu:distilled_water', 750))
				.itemInputs(engravingOutput)
				.itemOutputs(cuttingOutput)
				.EUt(1920)
		}
	}
})
