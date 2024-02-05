ServerEvents.recipes(event => {
	event.recipes.createMechanicalCrafting(
		Item.of('ad_astra:netherite_space_helmet', 1),
		[
			'AAAAAAA',
			'ABBBBBA',
			'ABCCCBA',
			'AB C BA',
			'AB D BA'
		],
		{
			A: 'gtceu:tungsten_carbide_plate',
			B: 'gtceu:tungsten_steel_plate',
			C: 'kubejs:netherite_plate',
			D: 'ad_astra:space_helmet'
		}
	)
 	event.recipes.createMechanicalCrafting(
		Item.of('ad_astra:netherite_space_suit', 1),
		[
			'ABBBDBBBA',
			'ABBCCCBBA',
			'  ABCBA  ',
 			'  ABCBA  ',
 			'  ABBBA  ',
 			'  AAAAA  '
		],
		{
			A: 'gtceu:tungsten_carbide_plate',
			B: 'gtceu:tungsten_steel_plate',
 			C: 'kubejs:netherite_plate',
 			D: 'ad_astra:space_suit'
		}
	)
 	event.recipes.createMechanicalCrafting(
		Item.of('ad_astra:netherite_space_pants', 1),
		[
 			'AAAAAA',
 			'ABBBBA',
			'ABCCBA',
			'AB DBA',
			'AB  BA',
 			'AB  BA',
 			'AB  BA'
		],
		{
			A: 'gtceu:tungsten_carbide_plate',
 			B: 'gtceu:tungsten_steel_plate',
 			C: 'kubejs:netherite_plate',
 			D: 'ad_astra:space_pants'
		}
	)
 	event.recipes.createMechanicalCrafting(
		Item.of('ad_astra:netherite_space_boots'),
		[
 			' ABA ABA ',
			' ABA ABA ',
			' ABA ABA ',
			' ABA ABA ',
 			'CAA D AAC'
		],
		{
			A: 'gtceu:tungsten_carbide_plate',
 			B: 'gtceu:tungsten_steel_plate',
 			C: 'kubejs:netherite_plate',
 			D: 'ad_astra:space_boots'
		}
	)



	event.shaped(
		Item.of('ad_astra:netherite_space_helmet', 1),
		[
			'AAA',
			'ABA',
			'ACA'
		],
		{
			A: 'gtceu:double_tungsten_carbide_plate',
			B: 'gtceu:laminated_glass',
			C: 'minecraft:netherite_helmet'
		}
	)
	event.shaped(
	Item.of('ad_astra:netherite_space_suit', 1),
		[
			'ABA',
			'ACA',
			'AAA'
		],
		{
			A: 'gtceu:double_tungsten_carbide_plate',
			B: 'minecraft:netherite_chestplate',
			C: 'gtceu:tungsten_steel_drum'
		}
	)
	event.shaped(
	Item.of('ad_astra:netherite_space_pants', 1),
		[
			'AAA',
			'ABA',
			'A A'
		],
		{
			A: 'gtceu:double_tungsten_carbide_plate',
			B: 'minecraft:netherite_leggings'
		}
	)
	event.shaped(
		Item.of('ad_astra:netherite_space_boots', 1),
		[
			'ABA',
			'A A',
			'   '
		],
		{
			A: 'gtceu:double_tungsten_carbide_plate',
			B: 'minecraft:netherite_boots'
		}
	)
})
