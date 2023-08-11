ServerEvents.recipes(event => {
	//removal
	event.remove({output: 'naturescompass:naturescompass'})
	

 //NatureCompass
	event.shaped(
  Item.of('naturescompass:naturescompass', 1),
  [ 
    'AFB', 
    'FEF',
    'CGD'  
  ],
  {
    A: '@pamhc2trees',
    B: '@pamhc2crops',
    C: '@pamhc2foodextended',
    D: '@pamhc2foodcore',
    E: 'minecraft:compass',
    F: 'gtceu:treated_wood_planks',
    G: 'create:bar_of_chocolate'
  }
  )

  //EmptyCompass
  event.shaped(
    Item.of('kubejs:empty_compass', 1),
    [ 
      ' B ', 
      'BAB',
      ' B '  
    ],
    {
      A: 'gtceu:steel_plate',
      B: 'minecraft:iron_ingot'
    }
  )

})