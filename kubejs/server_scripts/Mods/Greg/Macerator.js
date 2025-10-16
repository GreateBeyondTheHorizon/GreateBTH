ServerEvents.recipes((event) => {
    event.remove({
        type: 'gtceu:macerator',
        id: '/gtceu:(.*)macerate(.*)planks/',
    })
    event.remove({
        type: 'gtceu:macerator',
        id: '/gtceu:(.*)macerate(.*)fence/',
    })
    event.remove({
        type: 'gtceu:macerator',
        id: '/gtceu:(.*)macerate(.*)boat/',
    })
    event.remove({
        type: 'gtceu:macerator',
        id: '/gtceu:(.*)macerate(.*)fence_gate/',
    })
    event.remove({
        type: 'gtceu:macerator',
        id: '/gtceu:(.*)macerate(.*)door/',
    })

    event.recipes.gtceu
        .macerator('kubejs:macerate_planks')
        .duration(100)
        .itemInputs('#minecraft:planks')
        .itemOutputs('gtceu:wood_dust')
        .EUt(2)

    event.recipes.gtceu
        .macerator('kubejs:macerate_fences')
        .duration(100)
        .itemInputs('#minecraft:fences')
        .itemOutputs('gtceu:wood_dust')
        .EUt(2)

    event.recipes.gtceu
        .macerator('kubejs:macerate_boats')
        .duration(500)
        .itemInputs('#minecraft:boats')
        .itemOutputs('5x gtceu:wood_dust')
        .EUt(2)

    event.recipes.gtceu
        .macerator('kubejs:macerate_fence_gates')
        .duration(300)
        .itemInputs('#minecraft:fence_gates')
        .itemOutputs('3x gtceu:wood_dust')
        .EUt(2)

    event.recipes.gtceu
        .macerator('kubejs:macerate_doors')
        .duration(200)
        .itemInputs('#minecraft:wooden_doors')
        .itemOutputs(['2x gtceu:wood_dust', 'gtceu:tiny_iron_dust'])
        .EUt(2)

    event.recipes.gtceu
        .macerator('rice')
        .duration(100)
        .itemInputs('farmersdelight:rice_panicle')
        .itemOutputs(['farmersdelight:rice', 'farmersdelight:straw'])
        .EUt(2)

    event.recipes.gtceu
        .macerator('sky_stone_dust')
        .duration(100)
        .itemInputs('ae2:sky_stone_block')
        .itemOutputs('ae2:sky_dust')
        .EUt(7)

    event.recipes.gtceu
        .macerator('fluix_dust')
        .duration(100)
        .itemInputs('ae2:fluix_crystal')
        .itemOutputs('ae2:fluix_dust')
        .EUt(7)
})
