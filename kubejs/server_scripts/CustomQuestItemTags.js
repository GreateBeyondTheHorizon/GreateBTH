//priority: 0
ServerEvents.tags('item', event => {
	event.add('gbth:lp_steam_boilers', ['gtceu:lp_steam_solid_boiler', 'gtceu:lp_steam_liquid_boiler', 'gtceu:lp_steam_solar_boiler'])
	event.add('gbth:steam_furnaces', ['gtceu:lp_steam_furnace', 'gtceu:hp_steam_furnace'])
	event.add('gbth:steam_extractors', ['gtceu:lp_steam_extractor', 'gtceu:hp_steam_extractor'])
	event.add('gbth:steam_macerators', ['gtceu:lp_steam_macerator', 'gtceu:hp_steam_macerator'])
	event.add('gbth:steam_forge_hammers', ['gtceu:lp_steam_forge_hammer', 'gtceu:hp_steam_forge_hammer'])
	event.add('gbth:steam_alloy_smelters', ['gtceu:lp_steam_alloy_smelter', 'gtceu:hp_steam_alloy_smelter'])
	event.add('gbth:steam_compressors', ['gtceu:lp_steam_compressor', 'gtceu:hp_steam_compressor'])
	event.add('gbth:wrought_iron_tools', ['gtceu:wrought_iron_wrench', 'gtceu:wrought_iron_hammer', 'gtceu:wrought_iron_file', 'gtceu:wrought_iron_saw', 'gtceu:wrought_iron_screwdriver'])
})