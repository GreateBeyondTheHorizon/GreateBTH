StartupEvents.registry('item', event => {
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

global.ItemsToRemove = []

//// Removal API ////

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
	'dough'
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
	'inception_upgrade',
	'pump_upgrade',
	'stack_upgrade_tier_3',
	'stack_upgrade_tier_1',
	'stack_upgrade_tier_4',
	'stack_upgrade_tier_2',
	'everlasting_upgrade',
	'auto_blasting_upgrade',
	'auto_smoking_upgrade',
	'auto_smelting_upgrade',
	'crafting_upgrade',
	'smoking_upgrade',
	'tank_upgrade',
	'battery_upgrade',
	'advanced_pump_upgrade',
	'xp_pump_upgrade',
	'smelting_upgrade',
	'blasting_upgrade',
])

// Sophisticated Storage
removeNamespaceItems('sophisticatedstorage', [
	'advanced_feeding_upgrade',
	'advanced_magnet_upgrade',
	'auto_blasting_upgrade',
	'auto_smelting_upgrade',
	'auto_smoking_upgrade',
	'blasting_upgrade',
	'chipped/alchemy_bench_upgrade',
	'chipped/botanist_workbench_upgrade',
	'chipped/carpenters_table_upgrade',
	'chipped/glassblower_upgrade',
	'chipped/loom_table_upgrade',
	'chipped/mason_table_upgrade',
	'chipped/tinkering_table_upgrade',
	'compression_upgrade',
	'crafting_upgrade',
	'feeding_upgrade',
	'jukebox_upgrade',
	'magnet_upgrade',
	'pump_upgrade',
	'smelting_upgrade',
	'smoking_upgrade',
	'stack_upgrade_tier_1',
	'stack_upgrade_tier_2',
	'stack_upgrade_tier_3',
	'stack_upgrade_tier_4',
	'stonecutter_upgrade',
	'xp_pump_upgrade',
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
	'glacio_iron_ore'
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

//Nethers Delight
removeNamespaceItems('nethersdelight', [
	'blackstone_furnace',
	'blackstone_blast_furnace',
	'nether_brick_smoker'
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
	'vibration_chamber'
])

removeNamespaceItems('gtceu', [
	'lp_steam_solar_boiler',
	'hp_steam_solar_boiler'
])