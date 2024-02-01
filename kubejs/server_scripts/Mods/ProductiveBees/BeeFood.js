ServerEvents.recipes(event => {


    event.shaped(
        Item.of('kubejs:advanced_honey_treat', 1),
        [ 
            'AAA',
            'ABA',
            'DCD'				
        ],
        {
            A:Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:stainless_steel"}}').strongNBT(),
            B:'productivebees:honey_treat',
            C:'#gtceu:circuits/hv',
            D:'gtceu:steel_plate',   
        }
    )

    event.shaped(
        Item.of('kubejs:titanium_bee_food', 1),
        [ 
            'AAA',
            'ABA',
            'DCD'				
        ],
        {
            A:'gtceu:titanium_gear',
            B:'kubejs:advanced_honey_treat',
            C:'gtceu:aluminium_plate',
            D:'gtceu:bronze_plate',
        }
    )






})