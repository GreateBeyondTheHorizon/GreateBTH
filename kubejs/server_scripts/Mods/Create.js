ServerEvents.recipes(event => {
	event.recipes.createMixing('minecraft:turtle_helmet', [
		'kubejs:unf_turtle_helmet',
		Fluid.of('create:potion', 576, {Bottle:'REGULAR', Potion:'minecraft:water_breathing'})
	]).heated()

	//mechanical belts
	event.recipes.createMixing(Fluid.of('gtceu:rubber', 500), [
		Item.of('gtceu:raw_rubber_dust', 8),
		Item.of('gtceu:sulfur_dust', 1)
	]).heated()

	event.recipes.createFilling(Item.of('create:belt_connector', 1), [
			'gtceu:steel_plate',
			Fluid.of('gtceu:rubber', 250)
	])


	//#region SU gen
	//water wheel small
	event.shaped(	
		Item.of('create:water_wheel', 1),
		[
			'DCE',
			'CAC',
			'BCB'
		],
		{
			A:'create:andesite_casing',
			B:'gtceu:bronze_screw',
			C:'gtceu:wood_plate',
			D:'#forge:tools/screwdrivers',
			E:'#forge:tools/files',
		}
	)
	//water wheel large
	event.shaped(	
		Item.of('create:large_water_wheel', 1),
		[
			'DCE',
			'CAC',
			'BCB'
		],
		{
			A:'create:andesite_casing',
			B:'gtceu:steel_screw',
			C:'gtceu:treated_wood_plate',
			D:'#forge:tools/screwdrivers',
			E:'#forge:tools/files',
		}
	)


	
	//windmill bearing
	event.shaped(	
		Item.of('create:windmill_bearing', 1),
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
	//steam engine
	event.recipes.createMechanicalCrafting(
		Item.of('create:steam_engine', 1),
		[ 
			' C ',
			' F ',
			' C ',
			'BAB',
			'DED',
			'DDD',
		],
		{
			A: 'gtceu:lv_electric_piston',
			B: 'gtceu:bronze_gear',
			C: 'greate:steel_shaft',
			D: 'gtceu:bronze_plate',
			E: 'gtceu:steel_gearbox',
			F: 'gtceu:gold_plate',
		}
)
	// #endregion
	// potato cannon
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

	event.replaceInput({ input: 'create:electron_tube' }, 'create:electron_tube', '#gtceu:circuits/ulv')
	
	// Copper Diving Helmet
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
	// Copper Backtank
	event.shaped(
		Item.of('create:copper_backtank', 1),
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
	// Copper Diving Boots
	event.shaped(
		Item.of('create:copper_diving_boots', 1),
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

	// Netherite Diving Helmet
	event.shaped(
		Item.of('create:netherite_diving_helmet', 1),
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
	// Netherite Backtank
	event.shaped(
		Item.of('create:netherite_backtank', 1),
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
	// Netherite Diving Boots
	event.shaped(
		Item.of('create:netherite_diving_boots', 1),
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

	event.custom({
		"type": "lychee:item_inside",
		"ghost": true,
		"item_in": [
			{
				"item": "create:chromatic_compound"
			}
		],
		"block_in": "minecraft:beacon",
		"post": [
			{
				"type": "drop_item",
				"item": "create:refined_radiance"
			}
		]
	})

	event.shapeless(
		Item.of('create:andesite_alloy', 9),
		[
			'create:andesite_alloy_block'
		]
	)

	event.shaped(
		Item.of('create:andesite_alloy'),
		[
			'AN',
			'NA'
		],
		{
			A: 'minecraft:andesite',
			N: 'gtceu:bronze_nugget'
		}
	)

	event.shaped(
		Item.of('create:andesite_alloy'),
		[
			'NA',
			'AN'
		],
		{
			A: 'minecraft:andesite',
			N: 'gtceu:bronze_nugget'
		}
	)

	event.shaped(
		Item.of('create:hand_crank'),
		[
			'TTT',
			'  A'
		],
		{
			A: 'create:andesite_alloy',
			T: 'gtceu:treated_wood_planks'
		}
	)
})
