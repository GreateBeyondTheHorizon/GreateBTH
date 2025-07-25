ServerEvents.recipes(event => {
    event.remove({id: 'gtceu:alloy_smelter/glass'})

    global.Greate.MachineTiers.forEach(tier => {
        var output = `kubejs:${tier}_sand_paper`
        var input = `gtceu:${tier}_plate`
        event.recipes.gtceu.alloy_smelter(output)
            .duration(100)
            .itemInputs(['#gbth:sandpaper_bases', input])
            .itemOutputs(output)
            .EUt(32)
    })
    
    event.recipes.gtceu.alloy_smelter('glass')
        .duration(240)
        .itemInputs('gtceu:glass_dust')
        .notConsumable('gtceu:block_casting_mold')
        .itemOutputs('minecraft:glass')
        .EUt(7)
})