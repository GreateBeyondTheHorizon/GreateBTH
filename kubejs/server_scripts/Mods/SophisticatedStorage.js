ServerEvents.recipes(event => {
	event.remove({mod: 'sophisticatedstorage'})

    var SophisticatedStorage = {
        storageTierUpgrade: function (tier, pattern, keys) {
            // Chest
            event.custom({
                type: 'sophisticatedstorage:storage_tier_upgrade',
                result: { item: 'sophisticatedstorage:'+tier[1]+'chest' },
                pattern: pattern,
                key: this.toKeyList(keys, 'sophisticatedstorage:'+tier[0]+'chest')
            })
            // Barrel
            event.custom({
                type: 'sophisticatedstorage:storage_tier_upgrade',
                result: { item: 'sophisticatedstorage:'+tier[1]+'barrel' },
                pattern: pattern,
                key: this.toKeyList(keys, 'sophisticatedstorage:'+tier[0]+'barrel')
            })
            // Limited Barrel
            for (let i = 1; i <= 4; i++) {
                event.custom({
                    type: 'sophisticatedstorage:storage_tier_upgrade',
                    result: { item: 'sophisticatedstorage:limited_'+tier[1]+'barrel_'+i },
                    pattern: pattern,
                    key: this.toKeyList(keys, 'sophisticatedstorage:limited_'+tier[0]+'barrel_'+i)
                })
            }
            // Upgrade
            event.custom({
                type: 'sophisticatedstorage:storage_tier_upgrade',
                result: { item: 'sophisticatedstorage:'+this.basicIf(tier[0])+'to_'+tier[1]+'tier_upgrade' },
                pattern: pattern,
                key: this.toKeyList(keys, '#forge:plates/wood')
            })
        },

        toKeyList: function(data, tier) {
            const transformed = {};
            transformed.A = Ingredient.of(tier).toJson()
            for (const key in data) {
              transformed[key] = Ingredient.of(data[key]).toJson()
            }
            return transformed;
        },

        basicIf: function(tier) {
            if (tier == '') {
                return 'basic_'
            }
            return tier
        },

        // Makes Advanced Upgrade Recipes
		makeAdvanced: function(id) {
			event.shaped(
				Item.of('sophisticatedstorage:advanced_'+id, 1),
				[
					'ABA',
					'BCB',
					'ABA'
				],
				{
					A:'#forge:plates/iron',
					B:'#forge:plates/aluminium',
					C:'sophisticatedstorage:'+id, 
				}
			)
		}
    }    

    const woodType = [
        'oak',
        'spruce',
        'birch',
        'jungle',
        'acacia',
        'dark_oak',
        'mangrove',
        'crimson',
        'warped'
    ]

    // Basic Type
    event.shapeless(Item.of('sophisticatedstorage:chest', '{woodType:"oak"}'), ['#forge:chests/wooden', '#gtceu:circuits/ulv'])
    event.shapeless(Item.of('sophisticatedstorage:barrel', '{woodType:"spruce"}'), ['#forge:barrels/wooden', '#gtceu:circuits/ulv'])
    woodType.forEach(wood => {

        // Chest
	    event.shaped(
	    	Item.of('sophisticatedstorage:chest', '{woodType:"'+wood+'"}'),
	    	[
	    		'PPP',
	    		'RER',
	    		'PPP'
	    	],
	    	{
	    		P: 'minecraft:'+wood+'_planks',
	    		E: '#gtceu:circuits/ulv',
	    		R: '#forge:rings/wood'
	    	}
	    )
        // Barrel
	    event.shaped(
	    	Item.of('sophisticatedstorage:barrel', '{woodType:"'+wood+'"}'),
	    	[
	    		'PPP',
	    		'RER',
	    		'PPP'
	    	],
	    	{
	    		P: 'minecraft:'+wood+'_planks',
	    		E: '#gtceu:circuits/ulv',
	    		R: '#forge:rods/long/iron'
	    	}
	    )
        // Limited Barrel
	    event.shaped(
	    	Item.of('sophisticatedstorage:limited_barrel_1', '{woodType:"'+wood+'"}'),
	    	[
	    		'PSP',
	    		'RER',
	    		'PPP'
	    	],
	    	{
	    		P: 'minecraft:'+wood+'_planks',
	    		E: '#gtceu:circuits/ulv',
	    		R: '#forge:screws/iron',
                S: '#forge:plates/wood'
	    	}
	    )
	    event.shaped(
	    	Item.of('sophisticatedstorage:limited_barrel_2', '{woodType:"'+wood+'"}'),
	    	[
	    		'PSP',
	    		'RER',
	    		'PSP'
	    	],
	    	{
	    		P: 'minecraft:'+wood+'_planks',
	    		E: '#gtceu:circuits/ulv',
	    		R: '#forge:screws/iron',
                S: '#forge:plates/wood'
	    	}
	    )
	    event.shaped(
	    	Item.of('sophisticatedstorage:limited_barrel_3', '{woodType:"'+wood+'"}'),
	    	[
	    		'PSP',
	    		'RER',
	    		'SPS'
	    	],
	    	{
	    		P: 'minecraft:'+wood+'_planks',
	    		E: '#gtceu:circuits/ulv',
	    		R: '#forge:screws/iron',
                S: '#forge:plates/wood'
	    	}
	    )
	    event.shaped(
	    	Item.of('sophisticatedstorage:limited_barrel_4', '{woodType:"'+wood+'"}'),
	    	[
	    		'SPS',
	    		'RER',
	    		'SPS'
	    	],
	    	{
	    		P: 'minecraft:'+wood+'_planks',
	    		E: '#gtceu:circuits/ulv',
	    		R: '#forge:screws/iron',
                S: '#forge:plates/wood'
	    	}
	    )
    })
    
    // Iron Tier
	SophisticatedStorage.storageTierUpgrade(
		['','iron_'],
		[
			'PPP',
			'GAG',
			'PPP'
		],
		{
			// A is always the upgraded item
			P: '#forge:plates/steel',
			G: '#forge:gears/steel'
		}
	)
    // Gold Tier
	SophisticatedStorage.storageTierUpgrade(
		['iron_','gold_'],
		[
			'PPP',
			'GAG',
			'PPP'
		],
		{
			P: '#forge:plates/aluminium',
			G: '#forge:gears/aluminium'
		}
	)
    // Diamond Tier
	SophisticatedStorage.storageTierUpgrade(
		['gold_','diamond_'],
		[
			'SPS',
			'GAG',
			'SPS'
		],
		{
			P: '#forge:double_plates/stainless_steel',
            S: '#forge:plates/diamond',
			G: '#forge:gears/stainless_steel'
		}
	)
    // Netherite Tier
	SophisticatedStorage.storageTierUpgrade(
		['diamond_','netherite_'],
		[
			'PSP',
			'GAG',
			'PSP'
		],
		{
			P: '#forge:double_plates/titanium',
            S: '#forge:ingots/netherite',
			G: '#forge:gears/stainless_steel'
		}
	)


    // -- UPGRADES --
	//UPGRADE BASE
	event.shaped(
		Item.of('sophisticatedstorage:upgrade_base', 1),
		[
			'ADA',
			'BCB',
			'ABA'
		],
		{
			A:'minecraft:bricks',
			B:'gtceu:iron_plate',
			C:'gtceu:annealed_copper_plate', 
			D:'#gtceu:circuits/lv'
		}
  	)

	//COMPACTING UPGRADE
	event.shaped(
		Item.of('sophisticatedstorage:compacting_upgrade', 1),
		[
			'ADA',
			'ECE',
			'ABA'
		],
		{
			A:'gtceu:iron_plate',
			B:'#gtceu:circuits/mv',
			C:'sophisticatedstorage:upgrade_base', 
			D:'#forge:storage_blocks/steel',
			E:'minecraft:piston'
		}
  	)
	SophisticatedStorage.makeAdvanced('compacting_upgrade')

	//PICKUP UPGRADE
	event.shaped(
		Item.of('sophisticatedstorage:pickup_upgrade', 1),
		[
			'ADA',
			'ECE',
			'ABA'
		],
		{
			A:'gtceu:iron_plate',
			B:'#gtceu:circuits/mv',
			C:'sophisticatedstorage:upgrade_base', 
			D:'minecraft:sticky_piston',
			E:'gtceu:red_alloy_ingot'
		}
  	)
	  SophisticatedStorage.makeAdvanced('pickup_upgrade')
	
	//VOID UPGRADE
	event.shaped(
		Item.of('sophisticatedstorage:void_upgrade', 1),
		[
			'ADA',
			'ECE',
			'ABA'
		],
		{
			A:'gtceu:iron_plate',
			B:'#gtceu:circuits/mv',
			C:'sophisticatedstorage:upgrade_base', 
			D:'#forge:gems/ender_pearl',
			E:'gtceu:obsidian_plate'
		}
  	)
	SophisticatedStorage.makeAdvanced('void_upgrade')

	//FILTER UPGRADE
	event.shaped(
		Item.of('sophisticatedstorage:filter_upgrade', 1),
		[
			'ADA',
			'ECE',
			'ABA'
		],
		{
			A:'gtceu:iron_plate',
			B:'#gtceu:circuits/mv',
			C:'sophisticatedstorage:upgrade_base', 
			D:'gtceu:item_filter',
			E:'gtceu:red_alloy_ingot'
		}
 	)
	SophisticatedStorage.makeAdvanced('filter_upgrade')

	//FILTER UPGRADE
	event.shaped(
		Item.of('sophisticatedstorage:hopper_upgrade', 1),
		[
			'AHA',
			'BCB',
			'AHA'
		],
		{
			A:'gtceu:iron_plate',
			B:'#gtceu:circuits/mv',
			C:'sophisticatedstorage:upgrade_base', 
			H:'minecraft:hopper'
		}
 	)
	SophisticatedStorage.makeAdvanced('hopper_upgrade')
})