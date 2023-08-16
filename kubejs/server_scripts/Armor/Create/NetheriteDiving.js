ServerEvents.recipes(event => {

	event.shaped(
  Item.of('create:netherite_diving_helmet', 1),
  [ 
    'AAA', 
    'ABA',
    'DCD'  
  ],
  {
    A: 'gtceu:tungsten_carbide_double_plate',
	B: 'minecraft:netherite_helmet',
	C: 'gtceu:polytetrafluoroethylene_normal_fluid_pipe',
	D: 'gtceu:styrene_butadiene_rubber_plate'
  }
)

	event.shaped(
  Item.of('create:netherite_backtank', 1),
  [ 
    'DCD', 
    'ABA',
    'AAA'  
  ],
  {
    A: 'gtceu:tungsten_carbide_double_plate',
	B: 'gtceu:tungsten_steel_drum',
	C: 'gtceu:polytetrafluoroethylene_normal_fluid_pipe',
	D: 'gtceu:styrene_butadiene_rubber_plate'
  }
)
	event.shaped(
  Item.of('create:netherite_diving_boots', 1),
  [ 
    'DBD', 
    'A A',
    'A A'  
  ],
  {
    A: 'gtceu:tungsten_carbide_double_plate',
	B: 'minecraft:netherite_boots',
	D: 'gtceu:styrene_butadiene_rubber_plate'
  }
)
})