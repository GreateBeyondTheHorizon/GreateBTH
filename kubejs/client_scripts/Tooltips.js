ItemEvents.tooltip(event => {
	event.addAdvanced(
		'kubejs:removed_item_placeholder',
		(item, advanced, text) => {
			if (!advanced) return
			text.add(
				Text.gray('Removed: ').append(Text.darkPurple(item.nbt?.Removed))
			)
		}
	)
})
