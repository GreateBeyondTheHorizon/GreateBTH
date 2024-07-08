ServerEvents.recipes(event => {
    event.recipes.gtceu.canner('super_glue')
        .duration(200)
        .itemInputs('kubejs:empty_glue_tube')
        .inputFluids(Fluid.of('gtceu:glue', 8000))
        .itemOutputs('create:super_glue')
        .EUt(30)
})