//priority: 0
//priority: 0

ServerEvents.recipes(event => {
	
	// #region removal
	
	event.remove({ output: 'minecraft:netherite_ingot' })
	event.remove({ output: '#minecraft:planks' })
	event.remove({ output: 'minecraft:stick' })
	event.remove({ output: 'minecraft:chest' })
	event.remove({ output: [/(.*)a(.*):(.*)_hoe/,/(.*)a(.*):(.*)_shovel/,/(.*)a(.*):(.*)_pickaxe/,/(.*)a(.*):(.*)_sword/,/(.*)a(.*):(.*)_axe/,]})
	
var planks = ['minecraft:acacia_planks', 'minecraft:oak_planks', 'minecraft:birch_planks', 'minecraft:spruce_planks','minecraft:dark_oak_planks', 'minecraft:mangrove_planks', 'minecraft:jungle_planks', 'minecraft:warped_planks', 'minecraft:crimson_planks', 'gtceu:rubber_planks'];
var logs = ['#minecraft:acacia_logs', '#minecraft:oak_logs', '#minecraft:birch_logs', '#minecraft:spruce_logs', '#minecraft:dark_oak_logs', '#minecraft:mangrove_logs', '#minecraft:jungle_logs', '#minecraft:warped_stems','#minecraft:crimson_stems', 'gtceu:rubber_log'  ]	

//addition
	var i = 0;
	
    var j = 0;

	while (i < planks.length){
		event.shapeless( 
			Item.of(planks[i], 2),
			[Item.of(logs[i], 1)]
		)
		event.shaped(
        Item.of('minecraft:stick', 2),
        [ 
            'A  ', 
            'A  ',
            '   '  
        ],
        {
            A: planks[i]
        }
    )
		event.shapeless(
			Item.of(planks[i], 4),
			['#forge:tools/saws',
			logs[i]
			]
		).damageIngredient(Item.of('#forge:tools/saws'))
		


		event.shapeless(
			Item.of('minecraft:stick', 4),
			['#forge:tools/files',
			planks[i]
			]
		).damageIngredient(Item.of('#forge:tools/files'))
		
		
		event.recipes.createCutting(Item.of(
		planks[i], 6),
		logs[i], ).processingTime(20)
		
		event.shapeless(
			Item.of(planks[i], 4),
			['#forge:tools/saws',
			logs[i]
			]
		).damageIngredient(Item.of('#forge:tools/saws'))
		i++

		
	}
	
	event.shaped(
	Item.of('minecraft:chest'),
	[
		'CBC',
		'BDB',
		'ABA'
	],
	{
		A:'#minecraft:logs',
		B:'gtceu:wood_plate',
		C:'gtceu:wood_gear',
		D:'gtceu:wood_frame'
	}
	)
            
            event.recipes.shaped(Item.of('minecraft:chest', 1), [
                    'GPG',
                    'PFP',
                    'PPP',
                ], 
                {
                    P: planks[i],
                    F: ['gtceu:wood_frame', 'gtceu:treated_wood_frame'],
                    G: 'gtceu:wood_gear'
                }
            )
            i++
            
        
})