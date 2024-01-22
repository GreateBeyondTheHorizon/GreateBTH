//priority: 0
ServerEvents.recipes(event => {
	event.remove({ id: 'minecraft:bamboo_planks' })

	event.remove({ output: 'minecraft:netherite_ingot' })
	event.remove({
		output: [
			/minecraft:(.*)_hoe/,
			/minecraft:(.*)_shovel/,
			/minecraft:(.*)_pickaxe/,
			/minecraft:(.*)_sword/,
			/minecraft:(.*)_axe/,
			/minecraft:(.*)_chest_boat/,
			/minecraft:(.*)_chest_raft/
		],
	})
	event.remove({ output: 'minecraft:chest' })
	event.remove({ output: 'minecraft:barrel' })
	event.remove({ output: 'minecraft:blast_furnace' })
	event.remove({ output: 'minecraft:smoker' })
	event.remove({ output: 'minecraft:stonecutter' })
	event.remove({ output: 'minecraft:smithing_table' })
	event.remove({ output: 'minecraft:loom' })
	event.remove({ output: 'minecraft:lectern' })
	event.remove({ output: 'minecraft:cartography_table' })
	event.remove({ output: 'minecraft:grindstone' })
	event.remove({ output: 'minecraft:ender_chest' })

	var boat_types = [
		'acacia',
		'oak',
		'birch',
		'spruce',
		'dark_oak',
		'mangrove',
		'jungle',
		'cherry'
	]

	// -- addition --
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

	boat_types.forEach(type => {
		event.shaped(
			Item.of('minecraft:'+type+'_chest_boat', 1),
			[
				' C ',
				'BDB',
				' A '
			],
			{
				A: 'minecraft:'+type+'_boat',
				B: 'gtceu:iron_screw',
				C: '#forge:tools/screwdrivers',
				D: 'minecraft:chest'
			}
		)
	});
	event.shaped(
		Item.of('minecraft:bamboo_chest_raft', 1),
		[
			' C ',
			'BDB',
			' A '
		],
		{
			A: 'minecraft:bamboo_raft',
			B: 'gtceu:iron_screw',
			C: '#forge:tools/screwdrivers',
			D: 'minecraft:chest'
		}
	)

	event.shaped('minecraft:chest',
		[
			'PFP',
			'PRP',
			'PPP'
		],
		{
			P: '#minecraft:planks',
			F: 'minecraft:flint',
			R: '#forge:frames/wood'
		}
	)
	event.shaped('minecraft:barrel',
		[
			'PSP',
			'III',
			'PSP'
		],
		{
			P: '#minecraft:planks',
			S: '#minecraft:wooden_slabs',
			I: '#forge:nuggets'
		}
	)



	event.shaped('kubejs:flint_saw',
		[
			'AAB',
			'CDB'
		],
		{
			A: 'minecraft:flint',
			B: 'minecraft:stick',
			C: '#forge:tools/files',
			D: '#forge:tools/hammers'
		}
	)

	// For Boats
	event.shaped('minecraft:wooden_shovel',
		[
			'W',
			'S',
			'S'
		],
		{
			W: '#minecraft:planks',
			S: 'minecraft:stick'
		}
	)

	// Minecraft's Many Crafting Stations
	event.shaped('minecraft:blast_furnace',
		[
			'III',
			'IFI',
			'SSS'
		],
		{
			I: '#forge:plates/invar',
			F: 'minecraft:furnace',
			S: 'minecraft:smooth_stone'
		}
	)
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
	event.shaped('minecraft:smithing_table',
		[
			'PPP',
			'SLS',
			'RHR'
		],
		{
			H: '#forge:tools/hammers',

			P: '#forge:plates/steel',
			S: '#forge:screws/steel',
			R: '#forge:rods/steel',
			L: '#minecraft:logs'
		}
	)
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