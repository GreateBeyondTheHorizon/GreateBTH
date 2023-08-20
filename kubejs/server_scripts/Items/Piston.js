ServerEvents.recipes(event => {
	//removal
	event.remove({output: 'minecraft:piston'})

   
	event.shaped(
        Item.of( 'minecraft:piston', 9),
        [ 
          'DDD', 
          'ABA',
          'ECE'  
        ],
        {
          A: '#forge:cobblestone',
          B: 'gtceu:naquadah_alloy_frame',
          C: 'gtceu:red_alloy_plate',
          D: 'gtceu:treated_wood_plate',
          E: 'gtceu:naquadah_spring'
        }
        )
   
        event.shaped(
          Item.of( 'minecraft:piston', 6),
          [ 
            'DDD', 
            'ABA',
            'ECE'  
          ],
          {
            A: '#forge:cobblestone',
            B: 'gtceu:titanium_frame',
            C: 'gtceu:red_alloy_plate',
            D: 'gtceu:treated_wood_plate',
            E: 'gtceu:kanthal_spring'
          }
          )

          event.shaped(
            Item.of( 'minecraft:piston', 3),
            [ 
              'DDD', 
              'ABA',
              'ECE'  
            ],
            {
              A: '#forge:cobblestone',
              B: 'gtceu:aluminium_frame',
              C: 'gtceu:red_alloy_plate',
              D: 'gtceu:treated_wood_plate',
              E: 'gtceu:aluminium_spring'
            }
            )
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