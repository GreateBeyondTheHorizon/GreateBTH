ServerEvents.recipes(event => {

  var removed = [
    'potato_cannon',
    'fluid_pipe',
    'smart_fluid_pipe', 
    'mechanical_pump',
    'fluid_valve',
    'water_wheel',
    'large_water_wheel',
    'andesite_casing',
    'windmill_bearing',
    'steam_engine',
    'belt_connector'
  ]

  removed.forEach(item => {
    event.remove({output: `create:${item}`})
  })

  event.remove({ output: 'create:iron_sheet'})
  event.remove({ output: 'create:brass_sheet'})
  event.remove({ output: 'create:copper_sheet'})
  event.remove({ output: 'create:golden_sheet'})
    
  event.recipes.createMixing('minecraft:netherite_ingot', [
    'minecraft:netherite_scrap',
    'minecraft:netherite_scrap',
    'minecraft:netherite_scrap',
    'minecraft:netherite_scrap',
    Fluid.of('gtceu:hssg', 576)
  ]).superheated()

  event.recipes.createMixing('minecraft:turtle_helmet', [
    'kubejs:unf_turtle_helmet',
    Fluid.of('create:potion', 576, {Bottle:'REGULAR', Potion:'minecraft:water_breathing'})
  ]).heated()
  
  // mechanical belts
  event.recipes.createMixing(Fluid.of('gtceu:rubber', 500), [
    Item.of('gtceu:raw_rubber_dust', 8),
    Item.of('gtceu:sulfur_dust', 1)
  ]).heated()

  event.recipes.createFilling(Item.of('create:belt_connector', 1), [
      'gtceu:steel_plate',
      Fluid.of('gtceu:rubber', 250)
  ])


  // SU gen
  // water wheel small
  event.shaped(	
      Item.of('create:water_wheel', 1),
      [
        'DCE',
        'CAC',
        'BCB'
      ],
      {
        A:'create:andesite_casing',
        B:'gtceu:bronze_screw',
        C:'gtceu:wood_plate',
        D:'#forge:tools/screwdrivers',
        E:'#forge:tools/files',
      }
  )
  //water wheel large
  event.shaped(	
    Item.of('create:large_water_wheel', 1),
    [
      'DCE',
      'CAC',
      'BCB'
    ],
    {
      A:'create:andesite_casing',
      B:'gtceu:steel_screw',
      C:'gtceu:treated_wood_plate',
      D:'#forge:tools/screwdrivers',
      E:'#forge:tools/files',
    }
  )
  
  // potato cannon
  event.recipes.createMechanicalCrafting(
		Item.of('create:potato_cannon', 1),
		[ 
      'ABCCC',
      'DD   '
		],
		{
      A:'greate:steel_cogwheel',
      B:'create:precision_mechanism',
      C:'gtceu:copper_normal_fluid_pipe',
      D:'minecraft:copper_ingot',
    })
    
  // windmill bearing
    event.recipes.createMechanicalCrafting(
		Item.of('create:windmill_bearing', 1),
		[ 
      ' FEF ',
      'FDCDF',
      'EBABE',
      'FDCDF',
      ' FEF ',
		],
		{
      A:'gtceu:mv_machine_casing',
      B:'create:large_cogwheel',
      C:'create:cogwheel',
      D:'gtceu:aluminium_plate',
      E:'gtceu:aluminium_rod',
      F:'gtceu:aluminium_small_gear',
    }
	)
  // steam engine
    event.recipes.createMechanicalCrafting(
		Item.of('create:steam_engine', 1),
		[ 
      ' BHB ',
      ' BDB ',
      ' GCG ',
      ' EAF ',
      ' GGG ',
		],
		{
      A: 'gtceu:hv_machine_casing',
      B: 'gtceu:stainless_steel_rod',
      C: 'gtceu:stainless_steel_quadruple_fluid_pipe',
      D: 'gtceu:stainless_steel_frame',
      E: 'gtceu:hv_electric_pump',
      F: 'gtceu:hv_fluid_regulator',
      G: 'gtceu:stainless_steel_plate',
      H: 'gtceu:hv_electric_piston',
    }
	)
})