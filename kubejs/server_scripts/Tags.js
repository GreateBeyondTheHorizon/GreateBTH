ServerEvents.tags('item', event => {
	event.add('minecraft:coals', ['gtceu:raw_coal', 'gtceu:coal_dust'])

	event.add('forge:lenses', 'kubejs:certus_quartz_lens')
	event.add('forge:lenses/certus', 'kubejs:certus_quartz_lens')
	event.add('forge:armors', /ad_astra:jet(.*)/)
	event.add('forge:armors', /ad_astra:(.*)space(.*)/)

	event.add('kubejs:fireproof_wood', ['minecraft:warped_stem', 'minecraft:stripped_warped_stem', 'minecraft:stripped_warped_hyphae', 'minecraft:warped_hyphae', 'minecraft:crimson_stem', 'minecraft:stripped_crimson_stem', 'minecraft:stripped_crimson_hyphae', 'minecraft:crimson_hyphae'])

	event.add('gbth:forms', ['kubejs:block_wooden_form', 'kubejs:nugget_wooden_form', 'gtceu:brick_wooden_form'])
	event.add('gbth:blooms', ['kubejs:copper_bloom', 'kubejs:tin_bloom','kubejs:bronze_bloom', 'kubejs:wrought_iron_bloom'])
	event.add('gbth:copper_bloom_inputs', ['#forge:raw_materials/copper', '#forge:raw_materials/chalcopyrite', '#forge:raw_materials/tetrahedrite', '#forge:raw_materials/bornite', '#forge:raw_materials/chalcocite', '#forge:raw_materials/malachite'])
	event.add('gbth:tin_bloom_inputs', ['#forge:raw_materials/tin', '#forge:raw_materials/cassiterite', '#forge:raw_materials/cassiterite_sand'])
	event.add('gbth:wrought_iron_bloom_inputs', ['#forge:raw_materials/iron', '#forge:raw_materials/pyrite', '#forge:raw_materials/magnetite', '#forge:raw_materials/hematite', '#forge:raw_materials/goethite', '#forge:raw_materials/yellow_limonite', '#forge:raw_materials/basaltic_mineral_sand', '#forge:raw_materials/granitic_mineral_sand'])
	event.add('gbth:sandpaper_bases', ['create:sand_paper', 'create:red_sand_paper'])
	event.add('gbth:stoves', ['farmersdelight:stove', 'nethersdelight:blackstone_stove', '#forge:campfires'])
	event.add('gbth:sleeping_bags', ['sleeping_bags:white_sleeping_bag', 'sleeping_bags:orange_sleeping_bag', 'sleeping_bags:magenta_sleeping_bag', 'sleeping_bags:light_blue_sleeping_bag', 'sleeping_bags:yellow_sleeping_bag', 'sleeping_bags:lime_sleeping_bag', 'sleeping_bags:pink_sleeping_bag', 'sleeping_bags:gray_sleeping_bag', 'sleeping_bags:light_gray_sleeping_bag', 'sleeping_bags:cyan_sleeping_bag', 'sleeping_bags:purple_sleeping_bag', 'sleeping_bags:blue_sleeping_bag', 'sleeping_bags:brown_sleeping_bag', 'sleeping_bags:green_sleeping_bag', 'sleeping_bags:red_sleeping_bag', 'sleeping_bags:black_sleeping_bag'])

	event.add('c:black_dyes', ['#forge:dyes/black'])
	event.add('c:blue_dyes', ['#forge:dyes/blue'])
	event.add('c:brown_dyes', ['#forge:dyes/brown'])
	event.add('c:cyan_dyes', ['#forge:dyes/cyan'])
	event.add('c:gray_dyes', ['#forge:dyes/gray'])
	event.add('c:green_dyes', ['#forge:dyes/green'])
	event.add('c:light_blue_dyes', ['#forge:dyes/light_blue'])
	event.add('c:light_gray_dyes', ['#forge:dyes/light_gray' ])
	event.add('c:lime_dyes', ['#forge:dyes/lime'])
	event.add('c:magenta_dyes', ['#forge:dyes/magenta'])
	event.add('c:orange_dyes', ['#forge:dyes/orange'])
	event.add('c:pink_dyes', ['#forge:dyes/pink'])
	event.add('c:purple_dyes', ['#forge:dyes/purple'])
	event.add('c:red_dyes', ['#forge:dyes/red'])
	event.add('c:white_dyes', ['#forge:dyes/white'])
	event.add('c:yellow_dyes', ['#forge:dyes/yellow'])

	event.add('curios:head', ['gtceu:face_mask'])

	event.add('curios:arms', ['gtceu:rubber_gloves'])

	event.remove('create:sandpaper', ['create:sand_paper', 'create:red_sand_paper'])
	
	event.remove('minecraft:planks', 'gtceu:treated_wood_planks')
})

ServerEvents.tags('worldgen/biome', event => {
	event.remove('terralith:has_structure/spire', ['minecraft:frozen_river'])
})

ServerEvents.tags('fluid', event => {
	event.remove('forge:oxygen', ['ad_astra:oxygen'])
})