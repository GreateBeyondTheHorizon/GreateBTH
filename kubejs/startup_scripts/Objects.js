// priority: 0

//// Enums ////

global.Quality = {
	UltraLow: 'ultra_low_quality',
	Low: 'low_quality',
	Medium: 'medium_quality',
	High: 'high_quality',
}

//// Mods ////

global.AE2 = {
	CellSizes: ['1k', '4k', '16k', '64k', '256k'],
	WaferMaterialQualities: {
		'silicon': global.Quality.UltraLow,
		'phosphorus': global.Quality.Low,
		'naquadah': global.Quality.Medium,
		'neutronium': global.Quality.High,
	},
}
