ServerEvents.recipes(event => {
	event.remove({ output: 'ad_astra:tier_1_rocket' })
	event.remove({ output: 'ad_astra:tier_2_rocket' })
	event.remove({ output: 'ad_astra:tier_3_rocket' })
	event.remove({ output: 'ad_astra:tier_4_rocket' })
	event.custom({
		type: 'ad_astra:nasa_workbench',
		ingredients: [
			{
				ingredient: {
					item: 'kubejs:stainless_steel_cone',
				},
			},
			{
				ingredient: {
					item: 'gtceu:stainless_steel_block',
				},
			},
			{
				ingredient: {
					item: 'gtceu:stainless_steel_block',
				},
			},
			{
				ingredient: {
					item: 'gtceu:stainless_steel_block',
				},
			},
			{
				ingredient: {
					item: 'gtceu:stainless_steel_block',
				},
			},
			{
				ingredient: {
					item: 'gtceu:stainless_steel_block',
				},
			},
			{
				ingredient: {
					item: 'gtceu:stainless_steel_block',
				},
			},
			{
				ingredient: {
					item: 'kubejs:stainless_steel_fin',
				},
			},
			{
				ingredient: {
					item: 'gtceu:hv_super_tank',
				},
			},
			{
				ingredient: {
					item: 'gtceu:hv_super_tank',
				},
			},
			{
				ingredient: {
					item: 'kubejs:stainless_steel_fin',
				},
			},
			{
				ingredient: {
					item: 'kubejs:stainless_steel_fin',
				},
			},
			{
				ingredient: {
					item: 'kubejs:stainless_steel_engine',
				},
			},
			{
				ingredient: {
					item: 'kubejs:stainless_steel_fin',
				},
			},
		],
		output: 'ad_astra:tier_1_rocket',
	})
})
