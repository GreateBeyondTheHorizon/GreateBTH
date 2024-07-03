ServerEvents.recipes(event => {
	event.remove({id: 'create:crafting/kinetics/cart_assembler'})
	event.remove({id: 'create:crafting/kinetics/hand_crank'})
	event.remove({id: 'create:crafting/kinetics/large_water_wheel'})
	event.remove({id: 'create:crafting/kinetics/mechanical_drill'})
	event.remove({id: 'create:crafting/kinetics/steam_engine'})
	event.remove({id: 'create:crafting/kinetics/water_wheel'})
	event.remove({id: 'create:crafting/kinetics/windmill_bearing'})
	event.remove({id: 'create:crafting/kinetics/empty_blaze_burner'})
	event.remove({id: 'create:crafting/kinetics/fluid_pipe'})
	event.remove({id: 'create:crafting/kinetics/fluid_pipe_vertical'})
	event.remove({id: 'create:shaped/andesite_alloy'})

	event.replaceInput({id: 'create:shaped/wrench'}, 'gtceu:gold_plate', 'gtceu:wrought_iron_plate')
	event.replaceInput({id: 'create:crafting/kinetics/goggles'}, 'gtceu:gold_plate', 'gtceu:wrought_iron_plate')
	event.replaceInput({id: 'create:crafting/kinetics/goggles'}, 'minecraft:glass', 'minecraft:leather')

	//#region SU gen

	event.shaped(Item.of('create:hand_crank'),
		[
			'TTT',
			'  A'
		],
		{
			A: 'greate:andesite_alloy_plate',
			T: 'gtceu:treated_wood_planks'
		}
	)

	event.shaped('create:water_wheel',
		[
			'DCE',
			'CAC',
			'BCB'
		],
		{
			A:'create:andesite_casing',
			B:'gtceu:steel_screw',
			C:'gtceu:steel_plate',
			D:'#forge:tools/screwdrivers',
			E:'#forge:tools/files',
		}
	)

	event.shaped('create:large_water_wheel',
		[
			'DCE',
			'CAC',
			'BCB'
		],
		{
			A:'create:andesite_casing',
			B:'gtceu:steel_screw',
			C:'gtceu:double_steel_plate',
			D:'#forge:tools/screwdrivers',
			E:'#forge:tools/files',
		}
	)

	event.shaped('create:windmill_bearing',
		[
			'BDB',
			'CAC',
			'FEF'
		],
		{
			A:'gtceu:aluminium_frame',
			B:'gtceu:steel_screw',
			C:'gtceu:steel_plate',
			D:'gtceu:treated_wood_plate',
			E:'greate:large_steel_cogwheel',
			F:'gtceu:steel_spring',
		}
	)

	event.recipes.createMechanicalCrafting(Item.of('create:steam_engine', 1),
		[ 
			' C ',
			' F ',
			' C ',
			'BAB',
			'DED',
			'DDD',
		],
		{
			A: 'gtceu:hv_electric_piston',
			B: 'gtceu:bronze_gear',
			C: 'greate:stainless_steel_shaft',
			D: 'gtceu:bronze_plate',
			E: 'gtceu:stainless_steel_gearbox',
			F: 'gtceu:gold_plate',
		}
)
	event.recipes.createMechanicalCrafting(
		Item.of('create:potato_cannon', 1),
		[ 
			'ABCCC',
			'DD   '
		],
		{
			A:'greate:steel_cogwheel',
			B:'create:precision_mechanism',
			C:'gtceu:copper_normal_fluid_pipe',
			D:'minecraft:copper_ingot',
		}
	)
	
	event.shaped(
		Item.of('create:copper_diving_helmet', 1),
		[
			'AAA',
			'ABA',
			'DCD'
		],
		{
			A: 'gtceu:double_copper_plate',
			B: 'gtceu:tempered_glass',
			C: 'gtceu:polyethylene_small_fluid_pipe',
			D: 'gtceu:rubber_plate',
		}
	)

	event.shaped(Item.of('create:copper_backtank', 1),
		[
			'DCD',
			'ABA',
			'AAA'
		],
		{
			A: 'gtceu:double_copper_plate',
			B: 'gtceu:bronze_drum',
			C: 'gtceu:polyethylene_small_fluid_pipe',
			D: 'gtceu:rubber_plate',
		}
	)

	event.shaped(Item.of('create:copper_diving_boots', 1),
		[
			'D D',
			'A A',
			'A A'
		],
		{
			A: 'gtceu:double_copper_plate',
			D: 'gtceu:rubber_plate',
		}
	)

	event.shaped(Item.of('create:netherite_diving_helmet', 1),
		[
			'AAA',
			'ABA',
			'DCD'
		],
		{
			A: 'gtceu:double_tungsten_carbide_plate',
			B: 'minecraft:netherite_helmet',
			C: 'gtceu:polytetrafluoroethylene_normal_fluid_pipe',
			D: 'gtceu:styrene_butadiene_rubber_plate',
		}
	)

	event.shaped(Item.of('create:netherite_backtank', 1),
		[
			'DCD',
			'ABA',
			'AAA'
		],
		{
			A: 'gtceu:double_tungsten_carbide_plate',
			B: 'gtceu:tungsten_steel_drum',
			C: 'gtceu:polytetrafluoroethylene_normal_fluid_pipe',
			D: 'gtceu:styrene_butadiene_rubber_plate',
		}
	)

	event.shaped(Item.of('create:netherite_diving_boots', 1),
		[
			'DBD',
			'A A',
			'A A'
		],
		{
			A: 'gtceu:double_tungsten_carbide_plate',
			B: 'minecraft:netherite_boots',
			D: 'gtceu:styrene_butadiene_rubber_plate',
		}
	)

	event.shaped(Item.of('create:andesite_alloy'),
		[
			'AN',
			'NA'
		],
		{
			A: 'minecraft:andesite',
			N: 'gtceu:wrought_iron_plate'
		}
	)

	event.shaped(Item.of('create:andesite_alloy'),
		[
			'NA',
			'AN'
		],
		{
			A: 'minecraft:andesite',
			N: 'gtceu:wrought_iron_plate'
		}
	)

	event.shaped(Item.of('create:cart_assembler'),
		[
			'SRS',
			'LCL',
		],
		{
			S: 'gtceu:steel_plate',
			R: 'minecraft:redstone',
			L: '#minecraft:logs',
			C: '#gtceu:circuits/lv'
		}
	)

	event.shaped(Item.of('create:mechanical_drill'),
		[
			' A ',
			'ASA',
			' C '
		],
		{
			A: 'create:andesite_alloy',
			S: 'gtceu:steel_plate',
			C: 'create:andesite_casing',
		}
	)

	event.shaped('create:empty_blaze_burner',
		[
			' P ',
			'PBP',
			'SPW'
		],
		{
			P: 'gtceu:steel_plate',
			B: 'minecraft:netherrack',
			S: '#forge:tools/screwdrivers',
			W: '#forge:tools/wrenches'
		}
	)

	event.shaped('4x create:fluid_pipe',
		[
			'W H',
			'PPP'
		],
		{
			W: '#forge:tools/wrenches',
			H: '#forge:tools/hammers',
			P: 'gtceu:copper_plate'
		}
	)
})
