// priority: 0
ServerEvents.recipes(event => {
	// #region variables
	let incMvMotor = 'kubejs:inc_mv_motor'
	let incMvPiston = 'kubejs:inc_mv_piston'
	let lncMvRobotArm = 'kubejs:inc_mv_robot_arm'
	let incMvConveyor = 'kubejs:inc_mv_conveyor'
	let incMvPump = 'kubejs:inc_mv_pump'
	let invMvFluidRegulator = 'kubejs:inc_mv_fluid_regulator'
	let invMvSensor = 'kubejs:inc_mv_sensor'
	let incMvEmitter = 'kubejs:inc_mv_emitter'
	let incMvCirc = 'kubejs:inc_mv_circuit'
	let rawPhenolicCircBoard = 'kubejs:raw_phenolic_circuit_board'
	let rawPlasticCircBoard = 'kubejs:raw_plastic_circuit_board'
	// #endregion
	// #region circuits
	event.recipes.createSequencedAssembly([
		'gtceu:good_electronic_circuit'
], 'gtceu:phenolic_printed_circuit_board',[
		event.recipes.createDeploying(incMvCirc, [incMvCirc, '#forge:circuits/lv']),
		event.recipes.createDeploying(incMvCirc, [incMvCirc, ['gtceu:diode', 'gtceu:smd_diode']]),
		event.recipes.createDeploying(incMvCirc, [incMvCirc, 'gtceu:copper_single_wire']),
		event.recipes.createFilling(incMvCirc, [incMvCirc, Fluid.of('gtceu:soldering_alloy', 36)])
	]).transitionalItem(incMvCirc).loops(2)

	event.recipes.createSequencedAssembly([
		'gtceu:good_electronic_circuit'
], 'gtceu:phenolic_printed_circuit_board',[
		event.recipes.createDeploying(incMvCirc, [incMvCirc, '#forge:circuits/lv']),
		event.recipes.createDeploying(incMvCirc, [incMvCirc, ['gtceu:diode', 'gtceu:smd_diode']]),
		event.recipes.createDeploying(incMvCirc, [incMvCirc, 'gtceu:copper_single_wire']),
		event.recipes.createFilling(incMvCirc, [incMvCirc, Fluid.of('gtceu:tin', 36)])
	]).transitionalItem(incMvCirc).loops(2)
	
	event.recipes.createSequencedAssembly([
		'2x gtceu:good_integrated_circuit'
], 	rawPhenolicCircBoard, [
		event.recipes.createDeploying(incMvCirc, [incMvCirc, ['gtceu:smd_resistor', 'gtceu:resistor']]),
		event.recipes.createDeploying(incMvCirc, [incMvCirc, ['gtceu:smd_diode', 'gtceu:diode']]),
		event.recipes.createDeploying(incMvCirc, [incMvCirc, 'gtceu:gold_fine_wire']),
		event.recipes.createDeploying(incMvCirc, [incMvCirc, 'gtceu:gold_fine_wire']),
		event.recipes.createDeploying(incMvCirc, [incMvCirc, 'gtceu:silver_bolt']),
		event.recipes.createDeploying(incMvCirc, [incMvCirc, 'gtceu:silver_bolt'])
	]).transitionalItem(incMvCirc).loops(2)

	event.recipes.createSequencedAssembly([
		'2x gtceu:micro_processor'
], 	rawPlasticCircBoard, [
		event.recipes.createDeploying(incMvCirc, [incMvCirc, ['gtceu:resistor', 'gtceu:smd_resistor']]),
		event.recipes.createDeploying(incMvCirc, [incMvCirc, ['gtceu:capacitor', 'gtceu:smd_capacitor']]),
		event.recipes.createDeploying(incMvCirc, [incMvCirc, ['gtceu:transistor', 'gtceu:smd_transistor']]),
		event.recipes.createDeploying(incMvCirc, [incMvCirc, 'gtceu:red_alloy_fine_wire']),
	]).transitionalItem(incMvCirc).loops(4)
	// #endregion
	// #region components
	event.recipes.createSequencedAssembly([
		'gtceu:mv_electric_motor',
], 'gtceu:magnetic_steel_rod',[
	event.recipes.createDeploying(incMvMotor,[incMvMotor, 'gtceu:cupronickel_double_wire']),
	event.recipes.createDeploying(incMvMotor,[incMvMotor, 'gtceu:cupronickel_double_wire']),
	event.recipes.createDeploying(incMvMotor,[incMvMotor, 'gtceu:aluminium_rod']),
	event.recipes.createDeploying(incMvMotor,[incMvMotor, 'gtceu:copper_single_cable'])
	]).transitionalItem(incMvMotor).loops(2)

	event.recipes.createSequencedAssembly([
		'gtceu:mv_electric_piston',
], 'gtceu:mv_electric_motor',[
	event.recipes.createDeploying(incMvPiston,[incMvPiston, 'gtceu:aluminium_plate']),
	event.recipes.createDeploying(incMvPiston,[incMvPiston, 'gtceu:aluminium_small_gear']),
	event.recipes.createDeploying(incMvPiston,[incMvPiston, 'gtceu:aluminium_rod']),
	event.recipes.createDeploying(incMvPiston,[incMvPiston, 'gtceu:copper_single_cable'])
	]).transitionalItem(incMvPiston).loops(2)

	event.recipes.createSequencedAssembly([
		'gtceu:mv_robot_arm',
], 'gtceu:mv_electric_piston',[
	event.recipes.createDeploying(lncMvRobotArm,[lncMvRobotArm, '#forge:circuits/mv']),
	event.recipes.createDeploying(lncMvRobotArm,[lncMvRobotArm, 'gtceu:mv_electric_motor']),
	event.recipes.createDeploying(lncMvRobotArm,[lncMvRobotArm, 'gtceu:aluminium_rod']),
	event.recipes.createDeploying(lncMvRobotArm,[lncMvRobotArm, 'gtceu:copper_single_cable'])
	]).transitionalItem(lncMvRobotArm).loops(2)

	event.recipes.createSequencedAssembly([
		'gtceu:mv_conveyor_module',
], 'gtceu:copper_single_cable',[
	event.recipes.createDeploying(incMvConveyor,[incMvConveyor, 'gtceu:mv_electric_motor']),
	event.recipes.createDeploying(incMvConveyor,
		[incMvConveyor, 
			[
				'gtceu:rubber_plate', 
				'gtceu:silicone_rubber_plate', 
				'gtceu:styrene_butadiene_rubber_plate'
			]
		]),
	event.recipes.createDeploying(incMvConveyor,
		[incMvConveyor, 
			[
				'gtceu:rubber_plate', 
				'gtceu:silicone_rubber_plate', 
				'gtceu:styrene_butadiene_rubber_plate'
			]
		]),
	event.recipes.createDeploying(incMvConveyor,
		[incMvConveyor, 
			[
				'gtceu:rubber_plate', 
				'gtceu:silicone_rubber_plate', 
				'gtceu:styrene_butadiene_rubber_plate'
			]
		]),
	]).transitionalItem(incMvConveyor).loops(2)
	
	event.recipes.createSequencedAssembly([
		'gtceu:mv_electric_pump',
], 'gtceu:steel_normal_fluid_pipe',[
	event.recipes.createDeploying(incMvPump,[incMvPump, 'gtceu:bronze_screw']),
	event.recipes.createDeploying(incMvPump,[incMvPump, 'gtceu:bronze_rotor']),
	event.recipes.createDeploying(incMvPump,
		[incMvPump, 
			[
				'gtceu:rubber_ring', 
				'gtceu:silicone_rubber_ring', 
				'gtceu:styrene_butadiene_rubber_ring'
			]
		]),
	event.recipes.createDeploying(incMvPump,
		[incMvPump, 
			[
				'gtceu:rubber_ring', 
				'gtceu:silicone_rubber_ring', 
				'gtceu:styrene_butadiene_rubber_ring'
			]
		]),
	event.recipes.createDeploying(incMvPump,[incMvPump, 'gtceu:copper_single_cable']),
	event.recipes.createDeploying(incMvPump,[incMvPump, 'gtceu:mv_electric_motor']),
	]).transitionalItem(incMvPump).loops(1)
	
	event.recipes.createSequencedAssembly([
	'gtceu:mv_fluid_regulator',
],	'gtceu:mv_electric_piston', [
	event.recipes.createDeploying(invMvFluidRegulator, [invMvFluidRegulator, '#forge:circuits/mv'])
	]).transitionalItem(invMvFluidRegulator).loops(2)

	event.recipes.createSequencedAssembly([
		'gtceu:mv_sensor',
],	'gtceu:electrum_rod',[
	event.recipes.createDeploying(invMvSensor,[invMvSensor,'#forge:circuits/mv']),
	event.recipes.createDeploying(invMvSensor,[invMvSensor,'gtceu:aluminium_double_plate']),
	event.recipes.createDeploying(invMvSensor,[invMvSensor,'gtceu:aluminium_double_plate']),
	event.recipes.createDeploying(invMvSensor,[invMvSensor,'gtceu:emerald_flawless_gem']),
	]).transitionalItem(invMvSensor).loops(1)

	event.recipes.createSequencedAssembly([
	'gtceu:mv_emitter',
],	'gtceu:emerald_flawless_gem', [
	event.recipes.createDeploying(incMvEmitter, [incMvEmitter, '#forge:circuits/mv']),
	event.recipes.createDeploying(incMvEmitter, [incMvEmitter, 'gtceu:copper_single_cable']),
	event.recipes.createDeploying(incMvEmitter, [incMvEmitter, 'gtceu:electrum_rod']),
	event.recipes.createDeploying(incMvEmitter, [incMvEmitter, 'gtceu:electrum_rod']),
]).transitionalItem(incMvEmitter).loops(2)
// #endregion
})