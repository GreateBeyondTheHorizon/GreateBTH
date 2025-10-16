ServerEvents.recipes((event) => {
    event.remove({ id: 'gtceu:electric_blast_furnace/steel_from_iron' })
    event.remove({ id: 'gtceu:electric_blast_furnace/steel_from_wrought_iron' })

    event.recipes.gtceu
        .electric_blast_furnace('steel_from_iron')
        .duration(300)
        .itemInputs('minecraft:iron_ingot')
        .inputFluids(Fluid.of('gtceu:oxygen', 200))
        .itemOutputs('gtceu:steel_ingot')
        .chancedOutput('gtceu:ash_dust', 1111, 0)
        .blastFurnaceTemp(1000)
        .EUt(120)

    event.recipes.gtceu
        .electric_blast_furnace('steel_from_wrought_iron')
        .duration(500)
        .itemInputs('gtceu:wrought_iron_ingot')
        .inputFluids(Fluid.of('gtceu:oxygen', 200))
        .itemOutputs('gtceu:steel_ingot')
        .chancedOutput('gtceu:ash_dust', 1111, 0)
        .blastFurnaceTemp(1000)
        .EUt(120)
})
