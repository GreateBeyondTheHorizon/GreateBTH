//priority: 0
ServerEvents.recipes(event => {
	// TODO: Enable this if/when tinkers is added
	// event.remove({
	// 	output: [
	// 		/(.*)a(.*):(.*)_hoe/,
	// 		/(.*)a(.*):(.*)_shovel/,
	// 		/(.*)a(.*):(.*)_pickaxe/,
	// 		/(.*)a(.*):(.*)_sword/,
	// 		/(.*)a(.*):(.*)_axe/,
	// 	],
	// })
	
	// We don't want players to be able to teleport items, so remove ender chests
	event.remove({ output: 'minecraft:ender_chest' })

	// Netherite ingot
	event.remove({ output: 'minecraft:netherite_ingot' })
	event.recipes.createMixing('minecraft:netherite_ingot', [
		'minecraft:netherite_scrap',
		'minecraft:netherite_scrap',
		'minecraft:netherite_scrap',
		'minecraft:netherite_scrap',
		Fluid.of('gtceu:hssg', 576)
	]).superheated()

	// Chest boats
	event.remove({ output: '#minecraft:chest_boats' })
	Ingredient.of("#minecraft:boats").itemIds.forEach(boat => {
		if (boat.endsWith('chest_boat') || boat.endsWith('chest_raft')) {
			var boatWithoutChest = boat.replace('_chest', '')
			event.shaped(
				Item.of(boat, 1),
				[
					' C ',
					'BDB',
					' A '
				],
				{
					A: boatWithoutChest,
					B: 'gtceu:iron_screw',
					C: '#forge:tools/screwdrivers',
					D: 'minecraft:chest'
				}
			)
		}
	})

	// Bamboo planks
	event.remove({ id: 'minecraft:bamboo_planks' })
	event.shaped('minecraft:bamboo_planks',
		[
			'L'
		],
		{
			L: 'minecraft:bamboo_block'
		}
	)
	event.shaped('2x minecraft:bamboo_planks',
		[
			'S',
			'L'
		],
		{
			S: '#forge:tools/saws',
			L: 'minecraft:bamboo_block'
		}
	)

	// Chest
	event.remove({ output: 'minecraft:chest' })
	event.shaped(
		Item.of('minecraft:chest'),
		[
			'AAA',
			'BCB',
			'AAA'
		],
		{
			A: 'gtceu:wood_plate',
			B: 'gtceu:wood_ring',
			C: 'minecraft:flint'
		}
	)

	// Barrel
	event.remove({ output: 'minecraft:barrel' })
	event.shaped('minecraft:barrel',
		[
			'PPP',
			'IRI',
			'PPP'
		],
		{
			P: '#forge:plates/wood',
			I: '#forge:rods/iron',
			R: '#forge:frames/wood'
		}
	)

	//// Crafting stations ////

	// Smoker
	event.remove({ output: 'minecraft:smoker' })
	event.shaped('minecraft:smoker',
		[
			'LPL',
			'PFP',
			'LPL'
		],
		{
			L: '#minecraft:logs',
			F: 'minecraft:furnace',
			P: '#forge:plates/copper'
		}
	)

	// Stonecutter
	event.remove({ output: 'minecraft:stonecutter' })
	event.shaped('minecraft:stonecutter',
		[
			'D W',
			'GBG',
			'LSL'
		],
		{
			D: '#forge:tools/screwdrivers',
			W: '#forge:tools/wrenches',

			G: '#forge:small_gears/iron',
			B: 'gtceu:iron_buzz_saw_blade',
			L: '#minecraft:logs',
			S: 'minecraft:smooth_stone'
		}
	)

	// Smithing table
	event.remove({ output: 'minecraft:smithing_table' })
	event.shaped('minecraft:smithing_table',
		[
			'PPP',
			'SFS',
			'RHR'
		],
		{
			H: '#forge:tools/hammers',
			P: '#forge:plates/steel',
			S: '#forge:screws/steel',
			R: '#forge:rods/steel',
			F: 'gtceu:wood_frame'
		}
	)

	// Loom
	event.remove({ output: 'minecraft:loom' })
	event.shaped('minecraft:loom',
		[
			'WRR',
			'GGR',
			'PPP'
		],
		{
			W: '#forge:tools/saws',

			R: '#forge:rods/long/wood',
			G: '#forge:gears/wood',
			P: '#forge:plates/treated_wood'
		}
	)

	// Composter
	event.remove({ output: 'minecraft:composter' })
	event.shaped('minecraft:composter',
		[
			'PWP',
			'P P',
			'PPP'
		],
		{
			W: '#forge:tools/saws',

			P: '#forge:plates/treated_wood'
		}
	)

	// Lecturn
	event.remove({ output: 'minecraft:lectern' })
	event.shaped('minecraft:lectern',
		[
			'PPP',
			'SBS',
			'WOH'
		],
		{
			W: '#forge:tools/saws',
			H: '#forge:tools/hammers',

			P: '#forge:plates/wood',
			S: '#forge:screws/iron',
			B: '#chipped:bookshelf',
			O: '#chipped:red_wool'
		}
	)

	// Cartography table
	event.remove({ output: 'minecraft:cartography_table' })
	event.shaped('minecraft:cartography_table',
		[
			'GRR',
			'PLP',
			'W N'
		],
		{
			W: '#forge:tools/saws',
			N: '#forge:tools/wrenches',

			G: 'ad_astra:earth_globe',
			R: '#forge:plates/paper',
			P: '#forge:plates/wood',
			L: '#minecraft:logs'
		}
	)

	// Grindstone
	event.remove({ output: 'minecraft:grindstone' })
	event.shaped('minecraft:grindstone',
		[
			'RSR',
			'TST',
			'L L'
		],
		{
			R: '#forge:screws/iron',
			S: '#chipped:smooth_stone',
			T: '#forge:rods/wood',
			L: '#minecraft:wooden_slabs'
		}
	)
})
