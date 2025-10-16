ServerEvents.recipes((event) => {
    event.remove({ output: 'tconstruct:tinkers_anvil' })
    event.remove({ output: 'tconstruct:scorched_anvil' })
    event.remove({ output: 'tconstruct:pattern' })
    event.remove({
        type: 'tconstruct:melting',
        output: 'productivebees:configurable_honeycomb',
    })
    event.remove({
        id: 'tconstruct:common/materials/netherite_nugget_from_ingot',
    })
    event.remove({
        id: 'tconstruct:common/materials/netherite_ingot_from_nuggets',
    })
    event.remove({
        type: 'tconstruct:casting_table',
        id: /productivebees:tconstruct\/.*$/,
    })
    event.remove({ id: 'tconstruct:smeltery/casting/obsidian/chest' })
    event.remove({ id: 'tconstruct:smeltery/seared/melter' })
    event.remove({ id: 'tconstruct:common/basalt_blast_furnace' })
    event.remove({ id: 'tconstruct:tools/modifiers/ability/luck_level_1' })
    event.remove({
        id: /tconstruct:smeltery\/casting\/quartz\/(diorite|andesite|granite)/,
    })

    event.campfireCooking('tconstruct:seared_brick', 'tconstruct:grout')

    //#region crafting table recipes
    event.shaped('tconstruct:tinkers_anvil', ['SSS', 'ETE', 'E E'], {
        S: 'gtceu:steel_block',
        E: '#tconstruct:seared_blocks',
        T: 'tconstruct:tinker_station',
    })

    event.shaped('tconstruct:tinkers_anvil', ['SSS', ' E ', 'EEE'], {
        S: 'gtceu:steel_block',
        E: '#tconstruct:seared_blocks',
    })

    event.shaped('tconstruct:scorched_anvil', ['SSS', 'ETE', 'E E'], {
        S: 'gtceu:steel_block',
        E: '#tconstruct:foundry_bricks',
        T: 'tconstruct:tinker_station',
    })

    event.shaped('tconstruct:scorched_anvil', ['SSS', ' E ', 'EEE'], {
        S: 'gtceu:steel_block',
        E: '#tconstruct:foundry_bricks',
    })

    event.shaped('tconstruct:pattern', [' P ', 'PLP', ' P '], {
        P: 'minecraft:paper',
        L: 'gtceu:wood_plate',
    })

    event.shaped('tconstruct:seared_melter', ['S S', 'LLL'], {
        S: 'tconstruct:seared_brick',
        L: 'tconstruct:seared_bricks_slab',
    })

    //#region modifier recipes
    event.custom({
        type: 'tconstruct:modifier',
        allow_crystal: true,
        inputs: [
            {
                tag: 'forge:ingots/copper',
            },
            {
                ingredient: [
                    {
                        item: 'minecraft:cornflower',
                    },
                    {
                        item: 'minecraft:blue_orchid',
                    },
                    {
                        item: 'gtceu:apatite_gem',
                    },
                ],
            },
            {
                tag: 'forge:ingots/copper',
            },
            {
                tag: 'forge:storage_blocks/lapis',
            },
            {
                tag: 'forge:storage_blocks/lapis',
            },
        ],
        level: 1,
        result: 'tconstruct:luck',
        slots: {
            abilities: 1,
        },
        tools: [
            {
                tag: 'tconstruct:modifiable/melee/weapon',
            },
            {
                tag: 'tconstruct:modifiable/harvest',
            },
            {
                tag: 'tconstruct:modifiable/ranged',
            },
        ],
    })
})
