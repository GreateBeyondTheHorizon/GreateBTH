ServerEvents.tags('item', event => {
	event.add('forge:lenses', 'kubejs:certus_quartz_lens')
	event.add('forge:lenses/certus', 'kubejs:certus_quartz_lens')
	event.add('kubejs:fireproof_wood', [
		'minecraft:warped_stem',
		'minecraft:stripped_warped_stem',
		'minecraft:stripped_warped_hyphae',
		'minecraft:warped_hyphae',
		'minecraft:crimson_stem',
		'minecraft:stripped_crimson_stem',
		'minecraft:stripped_crimson_hyphae',
		'minecraft:crimson_hyphae',
	])
	event.add('forge:armors', /ad_astra:jet(.*)/)
	event.add('forge:armors', /ad_astra:(.*)space(.*)/)

	event.add('gbth:forms', [
		'kubejs:block_wooden_form',
		'kubejs:nugget_wooden_form',
		'gtceu:brick_wooden_form'
	])

	event.add('gbth:blooms', [
		'kubejs:copper_bloom', 
		'kubejs:tin_bloom',
		'kubejs:bronze_bloom', 
		'kubejs:wrought_iron_bloom'
	])

	event.add('c:black_dyes', [
		'#forge:dyes/black'
	])
	event.add('c:blue_dyes', [
		'#forge:dyes/blue'
	])
	event.add('c:brown_dyes', [
		'#forge:dyes/brown'
	])
	event.add('c:cyan_dyes', [
		'#forge:dyes/cyan'
	])
	event.add('c:gray_dyes', [
		'#forge:dyes/gray'
	])
	event.add('c:green_dyes', [
		'#forge:dyes/green'
	])
	event.add('c:light_blue_dyes',[
		 '#forge:dyes/light_blue'
	])
	event.add('c:light_gray_dyes',[
		 '#forge:dyes/light_gray' 
	])
	event.add('c:lime_dyes', [
		'#forge:dyes/lime'
	])
	event.add('c:magenta_dyes', [
		'#forge:dyes/magenta'
	])
	event.add('c:orange_dyes', [
		'#forge:dyes/orange'
	])
	event.add('c:pink_dyes', [
		'#forge:dyes/pink'
	])
	event.add('c:purple_dyes', [
		'#forge:dyes/purple'
	])
	event.add('c:red_dyes', [
		'#forge:dyes/red'
	])
	event.add('c:white_dyes', [
		'#forge:dyes/white'
	])
	event.add('c:yellow_dyes', [
		'#forge:dyes/yellow'
	])
})
