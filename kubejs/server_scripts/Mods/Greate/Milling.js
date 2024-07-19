ServerEvents.recipes(event => {

    event.remove({type: 'gtceu:macerator', id: '/gtceu:(.*)macerate(.*)planks/'})
    event.remove({type: 'gtceu:macerator', id: '/gtceu:(.*)macerate(.*)fence/'})
    event.remove({type: 'gtceu:macerator', id: '/gtceu:(.*)macerate(.*)boat/'})
    event.remove({type: 'gtceu:macerator', id: '/gtceu:(.*)macerate(.*)fence_gate/'})
    event.remove({type: 'gtceu:macerator', id: '/gtceu:(.*)macerate(.*)door/'})

    event.recipes.greate.milling('gtceu:obsidian_dust', ['minecraft:obsidian']).recipeTier(1)

    event.recipes.greate.milling('gtceu:wood_dust', ['#minecraft:planks'])
    event.recipes.greate.milling('gtceu:wood_dust', ['#minecraft:fences'])
    event.recipes.greate.milling('5x gtceu:wood_dust', ['#minecraft:boats'])
    event.recipes.greate.milling('3x gtceu:wood_dust', ['#minecraft:fence_gates'])
    event.recipes.greate.milling(['2x gtceu:wood_dust', 'gtceu:tiny_iron_dust'], ['#minecraft:wooden_doors'])
})