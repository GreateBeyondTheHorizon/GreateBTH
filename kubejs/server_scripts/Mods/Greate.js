// priority: 0
ServerEvents.recipes((event) => {
    event.remove({ id: 'greate:splashing/obsidian' })
    event.remove({ id: 'gtceu:shaped/wrought_iron_alloy' })
    event.remove({
        id: 'greate:cutting/integration/create/cutting/runtime_generated/compat/create/tag_runtime_generated/compat/gtceu/rubber_to_rubber_planks',
    })
    event.remove({
        id: /greate:cutting\/integration\/create\/cutting\/runtime_generated\/compat\/gtceu\/stripped_rubber_.*_to_rubber_planks/,
    })
    event.remove({
        id: /greate:crushing\/integration\/create\/crushing\/raw_zinc.*/,
    })
    event.remove({
        id: 'greate:milling/integration/create/milling/compat/ae_2_/sky_stone_block',
    })
    event.remove({
        id: 'greate:milling/integration/create/milling/compat/ae_2_/fluix_crystal',
    })

    event.recipes.createFilling(Item.of('greate:rubber_belt_connector', 1), [
        'gtceu:wrought_iron_plate',
        Fluid.of('gtceu:rubber', 864),
    ])
})
