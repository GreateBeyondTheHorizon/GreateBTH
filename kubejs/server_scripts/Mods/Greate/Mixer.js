ServerEvents.recipes((event) => {
    event.recipes.greate
        .mixing('minecraft:turtle_helmet', [
            'kubejs:unf_turtle_helmet',
            Fluid.of('create:potion', 576, {
                Bottle: 'REGULAR',
                Potion: 'minecraft:water_breathing',
            }),
        ])
        .heated()
})
