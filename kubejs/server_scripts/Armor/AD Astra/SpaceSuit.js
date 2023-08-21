ServerEvents.recipes(event => {
	
	event.shaped(
  Item.of('ad_astra:space_helmet', 1),
  [ 
    'AAA', 
    'ABA',
    'ACA'  
  ],
  {
    A: 'minecraft:white_wool',
    B: 'gtceu:tempered_glass',
    C: 'minecraft:iron_helmet'
	
  }
)
	event.shaped(
  Item.of('ad_astra:space_suit', 1),
  [ 
    'ABA', 
    'ACA',
    'AAA'  
  ],
  {
    A: 'minecraft:white_wool',
    B: 'minecraft:iron_chestplate',
	C: 'gtceu:steel_drum'
  }
)
	event.shaped(
  Item.of('ad_astra:space_pants', 1),
  [ 
    'AAA', 
    'ABA',
    'A A'  
  ],
  {
    A: 'minecraft:white_wool',
    B: 'minecraft:iron_leggings'
  }
)
	event.shaped(
  Item.of('ad_astra:space_boots', 1),
  [ 
    'ABA', 
    'A A',
    '   '  
  ],
  {
    A: 'minecraft:white_wool',
    B: 'minecraft:iron_boots'
  }
)
})