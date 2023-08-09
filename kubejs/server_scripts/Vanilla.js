//priority: -1

ServerEvents.recipes(event => {
	
	// #region removal
	
	event.remove({ output: 'minecraft:netherite_ingot' })
	event.remove({ output: '#minecraft:planks' })
	event.remove({ output: 'minecraft:stick' })
	event.remove({ output: 'minecraft:chest' })
	event.remove({ output: [/(.*)a(.*):(.*)_hoe/,/(.*)a(.*):(.*)_shovel/,/(.*)a(.*):(.*)_pickaxe/,/(.*)a(.*):(.*)_sword/,/(.*)a(.*):(.*)_axe/,]})
	event.remove({ output: 'minecraft:furnace' })
	event.remove({ output: 'gtceu:stone_gear' })
	event.remove({ output: 'minecraft:crafting_table' })
	event.remove({ output: 'minecraft:blast_furnace' })
	event.remove({ output: 'minecraft:smoker' })
	event.remove({ output: 'minecraft:ender_chest' })
	event.remove({ output: 'minecraft:barrel' })
	
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
		A:'minecraft:flint',
		B:'gtceu:wood_plate',
		C:'gtceu:wood_gear',
		D:'gtceu:wood_frame'
	}
	)
            i++
			event.shaped(Item.of('minecraft:furnace', 1), [
                    'PFP',
                    'FPF',
                    'GFG',
                ], 
                {
                    P: 'gtceu:stone_gear',
                    F: 'minecraft:cobblestone',
                    G: 'gtceu:stone_rod'
                }
            )
			event.shapeless(
			Item.of('gtceu:stone_rod', 2),
				[ 
					'2x minecraft:cobblestone'
				]
)
event.shaped(
	Item.of('minecraft:crafting_table'),
	[
		'AA ',
		'AA ',
		'   '
	],
	{
		A:'#minecraft:logs'
	}
	)
	event.shaped(
	Item.of('minecraft:blast_furnace'),
	[
		'AAA',
		'ABA',
		'CCC'
	],
	{
		A: 'gtceu:invar_plate',
		B: 'minecraft:furnace',
		C: 'minecraft:smooth_stone'
	}
	)
      
event.shaped(Item.of('minecraft:smoker', 1),
		[
			'ABA',
			'BCB',
			'ABA'
		],
		{
			A:'#kubejs:fireproof_wood',
			B:'gtceu:invar_plate',
			C:'minecraft:furnace'
		}
		)	

event.shaped(
	Item.of('minecraft:barrel'),
	[
		'BAB',
		'BDB',
		'BAB'
	],
	{
		A:'minecraft:flint',
		B:'gtceu:wood_plate',
		D:'gtceu:wood_frame'
	}
	)		
	event.shaped('kubejs:flint_saw',
	[
		'AAB',
		'CDB',
		'   '
	],
	{
		A:'minecraft:flint',
		B:'minecraft:stick',
		C:'#forge:tools/files',
		D:'#forge:tools/hammers'
	}
	)
})