// priority: 0
ServerEvents.recipes(event => {
	//circuits remove
	event.remove({output: 'gtceu:basic_electronic_circuit'})
	event.remove({output: 'gtceu:basic_integrated_circuit'})
	event.remove({output: 'gtceu:good_electronic_circuit'})
	//lv components remove
	event.remove({output: 'gtceu:lv_fluid_regulator'})
	event.remove({output: 'gtceu:lv_emitter'})
	event.remove({output: 'gtceu:lv_electric_motor'})
	event.remove({output: 'gtceu:lv_electric_piston'})
	event.remove({output: 'gtceu:lv_robot_arm'})
	event.remove({output: 'gtceu:lv_electric_pump'})
	event.remove({output: 'gtceu:lv_conveyor_module'})
	event.remove({output: 'gtceu:lv_sensor'})
	//mv components remove
	event.remove({output: 'gtceu:mv_electric_motor'})
	event.remove({output: 'gtceu:mv_electric_piston'})
	event.remove({output: 'gtceu:mv_robot_arm'})
	event.remove({output: 'gtceu:mv_conveyor_module'})
	event.remove({output: 'gtceu:mv_electric_pump'})
	event.remove({output: 'gtceu:mv_fluid_regulator'})
	event.remove({output: 'gtceu:mv_sensor'})
	event.remove({output: 'gtceu:mv_emitter'})
})