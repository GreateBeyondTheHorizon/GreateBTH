ClientEvents.highPriorityAssets(event => {
	// Straw cutting world interaction recipes
	global.StrawCutting.forEach(element => {
		event.add('emi:recipe/additions/straw_cutting_' + global.RecipeUtil.removeNamespace(element.blockID), {
			'type': 'emi:world_interaction',
			'left': 'item:' + element.blockID,
			'right': '#item:forge:tools/knives',
			'output': 'item:farmersdelight:straw'
		})
	})
})
