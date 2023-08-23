// priority: 0
ServerEvents.recipes(event => {
	event.remove({ output: 'ae2:controller' })
	event.remove({ output: 'ae2:chest' })
	event.remove({ output: 'ae2:logic_processor' })
	event.remove({ output: 'ae2:calculation_processor' })
	event.remove({ output: 'ae2:engineering_processor' })
	event.remove({ output: 'ae2:blank_pattern' })
	event.remove({ output:  /ae2:(.*)_(.*)k/ })
	event.remove({ id: 'ae2:charger/charged_certus_quartz_crystal' })
	
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
		D:'#forge:circuits/hv'
	}
	)
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
		D:'#forge:circuits/mv',
		E:'minecraft:glass',
		F:'gtceu:hv_machine_casing'
	}
	)
	event.shaped(
	Item.of('ae2:item_storage_cell_1k'),
	[
		'ABA',
		'BCB',
		'DDD'
	],
	{
		A:'ae2:quartz_glass',
		B:'gtceu:rubber_plate',
		C:'ae2:cell_component_1k',
		D:'gtceu:wrought_iron_plate'
	}
	)
	
	
	event.shaped(
	Item.of('ae2:item_storage_cell_4k'),
	[
		'AEA',
		'BCB',
		'DDD'
	],
	{
		A:'ae2:quartz_glass',
		B:'gtceu:polyethylene_plate',
		C:'ae2:cell_component_4k',
		D:'gtceu:steel_plate',
		E:'#forge:circuits/lv'
	}
	)
	
	
	event.shaped(
	Item.of('ae2:item_storage_cell_16k'),
	[
		'AEA',
		'BCB',
		'DDD'
	],
	{
		A:'ae2:quartz_glass',
		B:'gtceu:polyvinyl_chloride_plate',
		C:'ae2:cell_component_16k',
		D:'gtceu:vanadium_steel_plate',
		E:'#forge:circuits/mv'
	}
	)
	
	
	event.shaped(
	Item.of('ae2:item_storage_cell_64k'),
	[
		'AEA',
		'BCB',
		'DDD'
	],
	{
		A:'ae2:quartz_glass',
		B:'gtceu:polytetrafluoroethylene_plate',
		C:'ae2:cell_component_64k',
		D:'gtceu:stainless_steel_plate',
		E:'#forge:circuits/hv'
	}
	)
	
	event.shaped(
	Item.of('ae2:item_storage_cell_256k'),
	[
		'AEA',
		'BCB',
		'DDD'
	],
	{
		A:'ae2:quartz_glass',
		B:'gtceu:polybenzimidazole_plate',
		C:'ae2:cell_component_256k',
		D:'gtceu:tungsten_steel_plate',
		E:'#forge:circuits/ev'
	}
	)
	
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
		E:'#forge:circuits/hv'
	}
	)
	
	event.shaped(
	Item.of('ae2:fluid_storage_cell_1k'),
	[
		'ABA',
		'BCB',
		'DDD'
	],
	{
		A:'gtceu:annealed_copper_double_plate',
		B:'gtceu:rubber_plate',
		C:'ae2:cell_component_1k',
		D:'gtceu:wrought_iron_plate'
	}
	)
	
	
	event.shaped(
	Item.of('ae2:fluid_storage_cell_4k'),
	[
		'AEA',
		'BCB',
		'DDD'
	],
	{
		A:'gtceu:annealed_copper_double_plate',
		B:'gtceu:polyethylene_plate',
		C:'ae2:cell_component_4k',
		D:'gtceu:steel_plate',
		E:'#forge:circuits/lv'
	}
	)
	
	
	event.shaped(
	Item.of('ae2:fluid_storage_cell_16k'),
	[
		'AEA',
		'BCB',
		'DDD'
	],
	{
		A:'gtceu:annealed_copper_double_plate',
		B:'gtceu:polyvinyl_chloride_plate',
		C:'ae2:cell_component_16k',
		D:'gtceu:vanadium_steel_plate',
		E:'#forge:circuits/mv'
	}
	)
	
	
	event.shaped(
	Item.of('ae2:fluid_storage_cell_64k'),
	[
		'AEA',
		'BCB',
		'DDD'
	],
	{
		A:'gtceu:annealed_copper_double_plate',
		B:'gtceu:polytetrafluoroethylene_plate',
		C:'ae2:cell_component_64k',
		D:'gtceu:stainless_steel_plate',
		E:'#forge:circuits/hv'
	}
	)
	
	event.shaped(
	Item.of('ae2:fluid_storage_cell_256k'),
	[
		'AEA',
		'BCB',
		'DDD'
	],
	{
		A:'gtceu:annealed_copper_double_plate',
		B:'gtceu:polybenzimidazole_plate',
		C:'ae2:cell_component_256k',
		D:'gtceu:tungsten_steel_plate',
		E:'#forge:circuits/ev'
	}
	)
	
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
	
	
	
	event.recipes.createMechanicalCrafting(Item.of('ae2:creative_item_cell'),
	
	[
	 'CBC',
	 'ADA',
	 'AAA'
	],
	{
		A:'avaritia:infinity_ingot',
		B:'gtceu:wetware_processor_mainframe',
		C:'kubejs:ruthenium_trinium_americium_neutronate_plate',
		D:'kubejs:infinity_me_storage_wafer'
	}
	)
	event.recipes.createMechanicalCrafting(Item.of('ae2:creative_fluid_cell'),
	
	[
	 'CBC',
	 'ADA',
	 'AAA'
	],
	{
		A:'avaritia:infinity_ingot',
		B:'gtceu:wetware_processor_mainframe',
		C:'gtceu:darmstadtium_double_plate',
		D:'kubejs:infinity_me_storage_wafer'
	}
	)
})

