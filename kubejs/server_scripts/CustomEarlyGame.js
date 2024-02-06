

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
				' A',
			],
			{
				A:'minecraft:flint'
			}
	)

	event.shaped(
		Item.of('kubejs:flint_axe_head', 1),
			[
				'AA',
				'A ',
			],
			{
				A:'minecraft:flint'
			}
	)
	
	event.shaped(
		Item.of('kubejs:flint_shovel_head', 1),
			[
				' A',
				' A',
			],
			{
				A:'minecraft:flint'
			}
	)


	event.shaped(
		Item.of('gtceu:flint_pickaxe', '{DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:2.0f,AttackSpeed:-2.8f,Damage:0,HarvestLevel:2,MaxDamage:63,ToolSpeed:5.5f},HideFlags:2}'),
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
		Item.of('gtceu:flint_axe', '{DisallowContainerItem:0b,GT.Behaviours:{DisableShields:1b,TreeFelling:1b},GT.Tool:{AttackDamage:6.0f,AttackSpeed:-3.2f,Damage:0,HarvestLevel:2,MaxDamage:63,ToolSpeed:3.5f},HideFlags:2}'),
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