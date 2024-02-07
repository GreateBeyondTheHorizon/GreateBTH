ServerEvents.recipes( event => {
	event.remove({ output:'ad_astra:rocket_fin' })
	event.remove({ output:/ad_astra:(.*)engine/ })
	event.remove({ output:'ad_astra:rocket_nose_cone' })
	event.remove({ type: 'ad_astra:compressing' })

	//stainless steel
	event.shaped(
	Item.of('kubejs:stainless_steel_engine', 1),
		[
			'AAA',
			' B ',
			'DCD'
		],
		{
			A:'gtceu:double_stainless_steel_plate',
			B:'gtceu:stainless_steel_frame',
			C:'gtceu:stainless_steel_rotor',
			D:'#gtceu:circuits/hv'
		}
	)
	event.shaped(	
		Item.of('kubejs:stainless_steel_fin', 1),
		[
			' A ',
			'AAA',
			'A A'
		],
		{
			A:'gtceu:double_stainless_steel_plate'
		}
	)
	event.shaped(
		Item.of('kubejs:stainless_steel_cone', 1),
		[
			'   ',
			' A ',
			'AAA'
		],
		{
			A:'gtceu:double_stainless_steel_plate',
		}
	)
	
	//tungsten steel/carbide
	event.shaped(
		Item.of('kubejs:tungsten_steel_engine', 1),
		[
			'AAA',
			' B ',
			'DCD'
		],
		{
			A:'gtceu:double_tungsten_steel_plate',
			B:'gtceu:tungsten_steel_frame',
			C:'gtceu:tungsten_steel_rotor',
			D:'#gtceu:circuits/ev'
		}
	)
	event.shaped(
		Item.of('kubejs:tungsten_steel_fin', 1),
		[
			' A ',
			'AAA',
			'A A'
		],
		{
			A:'gtceu:double_tungsten_steel_plate'
		}
	)
	event.shaped(
		Item.of('kubejs:tungsten_steel_cone', 1),
		[
			'   ',
			' A ',
			'AAA'
		],
		{
			A:'gtceu:double_tungsten_carbide_plate'
		}
	)
	
	// HSS-E
	event.shaped(
		Item.of('kubejs:hsse_engine', 1),
		[
			'AAA',
			' B ',
			'DCD'
		],
		{
			A:'gtceu:double_hsse_plate',
			B:'gtceu:hsse_frame',
			C:'kubejs:hsse_rotor',
			D:'#gtceu:circuits/iv'
		}
	)
	event.shaped(
		Item.of('kubejs:hsse_fin', 1),
		[
			' A ',
			'AAA',
			'A A'
		],
		{
			A:'gtceu:double_hsse_plate'
		}
	)
	event.shaped(
		Item.of('kubejs:hsse_cone'),
		[
			'   ',
			' A ',
			'AAA'
		],
		{
			A:'gtceu:double_hsse_plate'
		}
	)
	
	// Trinium
	event.shaped(
		Item.of('kubejs:trinium_engine', 1),
		[
			'AAA',
			' B ',
			'DCD'
		],
		{
			A:'gtceu:double_trinium_plate',
			B:'kubejs:trinium_frame',
			C:'kubejs:trinium_rotor',
			D:'#gtceu:circuits/luv'
		}
	)
	event.shaped(
		Item.of('kubejs:trinium_fin'),
		[
			' A ',
			'AAA',
			'A A'
		],
		{
			A:'gtceu:double_trinium_plate'
		}
	)
	event.shaped(
		Item.of('kubejs:trinium_cone'),
		[
			'   ',
			' A ',
			'AAA'
		],
		{
			A:'gtceu:double_trinium_plate'
		}
	)

	event.replaceInput({ input: 'ad_astra:steel_rod' }, 'ad_astra:steel_rod', 'gtceu:steel_rod')
	event.replaceInput({ input: 'ad_astra:steel_plate' }, 'ad_astra:steel_plate', 'gtceu:steel_plate')
	event.replaceInput({ input: 'ad_astra:steel_ingot' }, 'ad_astra:steel_ingot', 'gtceu:steel_ingot')
	event.replaceInput({ input: 'ad_astra:iron_rod' }, 'ad_astra:iron_rod', 'gtceu:iron_rod')
	event.replaceInput({ input: 'ad_astra:iron_plate' }, 'ad_astra:iron_plate', 'gtceu:iron_plate')

	//// Rockets ////
	
	// Tier 1 Rocket
	event.remove({ id: 'ad_astra:nasa_workbench/tier_1_rocket_from_nasa_workbench' })
	event.custom({
		type: 'ad_astra:nasa_workbench',
		ingredients: [
			{
				item: 'kubejs:stainless_steel_cone'
			},
			{
				item: 'gtceu:stainless_steel_block'
			},
			{
				item: 'gtceu:stainless_steel_block'
			},
			{
				item: 'gtceu:stainless_steel_block'
			},
			{
				item: 'gtceu:stainless_steel_block'
			},
			{
				item: 'gtceu:stainless_steel_block'
			},
			{
				item: 'gtceu:stainless_steel_block'
			},
			{
				item: 'kubejs:stainless_steel_fin'
			},
			{
				item: 'gtceu:hv_super_tank'
			},
			{
				item: 'gtceu:hv_super_tank'
			},
			{
				item: 'kubejs:stainless_steel_fin'
			},
			{
				item: 'kubejs:stainless_steel_fin'
			},
			{
				item: 'kubejs:stainless_steel_engine'
			},
			{
				item: 'kubejs:stainless_steel_fin'
			}
		],
		result: 'ad_astra:tier_1_rocket'
	})
	// Tier 2 Rocket
	event.remove({ id: 'ad_astra:nasa_workbench/tier_2_rocket_from_nasa_workbench' })
	event.custom({
		type: 'ad_astra:nasa_workbench',
		ingredients: [
			{
				item: 'kubejs:tungsten_steel_cone'
			},
			{
				item: 'gtceu:tungsten_carbide_block'
			},
			{
				item: 'gtceu:tungsten_carbide_block'
			},
			{
				item: 'gtceu:tungsten_carbide_block'
			},
			{
				item: 'gtceu:tungsten_carbide_block'
			},
			{
				item: 'gtceu:tungsten_carbide_block'
			},
			{
				item: 'gtceu:tungsten_carbide_block'
			},
			{
				item: 'kubejs:tungsten_steel_fin'
			},
			{
				item: 'gtceu:ev_super_tank'
			},
			{
				item: 'gtceu:ev_super_tank'
			},
			{
				item: 'kubejs:tungsten_steel_fin'
			},
			{
				item: 'kubejs:tungsten_steel_fin'
			},
			{
				item: 'kubejs:tungsten_steel_engine'
			},
			{
				item: 'kubejs:tungsten_steel_fin'
			}
		],
		result: 'ad_astra:tier_2_rocket'
	})
	// Tier 3 Rocket
	event.remove({ id: 'ad_astra:nasa_workbench/tier_3_rocket_from_nasa_workbench' })
	event.custom({
		type: 'ad_astra:nasa_workbench',
		ingredients: [
			{
				item: 'kubejs:hsse_cone'
			},
			{
				item: 'gtceu:hsse_block'
			},
			{
				item: 'gtceu:hsse_block'
			},
			{
				item: 'gtceu:hsse_block'
			},
			{
				item: 'gtceu:hsse_block'
			},
			{
				item: 'gtceu:hsse_block'
			},
			{
				item: 'gtceu:hsse_block'
			},
			{
				item: 'kubejs:hsse_fin'
			},
			{
				item: 'gtceu:iv_quantum_tank'
			},
			{
				item: 'gtceu:iv_quantum_tank'
			},
			{
				item: 'kubejs:hsse_fin'
			},
			{
				item: 'kubejs:hsse_fin'
			},
			{
				item: 'kubejs:hsse_engine'
			},
			{
				item: 'kubejs:hsse_fin'
			}
		],
		result: 'ad_astra:tier_3_rocket'
	})
	// Tier 4 Rocket
	event.remove({ id: 'ad_astra:nasa_workbench/tier_4_rocket_from_nasa_workbench' })
	event.custom({
		type: 'ad_astra:nasa_workbench',
		ingredients: [
			{
				item: 'kubejs:trinium_cone'
			},
			{
				item: 'gtceu:trinium_block'
			},
			{
				item: 'gtceu:trinium_block'
			},
			{
				item: 'gtceu:trinium_block'
			},
			{
				item: 'gtceu:trinium_block'
			},
			{
				item: 'gtceu:trinium_block'
			},
			{
				item: 'gtceu:trinium_block'
			},
			{
				item: 'kubejs:trinium_fin'
			},
			{
				item: 'gtceu:luv_quantum_tank'
			},
			{
				item: 'gtceu:luv_quantum_tank'
			},
			{
				item: 'kubejs:trinium_fin'
			},
			{
				item: 'kubejs:trinium_fin'
			},
			{
				item: 'kubejs:trinium_engine'
			},
			{
				item: 'kubejs:trinium_fin'
			}
		],
		result: 'ad_astra:tier_4_rocket'
	})

	//// Armor ////

	// Jet Suit Helmet
	event.shaped(
		Item.of('ad_astra:jet_suit_helmet', 1),
		[
			'AAA', 
			'ABA', 
		],
		{
			A: 'gtceu:double_hsss_plate',
			B: 'ad_astra:netherite_space_helmet'
		}
	)
	// Jet Suit
	event.shaped(
		Item.of('ad_astra:jet_suit', 1),
		[
			'ABA', 
			'ACA',
			'ADA'  
		],
		{
			A: 'gtceu:double_hsss_plate',
			B: 'ad_astra:netherite_space_suit',
			C: 'gtceu:iv_vanadium_battery',
			D: 'gtceu:iv_quantum_tank'
		}
	)
	// Jet Suit Pants
	event.shaped(
		Item.of('ad_astra:jet_suit_pants', 1),
		[
			'AAA', 
			'ABA',
			'A A'  
		],
		{
			A: 'gtceu:double_hsss_plate',
			B: 'ad_astra:netherite_space_pants'
		}
	)
	// Jet Suit Boots
	event.shaped(
		Item.of('ad_astra:jet_suit_boots', 1),
		[
			'ABA', 
			'A A',
			'   '  
		],
		{
			A: 'gtceu:double_hsss_plate',
			B: 'ad_astra:netherite_space_boots'
		}
	)

	// Space Helmet
	event.shaped(
		Item.of('ad_astra:space_helmet', 1),
			[ 
				'AAA',
				'ABA',
				'ACA'
			],
			{
				A: 'minecraft:white_wool',
				B: 'gtceu:tempered_glass',
				C: 'minecraft:iron_helmet'
			}
	)
	// Space Suit
	event.shaped(
		Item.of('ad_astra:space_suit', 1),
		[ 
			'ABA',
			'ACA',
			'AAA'
		],
		{
			A: 'minecraft:white_wool',
			B: 'minecraft:iron_chestplate',
			C: 'gtceu:steel_drum'
		}
	)
	// Space Pants
	event.shaped(
		Item.of('ad_astra:space_pants', 1),
		[ 
			'AAA',
			'ABA',
			'A A'
		],
		{
			A: 'minecraft:white_wool',
			B: 'minecraft:iron_leggings'
		}
	)
	// Space Boots
	event.shaped(
		Item.of('ad_astra:space_boots', 1),
		[ 
			'ABA',
			'A A',
			'   '
		],
		{
			A: 'minecraft:white_wool',
			B: 'minecraft:iron_boots'
		}
	)

	// Netherite Space Helmet
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
	// Netherite Space Suit
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
	// Netherite Space Pants
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
	// Netherite Space Boots
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
