//priority: 0

ServerEvents.tags('item', event => {
	event.add('forge:lenses', 'kubejs:certus_quartz_lens')
	event.add('forge:lenses/certus', 'kubejs:certus_quartz_lens')
	event.add('kubejs:fireproof_wood', ['minecraft:warped_stem', 'minecraft:stripped_warped_stem', 'minecraft:stripped_warped_hyphae', 'minecraft:warped_hyphae', 'minecraft:crimson_stem', 'minecraft:stripped_crimson_stem', 'minecraft:stripped_crimson_hyphae', 'minecraft:crimson_hyphae'])
	event.add('forge:tools/saws', 'kubejs:flint_saw')
	event.add('forge:armors', /ad_astra:jet(.*)/)
	event.add('forge:armors', /ad_astra:(.*)space(.*)/)
})