ServerEvents.recipes((event) => {
    event.remove({ type: 'gtceu:rock_breaker' })

    event.recipes.gtceu
        .rock_breaker('basalt')
        .duration(100)
        .notConsumable('minecraft:basalt')
        .itemOutputs('minecraft:basalt')
        .addData('fluidA', 'minecraft:lava')
        .addData('fluidB', 'minecraft:water')
        .EUt(240)

    event.recipes.gtceu
        .rock_breaker('blackstone')
        .duration(100)
        .notConsumable('minecraft:blackstone')
        .itemOutputs('minecraft:blackstone')
        .addData('fluidA', 'minecraft:lava')
        .addData('fluidB', 'minecraft:water')
        .EUt(240)

    event.recipes.gtceu
        .rock_breaker('red_granite')
        .duration(100)
        .notConsumable('gtceu:red_granite')
        .itemOutputs('gtceu:red_granite')
        .addData('fluidA', 'minecraft:lava')
        .addData('fluidB', 'minecraft:water')
        .EUt(960)

    event.recipes.gtceu
        .rock_breaker('andesite')
        .duration(100)
        .notConsumable('minecraft:andesite')
        .itemOutputs('minecraft:andesite')
        .addData('fluidA', 'minecraft:lava')
        .addData('fluidB', 'minecraft:water')
        .EUt(7)

    event.recipes.gtceu
        .rock_breaker('granite')
        .duration(100)
        .notConsumable('minecraft:granite')
        .itemOutputs('minecraft:granite')
        .addData('fluidA', 'minecraft:lava')
        .addData('fluidB', 'minecraft:water')
        .EUt(60)

    event.recipes.gtceu
        .rock_breaker('stone')
        .duration(100)
        .notConsumable('minecraft:stone')
        .itemOutputs('minecraft:stone')
        .addData('fluidA', 'minecraft:lava')
        .addData('fluidB', 'minecraft:water')
        .EUt(7)

    event.recipes.gtceu
        .rock_breaker('marble')
        .duration(100)
        .notConsumable('gtceu:marble')
        .itemOutputs('gtceu:marble')
        .addData('fluidA', 'minecraft:lava')
        .addData('fluidB', 'minecraft:water')
        .EUt(240)

    event.recipes.gtceu
        .rock_breaker('cobblestone')
        .duration(100)
        .notConsumable('minecraft:cobblestone')
        .itemOutputs('minecraft:cobblestone')
        .addData('fluidA', 'minecraft:lava')
        .addData('fluidB', 'minecraft:water')
        .EUt(7)

    event.recipes.gtceu
        .rock_breaker('diorite')
        .duration(100)
        .notConsumable('minecraft:diorite')
        .itemOutputs('minecraft:diorite')
        .addData('fluidA', 'minecraft:lava')
        .addData('fluidB', 'minecraft:water')
        .EUt(60)

    event.recipes.gtceu
        .rock_breaker('obsidian')
        .duration(100)
        .itemInputs('minecraft:redstone')
        .itemOutputs('minecraft:obsidian')
        .addData('fluidA', 'minecraft:lava')
        .addData('fluidB', 'minecraft:water')
        .EUt(30)

    event.recipes.gtceu
        .rock_breaker('deepslate')
        .duration(100)
        .notConsumable('minecraft:deepslate')
        .itemOutputs('minecraft:deepslate')
        .addData('fluidA', 'minecraft:lava')
        .addData('fluidB', 'minecraft:water')
        .EUt(960)

    event.recipes.gtceu
        .rock_breaker('cobbled_deepslate')
        .duration(100)
        .notConsumable('minecraft:cobbled_deepslate')
        .itemOutputs('minecraft:cobbled_deepslate')
        .addData('fluidA', 'minecraft:lava')
        .addData('fluidB', 'minecraft:water')
        .EUt(960)

    event.recipes.gtceu
        .rock_breaker('tuff')
        .duration(100)
        .notConsumable('minecraft:tuff')
        .itemOutputs('minecraft:tuff')
        .addData('fluidA', 'minecraft:lava')
        .addData('fluidB', 'minecraft:water')
        .EUt(7)

    event.recipes.gtceu
        .rock_breaker('smooth_basalt')
        .duration(100)
        .notConsumable('minecraft:smooth_basalt')
        .itemOutputs('minecraft:smooth_basalt')
        .addData('fluidA', 'minecraft:lava')
        .addData('fluidB', 'minecraft:water')
        .EUt(7)

    event.recipes.gtceu
        .rock_breaker('asurine')
        .duration(100)
        .notConsumable('create:asurine')
        .itemOutputs('create:asurine')
        .addData('fluidA', 'minecraft:lava')
        .addData('fluidB', 'minecraft:water')
        .EUt(7)

    event.recipes.gtceu
        .rock_breaker('crimsite')
        .duration(100)
        .notConsumable('create:crimsite')
        .itemOutputs('create:crimsite')
        .addData('fluidA', 'minecraft:lava')
        .addData('fluidB', 'minecraft:water')
        .EUt(7)

    event.recipes.gtceu
        .rock_breaker('limestone')
        .duration(100)
        .notConsumable('create:limestone')
        .itemOutputs('create:limestone')
        .addData('fluidA', 'minecraft:lava')
        .addData('fluidB', 'minecraft:water')
        .EUt(7)

    event.recipes.gtceu
        .rock_breaker('ochrum')
        .duration(100)
        .notConsumable('create:ochrum')
        .itemOutputs('create:ochrum')
        .addData('fluidA', 'minecraft:lava')
        .addData('fluidB', 'minecraft:water')
        .EUt(7)

    event.recipes.gtceu
        .rock_breaker('scoria')
        .duration(100)
        .notConsumable('create:scoria')
        .itemOutputs('create:scoria')
        .addData('fluidA', 'minecraft:lava')
        .addData('fluidB', 'minecraft:water')
        .EUt(7)

    event.recipes.gtceu
        .rock_breaker('scorchia')
        .duration(100)
        .notConsumable('create:scorchia')
        .itemOutputs('create:scorchia')
        .addData('fluidA', 'minecraft:lava')
        .addData('fluidB', 'minecraft:water')
        .EUt(7)

    event.recipes.gtceu
        .rock_breaker('veridium')
        .duration(100)
        .notConsumable('create:veridium')
        .itemOutputs('create:veridium')
        .addData('fluidA', 'minecraft:lava')
        .addData('fluidB', 'minecraft:water')
        .EUt(7)
})
