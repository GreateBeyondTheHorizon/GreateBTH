ServerEvents.recipes(event => {
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
})
