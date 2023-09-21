// TODO: Uncomment when KubeJS Create is added
// // priority: 0
// ServerEvents.recipes(event => {
// 	// #region variables
// 	let interAdvCirc = 'kubejs:inter_advanced_integrated_circuit'
//     let incAdvCirc = 'kubejs:inc_advanced_integrated_circuit'
//     let interMicroProcCirc = 'kubejs:inter_micro_processor_assembly'
//     let incMicroProcCirc = 'kubejs:inc_micro_processor_assembly'

// 	let incHvMotor = 'kubejs:inc_hv_motor'
// 	let incHvPiston = 'kubejs:inc_hv_piston'
// 	let lncHvRobotArm = 'kubejs:inc_hv_robot_arm'
// 	let incHvConveyor = 'kubejs:inc_hv_conveyor'
// 	let incHvPump = 'kubejs:inc_hv_pump'
// 	let invHvFluidRegulator = 'kubejs:inc_hv_fluid_regulator'
// 	let invHvSensor = 'kubejs:inc_hv_sensor'
// 	let incHvEmitter = 'kubejs:inc_hv_emitter'
// 	// #endregion
// 	// #region circuits
//     event.recipes.createSequencedAssembly([
//         'gtceu:advanced_integrated_circuit'
//     ],	interAdvCirc, [
//         event.recipes.createDeploying(incAdvCirc, [incAdvCirc, ['gtceu:transistor','gtceu:smd_transistor']]),
//         event.recipes.createDeploying(incAdvCirc, [incAdvCirc, 'gtceu:electrum_fine_wire']),
//         event.recipes.createDeploying(incAdvCirc, [incAdvCirc, 'gtceu:electrum_fine_wire']),
//         event.recipes.createDeploying(incAdvCirc, [incAdvCirc, 'gtceu:annealed_copper_bolt']),
//         event.recipes.createDeploying(incAdvCirc, [incAdvCirc, 'gtceu:annealed_copper_bolt']),
//         ]).transitionalItem(incAdvCirc).loops(4)

// 	event.recipes.createSequencedAssembly([
//         'gtceu:micro_processor_assembly'
//     ],	interMicroProcCirc, [
//         event.recipes.createDeploying(incMicroProcCirc, [incMicroProcCirc, 'gtceu:red_alloy_fine_wire']),
//         event.recipes.createDeploying(incMicroProcCirc, [incMicroProcCirc, 'gtceu:red_alloy_fine_wire']),
//         event.recipes.createDeploying(incMicroProcCirc, [incMicroProcCirc, ['gtceu:inductor', 'gtceu:smd_inductor']]),
//         event.recipes.createDeploying(incMicroProcCirc, [incMicroProcCirc, ['gtceu:capacitor', 'gtceu:smd_capacitor']]),
//         event.recipes.createDeploying(incMicroProcCirc, [incMicroProcCirc, ['gtceu:capacitor', 'gtceu:smd_capacitor']])
//         ]).transitionalItem(incMicroProcCirc).loops(4)
// 	// #endregion
// 	// #region components
// 	event.recipes.createSequencedAssembly([
// 		'gtceu:hv_electric_motor',
// ], 'gtceu:magnetic_steel_rod',[
// 	event.recipes.createDeploying(incHvMotor,[incHvMotor, 'gtceu:electrum_double_wire']),
// 	event.recipes.createDeploying(incHvMotor,[incHvMotor, 'gtceu:electrum_double_wire']),
// 	event.recipes.createDeploying(incHvMotor,[incHvMotor, 'gtceu:stainless_steel_rod']),
// 	event.recipes.createDeploying(incHvMotor,[incHvMotor, 'gtceu:silver_double_cable'])
// 	]).transitionalItem(incHvMotor).loops(2)

// 	event.recipes.createSequencedAssembly([
// 		'gtceu:hv_electric_piston',
// ], 'gtceu:hv_electric_motor',[
// 	event.recipes.createDeploying(incHvPiston,[incHvPiston, 'gtceu:gold_single_cable']),
// 	event.recipes.createDeploying(incHvPiston,[incHvPiston, 'gtceu:stainless_steel_small_gear']),
// 	event.recipes.createDeploying(incHvPiston,[incHvPiston, 'gtceu:stainless_steel_rod']),
// 	event.recipes.createDeploying(incHvPiston,[incHvPiston, 'gtceu:stainless_steel_plate']),
// 	]).transitionalItem(incHvPiston).loops(2)

