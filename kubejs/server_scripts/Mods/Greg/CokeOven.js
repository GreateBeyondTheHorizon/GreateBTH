ServerEvents.recipes(event => {
    event.recipes.gtceu.coke_oven('raw_coal')
        .itemInputs('gtceu:raw_coal')
        .itemOutputs('gtceu:coke_gem')
        .outputFluids(Fluid.of('gtceu:creosote', 500))
        .duration(900)

    event.recipes.gtceu.coke_oven('raw_coal_block')
        .itemInputs('gtceu:raw_coal_block')
        .itemOutputs('gtceu:coke_block')
        .outputFluids(Fluid.of('gtceu:creosote', 4500))
        .duration(8100)
})