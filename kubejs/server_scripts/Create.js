// priority: 0
ServerEvents.recipes(event => {
	let incLVCirc = 'kubejs:incomplete_lv_circuit'
	event.recipes.createSequencedAssembly([
	'gtceu:basic_electronic_circuit',
],	'gtceu:resin_printed_circuit_board', [
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:resistor']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:vacuum_tube']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:red_alloy_single_cable'])
	]).transitionalItem(incLVCirc).loops(3)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_electric_motor',
],	'gtceu:magnetic_iron_rod', [
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:tin_single_cable']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:copper_single_wire']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:iron_rod'])
	]).transitionalItem(incLVCirc).loops(3)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_electric_motor',
],	'gtceu:magnetic_steel_rod', [
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:tin_single_cable']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:copper_single_wire']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:steel_rod'])
	]).transitionalItem(incLVCirc).loops(3)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_electric_piston',
],	'gtceu:lv_electric_motor', [
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:tin_single_cable']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:steel_small_gear']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:steel_rod']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:steel_plate'])
	]).transitionalItem(incLVCirc).loops(2)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_robot_arm',
],	'gtceu:lv_electric_piston', [
	event.recipes.createDeploying(incLVCirc, [incLVCirc, '#forge:circuits/lv']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:lv_electric_motor']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:tin_single_cable']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:steel_rod'])
	]).transitionalItem(incLVCirc).loops(2)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_conveyor_module',
],	'gtceu:tin_single_cable', [
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:rubber_plate']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:rubber_plate']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:rubber_plate']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:lv_electric_motor'])
	]).transitionalItem(incLVCirc).loops(2)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_electric_pump',
],	'gtceu:bronze_normal_fluid_pipe', [
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:lv_electric_motor']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:tin_screw']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:tin_rotor']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:rubber_ring']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:rubber_ring']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:tin_single_cable'])
	]).transitionalItem(incLVCirc).loops(2)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_fluid_regulator',
],	'gtceu:lv_electric_piston', [
	event.recipes.createDeploying(incLVCirc, [incLVCirc, '#forge:circuits/lv'])
	]).transitionalItem(incLVCirc).loops(2)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_sensor',
],	'gtceu:basic_electronic_circuit', [
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:steel_double_plate']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:steel_double_plate']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:brass_rod']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:quartzite_gem'])
	]).transitionalItem(incLVCirc).loops(1)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_emitter',
],	'gtceu:quartzite_gem', [
	event.recipes.createDeploying(incLVCirc, [incLVCirc, '#forge:circuits/lv']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:tin_single_cable']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:brass_rod']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:brass_rod'])
	]).transitionalItem(incLVCirc).loops(2)
})