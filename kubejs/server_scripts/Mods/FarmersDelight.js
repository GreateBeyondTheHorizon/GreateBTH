ServerEvents.recipes(event => {
	event.remove({id: 'farmersdelight:book_from_canvas'})
	event.remove({id: 'farmersdelight:cutting_board'})
	event.remove({id: 'farmersdelight:paper_from_tree_bark'})

	event.shaped(
		Item.of('farmersdelight:cutting_board'),
		[
			'SP',
			'SP'
		],
		{
			S: '#forge:rods/wood',
			P: '#minecraft:planks'
		}
	)

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
})