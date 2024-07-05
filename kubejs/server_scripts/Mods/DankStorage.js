ServerEvents.recipes(event => {
    event.remove({mod: 'dankstorage'})

    normalRecipe('dankstorage:dank_1', 'gtceu:steel_plate', '#gtceu:circuits/lv', 'gtceu:wood_crate')
    normalRecipe('dankstorage:dank_2', 'gtceu:aluminium_plate', '#gtceu:circuits/mv', 'gtceu:bronze_crate')
    normalRecipe('dankstorage:dank_3', 'gtceu:stainless_steel_plate', '#gtceu:circuits/hv', 'gtceu:steel_crate')
    normalRecipe('dankstorage:dank_4', 'gtceu:titanium_plate', '#gtceu:circuits/ev', 'gtceu:aluminium_crate')
    normalRecipe('dankstorage:dank_5', 'gtceu:tungsten_steel_plate', '#gtceu:circuits/iv', 'gtceu:stainless_steel_crate')
    normalRecipe('dankstorage:dank_6', 'gtceu:rhodium_plated_palladium_plate', '#gtceu:circuits/luv', 'gtceu:titanium_crate')
    normalRecipe('dankstorage:dank_7', 'gtceu:naquadah_alloy_plate', '#gtceu:circuits/zpm', 'gtceu:tungsten_steel_crate')

    function normalRecipe(output, plate, circuit, container) {
        event.shaped(output,
            [
                'SPS',
                'CHC',
                'SPS'
            ],
            {
                S: plate,
                P: 'minecraft:piston',
                C: circuit,
                H: container
            }
        )
    }

    upgradeRecipe('dankstorage:dank_2', 'gtceu:aluminium_plate', 'gtceu:circuits/mv', 'dankstorage:dank_1')
    upgradeRecipe('dankstorage:dank_3', 'gtceu:stainless_steel_plate', 'gtceu:circuits/hv', 'dankstorage:dank_2')
    upgradeRecipe('dankstorage:dank_4', 'gtceu:titanium_plate', 'gtceu:circuits/ev', 'dankstorage:dank_3')
    upgradeRecipe('dankstorage:dank_5', 'gtceu:tungsten_steel_plate', 'gtceu:circuits/iv', 'dankstorage:dank_4')
    upgradeRecipe('dankstorage:dank_6', 'gtceu:rhodium_plated_palladium_plate', 'gtceu:circuits/luv', 'dankstorage:dank_5')
    upgradeRecipe('dankstorage:dank_7', 'gtceu:naquadah_alloy_plate', 'gtceu:circuits/zpm', 'dankstorage:dank_6')


    function upgradeRecipe(output, plate, circuit, container) {
        event.custom({
            type: 'dankstorage:upgrade',
            key: {
                'S': {item: plate},
                'P': {item: 'minecraft:piston'},
                'C': {tag: circuit},
                'H': {item: container}
            },
            pattern: [
                'SPS',
                'CHC',
                'SPS'
            ],
            result: {item: output}
        })
    }

    event.shaped('dankstorage:dock',
        [
            'BBB',
            'BAB',
            'BBB'
        ],
        {
            A: 'minecraft:barrel',
            B: 'minecraft:black_concrete'
        }
)
})