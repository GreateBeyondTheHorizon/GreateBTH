//priority: 0

ServerEvents.recipes(event => {
	
	//removal
	
	event.remove({ output: 'minecraft:netherite_ingot' })
	event.remove({ output: '#minecraft:planks' })
	event.remove({ output: 'minecraft:stick' })
	
var planks = ['minecraft:acacia_planks', 'minecraft:oak_planks', 'minecraft:birch_planks', 'minecraft:spruce_planks','minecraft:dark_oak_planks', 'minecraft:mangrove_planks', 'minecraft:jungle_planks', 'minecraft:warped_planks', 'minecraft:crimson_planks', 'gtceu:rubber_planks'];
var logs = ['#minecraft:acacia_logs', '#minecraft:oak_logs', '#minecraft:birch_logs', '#minecraft:spruce_logs', '#minecraft:dark_oak_logs', '#minecraft:mangrove_logs', '#minecraft:jungle_logs', '#minecraft:warped_stems','#minecraft:crimson_stems', 'gtceu:rubber_log'  ]	

//addition
	
	var i = 0;
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
		planks[i], 5),
		logs[i], ).processingTime(20)
		i++
	}
})