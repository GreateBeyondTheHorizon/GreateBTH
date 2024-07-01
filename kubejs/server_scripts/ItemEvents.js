ItemEvents.crafted(event => {
	if(event.getItem().id === 'minecraft:crafting_table') {
		if(!event.getPlayer().stages.has('early_game_completed')) {
			event.getPlayer().stages.add('early_game_completed')
			event.getPlayer().displayClientMessage(Component.literal('You have unlocked the ability to use a crafting table.'), true)
		}
	} if(event.getItem().id.includes('_bed')) {
		if(!event.getPlayer().stages.has('crafted_bed')) {
			event.getPlayer().stages.add('crafted_bed')
			event.getPlayer().displayClientMessage(Component.literal('You have unlocked the ability to use a bed.'), true)
		}
	}
})