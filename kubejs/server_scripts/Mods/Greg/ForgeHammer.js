ServerEvents.recipes((event) => {
    event.recipes.gtceu
        .forge_hammer('fluix_crystal')
        .itemInputs('ae2:fluix_block')
        .itemOutputs('4x ae2:fluix_crystal')
        .EUt(24)
        .duration(100)

    event.recipes.gtceu
        .forge_hammer('certus_quartz')
        .itemInputs('#gbth:certus_quartz_blocks')
        .itemOutputs('4x ae2:certus_quartz_crystal')
        .EUt(24)
        .duration(100)
})
