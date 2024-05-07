// priority: 0
ServerEvents.recipes(event => {
	// #region removal
	const tiers = ['lv', 'mv', 'hv' /*'ev', 'iv', 'luv', 'zpm', 'uv' */]
	const components = [
		'emitter',
		'sensor',
		'electric_motor',
		'electric_piston',
		'robot_arm',
		'conveyor_module',
		'electric_pump',
		'fluid_regulator',
	]

	//Recipe ids that should have a campfire in place of a furnace in its recipe
	const furnaceRecipesToReplace = [
		'gtceu:shaped/steam_furnace_bronze',
		'gtceu:shaped/steam_alloy_smelter_bronze',
		'gtceu:shaped/furnace_minecart',
		'cookingforblockheads:oven',
		'productivebees:honey_generator',
		'gtceu:shaped/steam_boiler_coal_bronze',
		'gtceu:shaped/steam_boiler_coal_steel',
		'gtceu:shaped/electric_blast_furnace',
		'gtceu:shaped/multi_furnace',
		'gtceu:assembler/furnace_minecart'
	]
	
	tiers.forEach(tier => {
		components.forEach(component => {
			event.remove({ output: `gtceu:${tier}_${component}` })
		})
	})
	//lv
	event.remove({ output: '#forge:circuits/lv' })
	//mv
	event.remove({ output: '#forge:circuits/mv' })
	//hv
	event.remove({ output: '#forge:circuits/hv' })

	event.remove({ id: 'gtceu:smelting/sticky_resin_from_slime' }) // <-- random bullshit go!

	event.remove({ id: 'gtceu:shaped/vacuum_tube' })
	event.shaped(
		Item.of('gtceu:vacuum_tube'),
		[
			' B ',
			'CAC',
			'DDD',
		],
		{
			A: 'create:polished_rose_quartz',
			B: 'gtceu:glass_tube',
			C: 'gtceu:steel_bolt',
			D: 'gtceu:copper_single_wire'
		}
	)

	event.shaped(
		Item.of('gtceu:wood_plate'),
		[
			'A',
			'A',
			'H'
		],
		{
			A:'#minecraft:logs',
			H: '#forge:tools/hammers'
		}
	)
	event.shaped(
		Item.of('gtceu:treated_wood_plate'),
		[
			'A',
			'A',
		],
		{
			A:'gtceu:treated_wood_planks'
		}
	)
	event.shaped(
		Item.of('gtceu:stone_gear', 1),
		[
			'GFG',
			'FPF',
			'GFG',
		], 
		{
			P: 'gtceu:wood_gear',
			F: 'minecraft:cobblestone',
			G: 'gtceu:stone_rod'
		}
	)

	furnaceRecipesToReplace.forEach(recipeID => {
		event.replaceInput({id: recipeID}, 'minecraft:furnace', 'minecraft:campfire')
	})

	// Material parts
	// Wood
	GregUtil.extrudeRingNoIngotMaterial(event, GTMaterials.Wood, 'gtceu:wood_plate')
	event.shaped(
		Item.of('gtceu:wood_ring'),
		[
			'A ',
			' B'
		],
		{
			A: '#forge:tools/files',
			B: 'gtceu:wood_plate'
		}
	)
})
