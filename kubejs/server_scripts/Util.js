var Util = {
    // Returns the rest of the string after the occurrence of the pattern.
    // If the pattern isn't found, the whole string is returned.
    keepAfter: function (string, pattern) {
        var split = string.split(pattern, 2)
        if (split[1] != undefined)
            return split[1]
        return string
    },

    // E.g. 'gtceu:wood_plate' -> 'wood_plate'
	removeNamespace: function (location) {
		return keepAfter(location, ':')
	}
}
