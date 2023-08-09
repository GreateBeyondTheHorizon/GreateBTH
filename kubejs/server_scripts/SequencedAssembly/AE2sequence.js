// priority: 0
ServerEvents.recipes(event => {
	
	let incStorageCell = 'kubejs:incomplete_storage_cell'
	let incStorageComponent = 'kubejs:incomplete_storage_component'
	
	event.recipes.createSequencedAssembly([
		'ae2:cell_component_1k',
],	'kubejs:1k_me_storage_base', [
	event.recipes.createDeploying(incStorageComponent, [incStorageComponent, 'gtceu:red_alloy_double_wire']),
	event.recipes.createDeploying(incStorageComponent, [incStorageComponent, 'gtceu:red_alloy_double_wire']),
	event.recipes.createDeploying(incStorageComponent, [incStorageComponent, '#forge:gems/certus_quartz']),
	event.recipes.createDeploying(incStorageComponent, [incStorageComponent, 'ae2:logic_processor'])
	]).transitionalItem(incStorageComponent).loops(1)
event.recipes.createSequencedAssembly([
		'ae2:cell_component_4k',
],	'kubejs:4k_me_storage_base', [
	event.recipes.createDeploying(incStorageComponent, [incStorageComponent, 'gtceu:copper_double_wire']),
	event.recipes.createDeploying(incStorageComponent, [incStorageComponent, 'ae2:cell_component_1k']),
	event.recipes.createDeploying(incStorageComponent, [incStorageComponent, 'ae2:calculation_processor'])
	]).transitionalItem(incStorageComponent).loops(3)
	
event.recipes.createSequencedAssembly([
		'ae2:cell_component_16k',
],	'kubejs:16k_me_storage_base', [
	event.recipes.createDeploying(incStorageComponent, [incStorageComponent, 'gtceu:silver_double_wire']),
	event.recipes.createDeploying(incStorageComponent, [incStorageComponent, 'ae2:cell_component_4k']),
	event.recipes.createDeploying(incStorageComponent, [incStorageComponent, 'ae2:calculation_processor'])
	]).transitionalItem(incStorageComponent).loops(3)
	
	event.recipes.createSequencedAssembly([
		'ae2:cell_component_64k',
],	'kubejs:64k_me_storage_base', [
	event.recipes.createDeploying(incStorageComponent, [incStorageComponent, 'gtceu:aluminium_quadruple_wire']),
	event.recipes.createDeploying(incStorageComponent, [incStorageComponent, 'ae2:cell_component_16k']),
	event.recipes.createDeploying(incStorageComponent, [incStorageComponent, 'ae2:calculation_processor'])
	]).transitionalItem(incStorageComponent).loops(3)
	
	event.recipes.createSequencedAssembly([
		'ae2:cell_component_256k',
],	'kubejs:256k_me_storage_base', [
	event.recipes.createDeploying(incStorageComponent, [incStorageComponent, 'gtceu:platinum_double_wire']),
	event.recipes.createDeploying(incStorageComponent, [incStorageComponent, 'ae2:cell_component_64k']),
	event.recipes.createDeploying(incStorageComponent, [incStorageComponent, 'ae2:calculation_processor']),
	event.recipes.createDeploying(incStorageComponent, [incStorageComponent, 'ae2:sky_dust'])
	]).transitionalItem(incStorageComponent).loops(3)
	
	event.recipes.createSequencedAssembly([
		'ae2:logic_processor',
],	'#forge:circuits/lv', [
	event.recipes.createDeploying(incStorageComponent, [incStorageComponent, 'ae2:printed_logic_processor']),
	event.recipes.createDeploying(incStorageComponent, [incStorageComponent, 'ae2:printed_silicon'])
	]).transitionalItem(incStorageComponent).loops(1)
	
	event.recipes.createSequencedAssembly([
		'ae2:engineering_processor',
],	'#forge:circuits/lv', [
	event.recipes.createDeploying(incStorageComponent, [incStorageComponent, 'ae2:printed_engineering_processor']),
	event.recipes.createDeploying(incStorageComponent, [incStorageComponent, 'ae2:printed_silicon'])
	]).transitionalItem(incStorageComponent).loops(1)
	
	event.recipes.createSequencedAssembly([
		'ae2:calculation_processor',
],	'#forge:circuits/lv', [
	event.recipes.createDeploying(incStorageComponent, [incStorageComponent, 'ae2:printed_calculation_processor']),
	event.recipes.createDeploying(incStorageComponent, [incStorageComponent, 'ae2:printed_silicon'])
	]).transitionalItem(incStorageComponent).loops(1)
	
})