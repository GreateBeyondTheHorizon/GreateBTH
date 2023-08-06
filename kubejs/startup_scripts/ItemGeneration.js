// Priority: 0
StartupEvents.registry('item', event => {

	event.create('inc_lv_circuit', 'create:sequenced_assembly')
	event.create('raw_integrated_circuit')

	event.create('inc_mv_circuit', 'create:sequenced_assembly')
	event.create('raw_phenolic_circuit_board', 'create:sequenced_assembly')
	event.create('raw_plastic_circuit_board')
	// LV components
	event.create('inc_lv_motor', 'create:sequenced_assembly')
	event.create('inc_lv_piston', 'create:sequenced_assembly')
	event.create('inc_lv_pump', 'create:sequenced_assembly')
	event.create('inc_lv_fluid_regulator', 'create:sequenced_assembly')
	event.create('inc_lv_sensor', 'create:sequenced_assembly')
	event.create('inc_lv_emitter', 'create:sequenced_assembly')
	event.create('inc_lv_conveyor', 'create:sequenced_assembly')
	event.create('inc_lv_robot_arm', 'create:sequenced_assembly')
	// MV components
	event.create('inc_mv_motor', 'create:sequenced_assembly')
	event.create('inc_mv_piston', 'create:sequenced_assembly')
	event.create('inc_mv_pump', 'create:sequenced_assembly')
	event.create('inc_mv_fluid_regulator', 'create:sequenced_assembly')
	event.create('inc_mv_sensor', 'create:sequenced_assembly')
	event.create('inc_mv_emitter', 'create:sequenced_assembly')
	event.create('inc_mv_conveyor', 'create:sequenced_assembly')
	event.create('inc_mv_robot_arm', 'create:sequenced_assembly')
	
	event.create('unf_turtle_helmet').displayName('Turtle Helmet Shell')
	event.create('netherite_plate').displayName('Netherite Plate')
})
