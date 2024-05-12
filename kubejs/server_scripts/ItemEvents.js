ItemEvents.crafted(event => {
	if(event.getItem().id === 'minecraft:crafting_table') {
		if(!event.getPlayer().stages.has('early_game_completed')) {
			event.getPlayer().stages.add('early_game_completed')
			event.getPlayer().displayClientMessage(Component.literal('You have unlocked the ability to use a crafting table.'), true)
		}
	}
})