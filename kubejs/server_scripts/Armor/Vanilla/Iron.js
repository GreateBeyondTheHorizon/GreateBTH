ServerEvents.recipes(event => {
	
	event.recipes.createMechanicalCrafting(
  Item.of('minecraft:iron_helmet', 1),
  [ 
    ' ABA ',
    'AC CA',
	'AC CA' 
  ],
  {
    A: 'gtceu:iron_plate',
	B: 'gtceu:invar_plate',
	C: 'gtceu:carbon_fiber_mesh'
  }
)
	event.recipes.createMechanicalCrafting(
  Item.of('minecraft:iron_chestplate', 1),
  [ 
    'CB  BC', 
    'CBCCBC',
    ' ABBA ',
	' ABBA ',
	' ABBA ',
  ],
  {
    A: 'gtceu:iron_plate',
	B: 'gtceu:invar_plate',
	C: 'gtceu:carbon_fiber_mesh'
  }
)
	event.recipes.createMechanicalCrafting(
  Item.of('minecraft:iron_leggings', 1),
  [ 
    'AAAA',
    'ACCA', 
    'A  A',
    'A  A',
	'B  B'  
  ],
  {
    A: 'gtceu:iron_plate',
	B: 'gtceu:invar_plate',
	C: 'gtceu:carbon_fiber_mesh'
  }
)
	event.recipes.createMechanicalCrafting(
  Item.of('minecraft:iron_boots', 1),
  [ 
    ' A A ', 
    ' A A ',
    ' A A ',
	'CB BC' 
  ],
  {
    A: 'gtceu:iron_plate',
	B: 'gtceu:invar_plate',
	C: 'gtceu:carbon_fiber_mesh'
  }
)
	
})