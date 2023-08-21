ServerEvents.recipes(event => {
	event.shaped(
  Item.of('create:copper_diving_helmet', 1),
  [ 
    'AAA', 
    'ABA',
    'DCD'  
  ],
  {
    A: 'gtceu:copper_double_plate',
	B: 'gtceu:tempered_glass',
	C: 'gtceu:polyethylene_small_fluid_pipe',
	D: 'gtceu:rubber_plate'
  }
)

	event.shaped(
  Item.of('create:copper_backtank', 1),
  [ 
    'DCD', 
    'ABA',
    'AAA'  
  ],
  {
    A: 'gtceu:copper_double_plate',
	B: 'gtceu:bronze_drum',
	C: 'gtceu:polyethylene_small_fluid_pipe',
	D: 'gtceu:rubber_plate'
  }
)
	event.shaped(
  Item.of('create:copper_diving_boots', 1),
  [ 
    'D D', 
    'A A',
    'A A'  
  ],
  {
    A: 'gtceu:copper_double_plate',
	D: 'gtceu:rubber_plate'
  }
)
})