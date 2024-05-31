ServerEvents.recipes(event => {
    event.remove({id: 'nethersdelight:warped_moldy_meat'})
    event.remove({id: 'nethersdelight:nether_skewer'})
    event.remove({id: 'nethersdelight:raw_stuffed_hoglin'})

    event.replaceInput({id: 'nethersdelight:iron_machete'}, 'minecraft:iron_ingot', 'gtceu:iron_plate')
    event.replaceInput({id: 'nethersdelight:gold_machete'}, 'minecraft:gold_ingot', 'gtceu:gold_plate')
    event.replaceInput({id: 'nethersdelight:diamond_machete'}, 'minecraft:diamond', 'gtceu:diamond_plate')
    event.replaceInput({id: 'minecraft:netherite_machete_smithing'}, 'minecraft:netherite_ingot', 'kubejs:netherite_plate')
	event.replaceInput({id: 'nethersdelight:blackstone_stove'}, 'minecraft:nether_brick', 'gtceu:wrought_iron_plate')

    event.custom({
        type: "farmersdelight:cooking",
        ingredients: [Item.of('nethersdelight:propelpearl'), Item.of('#nethersdelight:raw_strider')],
        result: {item: 'nethersdelight:nether_skewer'},
        container: {item: 'minecraft:blaze_rod'},
        recipe_book_tab: "meals"
    })

    event.custom({
        type: "farmersdelight:cooking",
        ingredients: [Item.of('minecraft:warped_roots'), Item.of('minecraft:warped_roots'), Item.of('nethersdelight:hoglin_sirloin')],
        result: {item: 'nethersdelight:warped_moldy_meat'},
        container: {item: 'minecraft:bowl'},
        recipe_book_tab: "meals"
    })

    event.custom({
        type: "farmersdelight:cooking",
        ingredients: [Item.of('minecraft:warped_roots'), Item.of('minecraft:crimson_fungus'), Item.of('minecraft:crimson_roots'), Item.of('nethersdelight:hoglin_hide'), Item.of('farmersdelight:ham'), Item.of('farmersdelight:nether_salad')],
        result: {item: 'nethersdelight:raw_stuffed_hoglin'},
        recipe_book_tab: "meals"
    })
})