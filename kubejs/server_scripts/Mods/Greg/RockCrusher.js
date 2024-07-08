ServerEvents.recipes(event => {
    event.remove({type: 'gtceu:rock_breaker'})

    event.recipes.gtceu.rock_breaker('basalt')
        .duration(100)
        .notConsumable('minecraft:basalt')
        .itemOutputs('minecraft:basalt')
        .EUt(240)
    
    event.recipes.gtceu.rock_breaker('blackstone')
        .duration(100)
        .notConsumable('minecraft:blackstone')
        .itemOutputs('minecraft:blackstone')
        .EUt(240)
        
    event.recipes.gtceu.rock_breaker('red_granite')
        .duration(100)
        .notConsumable('gtceu:red_granite')
        .itemOutputs('gtceu:red_granite')
        .EUt(960)
        
    event.recipes.gtceu.rock_breaker('andesite')
        .duration(100)
        .notConsumable('minecraft:andesite')
        .itemOutputs('minecraft:andesite')
        .EUt(7)
        
    event.recipes.gtceu.rock_breaker('granite')
        .duration(100)
        .notConsumable('minecraft:granite')
        .itemOutputs('minecraft:granite')
        .EUt(60)
        
    event.recipes.gtceu.rock_breaker('stone')
        .duration(100)
        .notConsumable('minecraft:stone')
        .itemOutputs('minecraft:stone')
        .EUt(7)
        
    event.recipes.gtceu.rock_breaker('marble')
        .duration(100)
        .notConsumable('gtceu:marble')
        .itemOutputs('gtceu:marble')
        .EUt(240)
        
    event.recipes.gtceu.rock_breaker('cobblestone')
        .duration(100)
        .notConsumable('minecraft:cobblestone')
        .itemOutputs('minecraft:cobblestone')
        .EUt(7)
        
    event.recipes.gtceu.rock_breaker('diorite')
        .duration(100)
        .notConsumable('minecraft:diorite')
        .itemOutputs('minecraft:diorite')
        .EUt(60)
        
    event.recipes.gtceu.rock_breaker('obsidian')
        .duration(100)
        .itemInputs('minecraft:redstone')
        .itemOutputs('minecraft:obsidian')
        .EUt(30)
        
    event.recipes.gtceu.rock_breaker('deepslate')
        .duration(100)
        .notConsumable('minecraft:deepslate')
        .itemOutputs('minecraft:deepslate')
        .EUt(960)
        
    event.recipes.gtceu.rock_breaker('cobbled_deepslate')
        .duration(100)
        .notConsumable('minecraft:cobbled_deepslate')
        .itemOutputs('minecraft:cobbled_deepslate')
        .EUt(960)

    event.recipes.gtceu.rock_breaker('tuff')
        .duration(100)
        .notConsumable('minecraft:tuff')
        .itemOutputs('minecraft:tuff')
        .EUt(7)

    event.recipes.gtceu.rock_breaker('smooth_basalt')
        .duration(100)
        .notConsumable('minecraft:smooth_basalt')
        .itemOutputs('minecraft:smooth_basalt')
        .EUt(7)

    event.recipes.gtceu.rock_breaker('asurine')
        .duration(100)
        .notConsumable('create:asurine')
        .itemOutputs('create:asurine')
        .EUt(7)
        
    event.recipes.gtceu.rock_breaker('crimsite')
        .duration(100)
        .notConsumable('create:crimsite')
        .itemOutputs('create:crimsite')
        .EUt(7)

    event.recipes.gtceu.rock_breaker('limestone')
        .duration(100)
        .notConsumable('create:limestone')
        .itemOutputs('create:limestone')
        .EUt(7)

    event.recipes.gtceu.rock_breaker('ochrum')
        .duration(100)
        .notConsumable('create:ochrum')
        .itemOutputs('create:ochrum')
        .EUt(7)

    event.recipes.gtceu.rock_breaker('scoria')
        .duration(100)
        .notConsumable('create:scoria')
        .itemOutputs('create:scoria')
        .EUt(7)

    event.recipes.gtceu.rock_breaker('scorchia')
        .duration(100)
        .notConsumable('create:scorchia')
        .itemOutputs('create:scorchia')
        .EUt(7)

    event.recipes.gtceu.rock_breaker('veridium')
        .duration(100)
        .notConsumable('create:veridium')
        .itemOutputs('create:veridium')
        .EUt(7)
})