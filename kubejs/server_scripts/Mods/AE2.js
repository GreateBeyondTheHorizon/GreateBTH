ServerEvents.recipes(event => {
	event.remove({type: 'ae2:inscriber'})
	event.remove({id: 'ae2:network/blocks/energy_energy_acceptor'})
	event.remove({id: 'ae2:network/blocks/controller'})
	event.remove({id: 'ae2:network/blocks/storage_chest'})
	event.remove({id: 'ae2:network/crafting/patterns_blank'})
	event.remove({id: /ae2:tools\/(certus|nether)_quartz_(sword|pickaxe|axe|spade|hoe)/})
	event.remove({id: /ae2:network\/cells\/item_storage_components_cell_(.*)_part/})
	event.remove({id: 'ae2:decorative/quartz_block'})
	event.remove({id: 'ae2:misc/deconstruction_certus_quartz_block'})
	event.remove({id: 'ae2:decorative/fluix_block'})
	event.remove({id: 'ae2:misc/deconstruction_fluix_block'})
  event.remove({id: 'ae2:misc/deconstruction_smooth_certus_quartz_block'})
  event.remove({id: 'ae2:misc/deconstruction_certus_quartz_bricks'})
  event.remove({id: 'ae2:misc/deconstruction_certus_quartz_pillar'})
  event.remove({id: 'ae2:misc/deconstruction_chiseled_certus_quartz'})
  event.remove({id: 'ae2:misc/deconstruction_cut_certus_quartz_block'})
  event.remove({id: 'ae2:materials/formationcore'})
  event.remove({id: 'ae2:materials/annihilationcore'})

	event.replaceInput({id: 'ae2:network/blocks/storage_drive'}, 'minecraft:iron_ingot', 'gtceu:stainless_steel_plate')
	event.replaceInput({id: 'ae2:network/blocks/interfaces_interface'}, 'minecraft:iron_ingot', 'gtceu:stainless_steel_plate')
	event.replaceInput({id: 'ae2:network/blocks/pattern_providers_interface'}, 'minecraft:iron_ingot', 'gtceu:stainless_steel_plate')
	event.replaceInput({id: 'ae2:network/crafting/molecular_assembler'}, 'minecraft:iron_ingot', 'gtceu:stainless_steel_plate')
	event.replaceInput({id: 'ae2:network/crafting/cpu_crafting_unit'}, 'minecraft:iron_ingot', 'gtceu:titanium_plate')
	event.replaceInput({id: 'ae2:network/blocks/crystal_processing_charger'}, 'minecraft:iron_ingot', 'gtceu:stainless_steel_plate')
	event.replaceInput({id: 'ae2:network/blocks/crystal_processing_charger'}, 'minecraft:copper_ingot', 'gtceu:copper_plate')
	event.replaceInput({id: 'ae2:tools/certus_quartz_wrench'}, '#forge:gems/certus_quartz', 'gtceu:certus_quartz_plate')
	event.replaceInput({id: 'ae2:tools/nether_quartz_wrench'}, 'minecraft:quartz', 'gtceu:nether_quartz_plate')

	event.shaped('ae2:energy_acceptor',
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

	event.shaped('ae2:controller',
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

	event.shaped('ae2:chest',
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

	event.shaped('ae2:blank_pattern',
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

	event.shaped('ae2:cell_workbench',
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

	toolRecipes('certus', 'ae2:certus_quartz_crystal')
	toolRecipes('nether', 'minecraft:quartz')

	function toolRecipes(material, quartz) {
	event.shaped(`ae2:${material}_quartz_sword`,
		[
		  ' P ',
		  'HPF',
		  ' S '
		],
		{
		  P: `gtceu:${material}_quartz_plate`,
		  H: '#forge:tools/hammers',
		  F: '#forge:tools/files',
		  S: '#forge:rods/wooden'
		}
	  )

	  event.shaped(`ae2:${material}_quartz_pickaxe`,
		[
		  'PII',
		  'HSF',
		  ' S '
		],
		{
		  P: `gtceu:${material}_quartz_plate`,
		  I: quartz,
		  F: '#forge:tools/files',
		  H: '#forge:tools/hammers',
		  S: '#forge:rods/wooden'
		}
	  )

	  event.shaped(`ae2:${material}_quartz_axe`,
		[
		  'PIF',
		  'PS ',
		  'HS '
		],
		{
		  P: `gtceu:${material}_quartz_plate`,
		  H: '#forge:tools/hammers',
		  I: quartz,
		  F: '#forge:tools/files',
		  S: '#forge:rods/wooden'
		}
	  )

	  event.shaped(`ae2:${material}_quartz_shovel`,
		[
		  'HPF',
		  ' S ',
		  ' S '
		],
		{
		  P: `gtceu:${material}_quartz_plate`,
		  F: '#forge:tools/files',
		  H: '#forge:tools/hammers',
		  S: '#forge:rods/wooden'
		}
	  )

	  event.shaped(`ae2:${material}_quartz_hoe`,
		[
		  'PIF',
		  'HS ',
		  ' S '
		],
		{
		  P: `gtceu:${material}_quartz_plate`,
		  H: '#forge:tools/hammers',
		  F: '#forge:tools/files',
		  I: quartz,
		  S: '#forge:rods/wooden'
		}
	  )
	}

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
				.notConsumable('#forge:lenses/certus_quartz')
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
