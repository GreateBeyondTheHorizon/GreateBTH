ServerEvents.recipes(event => {
	var removed = [
		'fluid_pipe',
		'smart_fluid_pipe', 
		'mechanical_pump',
		'fluid_valve',
		'water_wheel',
		'large_water_wheel',
		'andesite_casing',
		'windmill_bearing',
		'steam_engine',
		'belt_connector',
		'cogwheel',
		'large_cogwheel',
		'brass_hand',
	]

	removed.forEach(item => {
		event.remove({output: `create:${item}`})
	})

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
			F:'gtceu:steel_spring'
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
			F: 'gtceu:gold_plate'
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

	event.replaceInput({input: 'create:electron_tube'}, 'create:electron_tube', '#gtceu:circuits/ulv')
})
