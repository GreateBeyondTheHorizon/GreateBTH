JEIEvents.hideItems(event => {
    //Create
    
    event.hide(/create:(.*)_sheet/)
    event.hide(/create:crushed_raw_(.*)/)

    //Wands
    event.hide('constructionwand:core_angel')
    event.hide('constructionwand:core_destruction')

    //TomSimpleStorage
    const storage = ['toms_storage:ts.inventory_proxy','toms_storage:ts.open_crate', 'toms_storage:ts.inventory_hopper_basic', 'toms_storage:ts.level_emitter', 'toms_storage:ts.painted_trim', 'toms_storage:ts.storage_terminal', 'toms_storage:ts.adv_wireless_terminal']
    storage.forEach((element) => event.hide(element));

    //SophisticatedBackpacks
    const backpack = ['sophisticatedbackpacks:inception_upgrade','sophisticatedbackpacks:pump_upgrade', 'sophisticatedbackpacks:stack_upgrade_tier_3', 'sophisticatedbackpacks:stack_upgrade_tier_1', 'sophisticatedbackpacks:stack_upgrade_tier_4', 'sophisticatedbackpacks:stack_upgrade_tier_2','sophisticatedbackpacks:everlasting_upgrade', 'sophisticatedbackpacks:auto_blasting_upgrade', 'sophisticatedbackpacks:auto_smoking_upgrade', 'sophisticatedbackpacks:auto_smelting_upgrade', 'sophisticatedbackpacks:crafting_upgrade', 'sophisticatedbackpacks:smoking_upgrade', 'sophisticatedbackpacks:stonecutter_upgrade', 'sophisticatedbackpacks:tank_upgrade', 'sophisticatedbackpacks:battery_upgrade', 'sophisticatedbackpacks:advanced_pump_upgrade', 'sophisticatedbackpacks:xp_pump_upgrade', 'sophisticatedbackpacks:smelting_upgrade', 'sophisticatedbackpacks:blasting_upgrade']
    backpack.forEach((element) => event.hide(element));

    // Ad Astra
    event.hide(/ad_astra:(.*)_plate/)
    event.hide('ad_astra:steel_ingot')
    event.hide('ad_astra:steel_block')


    //EnderIO
    const enderioMachines= ['enderio:fluid_tank', 'enderio:pressurized_fluid_tank', 'enderio:enchanter', 'enderio:primitive_alloy_smelter', 'enderio:alloy_smelter', 'enderio:painting_machine', 'enderio:creative_power', 'enderio:stirling_generator', 'enderio:sag_mill', 'enderio:impulse_hopper', 'enderio:energetic_photovoltaic_module', 'enderio:pulsating_photovoltaic_module', 'enderio:vibrant_photovoltaic_module', 'enderio:basic_capacitor_bank', 'enderio:advanced_capacitor_bank', 'enderio:vibrant_capacitor_bank', 'enderio:soul_engine', 'enderio:drain', 'enderio:creative_power']
    
    enderioMachines.forEach(item => {  event.hide(item)})
    




  })