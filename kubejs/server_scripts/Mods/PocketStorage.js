ServerEvents.recipes(event => {
    event.remove({mod: 'pocketstorage'})

    normalRecipe('pocketstorage:psu_1', 'gtceu:steel_plate', '#gtceu:circuits/lv', 'gtceu:wood_crate')
    normalRecipe('pocketstorage:psu_2', 'gtceu:stainless_steel_plate', '#gtceu:circuits/hv', 'gtceu:steel_crate')
    normalRecipe('pocketstorage:psu_3', 'gtceu:tungsten_steel_plate', '#gtceu:circuits/iv', 'gtceu:stainless_steel_crate')
    normalRecipe('pocketstorage:psu_4', 'gtceu:naquadah_alloy_plate', '#gtceu:circuits/zpm', 'gtceu:tungsten_steel_crate')

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

    upgradeRecipe('pocketstorage:psu_2', 'gtceu:stainless_steel_plate', 'gtceu:circuits/hv', 'pocketstorage:psu_1')
    upgradeRecipe('pocketstorage:psu_3', 'gtceu:tungsten_steel_plate', 'gtceu:circuits/iv', 'pocketstorage:psu_2')
    upgradeRecipe('pocketstorage:psu_4', 'gtceu:naquadah_alloy_plate', 'gtceu:circuits/zpm', 'pocketstorage:psu_3')


    function upgradeRecipe(output, plate, circuit, container) {
        event.custom({
            type: 'pocketstorage:data_upgrade',
            key: {
                'S': {item: plate},
                'P': {item: 'minecraft:piston'},
                'C': {tag: circuit},
                'H': {
                    type: 'pocketstorage:nbt_target',
                    item: container
                }
            },
            pattern: [
                'SPS',
                'CHC',
                'SPS'
            ],
            result: {item: output}
        })
    }
})