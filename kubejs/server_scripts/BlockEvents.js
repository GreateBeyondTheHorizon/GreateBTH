BlockEvents.rightClicked(event => {
	if(event.block.id === 'minecraft:campfire' && event.item.id === 'kubejs:fire_starter') {
		if (event.block.properties.get('lit') !== true) {
			var mainHandItem = event.player.getMainHandItem().getDamageValue()
			if(mainHandItem < event.item.maxDamage) {
				mainHandItem = mainHandItem + 1 
				event.player.getMainHandItem().setDamageValue(mainHandItem)
			}
			else {
				event.entity.mainHandItem = "minecraft:air"
			}	
			event.block.set('minecraft:campfire', { lit: 'true' })
		}
	} if (event.block.id === 'minecraft:crafting_table' && !event.getPlayer().stages.has('early_game_completed')) {
		event.getPlayer().displayClientMessage(Component.literal("You have not unlocked the ability to use this yet!").red(), true)
		event.cancel()
	} if (event.block.id === 'minecraft:furnace' || event.block.id === 'minecraft:blast_furnace' || event.block.id === 'minecraft:smoker') {
		event.getPlayer().displayClientMessage(Component.literal("This block has no functionality!").red(), true)
		event.cancel()
	} if (event.block.tags.contains(new ResourceLocation('beds')) && !event.getPlayer().stages.has('crafted_bed')) {
		event.getPlayer().displayClientMessage(Component.literal("You have not unlocked the ability to use this yet!").red(), true)
		event.cancel()
	}
})