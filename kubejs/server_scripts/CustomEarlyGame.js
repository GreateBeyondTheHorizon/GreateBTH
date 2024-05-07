//Changes the output of grass to have fiber as new Loot
LootJS.modifiers((event) => {
    event
        .addBlockLootModifier('minecraft:grass')
		.matchMainHand("#forge:tools/knives")
		.playerAction(p => {
			p.damageHeldItem()
		})
        .randomChance(0.33)
		.addLoot('farmersdelight:straw');

	event
		.addBlockLootModifier('minecraft:campfire')
		.removeLoot('minecraft:charcoal')
		.addLoot("2x minecraft:stick");

	event
		.addBlockLootModifier('#minecraft:leaves')
		.randomChance(0.33)
		.addLoot('minecraft:stick');
});

BlockEvents.placed('minecraft:campfire', (event) => {
    event.block.set('minecraft:campfire', {lit:'false'})
});

BlockEvents.rightClicked(event => {
	if(event.block.id === 'minecraft:campfire' && event.item.id === 'kubejs:fire_starter') {
		if (event.block.properties.get('lit') !== true) {
			var mainHandItem = event.player.getMainHandItem().getDamageValue()

			if(mainHandItem < event.item.maxDamage) {
				mainHandItem = mainHandItem + 1 
				event.player.getMainHandItem().setDamageValue(mainHandItem)
			}
			else {
				event.entity.mainHandItem = "minecraft:air"
			}	
			event.block.set('minecraft:campfire', { lit: 'true' })
		}
	} else if (event.block.id === 'minecraft:crafting_table' &&
		!event.getPlayer().stages.has('early_game_completed')) {
		event.getPlayer().displayClientMessage(Component.literal("You have not unlocked the ability to use this yet!").red(), true)
		event.cancel()
	} else if (event.block.id === 'minecraft:furnace' || event.block.id === 'minecraft:blast_furnace' || event.block.id === 'minecraft:smoker') {
		event.getPlayer().displayClientMessage(Component.literal("This block has no functionality!").red(), true)
		event.cancel()
	}
})


