//priority: 0
ServerEvents.recipes(event => {
	event.remove({id: 'aether:holystone_stonecutter'})
	event.remove({id: 'gtceu:shaped/barrel'})
	event.remove({id: 'gtceu:shaped/compass'})
	event.remove({id: 'gtceu:shaped/turtle_helmet'})
	event.remove({id: 'gtceu:shapeless/nugget_disassembling_iron'})
	event.remove({id: 'minecraft:bamboo_mosaic_slab'})
	event.remove({id: 'minecraft:beetroot_soup'})
	event.remove({id: 'minecraft:bone_meal_from_bone_block'})
	event.remove({id: 'minecraft:bone_meal'})
	event.remove({id: 'minecraft:bread'})
	event.remove({id: 'minecraft:campfire'})
	event.remove({id: 'minecraft:chest'})
	event.remove({id: 'minecraft:ender_chest'})
	event.remove({id: 'minecraft:mud_bricks'})
	event.remove({id: 'minecraft:mushroom_stew'})
	event.remove({id: 'minecraft:netherite_ingot'})
	event.remove({id: 'minecraft:pumpkin_pie'})
	event.remove({id: /minecraft:dye(.*)carpet/})
	event.remove({id: /minecraft:dye(.*)wool/})
	event.remove({id: /minecraft:rabbit_stew_from(.*)/})
	event.remove({id: /minecraft:raw_(.*)/})
	event.remove({id: /(minecraft|bucketlib|farmersdelight|create):(.*)cake(.*)/, output: 'minecraft:cake'})
	event.remove({id: /create:(smelting|smoking)(.*)bread/})

	event.campfireCooking('minecraft:brick', 'gtceu:compressed_clay').cookingTime(300).xp(0.3)
	event.campfireCooking('minecraft:bread', 'gtceu:dough')

	event.recipes.create.mixing('minecraft:cake', [Fluid.of('minecraft:milk', 3000), '2x minecraft:sugar', 'farmersdelight:pie_crust', 'minecraft:sweet_berries']).heated()
	event.recipes.create.mixing('minecraft:pumpkin_pie', ['minecraft:sugar', 'farmersdelight:pie_crust', 'minecraft:pumpkin']).heated()
	

	// Netherite ingot
	event.recipes.createMixing('minecraft:netherite_ingot', [
		'minecraft:netherite_scrap',
		'minecraft:netherite_scrap',
		'minecraft:netherite_scrap',
		'minecraft:netherite_scrap',
		Fluid.of('gtceu:hssg', 576)
	]).superheated()

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
			A: 'gtceu:andesite_alloy_ingot',
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

	// Remove torch recipes in favor of the #minecraft:coals torch recipes
	event.remove({id: 'minecraft:torch'})
	event.remove({id: 'gtceu:shaped/torch_coal_dust'})
	event.remove({id: 'gtceu:shaped/torch_charcoal_dust'})
	event.remove({id: 'gtceu:assembler/torch_coal_dust'})
	event.remove({id: 'gtceu:assembler/torch_charcoal_dust'})
	event.shaped(
		Item.of('4x minecraft:torch'),
		[
			'C',
			'S'
		],
		{
			C: '#minecraft:coals',
			S: 'minecraft:stick'
		}
	)

	// Remove slime block shaped crafting, as slime blocks should be made in a compressor
	event.remove({id: 'minecraft:slime_block'})
	event.remove({id: 'aether:swet_slime_block'})

	// Replace slime balls in recipes with #forge:slimeballs to allow for using aether slime balls (Swet Balls)
	event.remove({id: 'aether:swet_sticky_piston'})
	event.remove({id: 'aether:swet_slime_block'})
	event.remove({id: 'aether:swet_lead'})
	event.replaceInput({ input: 'minecraft:slime_ball' }, 'minecraft:slime_ball', '#forge:slimeballs')
})
