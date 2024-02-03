// priority: 0
global.Util = {
	qualityTooltip: function (quality) {
		const formattedQualityString = global.TextUtil.snakeToTitleCase(global.TextUtil.keepBefore(quality, '_quality'))
		let formattedColorQualityString = Text.of(formattedQualityString)
		switch (quality) {
			case global.Quality.UltraLow:
				formattedColorQualityString.white()
				break
			case global.Quality.Low:
				formattedColorQualityString.gray()
				break
			case global.Quality.Medium:
				formattedColorQualityString.aqua()
				break
			case global.Quality.High:
				formattedColorQualityString.gold()
				break
			default:
			   console.error("Unknown Quality value: '" + quality + "'")
		}
		return Text.darkGray('Quality: ').append(formattedColorQualityString)
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
		if (split[0] != undefined)
			return split[0]
		return string
	},

	// Returns the rest of the string after the occurrence of the pattern.
	// If the pattern isn't found, the whole string is returned.
	keepAfter: function (string, pattern) {
		const split = string.split(pattern, 2)
		if (split[1] != undefined)
			return split[1]
		return string
	},

	// Converts a snake case string to a title case string.
	// E.g. 'my_string' -> 'My String'
	snakeToTitleCase: function (snakeCaseString) {
		return snakeCaseString.replace (/^[-_]*(.)/, (_, c) => c.toUpperCase())     // Initial char (after -/_)
			.replace (/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase())                 // First char after each -/_
	},
}
