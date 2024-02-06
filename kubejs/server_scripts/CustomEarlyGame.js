

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

BlockEvents.placed('minecraft:campfire', (e) => {
    e.block.set('minecraft:campfire', {lit:'false'})
});


BlockEvents.rightClicked(e => {
	if(e.block.id === 'minecraft:campfire' && e.item.id === 'kubejs:fire_starter') {
		e.block.set('minecraft:campfire', {lit:'true'});
	}
})

ServerEvents.recipes(event => {


	//Removes the default recipes of flint tools the get replaced with new ones
	event.remove({output: 'gtceu:flint_pickaxe'})
	
	event.remove({output:'gtceu:flint_shovel'})

	event.remove({output:'gtceu:flint_axe'})

	event.remove({output:'gtceu:flint_knife'})

	event.remove({output:'gtceu:flint_sword'})
	event.remove({output:'gtceu:flint_hoe'})

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
				B:'gtceu:flint_knife'
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
				B:'gtceu:flint_knife'
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
				B:'gtceu:flint_knife'
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
				B:'gtceu:flint_knife'
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
				B:'gtceu:flint_knife'
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
	
	


})