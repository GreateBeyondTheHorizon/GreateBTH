//priority: 0
//priority: 0

ServerEvents.recipes(event => {
	
	// #region removal
	
	event.remove({ output: 'minecraft:netherite_ingot' })
	event.remove({ output: '#minecraft:planks' })
	event.remove({ output: 'minecraft:stick' })
<<<<<<< HEAD
	event.remove({ output: 'minecraft:chest' })
	
var planks = ['minecraft:acacia_planks', 'minecraft:oak_planks', 'minecraft:birch_planks', 'minecraft:spruce_planks','minecraft:dark_oak_planks', 'minecraft:mangrove_planks', 'minecraft:jungle_planks', 'minecraft:warped_planks', 'minecraft:crimson_planks', 'gtceu:rubber_planks'];
var logs = ['#minecraft:acacia_logs', '#minecraft:oak_logs', '#minecraft:birch_logs', '#minecraft:spruce_logs', '#minecraft:dark_oak_logs', '#minecraft:mangrove_logs', '#minecraft:jungle_logs', '#minecraft:warped_stems','#minecraft:crimson_stems', 'gtceu:rubber_log'  ]	

//addition
	event.shaped(
	Item.of('minecraft:stick', 2),
	[ 
		'A  ', 
		'A  ',
		'   '  
	],
	{
		A: planks[i]
	})
	var i = 0;
=======
    event.remove({ output: 'minecraft:chest'})


    
    
	
	var planks = [
        'minecraft:acacia_planks', 
    'minecraft:oak_planks', 
    'minecraft:birch_planks', 
    'minecraft:spruce_planks',
    'minecraft:dark_oak_planks', 
    'minecraft:mangrove_planks', 
    'minecraft:jungle_planks', 
    'minecraft:warped_planks', 
    'minecraft:crimson_planks', 
    'gtceu:rubber_planks'
    ]
	var logs = [
        '#minecraft:acacia_logs', 
    '#minecraft:oak_logs', 
    '#minecraft:birch_logs', 
    '#minecraft:spruce_logs', 
    '#minecraft:dark_oak_logs', 
    '#minecraft:mangrove_logs', 
    '#minecraft:jungle_logs', 
    '#minecraft:warped_stems',
    '#minecraft:crimson_stems', 
    'gtceu:rubber_log'  
    ]	
	
    // #endregion

	// #region addition
	
	var i = 0;
    var j = 0;

>>>>>>> origin/general-kube-stuff-kstoko23
	while (i < planks.length){
		event.shapeless( 
			Item.of(planks[i], 2),
			[Item.of(logs[i], 1)]
		)
<<<<<<< HEAD
=======
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
>>>>>>> origin/general-kube-stuff-kstoko23
		event.shapeless(
			Item.of(planks[i], 4),
			['#forge:tools/saws',
			logs[i]
			]
		).damageIngredient(Item.of('#forge:tools/saws'))
<<<<<<< HEAD
		
		
=======

>>>>>>> origin/general-kube-stuff-kstoko23
		event.shapeless(
			Item.of('minecraft:stick', 4),
			['#forge:tools/files',
			planks[i]
			]
		).damageIngredient(Item.of('#forge:tools/files'))
<<<<<<< HEAD
		
		
		event.recipes.createCutting(Item.of(
		planks[i], 5),
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
		'ABA',
		'BCB',
		'ABA'
	],
	{
		A:'#minecraft:logs',
		B:'gtceu:wood_plate',
		C:'gtceu:wood_gear'
	}
	)

	
=======

		event.recipes.createCutting(Item.of(
            planks[i], 6),
            logs[i], ).processingTime(20)
            
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
            
        }
	// #endregion
>>>>>>> origin/general-kube-stuff-kstoko23
})