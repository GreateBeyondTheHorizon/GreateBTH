ServerEvents.recipes(event => {
 	event.recipes.createMechanicalCrafting(
		Item.of('minecraft:netherite_helmet', 1),
		[
			'AAAAAAA',
 			'ABBBBBA',
			'ABCCCBA',
			'AB C BA',
 			'AB   BA'
		],
		{
			A: 'gtceu:tungsten_carbide_plate',
 			B: 'gtceu:tungsten_steel_plate',
 			C: 'kubejs:netherite_plate'
		}
	)
 	event.recipes.createMechanicalCrafting(
		Item.of('minecraft:netherite_chestplate', 1),
		[
			'ABBB BBBA',
			'ABBCCCBBA',
			'  ABCBA  ',
 			'  ABCBA  ',
 			'  ABBBA  ',
 			'  AAAAA  '
		],
		{
			A: 'gtceu:tungsten_carbide_plate',
 			B: 'gtceu:tungsten_steel_plate',
 			C: 'kubejs:netherite_plate'
		}
	)
 	event.recipes.createMechanicalCrafting(
		Item.of('minecraft:netherite_leggings', 1),
		[
 			'AAAAAA',
 			'ABBBBA',
			'ABCCBA',
			'AB  BA',
			'AB  BA',
 			'AB  BA',
 			'AB  BA'
		],
		{
			A: 'gtceu:tungsten_carbide_plate',
 			B: 'gtceu:tungsten_steel_plate',
 			C: 'kubejs:netherite_plate'
		}
	)
 	event.recipes.createMechanicalCrafting(
		Item.of('minecraft:netherite_boots'),
		[
 			' ABA ABA ',
			' ABA ABA ',
			' ABA ABA ',
			' ABA ABA ',
 			'CAA   AAC'
		],
		{
			A: 'gtceu:tungsten_carbide_plate',
 			B: 'gtceu:tungsten_steel_plate',
 			C: 'kubejs:netherite_plate'
		}
	)
})
