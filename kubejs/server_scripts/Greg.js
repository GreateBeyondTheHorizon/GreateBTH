// priority: 0
ServerEvents.recipes(event => {
	event.remove({output: 'gtceu:basic_electronic_circuit'})
	event.remove({output: 'gtceu:lv_fluid_regulator'})
	event.remove({output: 'gtceu:lv_emitter'})
	event.remove({output: 'gtceu:lv_electric_motor'})
	event.remove({output: 'gtceu:lv_electric_piston'})
	event.remove({output: 'gtceu:lv_robot_arm'})
	event.remove({output: 'gtceu:lv_electric_pump'})
	event.remove({output: 'gtceu:lv_conveyor_module'})
	event.remove({output: 'gtceu:lv_sensor'})
})