//priority: 0

/*
	var screws = ['gtceu:copper_screw', 'gtceu:iron_screw', 'gtceu:gold_screw', 'gtceu:diamond_screw', 'gtceu:diamond_screw']
	var plates = ['gtceu:copper_double_plate', 'gtceu:iron_double_plate', 'gtceu:gold_double_plate', 'kubejs:double_diamond_plate', 'kubejs:double_obsidian_plate']
	var chests = ['minecraft:chest', 'ironchest:copper_chest', 'ironchest:iron_chest', 'ironchest:gold_chest', 'ironchest:diamond_chest', 'ironchest:obsidian_chest']
ServerEvents.recipes(event => {
	event.remove({ output: 'ironchest:crystal_chest' })
	event.remove({ output: 'ironchest:copper_chest' })
	event.remove({ output: 'ironchest:iron_chest' })
	event.remove({ output: 'ironchest:gold_chest' })
	event.remove({ output: 'ironchest:diamond_chest' })
	event.remove({ output: 'ironchest:obsidian_chest' })
	var i = 0;
	while (i < chests.length - 1){
	console.info(i)
	
	event.shaped(Item.of(chests[i + 1]),
	[
		'ABA',
		'BCB',
		'DBE'
	],
	{
		A: Item.of(screws[i]),
		B: Item.of(plates[i]),
		C: Item.of(chests[i]),
		D: '#forge:tools/screwdrivers',
		E: '#forge:tools/hammers'
	}
	)
	i++
}
	event.shaped(Item.of('ironchest:crystal_chest'),
	[
		'ABA',
		'BCB',
		'DBE'
	],
	{
		A: 'gtceu:tempered_glass',
		B: 'gtceu:glass_plate',
		C: 'ironchest:diamond_chest',
		D: '#forge:tools/screwdrivers',
		E: '#forge:tools/saws'
	}
	)
})

*/