//Changes the output of grass to have fiber as new Loot
LootJS.modifiers((event) => {
    event
        .addBlockLootModifier('minecraft:grass')
        .randomChance(0.5)
        .addLoot("kubejs:fiber");

	event
		.addBlockLootModifier('minecraft:campfire')
		.removeLoot('minecraft:charcoal')
		.addLoot("2x minecraft:stick");

	event
        .addBlockLootModifier("#minecraft:leaves")
        .matchMainHand('minecraft:flint')
        .addLoot('farmersdelight:straw');
});

BlockEvents.placed('minecraft:campfire', (event) => {
    event.block.set('minecraft:campfire', {lit:'false'})
});


BlockEvents.rightClicked(event => {
	if(event.block.id === 'minecraft:campfire' && event.item.id === 'kubejs:fire_starter') {			
		var mainHandItem = event.player.getMainHandItem().getDamageValue()

		if(mainHandItem < event.item.maxDamage){
			mainHandItem = mainHandItem + 1 
			event.player.getMainHandItem().setDamageValue(mainHandItem)
			event.block.set('minecraft:campfire', {lit:'true'})
		}
		else{
			event.entity.mainHandItem = "minecraft:air"
		}	
	}
})

ServerEvents.recipes(event => {

	event.shaped(
		Item.of('kubejs:fire_starter', 1),
			[
				'AC',
				'B ',
			],
			{
				A:'farmersdelight:rope',
				B:'minecraft:stick',
				C:'minecraft:flint'
			}
	)

	event.shaped(
		Item.of('kubejs:flint_pickaxe_head', 1),
			[
				'AA',
				'BA',
			],
			{
				A:'minecraft:flint',
				B:'#forge:tools/knives'
			}
	)

	event.shaped(
		Item.of('kubejs:flint_axe_head', 1),
			[
				'AA',
				'AB',
			],
			{
				A:'minecraft:flint',
				B:'#forge:tools/knives'
			}
	)
	
	event.shaped(
		Item.of('kubejs:flint_shovel_head', 1),
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
		Item.of('kubejs:flint_sword_head', 1),
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
		Item.of('kubejs:flint_hoe_head', 1),
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
		Item.of('gtceu:flint_knife', '{DisallowContainerItem:0,GT.Behaviours:{},GT.Tool:{AttackDamage:1.0f,AttackSpeed:3.0f,Damage:0,MaxDamage:50},HideFlags:2}'),
			[
				'AC',
				'B ',
			],
			{
				A:'farmersdelight:rope',
				B:'minecraft:stick',
				C:'minecraft:flint'
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
		Item.of('gtceu:flint_sword', '{DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:4.0f,AttackSpeed:-2.4f,Damage:0,MaxDamage:63},HideFlags:2}'),
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
		Item.of('minecraft:campfire', ),
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
		Item.of('gtceu:compressed_clay', 1),
			[
				'AA',
				'B ',
			],
			{
				A:'minecraft:clay_ball',
				B:'gtceu:brick_wooden_form'
			}
	).keepIngredient('gtceu:brick_wooden_form')

	event.shaped(
		Item.of('kubejs:block_wooden_form'),
			[
				'A ',
				'B ',
			],
			{
				A:'gtceu:empty_wooden_form',
				B:'#forge:tools/knives'
			}
	).keepIngredient('gtceu:empty_wooden_form')

	event.shaped(
		Item.of('minecraft:clay', 1),
			[
				'AA',
				'BA',
			],
			{
				A:'gtceu:compressed_clay',
				B:'kubejs:block_wooden_form'
			}
	).keepIngredient('kubejs:block_wooden_form')

	event.shaped(
		Item.of('ceramicbucket:unfired_clay_bucket', 1),
			[
				'B ',
				'AA',
			],
			{
				A:'minecraft:clay',
				B:'#forge:tools/knives'
			}
	)

	event.shaped(
		Item.of('minecraft:mud', 3),
			[
				'BB',
				'BA',
			],
			{
				A:Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').strongNBT(),
				B:'minecraft:dirt'
			}
	)

	event.shaped(
		Item.of('minecraft:packed_mud', 2),
			[
				'BA',
				'A '
			],
			{
				A:'minecraft:wheat',
				B:'minecraft:mud'
			}
	)

	event.shaped(
		Item.of('kubejs:mud_brick', 1),
			[
				'AB'
			],
			{
				A:'minecraft:packed_mud',
				B:'gtceu:brick_wooden_form'
			}
	).keepIngredient('gtceu:brick_wooden_form')

	event.shaped(
		Item.of('minecraft:mud_bricks', 1),
			[
				'AA',
				'AA'
			],
			{
				A:'kubejs:mud_brick',
			}
	)

	event.campfireCooking('ceramicbucket:ceramic_bucket', 'ceramicbucket:unfired_clay_bucket')

})