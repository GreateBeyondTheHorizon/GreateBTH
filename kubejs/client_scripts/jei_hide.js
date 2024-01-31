JEIEvents.hideItems(event => {
	//Create
	event.hide(/create:(.*)_sheet/)
	event.hide(/create:crushed_raw_(.*)/)

	//Wands
	event.hide("constructionwand:core_angel")
	event.hide("constructionwand:core_destruction")

	//Stargate Journey
	const sg = ['sgjourney:naquadah_rod', 'sgjourney:raw_naquadah', 'sgjourney:naquadah_alloy', 'sgjourney:naquadah', 'sgjourney:pure_naquadah','sgjourney:naquadah_sword', 'sgjourney:naquadah_pickaxe', 'sgjourney:naquadah_axe', 'sgjourney:naquadah_shovel', 'sgjourney:naquadah_hoe', 'sgjourney:naquadah_helmet', 'sgjourney:naquadah_chestplate', 'sgjourney:naquadah_leggings', 'sgjourney:naquadah_boots', 'sgjourney:jaffa_helmet', 'sgjourney:jaffa_chestplate', 'sgjourney:jaffa_leggings', 'sgjourney:jaffa_boots', 'sgjourney:matok', 'sgjourney:jackal_helmet', 'sgjourney:basic_interface', 'sgjourney:crystal_interface', 'sgjourney:advanced_crystal_interface', 'sgjourney:naquadah_liquidizer', 'sgjourney:heavy_naquadah_liquidizer', 'sgjourney:crystallizer', 'sgjourney:advanced_crystallizer', 'sgjourney:naquadah_generator_mark_i', 'sgjourney:naquadah_generator_mark_ii', 'sgjourney:liquid_naquadah_bucket', 'sgjourney:heavy_liquid_naquadah_bucket', 'sgjourney:energy_crystal']

	sg.forEach(element => event.hide(element))


	//TomSimpleStorage
	const storage = [
		"toms_storage:ts.inventory_proxy",
		"toms_storage:ts.open_crate",
		"toms_storage:ts.inventory_hopper_basic",
		"toms_storage:ts.level_emitter",
		"toms_storage:ts.painted_trim",
		"toms_storage:ts.storage_terminal",
		"toms_storage:ts.adv_wireless_terminal",
	]
	storage.forEach(element => event.hide(element))

	//SophisticatedBackpacks
	const backpack = [
		"sophisticatedbackpacks:inception_upgrade",
		"sophisticatedbackpacks:pump_upgrade",
		"sophisticatedbackpacks:stack_upgrade_tier_3",
		"sophisticatedbackpacks:stack_upgrade_tier_1",
		"sophisticatedbackpacks:stack_upgrade_tier_4",
		"sophisticatedbackpacks:stack_upgrade_tier_2",
		"sophisticatedbackpacks:everlasting_upgrade",
		"sophisticatedbackpacks:auto_blasting_upgrade",
		"sophisticatedbackpacks:auto_smoking_upgrade",
		"sophisticatedbackpacks:auto_smelting_upgrade",
		"sophisticatedbackpacks:crafting_upgrade",
		"sophisticatedbackpacks:smoking_upgrade",
		"sophisticatedbackpacks:tank_upgrade",
		"sophisticatedbackpacks:battery_upgrade",
		"sophisticatedbackpacks:advanced_pump_upgrade",
		"sophisticatedbackpacks:xp_pump_upgrade",
		"sophisticatedbackpacks:smelting_upgrade",
		"sophisticatedbackpacks:blasting_upgrade",
	]
	backpack.forEach(element => event.hide(element))

	const storages = [
		'sophisticatedstorage:advanced_feeding_upgrade',
		'sophisticatedstorage:advanced_magnet_upgrade',
		'sophisticatedstorage:auto_blasting_upgrade',
		'sophisticatedstorage:auto_smelting_upgrade',
		'sophisticatedstorage:auto_smoking_upgrade',
		'sophisticatedstorage:blasting_upgrade',
		'sophisticatedstorage:chipped/alchemy_bench_upgrade',
		'sophisticatedstorage:chipped/botanist_workbench_upgrade',
		'sophisticatedstorage:chipped/carpenters_table_upgrade',
		'sophisticatedstorage:chipped/glassblower_upgrade',
		'sophisticatedstorage:chipped/loom_table_upgrade',
		'sophisticatedstorage:chipped/mason_table_upgrade',
		'sophisticatedstorage:chipped/tinkering_table_upgrade',
		'sophisticatedstorage:compression_upgrade',
		'sophisticatedstorage:crafting_upgrade',
		'sophisticatedstorage:feeding_upgrade',
		'sophisticatedstorage:jukebox_upgrade',
		'sophisticatedstorage:magnet_upgrade',
		'sophisticatedstorage:pump_upgrade',
		'sophisticatedstorage:smelting_upgrade',
		'sophisticatedstorage:smoking_upgrade',
		'sophisticatedstorage:stack_upgrade_tier_1',
		'sophisticatedstorage:stack_upgrade_tier_2',
		'sophisticatedstorage:stack_upgrade_tier_3',
		'sophisticatedstorage:stack_upgrade_tier_4',
		'sophisticatedstorage:stonecutter_upgrade',
		'sophisticatedstorage:xp_pump_upgrade'
	]
	storages.forEach(element => event.hide(element))

	// Ad Astra
	event.hide(/ad_astra:(.*)_plate/)
	event.hide("ad_astra:steel_ingot")
	event.hide("ad_astra:steel_block")
	event.hide("ad_astra:steel_rod")
	event.hide("ad_astra:compressor")
	event.hide("ad_astra:iron_rod")

	// EnderIO
	// Remove power-related blocks
	event.hide('enderio:stirling_generator')
	event.hide('enderio:soul_engine')
	event.hide('enderio:energetic_photovoltaic_module')
	event.hide('enderio:pulsating_photovoltaic_module')
	event.hide('enderio:vibrant_photovoltaic_module')
	event.hide('enderio:wired_charger')
	// Remove machines that have a gt/create counterpart
	event.hide('enderio:primitive_alloy_smelter')
	event.hide('enderio:alloy_smelter')
	event.hide('enderio:sag_mill')
	event.hide('enderio:fluid_tank')
	event.hide('enderio:pressurized_fluid_tank')
	event.hide('enderio:drain')






})
