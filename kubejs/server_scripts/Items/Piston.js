ServerEvents.recipes(event => {
	//removal
	event.remove({output: 'minecraft:piston'})


    let pistonIngot = ['gtceu:iron_gear', 'gtceu:aluminium_gear', 'gtceu:stainless_steel_gear', 'gtceu:titanium_gear']


   
	event.shaped(
        Item.of( 'minecraft:piston', 6),
        [ 
          'DDD', 
          'ABA',
          'ACA'  
        ],
        {
          A: '#forge:cobblestone',
          B:  pistonIngot[3],
          C: 'gtceu:red_alloy_plate',
          D: 'gtceu:treated_wood_planks',
        }
        )
   
	event.shaped(
        Item.of( 'minecraft:piston', 4),
        [ 
          'DDD', 
          'ABA',
          'ACA'  
        ],
        {
          A: '#forge:cobblestone',
          B:  pistonIngot[2],
          C: 'gtceu:red_alloy_plate',
          D: 'gtceu:treated_wood_planks',
        }
        )
   
	event.shaped(
        Item.of( 'minecraft:piston', 2),
        [ 
          'DDD', 
          'ABA',
          'ACA'  
        ],
        {
          A: '#forge:cobblestone',
          B:  pistonIngot[1],
          C: 'gtceu:red_alloy_plate',
          D: 'gtceu:treated_wood_planks',
        }
        )
   
	event.shaped(
        Item.of( 'minecraft:piston', 1),
        [ 
          'DDD', 
          'ABA',
          'ACA'  
        ],
        {
          A: '#forge:cobblestone',
          B:  pistonIngot[0],
          C: 'gtceu:red_alloy_plate',
          D: 'gtceu:treated_wood_planks',
        }
        )


	




})