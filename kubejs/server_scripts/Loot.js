LootJS.modifiers((event) => {
    function addStrawCuttingLoot(blockID, chance) {
        event
            .addBlockLootModifier(blockID)
            .matchMainHand('#forge:tools/knives')
            .playerAction((p) => p.damageHeldItem())
            .randomChance(chance)
            .addLoot('farmersdelight:straw')
    }

    addStrawCuttingLoot('minecraft:grass', 0.5)
    addStrawCuttingLoot('minecraft:tall_grass', 1)

    event
        .addBlockLootModifier('minecraft:campfire')
        .removeLoot('minecraft:charcoal')
        .addLoot('2x minecraft:stick')

    event
        .addLootTableModifier(/(.*)/)
        .replaceLoot(
            'sophisticatedbackpacks:iron_backpack',
            'sophisticatedbackpacks:backpack'
        )
        .replaceLoot(
            'sophisticatedbackpacks:gold_backpack',
            'sophisticatedbackpacks:backpack'
        )
        .replaceLoot(
            'sophisticatedbackpacks:copper_backpack',
            'sophisticatedbackpacks:backpack'
        )
        .removeLoot('gtceu:steel_ingot')
})

ServerEvents.chestLootTables((event) => {
    event.addChest('gbth:logs', (t) => {
        t.addPool((p) => {
            p.rolls = 1
            p.addItem('minecraft:oak_log', 3)
            p.addItem('minecraft:birch_log', 3)
            p.addItem('minecraft:spruce_log', 3)
            p.addItem('minecraft:acacia_log', 3)
            p.addItem('minecraft:cherry_log', 3)
            p.addItem('minecraft:jungle_log', 3)
            p.addItem('minecraft:dark_oak_log', 3)
            p.addItem('minecraft:mangrove_log', 3)
            p.addItem('gtceu:rubber_log', 3)
        })
    })

    event.addChest('gbth:saplings', (t) => {
        t.addPool((p) => {
            p.rolls = 1
            p.addItem('minecraft:oak_sapling', 3)
            p.addItem('minecraft:birch_sapling', 3)
            p.addItem('minecraft:spruce_sapling', 3)
            p.addItem('minecraft:acacia_sapling', 3)
            p.addItem('minecraft:cherry_sapling', 3)
            p.addItem('minecraft:jungle_sapling', 3)
            p.addItem('minecraft:dark_oak_sapling', 3)
            p.addItem('minecraft:mangrove_propagule', 3)
            p.addItem('gtceu:rubber_sapling', 3)
        })
    })

    event.addChest('gbth:dirt_age', (t) => {
        t.addPool((p) => {
            p.rolls = 1
            p.addLootTable('gbth:chests/saplings').weight(8).count([1, 4])
            p.addLootTable('gbth:chests/logs').weight(8).count([1, 4])
            p.addItem('minecraft:dirt', 4, [1, 8])
            p.addItem('minecraft:cobblestone', 4, [1, 8])
            p.addItem('minecraft:string', 2, [1, 4])
            p.addItem('minecraft:bone', 2, [1, 4])
            p.addItem('minecraft:coal', 2, [1, 4])
            p.addItem('minecraft:stick', 3, [1, 8])
            p.addItem('minecraft:wheat_seeds', 5, [1, 8])
        })
    })

    event.addChest('gbth:ulv_age', (t) => {
        t.addPool((p) => {
            p.rolls = 1
            p.addItem('minecraft:bricks', 5, [1, 8])
            p.addItem('gtceu:coke_gem', 2, [1, 4])
            p.addItem('minecraft:diamond', 1, 1)
            p.addItem('minecraft:emerald', 1, 1)
            p.addItem('minecraft:redstone', 2, [1, 8])
            p.addItem('minecraft:lapis_lazuli', 2, [1, 8])
            p.addItem('gtceu:sticky_resin', 2, [1, 4])
            p.addItem('gtceu:resin_circuit_board', 2, [1, 8])
            p.addItem('gtceu:resin_circuit_board', 2, [1, 4])
            p.addItem('gtceu:resistor', 2, [1, 4])
            p.addItem('gtceu:glass_tube', 2, [1, 8])
            p.addItem('gtceu:vacuum_tube', 1, [1, 2])
            p.addItem('gtceu:basic_electronic_circuit', 1, 1)
            p.addItem('gtceu:steel_ingot', 2, [1, 4])
            p.addItem('gtceu:bronze_ingot', 3, [1, 4])
            p.addItem('minecraft:copper_ingot', 3, [1, 8])
            p.addItem('gtceu:tin_ingot', 3, [1, 8])
            p.addItem('gtceu:wrought_iron_ingot', 3, [1, 8])
            p.addItem('minecraft:iron_ingot', 2, [1, 4])
            p.addItem('gtceu:rubber_ingot', 3, [1, 8])
            p.addItem('create:andesite_alloy', 2, [1, 4])
            p.addItem('create:andesite_casing', 2, [1, 2])
            p.addItem('greate:andesite_alloy_shaft', 2, [1, 4])
            p.addItem('greate:andesite_alloy_cogwheel', 2, [1, 4])
            p.addItem('greate:large_andesite_alloy_cogwheel', 2, [1, 4])
        })
    })
})
