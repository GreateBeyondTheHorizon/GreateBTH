// priority: 0
ServerEvents.recipes(event=>{
	let incLvCirc = 'kubejs:inc_lv_circuit'
    let incLvMotor = 'kubejs:inc_lv_motor'
	let incLvPiston = 'kubejs:inc_lv_piston'
	let lncLvRobotArm = 'kubejs:inc_lv_robot_arm'
	let incLvConveyor = 'kubejs:inc_lv_conveyor'
	let incLvPump = 'kubejs:inc_lv_pump'
	let invLvFluidRegulator = 'kubejs:inc_lv_fluid_regulator'
	let invLvSensor = 'kubejs:inc_lv_sensor'
	let incLvEmitter = 'kubejs:inc_lv_emitter'

	let sub2 = 'kubejs:sub_lv_circuit_2'
	let sub3 = 'kubejs:sub_lv_circuit_3'


	event.recipes.createMixing([sub2],
		[
			'gtceu:resin_printed_circuit_board',
			'gtceu:ilc_chip', 
			Fluid.of('gtceu:soldering_alloy', 72)
		])
	event.recipes.createMixing([sub3],
		[
			'gtceu:plastic_printed_circuit_board',
			'gtceu:cpu_chip', 
			Fluid.of('gtceu:soldering_alloy', 72)
		])
	event.recipes.createMixing([sub2],
		[
			'gtceu:resin_printed_circuit_board',
			'gtceu:ilc_chip', 
			Fluid.of('gtceu:tin', 144)
		])
	event.recipes.createMixing([sub3],
		[
			'gtceu:plastic_printed_circuit_board',
			'gtceu:cpu_chip', 
			Fluid.of('gtceu:tin', 144)
		])
	// #region circuits
	event.recipes.createSequencedAssembly([
		'gtceu:basic_electronic_circuit',
],	'gtceu:resin_printed_circuit_board', [
	event.recipes.createDeploying(incLvCirc, [incLvCirc, 'gtceu:red_alloy_single_wire']),
	event.recipes.createDeploying(incLvCirc, [incLvCirc, 'gtceu:resistor']),
	event.recipes.createDeploying(incLvCirc, [incLvCirc, 'gtceu:vacuum_tube']),
	]).transitionalItem(incLvCirc).loops(2)
	event.recipes.createSequencedAssembly([
		'gtceu:basic_integrated_circuit',
],	sub2, [
	event.recipes.createDeploying(incLvCirc, [incLvCirc, 'gtceu:resistor']),
	event.recipes.createDeploying(incLvCirc, [incLvCirc, 'gtceu:diode']),
	event.recipes.createDeploying(incLvCirc, [incLvCirc, 'gtceu:copper_fine_wire']),
	event.recipes.createDeploying(incLvCirc, [incLvCirc, 'gtceu:tin_bolt']),
	]).transitionalItem(incLvCirc).loops(2)
	event.recipes.createSequencedAssembly([
		'gtceu:microchip_processor',
],	sub3, [
	event.recipes.createDeploying(incLvCirc, [incLvCirc, 'gtceu:resistor']),
	event.recipes.createDeploying(incLvCirc, [incLvCirc, 'gtceu:capacitor']),
	event.recipes.createDeploying(incLvCirc, [incLvCirc, 'gtceu:transistor']),
	event.recipes.createDeploying(incLvCirc, [incLvCirc, 'gtceu:copper_fine_wire']),
	]).transitionalItem(incLvCirc).loops(2)
	// #endregion
    event.recipes.createSequencedAssembly([
	'gtceu:lv_electric_motor',
],	'gtceu:magnetic_iron_rod', [
	event.recipes.createDeploying(incLvMotor, [incLvMotor, 'gtceu:tin_single_cable']),
	event.recipes.createDeploying(incLvMotor, [incLvMotor, 'gtceu:copper_single_wire']),
	event.recipes.createDeploying(incLvMotor, [incLvMotor, 'gtceu:iron_rod'])
	]).transitionalItem(incLvMotor).loops(3)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_electric_motor',
],	'gtceu:magnetic_steel_rod', [
	event.recipes.createDeploying(incLvMotor, [incLvMotor, 'gtceu:tin_single_cable']),
	event.recipes.createDeploying(incLvMotor, [incLvMotor, 'gtceu:copper_single_wire']),
	event.recipes.createDeploying(incLvMotor, [incLvMotor, 'gtceu:steel_rod'])
	]).transitionalItem(incLvMotor).loops(3)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_electric_piston',
],	'gtceu:lv_electric_motor', [
	event.recipes.createDeploying(incLvPiston, [incLvPiston, 'gtceu:tin_single_cable']),
	event.recipes.createDeploying(incLvPiston, [incLvPiston, 'gtceu:steel_small_gear']),
	event.recipes.createDeploying(incLvPiston, [incLvPiston, 'gtceu:steel_rod']),
	event.recipes.createDeploying(incLvPiston, [incLvPiston, 'gtceu:steel_plate'])
	]).transitionalItem(incLvPiston).loops(2)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_robot_arm',
],	'gtceu:lv_electric_piston', [
	event.recipes.createDeploying(lncLvRobotArm, [lncLvRobotArm, '#forge:circuits/lv']),
	event.recipes.createDeploying(lncLvRobotArm, [lncLvRobotArm, 'gtceu:lv_electric_motor']),
	event.recipes.createDeploying(lncLvRobotArm, [lncLvRobotArm, 'gtceu:tin_single_cable']),
	event.recipes.createDeploying(lncLvRobotArm, [lncLvRobotArm, 'gtceu:steel_rod'])
	]).transitionalItem(lncLvRobotArm).loops(2)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_conveyor_module',
],	'gtceu:tin_single_cable', [
	event.recipes.createDeploying(incLvConveyor, [incLvConveyor, 'gtceu:rubber_plate']),
	event.recipes.createDeploying(incLvConveyor, [incLvConveyor, 'gtceu:rubber_plate']),
	event.recipes.createDeploying(incLvConveyor, [incLvConveyor, 'gtceu:rubber_plate']),
	event.recipes.createDeploying(incLvConveyor, [incLvConveyor, 'gtceu:lv_electric_motor'])
	]).transitionalItem(incLvConveyor).loops(2)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_conveyor_module',
],	'gtceu:tin_single_cable', [
	event.recipes.createDeploying(incLvConveyor, [incLvConveyor, 'gtceu:silicone_rubber_plate']),
	event.recipes.createDeploying(incLvConveyor, [incLvConveyor, 'gtceu:silicone_rubber_plate']),
	event.recipes.createDeploying(incLvConveyor, [incLvConveyor, 'gtceu:silicone_rubber_plate']),
	event.recipes.createDeploying(incLvConveyor, [incLvConveyor, 'gtceu:lv_electric_motor'])
	]).transitionalItem(incLvConveyor).loops(2)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_conveyor_module',
],	'gtceu:tin_single_cable', [
	event.recipes.createDeploying(incLvConveyor, [incLvConveyor, 'gtceu:styrene_butadiene_rubber_plate']),
	event.recipes.createDeploying(incLvConveyor, [incLvConveyor, 'gtceu:styrene_butadiene_rubber_plate']),
	event.recipes.createDeploying(incLvConveyor, [incLvConveyor, 'gtceu:styrene_butadiene_rubber_plate']),
	event.recipes.createDeploying(incLvConveyor, [incLvConveyor, 'gtceu:lv_electric_motor'])
	]).transitionalItem(incLvConveyor).loops(2)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_electric_pump',
],	'gtceu:bronze_normal_fluid_pipe', [
	event.recipes.createDeploying(incLvPump, [incLvPump, 'gtceu:lv_electric_motor']),
	event.recipes.createDeploying(incLvPump, [incLvPump, 'gtceu:tin_screw']),
	event.recipes.createDeploying(incLvPump, [incLvPump, 'gtceu:tin_rotor']),
	event.recipes.createDeploying(incLvPump, [incLvPump, 'gtceu:rubber_ring']),
	event.recipes.createDeploying(incLvPump, [incLvPump, 'gtceu:rubber_ring']),
	event.recipes.createDeploying(incLvPump, [incLvPump, 'gtceu:tin_single_cable'])
	]).transitionalItem(incLvPump).loops(2)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_electric_pump',
],	'gtceu:bronze_normal_fluid_pipe', [
	event.recipes.createDeploying(incLvPump, [incLvPump, 'gtceu:lv_electric_motor']),
	event.recipes.createDeploying(incLvPump, [incLvPump, 'gtceu:tin_screw']),
	event.recipes.createDeploying(incLvPump, [incLvPump, 'gtceu:tin_rotor']),
	event.recipes.createDeploying(incLvPump, [incLvPump, 'gtceu:silicone_rubber_ring']),
	event.recipes.createDeploying(incLvPump, [incLvPump, 'gtceu:silicone_rubber_ring']),
	event.recipes.createDeploying(incLvPump, [incLvPump, 'gtceu:tin_single_cable'])
	]).transitionalItem(incLvPump).loops(2)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_electric_pump',
],	'gtceu:bronze_normal_fluid_pipe', [
	event.recipes.createDeploying(incLvPump, [incLvPump, 'gtceu:lv_electric_motor']),
	event.recipes.createDeploying(incLvPump, [incLvPump, 'gtceu:tin_screw']),
	event.recipes.createDeploying(incLvPump, [incLvPump, 'gtceu:tin_rotor']),
	event.recipes.createDeploying(incLvPump, [incLvPump, 'gtceu:styrene_butadiene_rubber_ring']),
	event.recipes.createDeploying(incLvPump, [incLvPump, 'gtceu:styrene_butadiene_rubber_ring']),
	event.recipes.createDeploying(incLvPump, [incLvPump, 'gtceu:tin_single_cable'])
	]).transitionalItem(incLvPump).loops(2)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_fluid_regulator',
],	'gtceu:lv_electric_piston', [
	event.recipes.createDeploying(invLvFluidRegulator, [invLvFluidRegulator, '#forge:circuits/lv'])
	]).transitionalItem(invLvFluidRegulator).loops(2)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_sensor',
],	'#forge:circuits/lv', [
	event.recipes.createDeploying(invLvSensor, [invLvSensor, 'gtceu:steel_double_plate']),
	event.recipes.createDeploying(invLvSensor, [invLvSensor, 'gtceu:steel_double_plate']),
	event.recipes.createDeploying(invLvSensor, [invLvSensor, 'gtceu:brass_rod']),
	event.recipes.createDeploying(invLvSensor, [invLvSensor, 'gtceu:quartzite_gem'])
	]).transitionalItem(invLvSensor).loops(1)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_emitter',
],	'gtceu:quartzite_gem', [
	event.recipes.createDeploying(incLvEmitter, [incLvEmitter, '#forge:circuits/lv']),
	event.recipes.createDeploying(incLvEmitter, [incLvEmitter, 'gtceu:tin_single_cable']),
	event.recipes.createDeploying(incLvEmitter, [incLvEmitter, 'gtceu:brass_rod']),
	event.recipes.createDeploying(incLvEmitter, [incLvEmitter, 'gtceu:brass_rod'])
]).transitionalItem(incLvEmitter).loops(2)
})
