JEIEvents.hideItems(event => {
	//Create
	event.hide(/create:(.*)_sheet/)
	event.hide(/create:crushed_raw_(.*)/)

	//Wands
	event.hide("constructionwand:core_angel")
	event.hide("constructionwand:core_destruction")

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
		"sophisticatedbackpacks:stonecutter_upgrade",
		"sophisticatedbackpacks:tank_upgrade",
		"sophisticatedbackpacks:battery_upgrade",
		"sophisticatedbackpacks:advanced_pump_upgrade",
		"sophisticatedbackpacks:xp_pump_upgrade",
		"sophisticatedbackpacks:smelting_upgrade",
		"sophisticatedbackpacks:blasting_upgrade",
	]
	backpack.forEach(element => event.hide(element))

	// Ad Astra
	event.hide(/ad_astra:(.*)_plate/)
	event.hide("ad_astra:steel_ingot")
	event.hide("ad_astra:steel_block")

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
