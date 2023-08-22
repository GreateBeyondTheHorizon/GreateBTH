ServerEvents.recipes(event => {
	
	event.recipes.createMechanicalCrafting(
  Item.of('minecraft:chainmail_helmet', 1),
  [ 
    ' AAA ',
    'AB BA',
	'AB BA'
  ],
  {
    A: 'gtceu:iron_ring',
	B: 'minecraft:leather'
  }
)
	event.recipes.createMechanicalCrafting(
  Item.of('minecraft:chainmail_chestplate', 1),
  [ 
    'AA  AA', 
    ' ABBA ',
    '  AA  ',
	'  AA  '
  ],
  {
    A: 'gtceu:iron_ring',
	B: 'minecraft:leather'
  }
)
	event.recipes.createMechanicalCrafting(
  Item.of('minecraft:chainmail_leggings', 1),
  [ 
    'AAAA', 
    'A  A',
    'A  A',
	'A  A',
	'B  B'
  ],
  {
    A: 'gtceu:iron_ring',
	B: 'minecraft:leather'
  }
)
	event.recipes.createMechanicalCrafting(
  Item.of('minecraft:chainmail_boots', 1),
  [ 
    ' A A ',
    ' A A ',
	'AB BA'  
  ],
  {
    A: 'gtceu:iron_ring',
	B: 'minecraft:leather'
  }
)
	
})