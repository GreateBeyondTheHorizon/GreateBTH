var beesMissingCombs = ['chromium', 'aluminium', 'stainless_steel', 'tungsten_steel', 'naquadah', 'naquadah_alloy', 'rhodium_plated_palladium', 'neutronium']

ServerEvents.recipes(event => {
	event.remove({type: 'productivebees:bottler'})
	event.remove({id: 'productivebees:create/obsidian_dust_to_obsidian'})
	
	Ingredient.of("#productivebees:advanced_beehives").itemIds.forEach(hive => {
		if(hive.indexOf('canvas') != -1) return;
		
		var strippedWood = hive.replace('productivebees', 'chipped').replace('advanced', 'stripped').replace('beehive', 'log')
		event.shaped(hive,
			[ 
				'AAA',
				'EBE',
				'DCD'				
			],
			{
				A:`#${strippedWood}`,
				B:'#gtceu:circuits/lv',
				C:'gtceu:aluminium_plate',
				D:'gtceu:bronze_plate',
				E:'gtceu:potin_gear',      
			}
		)
	})

	//Missing Comb Production
	beesMissingCombs.forEach(material => {
		event.custom({
			type: 'productivebees:advanced_beehive',
			ingredient: `productivebees:${material}`,
			results: [
				{
					item: Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:productivebees:${material}}}`).strongNBT()
				}
			]
		})
	})

	function beeConversion(source, result, item) {
		event.custom({
			type: 'productivebees:bee_conversion',
			source: `productivebees:${source}`,
			result: `productivebees:${result}`,
			item: {
				item: item
			}
		})
	}

	function beeBreeding(parent1, parent2, offspring) {
		event.custom({
			type: 'productivebees:bee_breeding',
			parent1: `productivebees:${parent1}`,
			parent2: `productivebees:${parent2}`,
			offspring: [`productivebees:${offspring}`]
		})
	}

	beeConversion('stainless_steel', 'titanium', 'kubejs:titanium_bee_food')
	beeConversion('aluminium', 'stainless_steel', 'gtceu:stainless_steel_block')
	beeConversion('titanium', 'tungsten', 'gtceu:tungsten_block')
	beeConversion('titanium', 'tungsten_steel', 'gtceu:tungsten_steel_block')
	beeConversion('naquadah', 'rhodium', 'gtceu:rhodium_block')
	beeConversion('steel', 'aluminium', 'gtceu:aluminium_block')
	beeConversion('yttrium', 'neutronium', 'gtceu:nan_certificate')
	beeConversion('yttrium', 'vanadium', 'gtceu:nan_certificate')
	beeConversion('tungsten', 'naquadah', 'gtceu:naquadah_block')
	beeConversion('tungsten_steel', 'naquadah_alloy', 'gtceu:naquadah_alloy_block')
	beeConversion('draconic', 'yttrium', 'gtceu:yttrium_block')
	beeConversion('yttrium', 'europium', 'gtceu:nan_certificate')

	beeBreeding('palladium', 'rhodium', 'rhodium_plated_palladium')
	beeBreeding('diamond', 'iron', 'titanium')
	beeBreeding('titanium', 'ender', 'tungsten')
})