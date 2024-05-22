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
})
