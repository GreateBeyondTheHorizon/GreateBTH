ServerEvents.recipes(event => {

    // Blooms
    bloomeryRecipe('gbth:copper_bloom', 600, 'gtceu:copper_bloom', ['#gbth:copper_bloom_inputs', '#minecraft:coals'])
    bloomeryRecipe('gbth:tin_bloom', 600, 'gtceu:tin_bloom', ['#gbth:tin_bloom_inputs', '#minecraft:coals'])
    bloomeryRecipe('gbth:wrought_iron_bloom', 600, 'gtceu:wrought_iron_bloom', ['#gbth:wrought_iron_bloom_inputs', '#minecraft:coals'])
    bloomeryRecipe('gbth:bronze_bloom', 900, '4x gtceu:bronze_bloom', ['3x minecraft:copper_ingot', 'gtceu:tin_ingot', '2x #minecraft:coals'])
    bloomeryRecipe('gbth:andesite_alloy_bloom', 900, 'gtceu:andesite_alloy_bloom', ['gtceu:wrought_iron_ingot', ['minecraft:andesite', 'gtceu:andesite_dust'], '2x #minecraft:coals'])
    bloomeryRecipe('gbth:redstone', 900, 'minecraft:redstone', ['gtceu:raw_redstone', '#minecraft:coals'])

    // Other bloomery recipes
    bloomeryRecipe('gbth:stone', 300, 'minecraft:stone', ['minecraft:cobblestone', '#minecraft:coals'])
    bloomeryRecipe('gbth:smooth_stone', 300, 'minecraft:smooth_stone', ['minecraft:stone', '#minecraft:coals'])
    bloomeryRecipe('gbth:deepslate', 300, 'minecraft:deepslate', ['minecraft:cobbled_deepslate', '#minecraft:coals'])

    function bloomeryRecipe(id, duration, output, input) {
        event.recipes.gbthcore.bloomery(id)
            .duration(duration)
            .itemInputs(input)
            .itemOutputs(output)
    }

    metalworkingRecipe('minecraft:copper_ingot', 'gtceu:copper_bloom', 'gtceu:brick_wooden_form')
    metalworkingRecipe('9x gtceu:copper_nugget', 'gtceu:copper_bloom', 'kubejs:nugget_wooden_form')
    metalworkingRecipe('gtceu:tin_ingot', 'gtceu:tin_bloom', 'gtceu:brick_wooden_form')
    metalworkingRecipe('9x gtceu:tin_nugget', 'gtceu:tin_bloom', 'kubejs:nugget_wooden_form')
    metalworkingRecipe('gtceu:bronze_ingot', 'gtceu:bronze_bloom', 'gtceu:brick_wooden_form')
    metalworkingRecipe('9x gtceu:bronze_nugget', 'gtceu:bronze_bloom', 'kubejs:nugget_wooden_form')
    metalworkingRecipe('gtceu:wrought_iron_ingot', 'gtceu:wrought_iron_bloom', 'gtceu:brick_wooden_form')
    metalworkingRecipe('9x gtceu:wrought_iron_nugget', 'gtceu:wrought_iron_bloom', 'kubejs:nugget_wooden_form')
    metalworkingRecipe('create:andesite_alloy', 'gtceu:andesite_alloy_bloom', 'gtceu:brick_wooden_form')
    metalworkingRecipe('9x gtceu:andesite_alloy_nugget', 'gtceu:andesite_alloy_bloom', 'kubejs:nugget_wooden_form')
    metalworkingRecipe('minecraft:redstone', 'gtceu:redstone_bloom')
    metalworkingRecipe('minecraft:iron_nugget', 'gtceu:iron_bloom', 'kubejs:nugget_wooden_form')

    function metalworkingRecipe(output, input, form) {
        if (form != undefined) {
            event.shapeless(Item.of(output), [form, '#forge:tools/hammers', input])
                .keepIngredient(form)
        } else {
            event.shapeless(Item.of(output), ['#forge:tools/hammers', input])
        }
    }
})
