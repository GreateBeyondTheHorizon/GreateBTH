StartupEvents.registry('item', event => {
	// Create removed tag placeholder
	event
		.create('removed_tag_placeholder')
		.displayName('Removed Tag Placeholder')
		.tooltip(
			Text.gray(
				"The original tag was removed in 'startup_scripts/ItemRemoval.js'. Consider removing this recipe or replacing this placeholder with something else."
			)
		)
		.texture('minecraft:item/barrier')
	// Create removed item placeholder
	event
		.create('removed_item_placeholder')
		.displayName('Removed Item Placeholder')
		.tooltip(
			Text.gray(
				"The original item was removed in 'startup_scripts/ItemRemoval.js'. Consider removing this recipe or replacing this placeholder with something else."
			)
		)
		.texture('minecraft:item/barrier')
})

global.TagsToRemove = []
global.ItemsToRemove = []

//// Removal API ////

function removeTag(tag, removeInputRecipes, removeItems) {
	let fullTag = '#' + tag
	global.TagsToRemove.push({
		tag: fullTag,
		removeInputRecipes: removeInputRecipes
	})
	if (removeItems === true) {
		global.ItemsToRemove.push(fullTag)
	}
}

function removeItem(item) {
	global.ItemsToRemove.push(item)
}

function removeItems(items) {
	for (const item of items) {
		removeItem(item)
	}
}

function removeNamespaceItems(namespace, items) {
	for (const item of items) {
		if (item[0] === '#') {
			removeItem('#' + global.Util.id(namespace, item.slice(1)))
		} else if (item.constructor?.name === 'RegExp') {
			removeItem(new RegExp(global.Util.id(namespace, item.source)))
		} else {
			removeItem(global.Util.id(namespace, item))
		}
	}
}

//////////////////////////////////////////////////////////////
//////////                                          //////////
//////////                REMOVALS                  //////////
//////////                                          //////////
//////////////////////////////////////////////////////////////

// Remove tags and items generated as a byproduct of adding the GT stone hammer
removeTag('forge:storage_blocks/stone', true, true)
removeTag('forge:ingots/stone', true, true)
removeTag('forge:nuggets/stone', true, true)

// Create
removeNamespaceItems('create', [
	/(.*)_sheet/, // Remove all sheets in favor of GT plates
	/crushed_raw_(.*)/,
	'electron_tube',
	'zinc_ore',
	'deepslate_zinc_ore',
	'raw_zinc',
	'raw_zinc_block',
	'zinc_block',
	'zinc_ingot',
	'zinc_nugget',
	'copper_nugget',
	'brass_ingot',
	'brass_nugget',
	'brass_block',
	'wheat_flour',
	'dough',
	'andesite_alloy',
	'andesite_alloy_block',
	'whisk',
	'propeller'
])

// Construction Wand
// Disable wand cores so that players can't mine super easily in early game
removeNamespaceItems('constructionwand', ['core_angel', 'core_destruction'])

// Stargate Journey
// Completely disable for now
removeItem(/sgjourney:(.*)/)

// Tom's Simple Storage
removeNamespaceItems('toms_storage', [
	'ts.inventory_proxy',
	'ts.open_crate',
	'ts.inventory_hopper_basic',
	'ts.level_emitter',
	'ts.storage_terminal',
	'ts.adv_wireless_terminal',
])

// Sophisticated Backpacks
removeNamespaceItems('sophisticatedbackpacks', [
	'advanced_pump_upgrade',
	'anvil_upgrade',
	'battery_upgrade',
	'blasting_upgrade',
	'crafting_upgrade',
	'everlasting_upgrade',
	'inception_upgrade',
	'pump_upgrade',
	'smelting_upgrade',
	'smoking_upgrade',
	'tank_upgrade',
	'xp_pump_upgrade',
	/(.*)copper(.*)/, 
	/auto_(.*)_upgrade'/,
	/stack_upgrade_(.*)/
])

// Sophisticated Storage
removeNamespaceItems('sophisticatedstorage', [
	'advanced_feeding_upgrade',
	'advanced_magnet_upgrade',
	'auto_smelting_upgrade',
	'auto_smoking_upgrade',
	'basic_to_diamond_tier_upgrade',
	'basic_to_gold_tier_upgrade',
	'basic_to_netherite_tier_upgrade',
	'blasting_upgrade',
	'compression_upgrade',
	'crafting_upgrade',
	'feeding_upgrade',
	'gold_to_netherite_tier_upgrade',
	'iron_to_diamond_tier_upgrade',
	'iron_to_netherite_tier_upgrade',
	'jukebox_upgrade',
	'magnet_upgrade',
	'smelting_upgrade',
	'smoking_upgrade',
	'stonecutter_upgrade',
	'xp_pump_upgrade',
	/(.*)copper(.*)/,
	/(.*)pump_upgrade/,
	/auto_(.*)_upgrade/,
	/stack_upgrade_(.*)/
])

// Ad Astra
removeNamespaceItems('ad_astra', [
	// Remove items in favor of GT items
	'steel_plate',
	'steel_ingot',
	'steel_nugget',
	'steel_block',
	'steel_rod',
	'iron_plate',
	'iron_rod',
	'compressor',
	'etrionic_blast_furnace',
	'coal_generator',
	'moon_iron_ore',
	'mars_iron_ore',
	'mercury_iron_ore',
	'glacio_iron_ore',
	'rocket_fin',
	/(.*)engine(.*)/,
	'rocket_nose_cone',
	'desh_tank', 
	'calorite_tank'
])

//Farmers Delight
removeNamespaceItems('farmersdelight', [
	'flint_knife', 
	'iron_knife', 
	'diamond_knife', 
	'netherite_knife', 
	'golden_knife'
])

//Oreberries
removeNamespaceItems('oreberriesreplanted', [
	'copper_nugget'
])

//Aquaculture
removeNamespaceItems('aquaculture', [
	'wooden_fillet_knife', 
	'stone_fillet_knife',
	'iron_fillet_knife', 
	'gold_fillet_knife', 
	'diamond_fillet_knife', 
	'neptunium_fillet_knife'
])

removeNamespaceItems('ae2', [
	'vibration_chamber',
	'ender_dust',
	'certus_quartz_crystal'
])

removeNamespaceItems('gtceu', [
	'lp_steam_solar_boiler',
	'hp_steam_solar_boiler',
	/(.*)macerator/,
	/(.*)kinetic_mixer/,
	/(.*)bender/,
	/(.*)mixer/,
	'lv_cutter',
	'mv_cutter',
	'hv_cutter',
	'ev_cutter',
	'iv_cutter',
	'luv_cutter',
	'zpm_cutter',
	'uv_cutter',
	'obsidian_dust',
	'netherrack_dust'
])

removeNamespaceItems('dankstorage', [
	'red_print',
	'1_to_2',
	'2_to_3',
	'3_to_4',
	'4_to_5',
	'5_to_6',
	'6_to_7'
])

removeNamespaceItems('aether', [
	'zanite_block', 
	'zanite_gemstone', 
	'enchanted_gravitite', 
	'ambrosium_block', 
	'ambrosium_shard'
])

removeNamespaceItems('deep_aether', [
	'skyjade', 
	'skyjade_block'
])

removeNamespaceItems('productivebees', [
	'bottler', 
	'milk_bottle'
])

removeNamespaceItems('projectred_core', [
	'red_iron_comp',
	'red_ingot',
	'electrotine_dust',
	'electrotine_generator',
	'ruby',
	'sapphire',
	'peridot'
])