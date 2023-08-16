//priority: 0

ServerEvents.recipes(event => {
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
	event.remove({ output: 'minecraft:shield' })
	event.remove({ output: '#minecraft:boats' })
	event.remove({ output: 'minecraft:minecart' })

var planks = ['minecraft:acacia_planks', 'minecraft:oak_planks', 'minecraft:birch_planks', 'minecraft:spruce_planks','minecraft:dark_oak_planks', 'minecraft:mangrove_planks', 'minecraft:jungle_planks', 'minecraft:warped_planks', 'minecraft:crimson_planks', 'gtceu:rubber_planks'];
var boats = ['minecraft:acacia_boat', 'minecraft:oak_boat', 'minecraft:birch_boat', 'minecraft:spruce_boat', 'minecraft:dark_oak_boat', 'minecraft:mangrove_boat', 'minecraft:jungle_boat' ]
var chestboats = ['minecraft:acacia_chest_boat', 'minecraft:oak_chest_boat', 'minecraft:birch_chest_boat', 'minecraft:spruce_chest_boat', 'minecraft:dark_oak_chest_boat', 'minecraft:mangrove_chest_boat', 'minecraft:jungle_chest_boat' ]
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
	
	while (j < boats.length){
		event.shaped(
	Item.of(boats[j], 1),
	[
		'ABA',
		'AAA',
		'   '
	],
	{
		A: planks[j],
		B:'#forge:tools/saws'
	}
	)
	
	event.shaped(
	Item.of(chestboats[j], 1),
	[
		' C ',
		'BDB',
		' A '
	],
	{
		A:  boats[j],
		B: 'gtceu:iron_screw',
		C: '#forge:tools/screwdrivers',
		D: 'minecraft:chest'
	}
	)
	
		j++
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
	
	event.shaped(
	Item.of('minecraft:shield'),
	[
		'ABA',
		'AAA',
		' A '
	],
	{
		A: '#minecraft:logs',
		B: 'gtceu:stainless_steel_double_plate'
	}
	)
	
	event.shaped(
	Item.of('minecraft:minecart'),
	[
		'A A',
		'AAA',
		'   '
	],
	{
		A: 'gtceu:steel_double_plate'
	}
	)
	
})