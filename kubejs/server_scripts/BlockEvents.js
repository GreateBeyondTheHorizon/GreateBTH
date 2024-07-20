BlockEvents.rightClicked('minecraft:campfire', event => {
	if(event.item.id === 'kubejs:fire_starter') {
		if (event.block.properties.get('lit') !== true) {
			var mainHandItem = event.player.getMainHandItem().getDamageValue()
			if(mainHandItem < event.item.maxDamage) {
				mainHandItem = mainHandItem + 1 
				event.player.getMainHandItem().setDamageValue(mainHandItem)
			} else {
				event.entity.mainHandItem = "minecraft:air"
			}	
			event.block.set('minecraft:campfire', { lit: 'true' })
		}
	}
})

BlockEvents.rightClicked('minecraft:crafting_table', event => {
	if (!event.getPlayer().stages.has('early_game_completed')) {
		event.getPlayer().displayClientMessage(Component.literal("Complete the Introduction quest chapter to be able to use this!").red(), true)
		event.cancel()
	}
})

BlockEvents.rightClicked(event => {
	if (event.block.tags.contains(new ResourceLocation('beds')) && !event.getPlayer().stages.has('crafted_bed')) {
		event.getPlayer().displayClientMessage(Component.literal('Complete the "On the Floor No-More" quest to be able to use this!').red(), true)
		event.cancel()
	}
})
