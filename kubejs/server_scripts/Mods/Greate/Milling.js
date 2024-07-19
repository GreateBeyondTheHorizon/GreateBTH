ServerEvents.recipes(event => {
    event.remove({type: 'gtceu:macerator', id: '/gtceu:(.*)macerate(.*)planks/'})
    event.remove({type: 'gtceu:macerator', id: '/gtceu:(.*)macerate(.*)fence/'})
    event.remove({type: 'gtceu:macerator', id: '/gtceu:(.*)macerate(.*)boat/'})
    event.remove({type: 'gtceu:macerator', id: '/gtceu:(.*)macerate(.*)fence_gate/'})
    event.remove({type: 'gtceu:macerator', id: '/gtceu:(.*)macerate(.*)door/'})

    event.recipes.greate.milling('gtceu:obsidian_dust', ['minecraft:obsidian']).recipeTier(1)

    event.recipes.gtceu.macerator('kubejs:macerate_planks')
        .duration(100)
        .itemInputs('#minecraft:planks')
        .itemOutputs('gtceu:wood_dust')
        .EUt(2)

    event.recipes.gtceu.macerator('kubejs:macerate_fences')
        .duration(100)
        .itemInputs('#minecraft:fences')
        .itemOutputs('gtceu:wood_dust')
        .EUt(2)

    event.recipes.gtceu.macerator('kubejs:macerate_boats')
        .duration(500)
        .itemInputs('#minecraft:boats')
        .itemOutputs('5x gtceu:wood_dust')
        .EUt(2)

    event.recipes.gtceu.macerator('kubejs:macerate_fence_gates')
        .duration(300)
        .itemInputs('#minecraft:fence_gates')
        .itemOutputs('3x gtceu:wood_dust')
        .EUt(2)

    event.recipes.gtceu.macerator('kubejs:macerate_doors')
        .duration(200)
        .itemInputs('#minecraft:wooden_doors')
        .itemOutputs(['2x gtceu:wood_dust', 'gtceu:tiny_iron_dust'])
        .EUt(2)
})