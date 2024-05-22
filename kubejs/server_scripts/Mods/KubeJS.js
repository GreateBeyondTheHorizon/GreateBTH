ServerEvents.recipes(event => {
	event.shaped(Item.of('kubejs:fire_starter'),
			[
				'AC',
				'B '
			],
			{
				A:'farmersdelight:rope',
				B:'minecraft:stick',
				C:'minecraft:flint'
			}
	)

	event.shaped(Item.of('kubejs:flint_pickaxe_head'),
			[
				'AA',
				'BA'
			],
			{
				A:'minecraft:flint',
				B:'#forge:tools/knives'
			}
	)

	event.shaped(Item.of('kubejs:flint_axe_head'),
			[
				'AB',
				'AA'
			],
			{
				A:'minecraft:flint',
				B:'#forge:tools/knives'
			}
	)
	
	event.shaped(Item.of('kubejs:flint_shovel_head'),
			[
				' A',
				' B',
			],
			{
				A:'minecraft:flint',
				B:'#forge:tools/knives'
			}
	)
	event.shaped(Item.of('kubejs:flint_sword_head'),
			[
				' A',
				'BA',
			],
			{
				A:'minecraft:flint',
				B:'#forge:tools/knives'
			}
	)

	event.shaped(Item.of('kubejs:flint_hoe_head'),
			[
				'AA',
				' B',
			],
			{
				A:'minecraft:flint',
				B:'#forge:tools/knives'
			}
	)

	event.shaped(Item.of('kubejs:block_wooden_form'),
			[
				'A',
				'B',
			],
			{
				A:'gtceu:empty_wooden_form',
				B:'#forge:tools/knives'
			}
	)

	event.shapeless(Item.of('kubejs:mud_brick'),
			[
				'minecraft:packed_mud',
				'gtceu:brick_wooden_form'
			]
	).keepIngredient('gtceu:brick_wooden_form')

	event.shaped(Item.of('kubejs:nugget_wooden_form'),
		[
			'FK'
		],
		{
			F: 'gtceu:empty_wooden_form',
			K: '#forge:tools/knives'
		}
	)

	event.shaped(Item.of('kubejs:stone_hammer'),
		[
			'RC',
			'S '
		],
		{
			R: 'farmersdelight:rope',
			C: '#forge:cobblestone',
			S: '#forge:rods/wooden'
		}
	)
})