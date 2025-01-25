ServerEvents.recipes(event => {
	event.remove({id: 'farmersdelight:book_from_canvas'})
	event.remove({id: 'farmersdelight:scaffolding_from_canvas'})
	event.remove({id: 'farmersdelight:cutting_board'})
	event.remove({id: 'farmersdelight:paper_from_tree_bark'})
	event.remove({id: 'farmersdelight:rope'})
	event.remove({id: 'farmersdelight:lead_from_straw'})
	event.remove({id: /farmersdelight:(.*)_canvas_sign/})
	event.remove({id: /farmersdelight:(.*)_hanging_canvas_sign/})

	event.replaceInput({id: 'farmersdelight:stove'}, 'minecraft:iron_ingot', 'gtceu:wrought_iron_plate')
	event.replaceInput({id: 'farmersdelight:cooking_pot'}, 'minecraft:iron_ingot', 'gtceu:steel_plate')

	event.shaped('farmersdelight:cutting_board',
		[
			'SP',
			'SP'
		],
		{
			S: '#forge:rods/wood',
			P: '#minecraft:planks'
		}
	)

	event.shaped('farmersdelight:rope',
		[
			'S',
			'S'
		],
		{
			S: 'farmersdelight:straw'
		}
	)

	//#region cutting board
	event.recipes.farmersdelight.cutting('minecraft:cake', '#forge:tools/knives', '9x farmersdelight:cake_slice')
	event.recipes.farmersdelight.cutting('minecraft:mud_bricks', '#minecraft:axes', 'minecraft:mud_brick_slab')
	event.recipes.farmersdelight.cutting('minecraft:clay', '#forge:tools/knives', 'ceramicbucket:unfired_clay_bucket')
	event.recipes.farmersdelight.cutting('gtceu:rubber_log', '#minecraft:axes', ['gtceu:stripped_rubber_log', 'farmersdelight:tree_bark'])
	event.recipes.farmersdelight.cutting('gtceu:rubber_wood', '#minecraft:axes', ['gtceu:stripped_rubber_wood', 'farmersdelight:tree_bark'])
})