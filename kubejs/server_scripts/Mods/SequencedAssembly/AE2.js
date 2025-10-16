// priority: 0
ServerEvents.recipes((event) => {
    event.remove({ output: /ae2:(.*)_storage_cell_(.*)/ })

    event.recipes
        .createSequencedAssembly(
            ['ae2:cell_component_1k'],
            'kubejs:1k_me_storage_base',
            [
                event.recipes.createDeploying(
                    'kubejs:incomplete_storage_component',
                    [
                        'kubejs:incomplete_storage_component',
                        'gtceu:red_alloy_double_wire',
                    ]
                ),
                event.recipes.createDeploying(
                    'kubejs:incomplete_storage_component',
                    [
                        'kubejs:incomplete_storage_component',
                        'gtceu:red_alloy_double_wire',
                    ]
                ),
                event.recipes.createDeploying(
                    'kubejs:incomplete_storage_component',
                    [
                        'kubejs:incomplete_storage_component',
                        '#forge:gems/certus_quartz',
                    ]
                ),
                event.recipes.createDeploying(
                    'kubejs:incomplete_storage_component',
                    [
                        'kubejs:incomplete_storage_component',
                        'ae2:logic_processor',
                    ]
                ),
            ]
        )
        .transitionalItem('kubejs:incomplete_storage_component')
        .loops(1)
    event.recipes
        .createSequencedAssembly(
            ['ae2:cell_component_4k'],
            'kubejs:4k_me_storage_base',
            [
                event.recipes.createDeploying(
                    'kubejs:incomplete_storage_component',
                    [
                        'kubejs:incomplete_storage_component',
                        'gtceu:copper_double_wire',
                    ]
                ),
                event.recipes.createDeploying(
                    'kubejs:incomplete_storage_component',
                    [
                        'kubejs:incomplete_storage_component',
                        'ae2:cell_component_1k',
                    ]
                ),
                event.recipes.createDeploying(
                    'kubejs:incomplete_storage_component',
                    [
                        'kubejs:incomplete_storage_component',
                        'ae2:calculation_processor',
                    ]
                ),
            ]
        )
        .transitionalItem('kubejs:incomplete_storage_component')
        .loops(3)

    event.recipes
        .createSequencedAssembly(
            ['ae2:cell_component_16k'],
            'kubejs:16k_me_storage_base',
            [
                event.recipes.createDeploying(
                    'kubejs:incomplete_storage_component',
                    [
                        'kubejs:incomplete_storage_component',
                        'gtceu:silver_double_wire',
                    ]
                ),
                event.recipes.createDeploying(
                    'kubejs:incomplete_storage_component',
                    [
                        'kubejs:incomplete_storage_component',
                        'ae2:cell_component_4k',
                    ]
                ),
                event.recipes.createDeploying(
                    'kubejs:incomplete_storage_component',
                    [
                        'kubejs:incomplete_storage_component',
                        'ae2:calculation_processor',
                    ]
                ),
            ]
        )
        .transitionalItem('kubejs:incomplete_storage_component')
        .loops(3)

    event.recipes
        .createSequencedAssembly(
            ['ae2:cell_component_64k'],
            'kubejs:64k_me_storage_base',
            [
                event.recipes.createDeploying(
                    'kubejs:incomplete_storage_component',
                    [
                        'kubejs:incomplete_storage_component',
                        'gtceu:aluminium_quadruple_wire',
                    ]
                ),
                event.recipes.createDeploying(
                    'kubejs:incomplete_storage_component',
                    [
                        'kubejs:incomplete_storage_component',
                        'ae2:cell_component_16k',
                    ]
                ),
                event.recipes.createDeploying(
                    'kubejs:incomplete_storage_component',
                    [
                        'kubejs:incomplete_storage_component',
                        'ae2:calculation_processor',
                    ]
                ),
            ]
        )
        .transitionalItem('kubejs:incomplete_storage_component')
        .loops(3)

    event.recipes
        .createSequencedAssembly(
            ['ae2:cell_component_256k'],
            'kubejs:256k_me_storage_base',
            [
                event.recipes.createDeploying(
                    'kubejs:incomplete_storage_component',
                    [
                        'kubejs:incomplete_storage_component',
                        'gtceu:platinum_double_wire',
                    ]
                ),
                event.recipes.createDeploying(
                    'kubejs:incomplete_storage_component',
                    [
                        'kubejs:incomplete_storage_component',
                        'ae2:cell_component_64k',
                    ]
                ),
                event.recipes.createDeploying(
                    'kubejs:incomplete_storage_component',
                    [
                        'kubejs:incomplete_storage_component',
                        'ae2:calculation_processor',
                    ]
                ),
                event.recipes.createDeploying(
                    'kubejs:incomplete_storage_component',
                    ['kubejs:incomplete_storage_component', 'ae2:sky_dust']
                ),
            ]
        )
        .transitionalItem('kubejs:incomplete_storage_component')
        .loops(3)

    event.recipes
        .createSequencedAssembly(
            ['ae2:logic_processor'],
            '#gtceu:circuits/mv',
            [
                event.recipes.createDeploying(
                    'kubejs:incomplete_storage_component',
                    [
                        'kubejs:incomplete_storage_component',
                        'ae2:printed_logic_processor',
                    ]
                ),
                event.recipes.createDeploying(
                    'kubejs:incomplete_storage_component',
                    [
                        'kubejs:incomplete_storage_component',
                        'ae2:printed_silicon',
                    ]
                ),
                event.recipes.createFilling(
                    'kubejs:incomplete_storage_component',
                    [
                        'kubejs:incomplete_storage_component',
                        Fluid.of('gtceu:redstone', 144),
                    ]
                ),
            ]
        )
        .transitionalItem('kubejs:incomplete_storage_component')
        .loops(1)

    event.recipes
        .createSequencedAssembly(
            ['ae2:engineering_processor'],
            '#gtceu:circuits/mv',
            [
                event.recipes.createDeploying(
                    'kubejs:incomplete_storage_component',
                    [
                        'kubejs:incomplete_storage_component',
                        'ae2:printed_engineering_processor',
                    ]
                ),
                event.recipes.createDeploying(
                    'kubejs:incomplete_storage_component',
                    [
                        'kubejs:incomplete_storage_component',
                        'ae2:printed_silicon',
                    ]
                ),
                event.recipes.createFilling(
                    'kubejs:incomplete_storage_component',
                    [
                        'kubejs:incomplete_storage_component',
                        Fluid.of('gtceu:redstone', 144),
                    ]
                ),
            ]
        )
        .transitionalItem('kubejs:incomplete_storage_component')
        .loops(1)

    event.recipes
        .createSequencedAssembly(
            ['ae2:calculation_processor'],
            '#gtceu:circuits/mv',
            [
                event.recipes.createDeploying(
                    'kubejs:incomplete_storage_component',
                    [
                        'kubejs:incomplete_storage_component',
                        'ae2:printed_calculation_processor',
                    ]
                ),
                event.recipes.createDeploying(
                    'kubejs:incomplete_storage_component',
                    [
                        'kubejs:incomplete_storage_component',
                        'ae2:printed_silicon',
                    ]
                ),
                event.recipes.createFilling(
                    'kubejs:incomplete_storage_component',
                    [
                        'kubejs:incomplete_storage_component',
                        Fluid.of('gtceu:redstone', 144),
                    ]
                ),
            ]
        )
        .transitionalItem('kubejs:incomplete_storage_component')
        .loops(1)

    for (const cellSize of global.AE2.CellSizes) {
        let transitionalItem = 'kubejs:incomplete_storage_cell'
        // Item
        event.recipes
            .createSequencedAssembly(
                ['ae2:item_storage_cell_' + cellSize],
                'gtceu:polyethylene_plate',
                [
                    event.recipes.createDeploying(transitionalItem, [
                        transitionalItem,
                        'gtceu:copper_single_cable',
                    ]),
                    event.recipes.createDeploying(transitionalItem, [
                        transitionalItem,
                        'ae2:cell_component_' + cellSize,
                    ]),
                    event.recipes.createDeploying(transitionalItem, [
                        transitionalItem,
                        'ae2:quartz_glass',
                    ]),
                    event.recipes.createDeploying(transitionalItem, [
                        transitionalItem,
                        'gtceu:polyethylene_plate',
                    ]),
                    event.recipes.createDeploying(transitionalItem, [
                        transitionalItem,
                        'gtceu:steel_screw',
                    ]),
                    event.recipes.createDeploying(transitionalItem, [
                        transitionalItem,
                        'gtceu:steel_screw',
                    ]),
                ]
            )
            .transitionalItem(transitionalItem)
            .loops(1)
        // Fluid
        event.recipes
            .createSequencedAssembly(
                ['ae2:fluid_storage_cell_' + cellSize],
                'gtceu:annealed_copper_plate',
                [
                    event.recipes.createDeploying(transitionalItem, [
                        transitionalItem,
                        'gtceu:copper_single_cable',
                    ]),
                    event.recipes.createDeploying(transitionalItem, [
                        transitionalItem,
                        'ae2:cell_component_' + cellSize,
                    ]),
                    event.recipes.createDeploying(transitionalItem, [
                        transitionalItem,
                        'ae2:quartz_glass',
                    ]),
                    event.recipes.createDeploying(transitionalItem, [
                        transitionalItem,
                        'gtceu:annealed_copper_plate',
                    ]),
                    event.recipes.createDeploying(transitionalItem, [
                        transitionalItem,
                        'gtceu:steel_screw',
                    ]),
                    event.recipes.createDeploying(transitionalItem, [
                        transitionalItem,
                        'gtceu:steel_screw',
                    ]),
                ]
            )
            .transitionalItem(transitionalItem)
            .loops(1)
    }
    for (const spatialCellSize of global.AE2.SpatialCellSizes) {
        let transitionalItem = 'kubejs:incomplete_storage_cell'
        // Spatial
        event.recipes
            .createSequencedAssembly(
                ['ae2:spatial_storage_cell_' + spatialCellSize],
                'gtceu:ender_pearl_plate',
                [
                    event.recipes.createDeploying(transitionalItem, [
                        transitionalItem,
                        'gtceu:copper_single_cable',
                    ]),
                    event.recipes.createDeploying(transitionalItem, [
                        transitionalItem,
                        'ae2:spatial_cell_component_' + spatialCellSize,
                    ]),
                    event.recipes.createDeploying(transitionalItem, [
                        transitionalItem,
                        'ae2:quartz_glass',
                    ]),
                    event.recipes.createDeploying(transitionalItem, [
                        transitionalItem,
                        'gtceu:ender_pearl_plate',
                    ]),
                    event.recipes.createDeploying(transitionalItem, [
                        transitionalItem,
                        'gtceu:steel_screw',
                    ]),
                    event.recipes.createDeploying(transitionalItem, [
                        transitionalItem,
                        'gtceu:steel_screw',
                    ]),
                ]
            )
            .transitionalItem(transitionalItem)
            .loops(1)
    }
})
