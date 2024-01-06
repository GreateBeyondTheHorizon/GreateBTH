
var hives = ['productivebees:advanced_bamboo_beehive', 'productivebees:advanced_cherry_beehive', 
'productivebees:advanced_birch_beehive', 'productivebees:advanced_acacia_beehive', 
'productivebees:advanced_warped_beehive', 'productivebees:advanced_jungle_beehive', 
'productivebees:advanced_dark_oak_beehive', 'productivebees:advanced_mangrove_beehive', 
'productivebees:advanced_snake_block_beehive', 'productivebees:advanced_crimson_beehive',
'productivebees:advanced_oak_beehive', 'productivebees:advanced_spruce_beehive']

var stripedWood = ['minecraft:stripped_bamboo_block', 'minecraft:stripped_cherry_log', 
'minecraft:stripped_birch_wood', 'minecraft:stripped_acacia_log',
'minecraft:stripped_warped_stem', 'minecraft:stripped_jungle_log', 
'minecraft:stripped_dark_oak_log', 'minecraft:stripped_mangrove_log',
'minecraft:prismarine_bricks', 'minecraft:stripped_crimson_stem',
'minecraft:stripped_oak_log', 'minecraft:stripped_spruce_log']


ServerEvents.recipes(event => {
	
	hives.forEach((element) => event.remove({output: element}));
	
	for(let i = 0; i < hives.length; i++){
		event.shaped(
			Item.of(hives[i], 1),
			[ 
				'AAA',
				'EBE',
				'DCD'				
			],
			{
				A:stripedWood[i],
				B:'#forge:circuits/lv',
				C:'gtceu:aluminium_plate',
				D:'gtceu:bronze_plate',
				E:'gtceu:potin_gear',      
			}
		)
	}
});