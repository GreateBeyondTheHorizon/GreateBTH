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

	for (const item of global.ItemsToRemove) {
        global.Util.forEachItemExpanded(item, itemId => {
            event.add(itemId, Text.red('DISABLED.').append(Text.gray(' If you have found this, report it as a bug.')))
        })
    }

	event.add(['minecraft:furnace', 'minecraft:blast_furnace', 'minecraft:smoker'], [["", Text.yellow('No functionality.'), Text.gray(' Used for crafting or decoration only.')]])
})
