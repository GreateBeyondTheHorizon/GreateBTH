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
    event.addChest('gbth:dirt_age', (t) => {
        t.addPool((p) => {
            p.rolls = 1
            p.addItem('minecraft:dirt', 4, [1, 8])
            p.addItem('minecraft:cobblestone', 4, [1, 8])
            p.addItem('minecraft:string', 2, [1, 4])
            p.addItem('minecraft:bone', 2, [1, 4])
            p.addItem('minecraft:coal', 2, [1, 4])
            p.addItem('minecraft:stick', 3, [1, 8])
            p.addItem('minecraft:wheat_seeds', 5, [1, 8])
            p.addItem('minecraft:rotten_flesh', 4, [1, 8])

            //true: give 1 item in the tag per roll, false: give every item in the tag per roll
            p.addTag('minecraft:saplings', true).weight(3).count([1, 8])
            p.addTag('minecraft:logs', true).weight(3).count([1, 16])
            p.addTag('gbth:vanilla_dyes', false).weight(3).count([1, 16])
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
