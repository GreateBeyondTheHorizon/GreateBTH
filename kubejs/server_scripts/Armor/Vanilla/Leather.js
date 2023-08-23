ServerEvents.recipes(event => {
	event.remove({output: '#forge:armors'})
	
	event.shaped(
  Item.of('minecraft:leather_helmet', 1),
  [ 
    'AAA', 
    'A A',
    '   '  
  ],
  {
    A: 'minecraft:leather'
  }
)
	event.shaped(
  Item.of('minecraft:leather_chestplate', 1),
  [ 
    'A A', 
    'AAA',
    'AAA'  
  ],
  {
    A: 'minecraft:leather'
  }
)
	event.shaped(
  Item.of('minecraft:leather_leggings', 1),
  [ 
    'AAA', 
    'A A',
    'A A'  
  ],
  {
    A: 'minecraft:leather'
  }
)
	event.shaped(
  Item.of('minecraft:leather_boots', 1),
  [ 
    'A A', 
    'A A',
    '   '  
  ],
  {
    A: 'minecraft:leather'
  }
)
})