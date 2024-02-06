//priority: 1
ServerEvents.tags('item', event => {
    for (const item of global.ItemsToRemove) {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
	}
})

ServerEvents.recipes(event => {
    // Remove removed item input recipes
	for (const item of global.ItemsToRemoveAsInputs) {
        event.remove({ input: item })
    }

    // Replace removed items in input recipes
    for (const item of global.ItemsToReplaceAsInputs) {
        event.replaceInput(
            { input: item.item },
            item.item,
            item.replacementInput
        )
    }

    // Remove the recipes for removed items, and replace them in inputs as Removed Item Placeholders
	for (const item of global.ItemsToRemove) {
        event.remove({ output: item })
        // Expand tags and RegExps into individual items to more easily identify what was removed
        global.Util.forEachItemExpanded(item, itemId => {
            event.replaceInput(
                { input: itemId },
                itemId,
                Item.of(
                    'kubejs:removed_item_placeholder',
                    '{Removed: "' + itemId + '"}'
                ).strongNBT()
            )
        })
    }
})
