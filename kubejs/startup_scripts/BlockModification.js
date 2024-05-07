let logs = [
'ad_astra:glacian_log',
'gtceu:rubber_log',
'minecraft:acacia_log',
'minecraft:acacia_wood',
'minecraft:birch_log',
'minecraft:birch_wood',
'minecraft:cherry_log',
'minecraft:cherry_wood',
'minecraft:crimson_hyphae',
'minecraft:crimson_stem',
'minecraft:dark_oak_log',
'minecraft:dark_oak_wood',
'minecraft:jungle_log',
'minecraft:jungle_wood',
'minecraft:mangrove_log',
'minecraft:mangrove_wood',
'minecraft:oak_log',
'minecraft:oak_wood',
'minecraft:spruce_log',
'minecraft:spruce_wood',
'minecraft:stripped_acacia_log',
'minecraft:stripped_acacia_wood',
'minecraft:stripped_birch_log',
'minecraft:stripped_birch_wood',
'minecraft:stripped_cherry_log',
'minecraft:stripped_cherry_wood',
'minecraft:stripped_crimson_hyphae',
'minecraft:stripped_crimson_stem',
'minecraft:stripped_dark_oak_log',
'minecraft:stripped_dark_oak_wood',
'minecraft:stripped_jungle_log',
'minecraft:stripped_jungle_wood',
'minecraft:stripped_mangrove_log',
'minecraft:stripped_mangrove_wood',
'minecraft:stripped_oak_log',
'minecraft:stripped_oak_wood',
'minecraft:stripped_spruce_log',
'minecraft:stripped_spruce_wood',
'minecraft:stripped_warped_hyphae',
'minecraft:stripped_warped_stem',
'minecraft:warped_hyphae',
'minecraft:warped_stem'
]

BlockEvents.modification(event => {
	logs.forEach(log => {
		event.modify(log, block => {
			block.destroySpeed = 1
			block.requiresTool = true
		})
	})
})

