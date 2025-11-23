MoreJSEvents.villagerTrades((event) => {
    // Remove all Computer Scientist trades in favor of crafting the items instead.
    // Unfortunately, the Computer Scientist uses modded trades, so they need to be removed like this instead of with a TradeFilter.
    event.removeModdedTrades(['advancedperipherals:computer_scientist'], 1)
    event.removeModdedTrades(['advancedperipherals:computer_scientist'], 2)
    event.removeModdedTrades(['advancedperipherals:computer_scientist'], 3)
    event.removeModdedTrades(['advancedperipherals:computer_scientist'], 4)
    event.removeModdedTrades(['advancedperipherals:computer_scientist'], 5)

    // Remove all SGJourney trades because most SGJourney items are disabled and we only want the mod for stargates.
    event.removeModdedTrades(['sgjourney:archeologist'], 1)
    event.removeModdedTrades(['sgjourney:archeologist'], 2)
    event.removeModdedTrades(['sgjourney:archeologist'], 3)
    event.removeModdedTrades(['sgjourney:archeologist'], 4)
    event.removeModdedTrades(['sgjourney:archeologist'], 5)

    // Fluix Crystal
    event.removeTrades({
        firstItem: Ingredient.all,
        secondItem: Ingredient.all,
        outputItem: 'ae2:fluix_crystal',
        professions: ['ae2:fluix_researcher'],
    })

    event.removeTrades({
        firstItem: Ingredient.all,
        secondItem: Ingredient.all,
        outputItem: 'ae2:certus_quartz_crystal',
        professions: ['ae2:fluix_researcher'],
    })

    // Glowstone
    event.removeTrades({
        firstItem: Ingredient.all,
        secondItem: Ingredient.all,
        outputItem: 'minecraft:glowstone',
        professions: ['minecraft:cleric'],
    })
})

MoreJSEvents.wandererTrades((event) => {
    // Glowstone
    event.removeTrades({
        firstItem: Ingredient.all,
        secondItem: Ingredient.all,
        outputItem: 'minecraft:glowstone',
    })
})
