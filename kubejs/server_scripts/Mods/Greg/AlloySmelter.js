ServerEvents.recipes(event => {

    global.Greate.Tiers.forEach(tier => {
        var output = `kubejs:${tier}_sand_paper`
        var input = `gtceu:${tier}_plate`
        event.recipes.gtceu.alloy_smelter(output)
            .duration(100)
            .itemInputs(['#gbth:sandpaper_bases', input])
            .itemOutputs(output)
            .EUt(32)
    })

    event.recipes.gtceu.alloy_smelter('andesite_alloy_ingot')
        .duration(200)
        .itemInputs('create:andesite_alloy')
        .notConsumable('gtceu:ingot_casting_mold')
        .itemOutputs('gtceu:andesite_alloy_ingot')
        .EUt(7)

    event.recipes.gtceu.alloy_smelter('andesite_alloy')
        .duration(200)
        .itemInputs(['gtceu:wrought_iron_nugget', 'minecraft:andesite'])
        .itemOutputs('create:andesite_alloy')
        .EUt(7)
})