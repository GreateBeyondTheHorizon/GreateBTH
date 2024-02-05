ServerEvents.recipes(event => {
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
})
