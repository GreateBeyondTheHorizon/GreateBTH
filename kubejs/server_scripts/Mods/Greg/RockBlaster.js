ServerEvents.recipes((event) => {
    event.recipes.gbthcore
        .rock_blaster('gbth:small_andesite_dust')
        .itemInputs('minecraft:cobblestone', '#minecraft:coals')
        .itemOutputs(
            ChemicalHelper.getDust(GTMaterials.Stone, GTValues.M),
            ChemicalHelper.getDust(GTMaterials.Andesite, GTValues.M / 4)
        )
        .duration(20 * 20)
})
