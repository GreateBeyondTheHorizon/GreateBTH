ServerEvents.recipes(event => {
    global.Minecraft.Dyes.forEach(dye => {
        event.recipes.gtceu.chemical_bath(`dye_candle_to_${dye}`)
            .duration(20)
            .itemInputs('minecraft:candle')
            .inputFluids(Fluid.of(`gtceu:${dye}_dye`, 16))
            .itemOutputs(`minecraft:${dye}_candle`)
            .EUt(7)

        event.recipes.gtceu.chemical_bath(`dye_hanging_sign_to_${dye}`)
            .duration(20)
            .itemInputs('farmersdelight:hanging_canvas_sign')
            .inputFluids(Fluid.of(`gtceu:${dye}_dye`, 16))
            .itemOutputs(`farmersdelight:${dye}_hanging_canvas_sign`)
            .EUt(7)
    })
})