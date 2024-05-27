ServerEvents.recipes(event => {

    event.shaped(
        Item.of('gbthcore:bloomery'),
        [
            'MO',
            'MC'
        ],
        {
            M: 'minecraft:mud_bricks',
            O: 'minecraft:coal',
            C: 'minecraft:campfire'
        }
    )

    bloomeryRecipe('kubejs:copper_bloom', 600, 'kubejs:copper_bloom', ['#gbth:copper_bloom_inputs', 'minecraft:coal'])
    bloomeryRecipe('kubejs:tin_bloom', 600, 'kubejs:tin_bloom', ['#gbth:tin_bloom_inputs', 'minecraft:coal'])
    bloomeryRecipe('kubejs:wrought_iron_bloom', 600, 'kubejs:wrought_iron_bloom', ['#gbth:wrought_iron_bloom_inputs', 'minecraft:coal'])
    bloomeryRecipe('kubejs:bronze_bloom', 900, '4x kubejs:bronze_bloom', ['3x minecraft:copper_ingot', 'gtceu:tin_ingot', '2x minecraft:coal'])

    function bloomeryRecipe(id, duration, output, input) {
        event.recipes.gbthcore.bloomery(id)
            .duration(duration)
            .itemInputs(input)
            .itemOutputs(output)
    }

    metalworkingRecipe('minecraft:copper_ingot', 'kubejs:copper_bloom', 'gtceu:brick_wooden_form')
    metalworkingRecipe('9x gtceu:copper_nugget', 'kubejs:copper_bloom', 'kubejs:nugget_wooden_form')
    metalworkingRecipe('gtceu:tin_ingot', 'kubejs:tin_bloom', 'gtceu:brick_wooden_form')
    metalworkingRecipe('9x gtceu:tin_nugget', 'kubejs:tin_bloom', 'kubejs:nugget_wooden_form')
    metalworkingRecipe('gtceu:bronze_ingot', 'kubejs:bronze_bloom', 'gtceu:brick_wooden_form')
    metalworkingRecipe('9x gtceu:bronze_nugget', 'kubejs:bronze_bloom', 'kubejs:nugget_wooden_form')
    metalworkingRecipe('gtceu:wrought_iron_ingot', 'kubejs:wrought_iron_bloom', 'gtceu:brick_wooden_form')
    metalworkingRecipe('9x gtceu:wrought_iron_nugget', 'kubejs:wrought_iron_bloom', 'kubejs:nugget_wooden_form')

    function metalworkingRecipe(output, input, form) {
        event.shapeless(
            Item.of(output),
            [
                form,
                ['kubejs:stone_hammer', '#forge:tools/hammers'],
                input
            ]
        ).keepIngredient(form).damageIngredient('kubejs:stone_hammer')
    }
})