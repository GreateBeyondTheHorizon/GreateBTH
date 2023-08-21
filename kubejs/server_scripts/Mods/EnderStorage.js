ServerEvents.recipes(event => {
	
event.remove({ output: 'enderstorage:ender_chest' })
event.remove({ output: 'enderstorage:ender_tank' })
event.remove({ output: 'enderstorage:ender_pouch' })

event.shaped(Item.of('enderstorage:ender_chest', 1),
[
	'ABA',
	'CDC',
	'AEA'
],
{
	A: 'minecraft:blaze_rod',
	B: '#minecraft:wool',
	C: 'minecraft:obsidian',
	D: 'gtceu:stainless_steel_crate',
	E: 'minecraft:ender_pearl'
}
)
	
	event.shaped(Item.of('enderstorage:ender_tank', 1),
[
	'ABA',
	'CDC',
	'AEA'
],
{
	A: 'minecraft:blaze_rod',
	B: '#minecraft:wool',
	C: 'minecraft:obsidian',
	D: 'gtceu:stainless_steel_drum',
	E: 'minecraft:ender_pearl'
}
)


	event.shaped(Item.of('enderstorage:ender_pouch', 1),
[
	'ABA',
	'CDC',
	'AEA'
],
{
	A: 'minecraft:blaze_rod',
	B: '#minecraft:wool',
	C: 'gtceu:carbon_fiber_mesh',
	D: 'gtceu:stainless_steel_crate',
	E: 'minecraft:ender_pearl'
}
)
})