ServerEvents.recipes(event => {

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
        B:'gtceu:wood_screw',
        C:'gtceu:wood_plate',
        D:'#forge:tools/screwdrivers',
        E:'#forge:tools/files',
      }
  )
  //water wheel large
    event.recipes.createMechanicalCrafting(
		Item.of('create:large_water_wheel', 1),
		[ 
      ' CDC ',
      'CEBEC',
      'DBABD',
      'CEBEC',
      ' CDC ',
		],
		{
      A:'create:water_wheel',
      B:'gtceu:steel_frame',
      C:'gtceu:steel_plate',
      D:'gtceu:wood_frame',
      E:'create:large_cogwheel',
    }
	)
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