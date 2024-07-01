ServerEvents.recipes(event => {
    event.remove({id: 'gtceu:arc_furnace/arc_iron_ingot'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_block'})
    event.remove({id: 'gtceu:arc_furnace/arc_wrought_iron_block'})

    event.recipes.gtceu.arc_furnace('arc_wrought_iron_ingot')
        .duration(56)
        .itemInputs('gtceu:wrought_iron_ingot')
        .inputFluids(Fluid.of('gtceu:oxygen', 56))
        .itemOutputs('minecraft:iron_ingot')
        .EUt(30)

    event.recipes.gtceu.arc_furnace('arc_wrought_iron_block')
        .duration(504)
        .itemInputs('gtceu:wrought_iron_block')
        .inputFluids(Fluid.of('gtceu:oxygen', 56))
        .itemOutputs('9x minecraft:iron_ingot')
        .EUt(30)
})