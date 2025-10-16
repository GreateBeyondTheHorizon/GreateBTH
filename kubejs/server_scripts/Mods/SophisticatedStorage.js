ServerEvents.recipes((event) => {
    event.remove({ mod: 'sophisticatedstorage' })

    const woodType = [
        'oak',
        'spruce',
        'birch',
        'jungle',
        'acacia',
        'dark_oak',
        'mangrove',
        'crimson',
        'warped',
        'bamboo',
        'cherry',
    ]

    var SophisticatedStorage = {
        storageTierUpgrade: function (wood, tier, pattern, keys) {
            // Chest
            keys = Object.assign(
                {
                    A: Item.of(
                        `sophisticatedstorage:${tier[0]}chest`,
                        `{woodType:\"${wood}\"}`
                    ).strongNBT(),
                },
                keys
            )
            event.shaped(
                Item.of(
                    `sophisticatedstorage:${tier[1]}chest`,
                    `{woodType:\"${wood}\"}`
                ),
                pattern,
                keys
            )
            delete keys.A
            // Barrel
            keys = Object.assign(
                {
                    A: Item.of(
                        `sophisticatedstorage:${tier[0]}barrel`,
                        `{woodType:\"${wood}\"}`
                    ).strongNBT(),
                },
                keys
            )
            event.shaped(
                Item.of(
                    `sophisticatedstorage:${tier[1]}barrel`,
                    `{woodType:\"${wood}\"}`
                ),
                pattern,
                keys
            )
            delete keys.A
            // Limited Barrel
            for (let i = 1; i <= 4; i++) {
                keys = Object.assign(
                    {
                        A: Item.of(
                            `sophisticatedstorage:limited_${tier[0]}barrel_${i}`,
                            `{woodType:\"${wood}\"}`
                        ).strongNBT(),
                    },
                    keys
                )
                event.shaped(
                    Item.of(
                        `sophisticatedstorage:limited_${tier[1]}barrel_${i}`,
                        `{woodType:\"${wood}\"}`
                    ),
                    pattern,
                    keys
                )
                delete keys.A
            }
        },

        // Makes Advanced Upgrade Recipes
        makeAdvanced: function (id) {
            event.shaped(
                Item.of('sophisticatedstorage:advanced_' + id, 1),
                ['ABA', 'BCB', 'ABA'],
                {
                    A: '#forge:plates/iron',
                    B: '#forge:plates/aluminium',
                    C: 'sophisticatedstorage:' + id,
                }
            )
        },
    }

    event.shaped(
        'sophisticatedstorage:basic_tier_upgrade',
        ['PPP', 'GTG', 'PPP'],
        {
            P: 'gtceu:wood_plate',
            G: 'gtceu:wood_gear',
            T: 'minecraft:redstone_torch',
        }
    )

    // Basic Type
    woodType.forEach((wood) => {
        event.shapeless(
            Item.of('sophisticatedstorage:chest', `{woodType:\"${wood}\"}`),
            ['#forge:chests/wooden', '#gtceu:circuits/ulv']
        )

        // Chest
        event.shaped(
            Item.of('sophisticatedstorage:chest', `{woodType:\"${wood}\"}`),
            ['PPP', 'RER', 'PPP'],
            {
                P: 'minecraft:' + wood + '_planks',
                E: '#gtceu:circuits/ulv',
                R: '#forge:rings/wood',
            }
        )
        // Barrel
        event.shaped(
            Item.of('sophisticatedstorage:barrel', `{woodType:\"${wood}\"}`),
            ['PPP', 'RER', 'PPP'],
            {
                P: 'minecraft:' + wood + '_planks',
                E: '#gtceu:circuits/ulv',
                R: '#forge:rods/long/iron',
            }
        )
        // Limited Barrel
        event.shaped(
            Item.of(
                'sophisticatedstorage:limited_barrel_1',
                `{woodType:\"${wood}\"}`
            ),
            ['PSP', 'RER', 'PPP'],
            {
                P: 'minecraft:' + wood + '_planks',
                E: '#gtceu:circuits/ulv',
                R: '#forge:screws/iron',
                S: '#forge:plates/wood',
            }
        )
        event.shaped(
            Item.of(
                'sophisticatedstorage:limited_barrel_2',
                `{woodType:\"${wood}\"}`
            ),
            ['PSP', 'RER', 'PSP'],
            {
                P: 'minecraft:' + wood + '_planks',
                E: '#gtceu:circuits/ulv',
                R: '#forge:screws/iron',
                S: '#forge:plates/wood',
            }
        )
        event.shaped(
            Item.of(
                'sophisticatedstorage:limited_barrel_3',
                `{woodType:\"${wood}\"}`
            ),
            ['PSP', 'RER', 'SPS'],
            {
                P: 'minecraft:' + wood + '_planks',
                E: '#gtceu:circuits/ulv',
                R: '#forge:screws/iron',
                S: '#forge:plates/wood',
            }
        )
        event.shaped(
            Item.of(
                'sophisticatedstorage:limited_barrel_4',
                `{woodType:\"${wood}\"}`
            ),
            ['SPS', 'RER', 'SPS'],
            {
                P: 'minecraft:' + wood + '_planks',
                E: '#gtceu:circuits/ulv',
                R: '#forge:screws/iron',
                S: '#forge:plates/wood',
            }
        )

        //Steel Tier
        SophisticatedStorage.storageTierUpgrade(
            wood,
            ['', 'iron_'],
            ['PPP', 'GAG', 'PPP'],
            {
                P: '#forge:plates/steel',
                G: '#forge:small_gears/steel',
            }
        )

        //Aluminium Tier
        SophisticatedStorage.storageTierUpgrade(
            wood,
            ['iron_', 'gold_'],
            ['PPP', 'GAG', 'PPP'],
            {
                P: '#forge:plates/aluminium',
                G: '#forge:small_gears/aluminium',
            }
        )

        //Stainless Steel Tier
        SophisticatedStorage.storageTierUpgrade(
            wood,
            ['gold_', 'diamond_'],
            ['DPD', 'GAG', 'DPD'],
            {
                P: 'gtceu:double_stainless_steel_plate',
                D: 'gtceu:diamond_plate',
                G: '#forge:small_gears/stainless_steel',
            }
        )

        //Titanium Tier
        SophisticatedStorage.storageTierUpgrade(
            wood,
            ['diamond_', 'netherite_'],
            ['DPD', 'GAG', 'DPD'],
            {
                P: 'gtceu:double_titanium_plate',
                D: 'gtceu:netherite_plate',
                G: '#forge:small_gears/titanium',
            }
        )
    })

    event.shaped(
        'sophisticatedstorage:basic_to_iron_tier_upgrade',
        ['SSS', 'GPG', 'SSS'],
        {
            S: 'gtceu:steel_plate',
            G: 'gtceu:small_steel_gear',
            P: 'gtceu:wood_plate',
        }
    )

    event.recipes.gtceu
        .assembler('basic_to_iron_tier_upgrade')
        .duration(100)
        .itemInputs([
            '6x gtceu:steel_plate',
            '2x gtceu:small_steel_gear',
            'gtceu:wood_plate',
        ])
        .itemOutputs('sophisticatedstorage:basic_to_iron_tier_upgrade')
        .EUt(30)

    // Gold Tier
    event.shaped(
        'sophisticatedstorage:iron_to_gold_tier_upgrade',
        ['SSS', 'GPG', 'SSS'],
        {
            S: 'gtceu:aluminium_plate',
            G: 'gtceu:small_aluminium_gear',
            P: 'gtceu:steel_plate',
        }
    )

    event.recipes.gtceu
        .assembler('iron_to_gold_tier_upgrade')
        .duration(100)
        .itemInputs([
            '6x gtceu:aluminium_plate',
            '2x gtceu:small_aluminium_gear',
            'gtceu:steel_plate',
        ])
        .itemOutputs('sophisticatedstorage:iron_to_gold_tier_upgrade')
        .EUt(30)

    // Diamond Tier
    event.shaped(
        'sophisticatedstorage:gold_to_diamond_tier_upgrade',
        ['SDS', 'GPG', 'SDS'],
        {
            S: 'gtceu:diamond_plate',
            G: 'gtceu:small_stainless_steel_gear',
            P: 'gtceu:aluminium_plate',
            D: 'gtceu:double_stainless_steel_plate',
        }
    )

    event.recipes.gtceu
        .assembler('gold_to_diamond_tier_upgrade')
        .duration(100)
        .itemInputs([
            '4x gtceu:diamond_plate',
            '2x gtceu:small_stainless_steel_gear',
            '2x gtceu:double_stainless_steel_plate',
            'gtceu:aluminium_plate',
        ])
        .itemOutputs('sophisticatedstorage:gold_to_diamond_tier_upgrade')
        .EUt(30)

    // Netherite Tier
    event.shaped(
        'sophisticatedstorage:diamond_to_netherite_tier_upgrade',
        ['SDS', 'GPG', 'SDS'],
        {
            S: 'gtceu:double_titanium_plate',
            G: 'gtceu:small_titanium_gear',
            P: 'gtceu:stainless_steel_plate',
            D: 'gtceu:netherite_plate',
        }
    )

    event.recipes.gtceu
        .assembler('diamond_to_netherite_tier_upgrade')
        .duration(100)
        .itemInputs([
            '4x gtceu:double_titanium_plate',
            '2x gtceu:small_titanium_gear',
            'gtceu:double_stainless_steel_plate',
            '2x gtceu:netherite_plate',
        ])
        .itemOutputs('sophisticatedstorage:diamond_to_netherite_tier_upgrade')
        .EUt(30)

    // -- UPGRADES --
    //UPGRADE BASE
    event.shaped(
        Item.of('sophisticatedstorage:upgrade_base', 1),
        ['ADA', 'BCB', 'ABA'],
        {
            A: '#forge:plates/wood',
            B: '#forge:plates/iron',
            C: '#forge:plates/brass',
            D: '#gtceu:circuits/lv',
        }
    )

    //COMPACTING UPGRADE
    event.shaped(
        Item.of('sophisticatedstorage:compacting_upgrade', 1),
        ['ADA', 'ECE', 'ABA'],
        {
            A: 'gtceu:iron_plate',
            B: '#gtceu:circuits/mv',
            C: 'sophisticatedstorage:upgrade_base',
            D: '#forge:storage_blocks/steel',
            E: 'minecraft:piston',
        }
    )
    SophisticatedStorage.makeAdvanced('compacting_upgrade')

    //PICKUP UPGRADE
    event.shaped(
        Item.of('sophisticatedstorage:pickup_upgrade', 1),
        ['ADA', 'ECE', 'ABA'],
        {
            A: 'gtceu:iron_plate',
            B: '#gtceu:circuits/mv',
            C: 'sophisticatedstorage:upgrade_base',
            D: 'minecraft:sticky_piston',
            E: 'gtceu:red_alloy_ingot',
        }
    )
    SophisticatedStorage.makeAdvanced('pickup_upgrade')

    //VOID UPGRADE
    event.shaped(
        Item.of('sophisticatedstorage:void_upgrade', 1),
        ['ADA', 'ECE', 'ABA'],
        {
            A: 'gtceu:iron_plate',
            B: '#gtceu:circuits/mv',
            C: 'sophisticatedstorage:upgrade_base',
            D: '#forge:gems/ender_pearl',
            E: 'gtceu:obsidian_plate',
        }
    )
    SophisticatedStorage.makeAdvanced('void_upgrade')

    //FILTER UPGRADE
    event.shaped(
        Item.of('sophisticatedstorage:filter_upgrade', 1),
        ['ADA', 'ECE', 'ABA'],
        {
            A: 'gtceu:iron_plate',
            B: '#gtceu:circuits/mv',
            C: 'sophisticatedstorage:upgrade_base',
            D: 'gtceu:item_filter',
            E: 'gtceu:red_alloy_ingot',
        }
    )
    SophisticatedStorage.makeAdvanced('filter_upgrade')

    //FILTER UPGRADE
    event.shaped(
        Item.of('sophisticatedstorage:hopper_upgrade', 1),
        ['AHA', 'BCB', 'AHA'],
        {
            A: 'gtceu:iron_plate',
            B: '#gtceu:circuits/mv',
            C: 'sophisticatedstorage:upgrade_base',
            H: 'minecraft:hopper',
        }
    )
    SophisticatedStorage.makeAdvanced('hopper_upgrade')

    const chipped_tables = [
        'botanist_workbench',
        'glassblower',
        'carpenters_table',
        'loom_table',
        'mason_table',
        'alchemy_bench',
        'tinkering_table',
    ]
    chipped_tables.forEach((table) => {
        event.shaped(
            Item.of('sophisticatedstorage:chipped/' + table + '_upgrade', 1),
            ['AJA', 'RBR'],
            {
                A: '#forge:screws/iron',
                B: 'sophisticatedstorage:upgrade_base',
                J: 'chipped:' + table,
                R: '#gtceu:circuits/ulv',
            }
        )
    })
})
