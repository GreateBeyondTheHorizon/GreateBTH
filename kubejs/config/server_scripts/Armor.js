// priority: 0
ServerEvents.recipes(event => {
	//removal
	event.remove({output: '#forge:armors'})
	
	//leather
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

//chainmail

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

//iron 

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

//diamond

	event.recipes.createMechanicalCrafting(
  Item.of('minecraft:diamond_helmet', 1),
  [ 
    'AAAAAA',
    'ABBBBA',
    'AC  CA',
	'AC  CA'
  ],
  {
    A: 'gtceu:diamond_plate',
	B: 'gtceu:stainless_steel_plate',
	C: 'gtceu:titanium_plate'
  }
)
	event.recipes.createMechanicalCrafting(
  Item.of('minecraft:diamond_chestplate', 1),
  [ 
    'CBB BBC', 
    'CBCCCBC',
    ' ABCBA ',
	' ABCBA ',
	' ABBBA '
  ],
  {
    A: 'gtceu:diamond_plate',
	B: 'gtceu:stainless_steel_plate',
	C: 'gtceu:titanium_plate'
  }
)
	event.recipes.createMechanicalCrafting(
  Item.of('minecraft:diamond_leggings', 1),
  [ 
    'AAAAAA',
    'ABCCBA', 
    'AB  BA',
    'AB  BA',
	'AB  BA'
  ],
  {
    A: 'gtceu:diamond_plate',
	B: 'gtceu:stainless_steel_plate',
	C: 'gtceu:titanium_plate'
  }
)
	event.recipes.createMechanicalCrafting(
  Item.of('minecraft:diamond_boots', 1),
  [ 
    ' AA AA ', 
    ' AA AA ',
    ' AA AA ',
	'CBB BBC'
  ],
  {
    A: 'gtceu:diamond_plate',
	B: 'gtceu:stainless_steel_plate',
	C: 'gtceu:titanium_plate'
  }
)

//netherite

	event.recipes.createMechanicalCrafting(
  Item.of('minecraft:netherite_helmet', 1),
  [ 
    'AAAAAAA',
	'ABBBBBA',
    'ABCCCBA',
    'AB C BA',
	'AB   BA'
  ],
  {
    A: 'gtceu:tungsten_carbide_plate',
	B: 'gtceu:tungsten_steel_plate',
	C: 'kubejs:netherite_plate'
  }
)
	event.recipes.createMechanicalCrafting(
  Item.of('minecraft:netherite_chestplate', 1),
  [ 
    'ABBB BBBA', 
    'ABBCCCBBA',
    '  ABCBA  ',
	'  ABCBA  ',
	'  ABBBA  ',
	'  AAAAA  '
  ],
  {
    A: 'gtceu:tungsten_carbide_plate',
	B: 'gtceu:tungsten_steel_plate',
	C: 'kubejs:netherite_plate'
  }
)
	event.recipes.createMechanicalCrafting(
  Item.of('minecraft:netherite_leggings', 1),
  [ 
	'AAAAAA',
	'ABBBBA',
    'ABCCBA', 
    'AB  BA',
    'AB  BA',
	'AB  BA',
	'AB  BA'
  ],
  {
    A: 'gtceu:tungsten_carbide_plate',
	B: 'gtceu:tungsten_steel_plate',
	C: 'kubejs:netherite_plate'
  }
)
	event.recipes.createMechanicalCrafting(
  Item.of('minecraft:netherite_boots'),
  [ 
	' ABA ABA ',
    ' ABA ABA ', 
    ' ABA ABA ',
    ' ABA ABA ',
	'CAA   AAC'
  ],
  {
    A: 'gtceu:tungsten_carbide_plate',
	B: 'gtceu:tungsten_steel_plate',
	C: 'kubejs:netherite_plate'
  }
)



//modded recipes

})