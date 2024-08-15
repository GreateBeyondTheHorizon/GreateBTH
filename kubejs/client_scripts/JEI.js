const AllGuiTextures = Java.loadClass('com.simibubi.create.foundation.gui.AllGuiTextures')

JEIEvents.hideItems(event => {
	event.hide(/(.*)_bucket/)
})

JEIEvents.hideFluids(event => {
	event.hide('ad_astra:oxygen')
	event.hide('productivebees:honey')
	event.hide('productivebees:flowing_honey')
})

JEIEvents.addItems(event => {
	event.add('minecraft:bucket')
	event.add('minecraft:water_bucket')
	event.add('minecraft:lava_bucket')
	event.add('ceramicbucket:unfired_clay_bucket')
	event.add('ceramicbucket:ceramic_bucket')
	event.add('gtceu:concrete_bucket')
})

JEIAddedEvents.registerCategories(event => {
	event.custom('kubejs:create_info', c => {
		c.title('Item Dropping')
			.background(event.data.jeiHelpers.guiHelper.createBlankDrawable(100, 50))
			.icon(event.data.jeiHelpers.guiHelper.createDrawableItemStack(Item.of('create:wrench')))
			.isRecipeHandled(r => {
				return global['verifyRecipe'](event.data.jeiHelpers, r)
			})
			.handleLookup((builder, recipe, focuses) => {
				global['handleLookup'](event.data.jeiHelpers, builder, recipe, focuses)
			})
			.setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
				global['render'](event.data.jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY)
			})
	})
})

JEIAddedEvents.registerRecipes(event => {
	event.custom('kubejs:create_info').add({ input: 'create:chromatic_compound', catalyst: Item.of('minecraft:beacon'), output: 'create:refined_radiance' })
	event.custom('kubejs:create_info').add({ input: 'create:chromatic_compound', catalyst: Item.of('minecraft:end_portal_frame').setHoverName('Drop into the Void in the End.'), output: 'create:shadow_steel' })
})

global['verifyRecipe'] = (jeiHelpers, recipe) => {
	if(!recipe) return false;
	if(!recipe.data) return false;
	if(!recipe.data.input) return false;
	if(!recipe.data.catalyst) return false;
	if(!recipe.data.output) return false;

	return true;
}

global['handleLookup'] = (jeiHelpers, builder, recipe, focuses) => {
	builder.addSlot('INPUT', 15, 10).addItemStack(Item.of(recipe.data.input)).setSlotName('input')
	builder.addSlot('CATALYST', 45, 30).addItemStack(recipe.data.catalyst).setSlotName('catalyst')
	builder.addSlot('OUTPUT', 70, 10).addItemStack(Item.of(recipe.data.output)).setSlotName('output')
}

global['render'] = (jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
	AllGuiTextures.JEI_DOWN_ARROW.render(guiGraphics, 40, 15)
}