ServerEvents.recipes(event => {
	let remove = [

		// Removed because all got new Recipes
		'gtceu:flint_pickaxe',
		'gtceu:flint_shovel',
		'gtceu:flint_axe',
		'gtceu:flint_knife',
		'gtceu:flint_sword',
		'gtceu:flint_hoe',
		'minecraft:packed_mud',
		'minecraft:mud_bricks',
		'minecraft:campfire',
		'minecraft:crafting_table',
		'minecraft:furnace',
		'minecraft:blast_furnace',
		'minecraft:smoker',
		'create:andesite_alloy',
		'create:hand_crank'
	]

	remove.forEach( item => 
		event.remove({output: item})
	)

	event.shaped(
		Item.of('kubejs:fire_starter'),
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

	event.shaped(
		Item.of('kubejs:flint_pickaxe_head'),
			[
				'AA',
				'BA'
			],
			{
				A:'minecraft:flint',
				B:'#forge:tools/knives'
			}
	)

	event.shaped(
		Item.of('kubejs:flint_axe_head'),
			[
				'AB',
				'AA'
			],
			{
				A:'minecraft:flint',
				B:'#forge:tools/knives'
			}
	)
	
	event.shaped(
		Item.of('kubejs:flint_shovel_head'),
			[
				' A',
				' B',
			],
			{
				A:'minecraft:flint',
				B:'#forge:tools/knives'
			}
	)
	event.shaped(
		Item.of('kubejs:flint_sword_head'),
			[
				' A',
				'BA',
			],
			{
				A:'minecraft:flint',
				B:'#forge:tools/knives'
			}
	)

	event.shaped(
		Item.of('kubejs:flint_hoe_head'),
			[
				'AA',
				' B',
			],
			{
				A:'minecraft:flint',
				B:'#forge:tools/knives'
			}
	)


	event.shaped(
		Item.of('gtceu:flint_knife', '{DisallowContainerItem:0,GT.Behaviours:{},GT.Tool:{AttackDamage:1.0f,AttackSpeed:3.0f,Damage:0,MaxDamage:50},HideFlags:2,Enchantments:[{id:"minecraft:fire_aspect", "lvl": 2}]}'),
			[
				' A',
				'B ',
			],
			{
				B:'minecraft:stick',
				A:'minecraft:flint'
			}
	)


	event.shaped(
		Item.of('gtceu:flint_pickaxe', '{DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:2.0f,AttackSpeed:-1.8f,Damage:0,HarvestLevel:1,MaxDamage:63,ToolSpeed:5.5f},HideFlags:2}'),
			[
				'AC',
				'B ',
			],
			{
				A:'farmersdelight:rope',
				B:'minecraft:stick',
				C:'kubejs:flint_pickaxe_head'
			}
	)
	
	event.shaped(
		Item.of('gtceu:flint_axe', '{DisallowContainerItem:0b,GT.Behaviours:{DisableShields:1b,TreeFelling:0b},GT.Tool:{AttackDamage:4.0f,AttackSpeed:-4.2f,Damage:0,HarvestLevel:2,MaxDamage:63,ToolSpeed:3.5f},HideFlags:2}'),
			[
				'AC',
				'B ',
			],
			{
				A:'farmersdelight:rope',
				B:'minecraft:stick',
				C:'kubejs:flint_axe_head'
			}
	)
	
	event.shaped(
		Item.of('gtceu:flint_shovel', '{DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:2.5f,AttackSpeed:-3.0f,Damage:0,HarvestLevel:2,MaxDamage:63,ToolSpeed:5.5f},HideFlags:2}'),
			[
				'AC',
				'B ',
			],
			{
				A:'farmersdelight:rope',
				B:'minecraft:stick',
				C:'kubejs:flint_shovel_head'
			}
	)

	event.shaped(
		Item.of('gtceu:flint_sword', '{DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:4.0f,AttackSpeed:-2.4f,Damage:0,MaxDamage:63},HideFlags:2,Enchantments:[{id:"minecraft:fire_aspect", "lvl": 2}]}'),
			[
				'AC',
				' B',
			],
			{
				A:'farmersdelight:rope',
				B:'minecraft:stick',
				C:'kubejs:flint_sword_head'
			}
	)
	
	event.shaped(
		Item.of('gtceu:flint_hoe', '{DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:0.0f,AttackSpeed:-1.0f,Damage:0,MaxDamage:63},HideFlags:2}'),
			[
				'AC',
				'B ',
			],
			{
				A:'farmersdelight:rope',
				B:'minecraft:stick',
				C:'kubejs:flint_hoe_head'
			}
	)

	event.shaped(
		Item.of('minecraft:campfire'),
			[
				'CS',
				'L ',
			],
			{
				C:'farmersdelight:canvas',
				S:'minecraft:string',
				L:'#minecraft:logs'
			}
	)

	event.shaped(
		Item.of('gtceu:empty_wooden_form'),
		[
			'FP',
			'PF'
		],
		{
			P: '#minecraft:planks',
			F: 'minecraft:flint'
		}
	)

	event.shapeless(
		Item.of('gtceu:compressed_clay'),
			[
				'minecraft:clay_ball',
				'gtceu:brick_wooden_form'
			]
	).keepIngredient('gtceu:brick_wooden_form')

	event.shaped(
		Item.of('kubejs:block_wooden_form'),
			[
				'A',
				'B',
			],
			{
				A:'gtceu:empty_wooden_form',
				B:'#forge:tools/knives'
			}
	)

	event.shapeless(
		Item.of('minecraft:clay'),
			[
				'3x gtceu:compressed_clay',
				'kubejs:block_wooden_form'
			]
	).keepIngredient('kubejs:block_wooden_form')

	event.shapeless(
		Item.of('ceramicbucket:unfired_clay_bucket'),
			[
				'3x gtceu:compressed_clay',
				'#forge:tools/knives',
			]
	)

	event.shapeless(
		Item.of('minecraft:mud', 3),
			[
				Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').strongNBT(),
				'3x minecraft:dirt'
			]
	)

	event.shapeless(
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
	)

	event.shapeless(
		Item.of('kubejs:mud_brick'),
			[
				'minecraft:packed_mud',
				'gtceu:brick_wooden_form'
			]
	).keepIngredient('gtceu:brick_wooden_form')

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

	event.campfireCooking('minecraft:charcoal', '#minecraft:logs').cookingTime(200).xp(0.15)
	event.campfireCooking('ceramicbucket:ceramic_bucket', 'ceramicbucket:unfired_clay_bucket').cookingTime(200).xp(0.3)

	event.shaped(
		Item.of('gbthcore:bloomery'),
		[
			'MO',
			'MC'
		],
		{
			M: 'minecraft:mud_bricks',
			O: 'minecraft:charcoal',
			C: 'minecraft:campfire'
		}
	)

	event.shaped(
		Item.of('kubejs:nugget_wooden_form'),
		[
			'FK'
		],
		{
			F: 'gtceu:empty_wooden_form',
			K: '#forge:tools/knives'
		}
	)

	event.shaped(
		Item.of('kubejs:stone_hammer'),
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
	
	createBloomeryMetalworkingRecipe('minecraft:copper_ingot', 'kubejs:copper_bloom', 'gtceu:brick_wooden_form')
	createBloomeryMetalworkingRecipe('9x gtceu:copper_nugget', 'kubejs:copper_bloom', 'kubejs:nugget_wooden_form')
	createBloomeryMetalworkingRecipe('gtceu:tin_ingot', 'kubejs:tin_bloom', 'gtceu:brick_wooden_form')
	createBloomeryMetalworkingRecipe('9x gtceu:tin_nugget', 'kubejs:tin_bloom', 'kubejs:nugget_wooden_form')
	createBloomeryMetalworkingRecipe('gtceu:bronze_ingot', 'kubejs:bronze_bloom', 'gtceu:brick_wooden_form')
	createBloomeryMetalworkingRecipe('9x gtceu:bronze_nugget', 'kubejs:bronze_bloom', 'kubejs:nugget_wooden_form')
	createBloomeryMetalworkingRecipe('gtceu:wrought_iron_ingot', 'kubejs:wrought_iron_bloom', 'gtceu:brick_wooden_form')
	createBloomeryMetalworkingRecipe('9x gtceu:wrought_iron_nugget', 'kubejs:wrought_iron_bloom', 'kubejs:nugget_wooden_form')

	function createBloomeryMetalworkingRecipe(output, input, form) {
		event.shapeless(
			Item.of(output),
			[
				form,
				'kubejs:stone_hammer',
				input
			]
		).keepIngredient(form).damageIngredient('kubejs:stone_hammer')
	}

	event.shapeless(
		Item.of('create:andesite_alloy', 9),
		[
			'create:andesite_alloy_block'
		]
	)

	event.shaped(
		Item.of('create:andesite_alloy'),
		[
			'AN',
			'NA'
		],
		{
			A: 'minecraft:andesite',
			N: 'gtceu:bronze_nugget'
		}
	)

	event.shaped(
		Item.of('create:andesite_alloy'),
		[
			'NA',
			'AN'
		],
		{
			A: 'minecraft:andesite',
			N: 'gtceu:bronze_nugget'
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
		Item.of('create:hand_crank'),
		[
			'TTT',
			'  A'
		],
		{
			A: 'create:andesite_alloy',
			T: 'gtceu:treated_wood_planks'
		}
	)

	event.campfireCooking('gtceu:coke_oven_brick', 'gtceu:compressed_coke_clay').cookingTime(200).xp(0.3)

	event.replaceInput('gtceu:shaped/coke_oven', 'gtceu:iron_plate', 'gtceu:wrought_iron_plate')

	event.shaped(
		Item.of('gtceu:treated_wood_planks', 8),
		[
			'PPP',
			'PBP',
			'PPP'
		],
		{
			P: '#minecraft:planks',
			B: Item.of('ceramicbucket:ceramic_bucket','{Fluid:{Amount:1000,FluidName:"gtceu:creosote"}}').strongNBT()
		}
	)

	//Temp
	event.remove({type: 'minecraft:smelting', output: 'gtceu:wrought_iron_nugget'})
	event.smelting('minecraft:iron_nugget', 'gtceu:wrought_iron_nugget')
	event.campfireCooking('minecraft:iron_nugget', 'gtceu:wrought_iron_nugget').cookingTime(200)
})