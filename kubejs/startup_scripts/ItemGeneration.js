// Priority: 0
StartupEvents.registry('item', event => {
<<<<<<< HEAD
	event.create('raw_integrated_circuit').displayName('Raw Integrated Circuit')
	event.create('inc_mv_circuit', 'create:sequenced_assembly').displayName('Incomplete MV Circuit')
	event.create('raw_phenolic_circuit_board', 'create:sequenced_assembly').displayName('Raw Phenolic Circuit Board')
	event.create('raw_plastic_circuit_board').displayName('Raw Plastic Circuit Board')
	event.create('inc_lv_circuit', 'create:sequenced_assembly').displayName('Incomplete Basic Electronic Circuit')
	event.create('sub_lv_circuit_2').displayName('Incomplete Basic Integrated Circuit')
	event.create('sub_lv_circuit_3').displayName('Incomplete Microchip Processer')
=======

	event.create('inc_basic_electronic_circuit', 'create:sequenced_assembly')
	event.create('inc_basic_integrated_circuit', 'create:sequenced_assembly')
	event.create('inc_microchip_processor', 'create:sequenced_assembly')

	event.create('inc_good_electronic_circuit', 'create:sequenced_assembly')
	event.create('inc_good_integrated_circuit', 'create:sequenced_assembly')
	event.create('inc_micro_processor', 'create:sequenced_assembly')

	event.create('inc_hv_circuit', 'create:sequenced_assembly')
	
	event.create('raw_integrated_circuit_board').displayName("Raw Integrated Circuit Board")
	event.create('raw_phenolic_circuit_board', 'create:sequenced_assembly').displayName("Raw Phenolic Printed Circuit Board")
	event.create('raw_plastic_circuit_board').displayName("Raw Plastic Printed Circuit Board")
>>>>>>> origin/general-kube-stuff-kstoko23
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
	// misc
	event.create('unf_turtle_helmet').displayName('Turtle Helmet Shell')
	event.create('netherite_plate').displayName('Netherite Plate')
<<<<<<< HEAD
	event.create('double_obsidian_plate').displayName('Double Obsidian Plate')
	event.create('double_diamond_plate').displayName('Double Diamond Plate')
	event.create('obsidian_screw').displayName('Obsidian Screw')
=======

	event.create('bed_base').displayName('Bed Base')
	event.create('mattress').displayName('Mattress')
>>>>>>> origin/general-kube-stuff-kstoko23
})
