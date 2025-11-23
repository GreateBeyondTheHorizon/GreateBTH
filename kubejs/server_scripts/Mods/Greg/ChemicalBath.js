ServerEvents.recipes((event) => {
    global.Minecraft.Dyes.forEach((dye) => {
        event.recipes.gtceu
            .chemical_bath(`dye_candle_to_${dye}`)
            .duration(20)
            .itemInputs('minecraft:candle')
            .inputFluids(Fluid.of(`gtceu:${dye}_dye`, 16))
            .itemOutputs(`minecraft:${dye}_candle`)
            .EUt(7)

        event.recipes.gtceu
            .chemical_bath(`dye_hanging_sign_to_${dye}`)
            .duration(20)
            .itemInputs('farmersdelight:hanging_canvas_sign')
            .inputFluids(Fluid.of(`gtceu:${dye}_dye`, 16))
            .itemOutputs(`farmersdelight:${dye}_hanging_canvas_sign`)
            .EUt(7)

        event.recipes.gtceu
            .chemical_bath(`dye_sign_to_${dye}`)
            .duration(20)
            .itemInputs('farmersdelight:canvas_sign')
            .inputFluids(Fluid.of(`gtceu:${dye}_dye`, 16))
            .itemOutputs(`farmersdelight:${dye}_canvas_sign`)
            .EUt(7)
    })

    event.recipes.gtceu
        .chemical_bath(`decolor_candle`)
        .duration(20)
        .itemInputs('#minecraft:candles')
        .inputFluids(Fluid.of(`gtceu:chlorine`, 20))
        .itemOutputs(`minecraft:candle`)
        .EUt(7)

    event.recipes.gtceu
        .chemical_bath(`decolor_hanging_sign`)
        .duration(20)
        .itemInputs('#farmersdelight:hanging_canvas_signs')
        .inputFluids(Fluid.of(`gtceu:chlorine`, 20))
        .itemOutputs(`farmersdelight:hanging_canvas_sign`)
        .EUt(7)

    event.recipes.gtceu
        .chemical_bath(`decolor_sign`)
        .duration(20)
        .itemInputs('#farmersdelight:canvas_signs')
        .inputFluids(Fluid.of(`gtceu:chlorine`, 20))
        .itemOutputs(`farmersdelight:canvas_sign`)
        .EUt(7)
})
