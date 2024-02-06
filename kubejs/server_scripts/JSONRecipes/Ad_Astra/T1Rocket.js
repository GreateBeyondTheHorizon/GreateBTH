ServerEvents.recipes(event => {
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
})
