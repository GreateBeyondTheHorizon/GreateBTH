// priority: 0

//// Enums ////

global.Quality = {
	UltraLow: 'ultra_low_quality',
	Low: 'low_quality',
	Medium: 'medium_quality',
	High: 'high_quality',
}

//// Mods ////

global.Greate = {
	MachineTiers: [
		'andesite_alloy',
		'steel',
		'aluminium',
		'stainless_steel',
		'titanium',
		'tungsten_steel',
		'rhodium_plated_palladium',
		'naquadah_alloy',
		'darmstadtium',
		'neutronium'
	],
	BeltTiers: [
		'rubber',
		'silicone_rubber',
		'polyethylene',
		'polytetrafluoroethylene',
		'polybenzimidazole'
	]
}

global.AE2 = {
	CellSizes: ['1k', '4k', '16k', '64k', '256k'],
	SpatialCellSizes: [2, 16, 128],
	WaferMaterialQualities: {
		'silicon': global.Quality.UltraLow,
		'phosphorus': global.Quality.Low,
		'naquadah': global.Quality.Medium,
		'neutronium': global.Quality.High,
	}
}

global.ProductiveBees = {
	LVMaterials: ['amethyst', 'cinnabar', 'topaz', 'pyrope', 'zinc', 'tin', 'sulfur', 'diamond', 'iron', 'ruby',
		'sapphire', 'opal', 'silicon', 'lapis', 'cobalt', 'copper', 'green_sapphire', 'coal', 'silver', 'emerald', 'apatite',
		'malachite', 'lead', 'sodalite', 'gold', 'nickel'],
	MVMaterials: ['chromium', 'steel', 'electrum', 'invar', 'brass', 'bronze'],
	HVMaterials: ['bismuth', 'stainless_steel'],
	EVMaterials: ['titanium', 'neodymium'],
	IVMaterials: ['platinum', 'tungsten', 'tungsten_steel', 'iridium', 'osmium', 'samarium', 'niobium'],
	LUVMaterials: ['ruthenium', 'palladium', 'rhodium', 'rhodium_plated_palladium'],
	ZPMMaterials: ['naquadah', 'naquadah_alloy', 'vanadium'],
	UVMaterials: ['yttrium'],
	UHVMaterials: ['europium'],
	AfterUHVMaterials: ['infinity', 'neutronium']
}