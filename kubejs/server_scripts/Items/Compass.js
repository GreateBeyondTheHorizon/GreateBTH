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
      B: 'gtceu:tin_ingot'
    }
  )

  let empty_compass = 'kubejs:empty_compass';

  event.remove({output: 'minecraft:compass'});

   event.recipes.createSequencedAssembly([
           'minecraft:compass',
       ],	empty_compass, [
       event.recipes.createFilling('kubejs:empty_compass', ['kubejs:empty_compass', Fluid.of('minecraft:water', 1000)]),
       event.recipes.createDeploying('kubejs:empty_compass', ['kubejs:empty_compass', 'gtceu:magnetic_iron_rod']),
       event.recipes.createDeploying('kubejs:empty_compass', ['kubejs:empty_compass', 'gtceu:red_alloy_bolt']),
       event.recipes.createDeploying('kubejs:empty_compass', ['kubejs:empty_compass', 'minecraft:glass_pane'])
       ]).transitionalItem('kubejs:empty_compass').loops(1)

})