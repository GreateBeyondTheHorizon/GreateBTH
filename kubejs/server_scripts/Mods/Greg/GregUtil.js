var GregUtil = {
	//// Recipe utils ////

	// Used if you want to make a ring extruder recipe for a material, but the material doesn't have an ingot.
	// Based on PartsRecipeHandler.processRing(): https://github.com/GregTechCEu/GregTech-Modern/blob/0ca25f1401fc7aab43d3b1566c4d0c12d8cf472a/src/main/java/com/gregtechceu/gtceu/data/recipe/generated/PartsRecipeHandler.java
	extrudeRingNoIngotMaterial: function(recipesEvent, material, itemInput) {
		recipesEvent.recipes.gtceu.extruder('gtceu:extrude_' + global.RecipeUtil.removeNamespace(global.RecipeUtil.removeMultipleItems(itemInput)) + '_to_ring')
			.itemInputs(itemInput)
			.notConsumable(GTItems.SHAPE_EXTRUDER_RING.asItem())
			.itemOutputs('4x gtceu:' + material.getName() + '_ring')
			.duration(material.getMass() * 2)
			.EUt(6 * material.getBlastTemperature() > 2800 ? GTValues.VA[GTValues.LV] : GTValues.VA[GTValues.ULV])
	},
}
