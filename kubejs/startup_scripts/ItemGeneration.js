StartupEvents.registry('item', (event) => {
    event
        .create('drinkable_liquid_concrete')
        .useAnimation('drink')
        .displayName('Bucket of Drinkable Liquid Concrete')

    // LV components
    event
        .create('inc_lv_motor', 'create:sequenced_assembly')
        .displayName('Incomplete LV Motor')
    event
        .create('inc_lv_piston', 'create:sequenced_assembly')
        .displayName('Incomplete LV Piston')
    event
        .create('inc_lv_pump', 'create:sequenced_assembly')
        .displayName('Incomplete LV Pump')
    event
        .create('inc_lv_fluid_regulator', 'create:sequenced_assembly')
        .displayName('Incomplete LV Fluid Regulator')
    event
        .create('inc_lv_sensor', 'create:sequenced_assembly')
        .displayName('Incomplete LV Sensor')
    event
        .create('inc_lv_emitter', 'create:sequenced_assembly')
        .displayName('Incomplete LV Emitter')
    event
        .create('inc_lv_conveyor', 'create:sequenced_assembly')
        .displayName('Incomplete LV Conveyor')
    event
        .create('inc_lv_robot_arm', 'create:sequenced_assembly')
        .displayName('Incomplete LV Robot Arm')
    // MV components
    event
        .create('inc_mv_motor', 'create:sequenced_assembly')
        .displayName('Incomplete MV Motor')
    event
        .create('inc_mv_piston', 'create:sequenced_assembly')
        .displayName('Incomplete MV Piston')
    event
        .create('inc_mv_pump', 'create:sequenced_assembly')
        .displayName('Incomplete MV Pump')
    event
        .create('inc_mv_fluid_regulator', 'create:sequenced_assembly')
        .displayName('Incomplete MV Fluid Regulator')
    event
        .create('inc_mv_sensor', 'create:sequenced_assembly')
        .displayName('Incomplete MV Sensor')
    event
        .create('inc_mv_emitter', 'create:sequenced_assembly')
        .displayName('Incomplete MV Emitter')
    event
        .create('inc_mv_conveyor', 'create:sequenced_assembly')
        .displayName('Incomplete MV Conveyor')
    event
        .create('inc_mv_robot_arm', 'create:sequenced_assembly')
        .displayName('Incomplete MV Robotic Arm')
    // HV components
    event
        .create('inc_hv_motor', 'create:sequenced_assembly')
        .displayName('Incomplete HV Motor')
    event
        .create('inc_hv_piston', 'create:sequenced_assembly')
        .displayName('Incomplete HV Piston')
    event
        .create('inc_hv_pump', 'create:sequenced_assembly')
        .displayName('Incomplete HV Pump')
    event
        .create('inc_hv_fluid_regulator', 'create:sequenced_assembly')
        .displayName('Incomplete HV Fluid Regulator')
    event
        .create('inc_hv_sensor', 'create:sequenced_assembly')
        .displayName('Incomplete HV Sensor')
    event
        .create('inc_hv_emitter', 'create:sequenced_assembly')
        .displayName('Incomplete HV Emitter')
    event
        .create('inc_hv_conveyor', 'create:sequenced_assembly')
        .displayName('Incomplete HV Conveyor')
    event
        .create('inc_hv_robot_arm', 'create:sequenced_assembly')
        .displayName('Incomplete HV Robot Arm')

    event
        .create('andesite_alloy_sand_paper', 'create:sandpaper')
        .maxDamage(8)
        .displayName('Andesite Alloy Sand Paper')
    event
        .create('steel_sand_paper', 'create:sandpaper')
        .maxDamage(32)
        .displayName('Steel Sand Paper')
    event
        .create('aluminium_sand_paper', 'create:sandpaper')
        .maxDamage(128)
        .displayName('Aluminium Sand Paper')
    event
        .create('stainless_steel_sand_paper', 'create:sandpaper')
        .maxDamage(512)
        .displayName('Stainless Steel Sand Paper')
    event
        .create('titanium_sand_paper', 'create:sandpaper')
        .maxDamage(2048)
        .displayName('Titanium Sand Paper')
    event
        .create('tungsten_steel_sand_paper', 'create:sandpaper')
        .maxDamage(8192)
        .displayName('Tungsten Steel Sand Paper')
    event
        .create('rhodium_plated_palladium_sand_paper', 'create:sandpaper')
        .maxDamage(32768)
        .displayName('Rhodium Plated Palladium Sand Paper')
    event
        .create('naquadah_alloy_sand_paper', 'create:sandpaper')
        .maxDamage(131072)
        .displayName('Naquadah Alloy Sand Paper')
    event
        .create('darmstadtium_sand_paper', 'create:sandpaper')
        .maxDamage(524288)
        .displayName('Darmstadtium Sand Paper')
    event
        .create('neutronium_sand_paper', 'create:sandpaper')
        .maxDamage(2097152)
        .displayName('Neutronium Sand Paper')

    // AE2
    for (const cellSize of global.AE2.CellSizes) {
        event
            .create(cellSize + '_me_storage_base')
            .displayName(cellSize + ' ME Storage Base')
        for (const quality of Object.values(
            global.AE2.WaferMaterialQualities
        )) {
            event
                .create(quality + '_' + cellSize + '_me_storage_wafer')
                .displayName(cellSize + ' ME Storage Wafer')
                .tooltip(global.Util.qualityTooltip(quality))
        }
    }

    event
        .create('incomplete_storage_cell', 'create:sequenced_assembly')
        .displayName('Incomplete Storage Cell')
    event
        .create('incomplete_storage_component', 'create:sequenced_assembly')
        .displayName('Incomplete Storage Component')

    // Ad Astra

    // Stainless Steel
    event.create('stainless_steel_engine')
    event
        .create('stainless_steel_fin')
        .displayName('Stainless Steel Rocket Fin')
    event
        .create('stainless_steel_cone')
        .displayName('Stainless Steel Rocket Nose Cone')

    // Tungsten Steel
    event.create('tungsten_steel_engine').displayName('Tungstensteel Engine')
    event.create('tungsten_steel_fin').displayName('Tungstensteel Rocket Fin')
    event
        .create('tungsten_steel_cone')
        .displayName('Tungstensteel Rocket Nose Cone')

    // HSS-E
    event.create('hsse_engine').displayName('HSS-E Engine')
    event.create('hsse_fin').displayName('HSS-E Rocket Fin')
    event.create('hsse_cone').displayName('HSS-E Rocket Nose Cone')

    // Trinium
    event.create('trinium_engine')
    event.create('trinium_fin').displayName('Trinium Rocket Fin')
    event.create('trinium_cone').displayName('Trinium Rocket Nose Cone')

    // misc
    event.create('unf_turtle_helmet').displayName('Turtle Helmet Shell')
    event
        .create('infinity_me_storage_wafer')
        .displayName('Infinity ME Storage Component')

    //compass
    event.create('empty_compass').displayName('Empty Compass')

    //befood
    event.create('advanced_honey_treat').displayName('Advanced Honey Treat')
    event.create('titanium_bee_food').displayName('Titanium Bee Food')

    //CustomEarlyGame
    event
        .create('fire_starter')
        .maxDamage(5)
        .unstackable()
        .displayName('Campfire Starter')
    event
        .create('block_wooden_form')
        .unstackable()
        .displayName('Block Wooden Form')
    event
        .create('nugget_wooden_form')
        .unstackable()
        .displayName('Nugget Wooden Form')

    event.create('mud_brick').displayName('Mud Brick')

    event.create('flint_pickaxe_head').displayName('Flint Pickaxe Head')
    event.create('flint_axe_head').displayName('Flint Axe Head')
    event.create('flint_shovel_head').displayName('Flint Shovel Head')
    event.create('flint_sword_head').displayName('Flint Sword Head')
    event.create('flint_hoe_head').displayName('Flint Hoe Head')

    event.create('empty_glue_tube').displayName('Empty Glue Tube')
})
