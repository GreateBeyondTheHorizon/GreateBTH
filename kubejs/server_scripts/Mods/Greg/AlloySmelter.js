ServerEvents.recipes(event => {

    global.Greate.Tiers.forEach(tier => {
        var output = `kubejs:${tier}_sand_paper`
        var input = `gtceu:${tier}_plate`
        event.recipes.gtceu.alloy_smelter(output)
            .duration(100)
            .itemInputs(['#gbth:sandpaper_base', input])
            .itemOutputs(output)
            .EUt(32)
    })
})