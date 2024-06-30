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

	event.remove({id: 'minecraft:bamboo_mosaic_slab'})
	event.remove({id: 'minecraft:bamboo_planks'})
	event.remove({id: 'minecraft:barrel'})
	event.remove({id: 'minecraft:blast_furnace'})
	event.remove({id: 'minecraft:bone_meal_from_bone_block'})
	event.remove({id: 'minecraft:bone_meal'})
	event.remove({id: 'minecraft:cartography_table'})
	event.remove({id: 'minecraft:chest'})
	event.remove({id: 'gtceu:shaped/compass'})
	event.remove({id: 'minecraft:composter'})
	event.remove({id: 'minecraft:ender_chest'})
	event.remove({id: 'minecraft:furnace'})
	event.remove({id: 'minecraft:grindstone'})
	event.remove({id: 'minecraft:lectern'})
	event.remove({id: 'minecraft:loom'})
	event.remove({id: 'minecraft:mud_bricks'})
	event.remove({id: 'minecraft:netherite_ingot'})
	event.remove({id: /minecraft:raw_(.*)_block/})
	event.remove({id: 'minecraft:smithing_table'})
	event.remove({id: 'minecraft:smoker'})
	event.remove({id: 'minecraft:stonecutter'})
	event.remove({id: /(minecraft|bucketlib|farmersdelight|create):(.*)cake(.*)/, output: 'minecraft:cake'})
	event.remove({id: 'minecraft:pumpkin_pie'})
	event.remove({id: /create:(smelting|smoking)(.*)bread/})
	event.remove({id: 'minecraft:bread'})
	event.remove({id: 'minecraft:mushroom_stew'})
	event.remove({id: 'minecraft:beetroot_soup'})
	event.remove({id: /minecraft:rabbit_stew_from(.*)/})
	event.remove({id: 'minecraft:campfire'})

	event.campfireCooking('minecraft:coal', 'gtceu:raw_coal').cookingTime(300).xp(0.6)
	event.campfireCooking('minecraft:brick', 'gtceu:compressed_clay').cookingTime(300).xp(0.3)
	event.campfireCooking('minecraft:stone', 'minecraft:cobblestone').cookingTime(300).xp(0.1)
	event.campfireCooking('minecraft:smooth_stone', 'minecraft:stone').cookingTime(300).xp(0.1)
	event.campfireCooking('minecraft:redstone', 'gtceu:raw_redstone').cookingTime(300).xp(0.9)

	event.recipes.create.mixing('minecraft:cake', [Fluid.of('minecraft:milk', 3000), '2x minecraft:sugar', 'farmersdelight:pie_crust', 'minecraft:sweet_berries']).heated()
	event.recipes.create.mixing('minecraft:pumpkin_pie', ['minecraft:sugar', 'farmersdelight:pie_crust', 'minecraft:pumpkin']).heated()

	event.replaceInput('gtceu:shaped/piston_iron', 'gtceu:small_iron_gear', 'gtceu:small_bronze_gear')
	event.replaceInput('gtceu:shaped/cauldron', 'gtceu:iron_plate', 'gtceu:wrought_iron_plate')

	event.replaceOutput('/minecraft:(.*)from_(smelting|blasting)(.*)/', 'minecraft:iron_ingot', 'gtceu:wrought_iron_ingot')

	//Temp
	event.remove({type: 'minecraft:smelting', output: 'gtceu:wrought_iron_nugget'})
	event.smelting('minecraft:iron_nugget', 'gtceu:wrought_iron_nugget')
	event.campfireCooking('minecraft:iron_nugget', 'gtceu:wrought_iron_nugget').cookingTime(300)
	

	// Netherite ingot
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
					D: 'minecraft:chest',
				}
			)
		}
	})

	// Bamboo planks
	event.shaped('minecraft:bamboo_planks',
		[
			'L'
		],
		{
			L: 'minecraft:bamboo_block',
		}
	)
	event.shaped('2x minecraft:bamboo_planks',
		[
			'S',
			'L'
		],
		{
			S: '#forge:tools/saws',
			L: 'minecraft:bamboo_block',
		}
	)

	// Chest
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
			C: 'minecraft:flint',
		}
	)

	// Barrel
	event.shaped('minecraft:barrel',
		[
			'PPP',
			'IRI',
			'PPP'
		],
		{
			P: '#forge:plates/wood',
			I: 'gtceu:long_wood_rod',
			R: '#forge:frames/wood',
		}
	)

	//// Crafting stations ////

	// Stonecutter
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
			S: 'minecraft:smooth_stone',
		}
	)

	// Smithing table
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
			F: 'gtceu:wood_frame',
		}
	)

	// Loom
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
			P: '#forge:plates/treated_wood',
		}
	)

	// Composter
	event.shaped('minecraft:composter',
		[
			'PWP',
			'P P',
			'PPP'
		],
		{
			W: '#forge:tools/saws',
			P: '#forge:plates/treated_wood',
		}
	)

	// Lecturn
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
			O: '#chipped:red_wool',
		}
	)

	// Cartography table
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
			L: '#minecraft:logs',
		}
	)

	// Grindstone
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
			L: '#minecraft:wooden_slabs',
		}
	)

	// Compass
	let emptyCompass = 'kubejs:empty_compass'
	event.shaped(
		Item.of(emptyCompass, 1),
		[
			' B ',
			'BAB',
			' B '
		],
		{
			A: 'gtceu:steel_plate',
			B: 'gtceu:tin_ingot'
		}
	)
	event.recipes.createSequencedAssembly(
		['minecraft:compass'],
		emptyCompass,
		[
			event.recipes.createFilling(emptyCompass, [emptyCompass, Fluid.of('minecraft:water', 1000)]),
			event.recipes.createDeploying(emptyCompass, [emptyCompass, 'gtceu:magnetic_iron_rod']),
			event.recipes.createDeploying(emptyCompass, [emptyCompass, 'gtceu:red_alloy_bolt']),
			event.recipes.createDeploying(emptyCompass, [emptyCompass, 'minecraft:glass_pane'])
		]
	).transitionalItem(emptyCompass).loops(1)

	event.custom({
		type: "farmersdelight:cutting",
		ingredients: [
			{
				"item": "minecraft:hay_block"
			}
		],
		result: [
			{
				"count": 9,
				"item": "minecraft:wheat"
			}
		],
		tool: {
			"tag": "forge:tools/knives"
		}
	})

	let woodMaterials = [
		'oak',
		'spruce',
		'birch',
		'jungle',
		'acacia',
		'dark_oak',
		'mangrove',
		'cherry',
		'bamboo',
		'crimson',
		'warped',
	]

	woodMaterials.forEach(wood => {
		event.custom({
			type: "farmersdelight:cutting",
			ingredients: [
				{
					"item": "minecraft:" + wood + '_planks'
				}
			],
			result: [
				{
					"item": "minecraft:" + wood + "_slab"
				}
			],
			tool: {
				"tag": "minecraft:axes"
			}
		})
	})

	event.shapeless(
		Item.of('minecraft:bamboo_mosaic_slab', 2),
		[
			'minecraft:bamboo_mosaic',
			'#forge:tools/saws'
		]
	)
	event.custom({
		type: "farmersdelight:cutting",
		ingredients: [
			{
				"item": "minecraft:bamboo_mosaic"
			}
		],
		result: [
			{
				"item": "minecraft:bamboo_mosaic_slab"
			}
		],
		tool: {
			"tag": "minecraft:axes"
		}
	})

	event.shapeless(
		Item.of('minecraft:clay'),
			[
				'3x gtceu:compressed_clay',
				'kubejs:block_wooden_form'
			]
	).keepIngredient('kubejs:block_wooden_form')


	event.shapeless(
		Item.of('minecraft:mud', 3),
			[
				Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').strongNBT(),
				'3x minecraft:dirt'
			]
	)

	event.shapeless(
		Item.of('minecraft:mud', 3),
			[
				Item.of('minecraft:water_bucket'),
				'3x minecraft:dirt'
			]
	)

	event.shapeless(
		Item.of('minecraft:flint'),
			[
				'3x minecraft:gravel'
			]
	)

	/* event.shapeless(
		Item.of('minecraft:packed_mud', 2),
		[
			'2x farmersdelight:straw',
			'minecraft:mud'
		]
	)

	event.shapeless(
		Item.of('minecraft:packed_mud', 4),
		[
			'2x minecraft:wheat',
			'minecraft:mud'
		]
	) */

	event.shaped(
		Item.of('minecraft:mud_bricks'),
			[
				'AA',
				'AA'
			],
			{
				A:'kubejs:mud_brick',
			}
	)

	event.shaped(
		Item.of('minecraft:crafting_table'),
		[
			'AA',
			'LL'
		],
		{
			A: 'create:andesite_alloy',
			L: '#minecraft:logs'
		}
	)

	event.shaped(
		Item.of('minecraft:bricks', 2),
		[
			'BBB',
			'BWB',
			'BBB'
		],
		{
			W: Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').strongNBT(),
			B: 'minecraft:brick'
		}
	)

	event.shaped(
		Item.of('minecraft:paper', 2),
		[
			' M ',
			'CCC',
			' W '
		],
		{
			M: '#forge:tools/mallets',
			C: 'gtceu:paper_dust',
			W: Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').strongNBT()
		}
	)

	event.shaped(
		Item.of('minecraft:campfire'),
			[
				'SS',
				'LL',
			],
			{
				S:'farmersdelight:straw',
				L:'#minecraft:logs'
			}
	)
})
