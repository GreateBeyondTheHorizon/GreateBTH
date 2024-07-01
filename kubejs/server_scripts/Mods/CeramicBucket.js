ServerEvents.recipes(event => {

	event.campfireCooking('ceramicbucket:ceramic_bucket', 'ceramicbucket:unfired_clay_bucket').cookingTime(300).xp(0.3)

	event.replaceInput(
		'ceramicbucket:unfired_clay_bucket',
		'minecraft:clay_ball',
		'gtceu:compressed_clay'
	)
})