// priority: 0
ServerEvents.recipes((event) => {
    // #region variables
    let incMvMotor = 'kubejs:inc_mv_motor'
    let incMvPiston = 'kubejs:inc_mv_piston'
    let lncMvRobotArm = 'kubejs:inc_mv_robot_arm'
    let incMvConveyor = 'kubejs:inc_mv_conveyor'
    let incMvPump = 'kubejs:inc_mv_pump'
    let invMvFluidRegulator = 'kubejs:inc_mv_fluid_regulator'
    let invMvSensor = 'kubejs:inc_mv_sensor'
    let incMvEmitter = 'kubejs:inc_mv_emitter'
    // #endregion
    // #region components
    event.recipes
        .createSequencedAssembly(
            ['gtceu:mv_electric_motor'],
            'gtceu:magnetic_steel_rod',
            [
                event.recipes.createDeploying(incMvMotor, [
                    incMvMotor,
                    'gtceu:cupronickel_double_wire',
                ]),
                event.recipes.createDeploying(incMvMotor, [
                    incMvMotor,
                    'gtceu:cupronickel_double_wire',
                ]),
                event.recipes.createDeploying(incMvMotor, [
                    incMvMotor,
                    'gtceu:aluminium_rod',
                ]),
                event.recipes.createDeploying(incMvMotor, [
                    incMvMotor,
                    'gtceu:copper_single_cable',
                ]),
            ]
        )
        .transitionalItem(incMvMotor)
        .loops(2)

    event.recipes
        .createSequencedAssembly(
            ['gtceu:mv_electric_piston'],
            'gtceu:mv_electric_motor',
            [
                event.recipes.createDeploying(incMvPiston, [
                    incMvPiston,
                    'gtceu:small_aluminium_gear',
                ]),
                event.recipes.createDeploying(incMvPiston, [
                    incMvPiston,
                    'gtceu:copper_single_cable',
                ]),
                event.recipes.createDeploying(incMvPiston, [
                    incMvPiston,
                    'gtceu:aluminium_rod',
                ]),
                event.recipes.createDeploying(incMvPiston, [
                    incMvPiston,
                    'gtceu:aluminium_plate',
                ]),
            ]
        )
        .transitionalItem(incMvPiston)
        .loops(2)

    event.recipes
        .createSequencedAssembly(
            ['gtceu:mv_robot_arm'],
            'gtceu:mv_electric_piston',
            [
                event.recipes.createDeploying(lncMvRobotArm, [
                    lncMvRobotArm,
                    'gtceu:mv_electric_motor',
                ]),
                event.recipes.createDeploying(lncMvRobotArm, [
                    lncMvRobotArm,
                    '#gtceu:circuits/mv',
                ]),
                event.recipes.createDeploying(lncMvRobotArm, [
                    lncMvRobotArm,
                    'gtceu:copper_single_cable',
                ]),
                event.recipes.createDeploying(lncMvRobotArm, [
                    lncMvRobotArm,
                    'gtceu:aluminium_rod',
                ]),
            ]
        )
        .transitionalItem(lncMvRobotArm)
        .loops(2)

    event.recipes
        .createSequencedAssembly(
            ['gtceu:mv_conveyor_module'],
            'gtceu:copper_single_cable',
            [
                event.recipes.createDeploying(incMvConveyor, [
                    incMvConveyor,
                    [
                        'gtceu:rubber_plate',
                        'gtceu:silicone_rubber_plate',
                        'gtceu:styrene_butadiene_rubber_plate',
                    ],
                ]),
                event.recipes.createDeploying(incMvConveyor, [
                    incMvConveyor,
                    [
                        'gtceu:rubber_plate',
                        'gtceu:silicone_rubber_plate',
                        'gtceu:styrene_butadiene_rubber_plate',
                    ],
                ]),
                event.recipes.createDeploying(incMvConveyor, [
                    incMvConveyor,
                    [
                        'gtceu:rubber_plate',
                        'gtceu:silicone_rubber_plate',
                        'gtceu:styrene_butadiene_rubber_plate',
                    ],
                ]),
                event.recipes.createDeploying(incMvConveyor, [
                    incMvConveyor,
                    'gtceu:mv_electric_motor',
                ]),
            ]
        )
        .transitionalItem(incMvConveyor)
        .loops(2)

    event.recipes
        .createSequencedAssembly(
            ['gtceu:mv_electric_pump'],
            'gtceu:steel_normal_fluid_pipe',
            [
                event.recipes.createDeploying(incMvPump, [
                    incMvPump,
                    'gtceu:bronze_screw',
                ]),
                event.recipes.createDeploying(incMvPump, [
                    incMvPump,
                    'gtceu:bronze_rotor',
                ]),
                event.recipes.createDeploying(incMvPump, [
                    incMvPump,
                    [
                        'gtceu:rubber_ring',
                        'gtceu:silicone_rubber_ring',
                        'gtceu:styrene_butadiene_rubber_ring',
                    ],
                ]),
                event.recipes.createDeploying(incMvPump, [
                    incMvPump,
                    [
                        'gtceu:rubber_ring',
                        'gtceu:silicone_rubber_ring',
                        'gtceu:styrene_butadiene_rubber_ring',
                    ],
                ]),
                event.recipes.createDeploying(incMvPump, [
                    incMvPump,
                    'gtceu:copper_single_cable',
                ]),
                event.recipes.createDeploying(incMvPump, [
                    incMvPump,
                    'gtceu:mv_electric_motor',
                ]),
            ]
        )
        .transitionalItem(incMvPump)
        .loops(1)

    event.recipes
        .createSequencedAssembly(
            ['gtceu:mv_fluid_regulator'],
            'gtceu:mv_electric_piston',
            [
                event.recipes.createDeploying(invMvFluidRegulator, [
                    invMvFluidRegulator,
                    '#gtceu:circuits/mv',
                ]),
            ]
        )
        .transitionalItem(invMvFluidRegulator)
        .loops(2)

    event.recipes
        .createSequencedAssembly(['gtceu:mv_sensor'], 'gtceu:electrum_rod', [
            event.recipes.createDeploying(invMvSensor, [
                invMvSensor,
                '#gtceu:circuits/mv',
            ]),
            event.recipes.createDeploying(invMvSensor, [
                invMvSensor,
                'gtceu:double_aluminium_plate',
            ]),
            event.recipes.createDeploying(invMvSensor, [
                invMvSensor,
                'gtceu:double_aluminium_plate',
            ]),
            event.recipes.createDeploying(invMvSensor, [
                invMvSensor,
                'gtceu:flawless_emerald_gem',
            ]),
        ])
        .transitionalItem(invMvSensor)
        .loops(1)

    event.recipes
        .createSequencedAssembly(
            ['gtceu:mv_emitter'],
            'gtceu:flawless_emerald_gem',
            [
                event.recipes.createDeploying(incMvEmitter, [
                    incMvEmitter,
                    '#gtceu:circuits/mv',
                ]),
                event.recipes.createDeploying(incMvEmitter, [
                    incMvEmitter,
                    'gtceu:copper_single_cable',
                ]),
                event.recipes.createDeploying(incMvEmitter, [
                    incMvEmitter,
                    'gtceu:electrum_rod',
                ]),
                event.recipes.createDeploying(incMvEmitter, [
                    incMvEmitter,
                    'gtceu:electrum_rod',
                ]),
            ]
        )
        .transitionalItem(incMvEmitter)
        .loops(2)
    // #endregion
})
