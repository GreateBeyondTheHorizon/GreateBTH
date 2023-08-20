ServerEvents.recipes(event => {
	//removal
	event.remove({output: 'minecraft:piston'})
            
            event.shaped(
              Item.of( 'minecraft:piston', 1),
              [ 
                'DDD', 
                'ABA',
                'ECE'  
              ],
              {
                A: '#forge:cobblestone',
                B: 'gtceu:bronze_frame',
                C: 'gtceu:red_alloy_plate',
                D: 'gtceu:treated_wood_plate',
                E: 'gtceu:tin_spring'
              }
              )

})