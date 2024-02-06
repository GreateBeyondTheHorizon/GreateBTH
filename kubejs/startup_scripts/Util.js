// priority: 1
global.Util = {
	// Get a resource location from a namespace and a path.
	// E.g. id('minecraft', 'stone') -> 'minecraft:stone'
	id: function (namespace, path) {
		return namespace + ':' + path
	},

	// Returns the index of the given value within the given object. This can act like a tier within
	// the object if the object is structured like it has tiers. global.Quality is an example of one such object.
	objectToTier: function (value, object) {
		let index = Object.values(object).findIndex(item => item === value)
		if (index == -1)
			console.error("No Tier exists within object for value: '" + quality + "'")
		return index
	},

	tierColor: function (tier) {
		return GTValues.VNF[tier]
	},

	qualityTooltip: function (quality) {
		const formattedQualityString = global.TextUtil.snakeToTitleCase(
			global.TextUtil.keepBefore(quality, '_quality')
		)
		let formattedColorQualityString = Text.of(formattedQualityString).color(
			global.Util.tierColor(global.Util.objectToTier(quality, global.Quality))
		)
		return Text.darkGray('Quality: ').append(formattedColorQualityString)
	},

	// Expands an item regular expression into item IDs, calling forEachItem on each item ID.
	// Expanding an item regex means: /create:crushed_raw_(.*)/ -> 'create:crushed_raw_osmium', 'create:crushed_raw_quicksilver', ...
	// If a normal item ID is passed in, forEachItem will still be called with it.
	// NOTE: This function only works if called after item registration.
	forEachItemExpanded: function (item, forEachItem) {
		if (item[0] === '#' || item.constructor?.name === 'RegExp') {
			for (const itemId of Ingredient.of(item).itemIds) {
				forEachItem(itemId)
			}
		} else {
			forEachItem(item)
		}
	},
}

global.RecipeUtil = {
	// E.g. 'gtceu:wood_plate' -> 'wood_plate'
	removeNamespace: function (location) {
		return global.TextUtil.keepAfter(location, ':')
	},

	// E.g. '4x gtceu:wood_plate' -> 'gtceu:wood_plate'
	removeMultipleItems: function (itemString) {
		return global.TextUtil.keepAfter(itemString, ' ')
	},
}

global.TextUtil = {
	// Returns the start of the string before the occurrence of the pattern.
	// If the pattern isn't found, the whole string is returned.
	keepBefore: function (string, pattern) {
		const split = string.split(pattern, 2)
		if (split[0] != undefined) return split[0]
		return string
	},

	// Returns the rest of the string after the occurrence of the pattern.
	// If the pattern isn't found, the whole string is returned.
	keepAfter: function (string, pattern) {
		const split = string.split(pattern, 2)
		if (split[1] != undefined) return split[1]
		return string
	},

	// Converts a snake case string to a title case string.
	// E.g. 'my_string' -> 'My String'
	snakeToTitleCase: function (snakeCaseString) {
		return snakeCaseString
			.replace(/^[-_]*(.)/, (_, c) => c.toUpperCase()) // Initial char (after -/_)
			.replace(/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase()) // First char after each -/_
	},
}
