// priority: 0
ServerEvents.recipes(event => {

	event.remove({ id: 'greate:shaped/andesite_alloy' })
	event.remove({ id: 'greate:shaped/andesite_alloy_millstone' })

	global.Greate.Tiers.forEach(tier => {
		// small cogwheel
		event.recipes.create.deploying(`greate:${tier}_cogwheel`, [`greate:${tier}_shaft`, `gtceu:${tier}_plate`]);
		// large cogwheel
		event.recipes.create.deploying(`greate:large_${tier}_cogwheel`, [`greate:${tier}_cogwheel`, `gtceu:${tier}_plate`]);
		event.recipes.create.sequenced_assembly([
		`greate:large_${tier}_cogwheel`
		],  `greate:${tier}_shaft`, [
			event.recipes.create.deploying(`greate:${tier}_cogwheel`, [`greate:${tier}_cogwheel`, `gtceu:${tier}_plate`])
		]).transitionalItem(`greate:${tier}_cogwheel`).loops(2)
		// alloys
		event.recipes.create.mixing(
			Item.of(`greate:${tier}_alloy`, 1),
			[
				`minecraft:andesite`,
				`gtceu:${tier}_plate`
			]
		)
	})

	event.recipes.createFilling(Item.of('greate:rubber_belt_connector', 1), [
		'gtceu:steel_plate',
		Fluid.of('gtceu:rubber', 250)
	])

	event.shaped(
		Item.of('greate:andesite_alloy_millstone'),
		[
			'DCD',
			'SAS',
			'PFP'
		],
		{
			D: 'minecraft:diamond',
			C: 'greate:andesite_alloy_cogwheel',
			S: '#minecraft:wooden_slabs',
			A: 'gtceu:ulv_machine_casing',
			P: 'minecraft:piston',
			F: 'greate:andesite_alloy_shaft'
		}
	)
})
