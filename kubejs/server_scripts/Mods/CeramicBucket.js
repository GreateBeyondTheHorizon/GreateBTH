ServerEvents.recipes(event => {

	event.campfireCooking('ceramicbucket:ceramic_bucket', 'ceramicbucket:unfired_clay_bucket').cookingTime(300).xp(0.3)

	event.shapeless(
		Item.of('ceramicbucket:unfired_clay_bucket'),
			[
				'3x gtceu:compressed_clay',
				'#forge:tools/knives',
			]
	)
})