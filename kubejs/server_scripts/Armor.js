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

event.shaped(
  Item.of('minecraft:chainmail_helmet', 1),
  [ 
    'AAA', 
    'ABA',
    '   '  
  ],
  {
    A: 'gtceu:iron_ring',
	B: 'minecraft:leather_helmet'
  }
)
	event.shaped(
  Item.of('minecraft:chainmail_chestplate', 1),
  [ 
    'ABA', 
    'AAA',
    'AAA'  
  ],
  {
    A: 'gtceu:iron_ring',
	B: 'minecraft:leather_chestplate'
  }
)
	event.shaped(
  Item.of('minecraft:chainmail_leggings', 1),
  [ 
    'AAA', 
    'ABA',
    'A A'  
  ],
  {
    A: 'gtceu:iron_ring',
	B: 'minecraft:leather_leggings'
  }
)
	event.shaped(
  Item.of('minecraft:chainmail_boots', 1),
  [ 
    'ABA', 
    'A A',
    '   '  
  ],
  {
    A: 'gtceu:iron_ring',
	B: 'minecraft:leather_boots'
  }
)

//iron 

event.shaped(
  Item.of('minecraft:iron_helmet', 1),
  [ 
    'ACA', 
    'ABA',
    '   '  
  ],
  {
    A: 'gtceu:iron_plate',
	B: 'minecraft:chainmail_helmet',
	C: 'gtceu:carbon_fiber_mesh'
  }
)
	event.shaped(
  Item.of('minecraft:iron_chestplate', 1),
  [ 
    'ABA', 
    'ACA',
    'AAA'  
  ],
  {
    A: 'gtceu:iron_plate',
	B: 'minecraft:chainmail_chestplate',
	C: 'gtceu:carbon_fiber_mesh'
  }
)
	event.shaped(
  Item.of('minecraft:iron_leggings', 1),
  [ 
    'ACA', 
    'ABA',
    'A A'  
  ],
  {
    A: 'gtceu:iron_plate',
	B: 'minecraft:chainmail_leggings',
	C: 'gtceu:carbon_fiber_mesh'
  }
)
	event.shaped(
  Item.of('minecraft:iron_boots', 1),
  [ 
    'ABA', 
    'C C',
    '   '  
  ],
  {
    A: 'gtceu:iron_plate',
	B: 'minecraft:chainmail_boots',
	C: 'gtceu:carbon_fiber_mesh'
  }
)

//diamond

event.shaped(
  Item.of('minecraft:diamond_helmet', 1),
  [ 
    'AAA', 
    'CBC',
    '   '  
  ],
  {
    A: 'gtceu:diamond_plate',
	B: 'minecraft:iron_helmet',
	C: 'gtceu:titanium_plate'
  }
)
	event.shaped(
  Item.of('minecraft:diamond_chestplate', 1),
  [ 
    'CBC', 
    'AAA',
    'AAA'  
  ],
  {
    A: 'gtceu:diamond_plate',
	B: 'minecraft:iron_chestplate',
	C: 'gtceu:titanium_plate'
  }
)
	event.shaped(
  Item.of('minecraft:diamond_leggings', 1),
  [ 
    'AAA', 
    'ABA',
    'C C'  
  ],
  {
    A: 'gtceu:diamond_plate',
	B: 'minecraft:iron_leggings',
	C: 'gtceu:titanium_plate'
  }
)
	event.shaped(
  Item.of('minecraft:diamond_boots', 1),
  [ 
    'ABA', 
    'C C',
    '   '  
  ],
  {
    A: 'gtceu:diamond_plate',
	B: 'minecraft:iron_boots',
	C: 'gtceu:titanium_plate'
  }
)
})