ServerEvents.recipes(event => {
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
})
