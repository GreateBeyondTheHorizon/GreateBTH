ServerEvents.recipes(event => {
	event.shaped('kubejs:fire_starter',
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

	event.shaped('kubejs:flint_pickaxe_head',
			[
				'AA',
				'BA'
			],
			{
				A:'minecraft:flint',
				B:'#forge:tools/knives'
			}
	)

	event.shaped('kubejs:flint_axe_head',
			[
				'AB',
				'AA'
			],
			{
				A:'minecraft:flint',
				B:'#forge:tools/knives'
			}
	)
	
	event.shaped('kubejs:flint_shovel_head',
			[
				' A',
				' B',
			],
			{
				A:'minecraft:flint',
				B:'#forge:tools/knives'
			}
	)
	event.shaped('kubejs:flint_sword_head',
			[
				' A',
				'BA',
			],
			{
				A:'minecraft:flint',
				B:'#forge:tools/knives'
			}
	)

	event.shaped('kubejs:flint_hoe_head',
			[
				'AA',
				' B',
			],
			{
				A:'minecraft:flint',
				B:'#forge:tools/knives'
			}
	)

	event.shaped('kubejs:block_wooden_form',
			[
				'A',
				'B',
			],
			{
				A:'gtceu:empty_wooden_form',
				B:'#forge:tools/knives'
			}
	)

	event.shapeless('kubejs:mud_brick',
			[
				'minecraft:packed_mud',
				'gtceu:brick_wooden_form'
			]
	).keepIngredient('gtceu:brick_wooden_form')

	event.shaped('kubejs:nugget_wooden_form',
		[
			'FK'
		],
		{
			F: 'gtceu:empty_wooden_form',
			K: '#forge:tools/knives'
		}
	)

	event.shaped('kubejs:stone_hammer',
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

	event.shaped('kubejs:netherite_plate',
		[
			'H',
			'I',
			'I'
		],
		{
			H: '#forge:tools/hammers',
			I: 'minecraft:netherite_ingot',
		}
	)
})