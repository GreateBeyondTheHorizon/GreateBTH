ServerEvents.tags('item', event => {
	//#region add item tag
	event.add('ad_astra:aeronos_logs', ['ad_astra:aeronos_cap', 'ad_astra:aeronos_stem'])
	event.add('ad_astra:strophar_logs', ['ad_astra:strophar_cap', 'ad_astra:strophar_stem'])

	event.add('aether:book_of_lore_materials', ['gtceu:ambrosium_gem'])
	event.add('aether:gems/zanite', ['#forge:gems/zanite'])
	event.add('aether:processed/gravitite', ['#forge:storage_blocks/gravitite'])
	event.add('aether:zanite_repairing', ['#forge:gems/zanite'])
	event.add('aether:gravitite_repairing', ['#forge:gems/gravitite'])
	event.add('aether:obsidian_repairing', ['minecraft:obsidian'])

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

	event.add('c:hidden_from_recipe_viewers', ['ae2:facade', 'cb_microblock:microblock'])

	event.add('chipped:stripped_bamboo_log', ['minecraft:stripped_bamboo_block'])
	event.add('chipped:stripped_crimson_log', ['#chipped:stripped_crimson_stem'])
	event.add('chipped:stripped_snake_block_log', ['minecraft:prismarine'])
	event.add('chipped:stripped_warped_log', ['#chipped:stripped_warped_stem'])
	event.add('chipped:glass', ['aether:quicksoil_glass'])
	event.add('chipped:glass_pane', ['aether:quicksoil_glass_pane'])

	event.add('curios:head', ['gtceu:face_mask'])
	event.add('curios:hands', ['gtceu:rubber_gloves'])

	event.add('dankstorage:blacklisted_storage', ['#forge:ores', '#forge:raw_materials'])

	event.add('deep_aether:skyjade_repairing', ['#forge:gems/skyjade'])

	event.add('forge:armors', /ad_astra:jet(.*)/)
	event.add('forge:armors', /ad_astra:(.*)space(.*)/)
	event.add('forge:stripped_logs', ['aether:stripped_skyroot_log', 'deep_aether:stripped_roseroot_log', 'deep_aether:stripped_yagroot_log', 'deep_aether:stripped_cruderoot_log', 'deep_aether:stripped_conberry_log', 'deep_aether:stripped_sunroot_log'])
	event.add('forge:stripped_wood', ['aether:stripped_skyroot_wood', 'deep_aether:stripped_roseroot_wood', 'deep_aether:stripped_yagroot_wood', 'deep_aether:stripped_cruderoot_wood', 'deep_aether:stripped_conberry_wood', 'deep_aether:stripped_sunroot_wood'])
	event.add('forge:flour/wheat', ['gtceu:wheat_dust'])

	event.add('gbth:certus_quartz_blocks', ['ae2:smooth_quartz_block', 'ae2:quartz_bricks', 'ae2:quartz_pillar', 'ae2:chiseled_quartz_block', 'ae2:cut_quartz_block'])
	event.add('gbth:forms', ['kubejs:block_wooden_form', 'kubejs:nugget_wooden_form', 'gtceu:brick_wooden_form'])
	event.add('gbth:copper_bloom_inputs', ['#forge:raw_materials/copper', '#forge:raw_materials/chalcopyrite', '#forge:raw_materials/tetrahedrite', '#forge:raw_materials/bornite', '#forge:raw_materials/chalcocite', '#forge:raw_materials/malachite'])
	event.add('gbth:tin_bloom_inputs', ['#forge:raw_materials/tin', '#forge:raw_materials/cassiterite', '#forge:raw_materials/cassiterite_sand'])
	event.add('gbth:wrought_iron_bloom_inputs', ['#forge:raw_materials/iron', '#forge:raw_materials/pyrite', '#forge:raw_materials/magnetite', '#forge:raw_materials/hematite', '#forge:raw_materials/goethite', '#forge:raw_materials/yellow_limonite', '#forge:raw_materials/basaltic_mineral_sand', '#forge:raw_materials/granitic_mineral_sand'])
	event.add('gbth:sandpaper_bases', ['create:sand_paper', 'create:red_sand_paper'])
	event.add('gbth:stoves', ['farmersdelight:stove', 'mynethersdelight:nether_bricks_stove', '#forge:campfires'])
	event.add('gbth:sleeping_bags', ['sleeping_bags:white_sleeping_bag', 'sleeping_bags:orange_sleeping_bag', 'sleeping_bags:magenta_sleeping_bag', 'sleeping_bags:light_blue_sleeping_bag', 'sleeping_bags:yellow_sleeping_bag', 'sleeping_bags:lime_sleeping_bag', 'sleeping_bags:pink_sleeping_bag', 'sleeping_bags:gray_sleeping_bag', 'sleeping_bags:light_gray_sleeping_bag', 'sleeping_bags:cyan_sleeping_bag', 'sleeping_bags:purple_sleeping_bag', 'sleeping_bags:blue_sleeping_bag', 'sleeping_bags:brown_sleeping_bag', 'sleeping_bags:green_sleeping_bag', 'sleeping_bags:red_sleeping_bag', 'sleeping_bags:black_sleeping_bag'])
	event.add('gbth:input_buses', ['gtceu:ulv_input_bus', 'gtceu:lv_input_bus', 'gtceu:mv_input_bus', 'gtceu:hv_input_bus', 'gtceu:ev_input_bus', 'gtceu:iv_input_bus', 'gtceu:luv_input_bus', 'gtceu:zpm_input_bus', 'gtceu:uv_input_bus', 'gtceu:uhv_input_bus'])
	event.add('gbth:output_buses', ['gtceu:ulv_output_bus', 'gtceu:lv_output_bus', 'gtceu:mv_output_bus', 'gtceu:hv_output_bus', 'gtceu:ev_output_bus', 'gtceu:iv_output_bus', 'gtceu:luv_output_bus', 'gtceu:zpm_output_bus', 'gtceu:uv_output_bus', 'gtceu:uhv_output_bus'])
	event.add('gbth:input_hatches', ['gtceu:ulv_input_hatch', 'gtceu:lv_input_hatch', 'gtceu:mv_input_hatch', 'gtceu:hv_input_hatch', 'gtceu:ev_input_hatch', 'gtceu:iv_input_hatch', 'gtceu:luv_input_hatch', 'gtceu:zpm_input_hatch', 'gtceu:uv_input_hatch', 'gtceu:uhv_input_hatch'])
	event.add('gbth:output_hatches', ['gtceu:ulv_output_hatch', 'gtceu:lv_output_hatch', 'gtceu:mv_output_hatch', 'gtceu:hv_output_hatch', 'gtceu:ev_output_hatch', 'gtceu:iv_output_hatch', 'gtceu:luv_output_hatch', 'gtceu:zpm_output_hatch', 'gtceu:uv_output_hatch', 'gtceu:uhv_output_hatch'])

	event.add('kubejs:fireproof_wood', ['minecraft:warped_stem', 'minecraft:stripped_warped_stem', 'minecraft:stripped_warped_hyphae', 'minecraft:warped_hyphae', 'minecraft:crimson_stem', 'minecraft:stripped_crimson_stem', 'minecraft:stripped_crimson_hyphae', 'minecraft:crimson_hyphae'])

	event.add('minecraft:coals', ['gtceu:raw_coal', 'gtceu:coal_dust', 'gtceu:charcoal_dust'])
	event.add('minecraft:planks', ['aether:skyroot_planks', 'deep_aether:roseroot_planks', 'deep_aether:yagroot_planks', 'deep_aether:cruderoot_planks', 'deep_aether:conberry_planks', 'deep_aether:sunroot_planks'])
	event.add('minecraft:fence_gates', ['mynethersdelight:powdery_fence_gate', 'aether:skyroot_fence_gate'])
	event.add('minecraft:bamboo_logs', ['minecraft:bamboo_block', 'minecraft:stripped_bamboo_block'])
	event.add('minecraft:crimson_logs', ['minecraft:crimson_stem', 'minecraft:crimson_hyphae', 'minecraft:stripped_crimson_stem', 'minecraft:stripped_crimson_hyphae'])
	event.add('minecraft:warped_logs', ['minecraft:warped_stem', 'minecraft:warped_hyphae', 'minecraft:stripped_warped_stem', 'minecraft:stripped_warped_hyphae'])
	event.add('minecraft:boats', ['deep_aether:roseroot_boat', 'deep_aether:yagroot_boat', 'deep_aether:cruderoot_boat', 'deep_aether:conberry_boat', 'deep_aether:sunroot_boat', 'deep_aether:roseroot_chest_boat', 'deep_aether:yagroot_chest_boat', 'deep_aether:cruderoot_chest_boat', 'deep_aether:conberry_chest_boat', 'deep_aether:sunroot_chest_boat'])

	event.add('mynethersdelight:powdery_logs', ['mynethersdelight:powdery_block', 'mynethersdelight:stripped_powdery_block'])


	//#region remove item tag
	event.remove('create:sandpaper', ['create:sand_paper', 'create:red_sand_paper'])

	event.remove('minecraft:planks', ['gtceu:treated_wood_plate', 'gtceu:wood_plate', 'createdieselgenerators:chip_wood_block'])
	event.remove('minecraft:wooden_slabs', 'createdieselgenerators:chip_wood_slab')
})

ServerEvents.tags('fluid', event => {
	removeAndHide('ad_astra:oxygen')
	removeAndHide('ad_astra:hydrogen')
	removeAndHide('ad_astra:oil')
	removeAndHide('productivebees:honey')
	removeAndHide('productivebees:flowing_honey')

	function removeAndHide(fluid) {
		event.removeAllTagsFrom(fluid)
		event.add('c:hidden_from_recipe_viewers', fluid)
	}
})
