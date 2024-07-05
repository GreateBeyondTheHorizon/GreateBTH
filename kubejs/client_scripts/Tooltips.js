ItemEvents.tooltip(event => {
	event.addAdvanced(
		'kubejs:removed_item_placeholder',
		(item, advanced, text) => {
			let removedItem = item.nbt?.Removed
			if (removedItem != undefined) {
				text.add(Text.darkGray('Removed: ').append(Text.lightPurple(removedItem)))
			}
		}
	)

	event.add(['minecraft:furnace', 'minecraft:blast_furnace', 'minecraft:smoker'], Text.yellow('No functionality.').append(Text.gray(' Used for crafting or decoration only.')))
})