// 	event.recipes.createSequencedAssembly([
// 		'gtceu:hv_robot_arm',
// ], 'gtceu:hv_electric_piston',[
// 	event.recipes.createDeploying(lncHvRobotArm,[lncHvRobotArm, '#forge:circuits/hv']),
// 	event.recipes.createDeploying(lncHvRobotArm,[lncHvRobotArm, 'gtceu:hv_electric_motor']),
// 	event.recipes.createDeploying(lncHvRobotArm,[lncHvRobotArm, 'gtceu:gold_single_cable']),
// 	event.recipes.createDeploying(lncHvRobotArm,[lncHvRobotArm, 'gtceu:stainless_steel_rod']),
// 	]).transitionalItem(lncHvRobotArm).loops(2)

// 	event.recipes.createSequencedAssembly([
// 		'gtceu:hv_conveyor_module',
// ], 'gtceu:gold_single_cable',[
// 	event.recipes.createDeploying(incHvConveyor,
// 		[incHvConveyor, 
// 			[
// 				'gtceu:rubber_plate', 
// 				'gtceu:silicone_rubber_plate', 
// 				'gtceu:styrene_butadiene_rubber_plate'
// 			]
// 		]),
// 	event.recipes.createDeploying(incHvConveyor,
// 		[incHvConveyor, 
// 			[
// 				'gtceu:rubber_plate', 
// 				'gtceu:silicone_rubber_plate', 
// 				'gtceu:styrene_butadiene_rubber_plate'
// 			]
// 		]),
// 	event.recipes.createDeploying(incHvConveyor,
// 		[incHvConveyor, 
// 			[
// 				'gtceu:rubber_plate', 
// 				'gtceu:silicone_rubber_plate', 
// 				'gtceu:styrene_butadiene_rubber_plate'
// 			]
// 		]),
// 	event.recipes.createDeploying(incHvConveyor,[incHvConveyor, 'gtceu:hv_electric_motor']),
// 	]).transitionalItem(incHvConveyor).loops(2)

// 	event.recipes.createSequencedAssembly([
// 		'gtceu:hv_electric_pump',
// ], 'gtceu:stainless_steel_normal_fluid_pipe',[
// 	event.recipes.createDeploying(incHvPump,[incHvPump, 'gtceu:steel_screw']),
// 	event.recipes.createDeploying(incHvPump,[incHvPump, 'gtceu:steel_rotor']),
// 	event.recipes.createDeploying(incHvPump,
// 		[incHvPump, 
// 			[
// 				'gtceu:rubber_ring', 
// 				'gtceu:silicone_rubber_ring', 
// 				'gtceu:styrene_butadiene_rubber_ring'
// 			]
// 		]),
// 	event.recipes.createDeploying(incHvPump,
// 		[incHvPump, 
// 			[
// 				'gtceu:rubber_ring', 
// 				'gtceu:silicone_rubber_ring', 
// 				'gtceu:styrene_butadiene_rubber_ring'
// 			]
// 		]),
// 	event.recipes.createDeploying(incHvPump,[incHvPump, 'gtceu:gold_single_cable']),
// 	event.recipes.createDeploying(incHvPump,[incHvPump, 'gtceu:hv_electric_motor']),
// 	]).transitionalItem(incHvPump).loops(1)

// 	event.recipes.createSequencedAssembly([
// 	'gtceu:hv_fluid_regulator',
// ],	'gtceu:hv_electric_pump', [
// 	event.recipes.createDeploying(invHvFluidRegulator, [invHvFluidRegulator, '#forge:circuits/hv'])
// 	]).transitionalItem(invHvFluidRegulator).loops(2)

// 	event.recipes.createSequencedAssembly([
// 		'gtceu:hv_sensor',
// ],	'gtceu:chromium_rod',[
// 	event.recipes.createDeploying(invHvSensor,[invHvSensor,'#forge:circuits/hv']),
// 	event.recipes.createDeploying(invHvSensor,[invHvSensor,'gtceu:stainless_steel_double_plate']),
// 	event.recipes.createDeploying(invHvSensor,[invHvSensor,'gtceu:stainless_steel_double_plate']),
// 	event.recipes.createDeploying(invHvSensor,[invHvSensor,'minecraft:ender_eye']),
// 	]).transitionalItem(invHvSensor).loops(1)

// 	event.recipes.createSequencedAssembly([
// 	'gtceu:hv_emitter',
// ],	'minecraft:ender_eye', [
// 	event.recipes.createDeploying(incHvEmitter, [incHvEmitter, '#forge:circuits/hv']),
// 	event.recipes.createDeploying(incHvEmitter, [incHvEmitter, 'gtceu:gold_single_cable']),
// 	event.recipes.createDeploying(incHvEmitter, [incHvEmitter, 'gtceu:chromium_rod']),
// 	event.recipes.createDeploying(incHvEmitter, [incHvEmitter, 'gtceu:chromium_rod']),
// ]).transitionalItem(incHvEmitter).loops(2)
// // #endregion
// })