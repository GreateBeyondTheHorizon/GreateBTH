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
	'ts.painted_trim',
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
	/(.*)_plate/,
	'steel_ingot',
	'steel_block',
	'steel_rod',
	'iron_rod',
	'compressor',
])

// EnderIO
removeNamespaceItems('enderio', [
	// Remove power-related blocks
	'stirling_generator',
	'soul_engine',
	'energetic_photovoltaic_module',
	'pulsating_photovoltaic_module',
	'vibrant_photovoltaic_module',
	'wired_charger',
	// Remove machines that have a gt/create counterpart
	'primitive_alloy_smelter',
	'alloy_smelter',
	'sag_mill',
	'fluid_tank',
	'pressurized_fluid_tank',
	'drain',
])