ServerEvents.recipes(event => {
    event.recipes.gtceu.macerator('minecraft:prismarine_crystals')             
        .itemInputs('minecraft:prismarine_shard')
        .chancedOutput('minecraft:prismarine_crystals',9000,10)
        .duration(120)
        .EUt(16)

})