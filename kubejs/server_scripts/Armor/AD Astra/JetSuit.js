ServerEvents.recipes(event => {
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
})
