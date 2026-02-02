ServerEvents.recipes((event) => {
    event.remove({ id: 'gtceu:alloy_smelter/glass' })
    event.remove({ id: /gtceu:alloy_smelter\/(diorite|andesite|granite)/ })

    global.Greate.MachineTiers.forEach((tier) => {
        var output = `kubejs:${tier}_sand_paper`
        var input = `#forge:plates/${tier}`
        event.recipes.gtceu
            .alloy_smelter(output)
            .duration(100)
            .itemInputs(['#gbth:sandpaper_bases', input])
            .itemOutputs(output)
            .EUt(32)
    })

    event.recipes.gtceu
        .alloy_smelter('glass')
        .duration(240)
        .itemInputs('gtceu:glass_dust')
        .notConsumable('gtceu:block_casting_mold')
        .itemOutputs('minecraft:glass')
        .EUt(7)
})
