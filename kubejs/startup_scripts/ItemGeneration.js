StartupEvents.registry('item', event => {
	event.create('drinkable_liquid_concrete').useAnimation("drink").displayName('Bucket of Drinkable Liquid Concrete')

	event.create('inc_mv_circuit', 'create:sequenced_assembly').displayName('Incomplete MV Circuit')
	//lv circuits
	event.create('inc_basic_electronic_circuit', 'create:sequenced_assembly').displayName('Incomplete Basic Electronic Circuit')
	event.create('inc_basic_integrated_circuit', 'create:sequenced_assembly').displayName('Incomplete Basic Integrated Circuit')
	event.create('inc_microchip_processor', 'create:sequenced_assembly').displayName('Incomplete Microchip Processor')
	//hv circuits
	event.create('inc_good_electronic_circuit', 'create:sequenced_assembly').displayName('Incomplete Godd Electronic Circuit')
	event.create('inc_good_integrated_circuit', 'create:sequenced_assembly').displayName('Incomplete Good Integrated Circuit')
	event.create('inc_micro_processor', 'create:sequenced_assembly').displayName('Incomplete Micro Processor')
	//hv circuits missing texture for inter items
	event.create('inter_advanced_integrated_circuit').displayName('Intermediate Advanced Integrated Circuit')
	event.create('inc_advanced_integrated_circuit', 'create:sequenced_assembly').displayName('Incomplete Advanced Integrated Circuit')

	event.create('inter_micro_processor_assembly').displayName('Intermediate Micro Processor Assembly')
	event.create('inc_micro_processor_assembly', 'create:sequenced_assembly').displayName('Incomplete Micro Processor Assembly')

	event.create('inc_inter_nano_processor', 'create:sequenced_assembly').displayName('Incomplete Nano Processor')
	event.create('inter_nano_processor').displayName('Intermediate Nano Processor')

	event.create('raw_integrated_circuit_board').displayName("Raw Integrated Circuit Board")
	event.create('raw_phenolic_circuit_board').displayName("Raw Phenolic Printed Circuit Board")
	event.create('raw_plastic_circuit_board').displayName("Raw Plastic Printed Circuit Board")
	event.create('raw_epoxy_circuit_board').displayName("Raw Epoxy Printed Circuit Board")
	// LV components
	event.create('inc_lv_motor', 'create:sequenced_assembly').displayName('Incomplete LV Motor')
	event.create('inc_lv_piston', 'create:sequenced_assembly').displayName('Incomplete LV Piston')
	event.create('inc_lv_pump', 'create:sequenced_assembly').displayName('Incomplete LV Pump')
	event.create('inc_lv_fluid_regulator', 'create:sequenced_assembly').displayName('Incomplete LV Fluid Regulator')
	event.create('inc_lv_sensor', 'create:sequenced_assembly').displayName('Incomplete LV Sensor')
	event.create('inc_lv_emitter', 'create:sequenced_assembly').displayName('Incomplete LV Emitter')
	event.create('inc_lv_conveyor', 'create:sequenced_assembly').displayName('Incomplete LV Conveyor')
	event.create('inc_lv_robot_arm', 'create:sequenced_assembly').displayName('Incomplete LV Robot Arm')
	// MV components
	event.create('inc_mv_motor', 'create:sequenced_assembly').displayName('Incomplete MV Motor')
	event.create('inc_mv_piston', 'create:sequenced_assembly').displayName('Incomplete MV Piston')
	event.create('inc_mv_pump', 'create:sequenced_assembly').displayName('Incomplete MV Pump')
	event.create('inc_mv_fluid_regulator', 'create:sequenced_assembly').displayName('Incomplete MV Fluid Regulator')
	event.create('inc_mv_sensor', 'create:sequenced_assembly').displayName('Incomplete MV Sensor')
	event.create('inc_mv_emitter', 'create:sequenced_assembly').displayName('Incomplete MV Emitter')
	event.create('inc_mv_conveyor', 'create:sequenced_assembly').displayName('Incomplete MV Conveyor')
	event.create('inc_mv_robot_arm', 'create:sequenced_assembly').displayName('Incomplete MV Robotic Arm')
	// HV components
	event.create('inc_hv_motor', 'create:sequenced_assembly')
	event.create('inc_hv_piston', 'create:sequenced_assembly').displayName('Incomplete HV Piston')
	event.create('inc_hv_pump', 'create:sequenced_assembly').displayName('Incomplete HV Pump')
	event.create('inc_hv_fluid_regulator', 'create:sequenced_assembly').displayName('Incomplete HV Fluid Regulator')
	event.create('inc_hv_sensor', 'create:sequenced_assembly').displayName('Incomplete HV Sensor')
	event.create('inc_hv_emitter', 'create:sequenced_assembly').displayName('Incomplete HV Emitter')
	event.create('inc_hv_conveyor', 'create:sequenced_assembly').displayName('Incomplete HV Conveyor')
	event.create('inc_hv_robot_arm', 'create:sequenced_assembly').displayName('Incomplete HV Robot Arm')
	
	// AE2
	for (const cellSize of global.AE2.CellSizes) {
		event.create(cellSize + '_me_storage_base')
			.displayName(cellSize + ' ME Storage Base')
		for (const quality of Object.values(global.AE2.WaferMaterialQualities)) {
			event.create(quality + '_' + cellSize + '_me_storage_wafer')
				.displayName(cellSize + ' ME Storage Wafer')
				.tooltip(global.Util.qualityTooltip(quality))
		}
	}
	
	event.create('incomplete_storage_cell', 'create:sequenced_assembly').displayName('Incomplete Storage Cell')
	event.create('incomplete_storage_component', 'create:sequenced_assembly').displayName('Incomplete Storage Component')
	
	// Ad Astra

	// Stainless Steel
	event.create('stainless_steel_engine')
	event.create('stainless_steel_fin')
	event.create('stainless_steel_cone')
	
	// Tungsten Steel
	event.create('tungsten_steel_engine')
	event.create('tungsten_steel_fin')
	event.create('tungsten_steel_cone')
	
	// HSS-E
	event.create('hsse_engine')
	event.create('hsse_fin')
	event.create('hsse_cone')
	
	// Trinium
	event.create('trinium_engine')
	event.create('trinium_fin')
	event.create('trinium_cone')

	// misc

	event.create('unf_turtle_helmet').displayName('Turtle Helmet Shell')
	event.create('netherite_plate').displayName('Netherite Plate')
	event.create('double_obsidian_plate').displayName('Double Obsidian Plate')
	event.create('double_diamond_plate').displayName('Double Diamond Plate')
	event.create('obsidian_screw').displayName('Obsidian Screw')
	event.create('certus_quartz_lens').displayName('Certus Quartz Lens')
	event.create('infinity_me_storage_wafer').displayName('Infinity ME Storage Component')
	event.create('ruthenium_trinium_americium_neutronate_plate').displayName('Ruthenium Trinium Americium Neutronate Plate')

	//compass
	event.create('empty_compass').displayName('Empty Compass')


	//befood
	event.create('advanced_honey_treat').displayName('Advanced Honey Treat')
	event.create('titanium_bee_food').displayName('Titanium Bee Food')
	
	
})
