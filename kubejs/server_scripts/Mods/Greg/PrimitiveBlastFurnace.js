ServerEvents.recipes(event => {
	event.remove({id: /gtceu:primitive_blast_furnace(.*)/})
    
    primitiveBlastFurnaceRecipe('kubejs:steel_from_coke_block', 675, ['gtceu:steel_block', 'gtceu:ash_dust'], false, ['minecraft:iron_block', 'gtceu:coke_block'])
    primitiveBlastFurnaceRecipe('kubejs:steel_from_coke_dust', 75, 'gtceu:steel_ingot', true, ['minecraft:iron_ingot', 'gtceu:coke_dust'])
    primitiveBlastFurnaceRecipe('kubejs:steel_from_coke_dust_wrought', 150, 'gtceu:steel_ingot', true, ['gtceu:wrought_iron_ingot', 'gtceu:coke_dust'])
    primitiveBlastFurnaceRecipe('kubejs:steel_from_coke_block_wrought', 1350, ['gtceu:steel_block', 'gtceu:ash_dust'], false, ['gtceu:wrought_iron_block', 'gtceu:coke_block'])
    primitiveBlastFurnaceRecipe('kubejs:steel_from_coke_gem', 75, 'gtceu:steel_ingot', true, ['minecraft:iron_ingot', 'gtceu:coke_gem'])
    primitiveBlastFurnaceRecipe('kubejs:steel_from_coke_gem_wrought', 150, 'gtceu:steel_ingot', true, ['gtceu:wrought_iron_ingot', 'gtceu:coke_gem'])

    function primitiveBlastFurnaceRecipe(id, duration, output, chancedOutput, input) {
        if (chancedOutput == false) {
            event.recipes.gtceu.primitive_blast_furnace(id)
                .duration(duration * 20.0)
                .itemInputs(input)
                .itemOutputs(output)
        } else {
            event.recipes.gtceu.primitive_blast_furnace(id)
                .duration(duration * 20.0)
                .itemInputs(input)
                .itemOutputs(output)
                .chancedOutput(Item.of('gtceu:ash_dust'), 1110, 0)
        }
    }
})