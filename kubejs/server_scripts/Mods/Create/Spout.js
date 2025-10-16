ServerEvents.recipes((event) => {
    event.recipes.create.filling('minecraft:experience_bottle', [
        'minecraft:glass_bottle',
        Fluid.of('sophisticatedcore:xp_still', 250),
    ])
    event.recipes.create.filling('productivebees:honey_treat', [
        'minecraft:honeycomb',
        Fluid.of('create:honey', 250),
    ])
})
