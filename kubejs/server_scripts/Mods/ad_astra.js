ServerEvents.recipes( event => {
	
	event.remove({ output:'ad_astra:rocket_fin' })
	event.remove({ output:'ad_astra:steel_engine' })
	event.remove({ output:'ad_astra:rocket_nose_cone' })
	
	//stainless steel
	
	event.shaped(
		Item.of('kubejs:stainless_steel_fin', 1),
		[
			' A ',
			'AAA',
			'A A'
		],
		{
			A:'gtceu:stainless_steel_double_plate'
		}
	)
	
	event.shaped(
		Item.of('kubejs:stainless_steel_cone', 1),
		[
			'   ',
			' A ',
			'AAA'
		],
		{
			A:'gtceu:stainless_steel_double_plate',
		}
	)
	
	//tungsten steel/carbide
	
	event.shaped(
		Item.of('kubejs:tungsten_steel_fin', 1),
		[
			' A ',
			'AAA',
			'A A'
		],
		{
			A:'gtceu:tungsten_steel_double_plate'
		}
	)
	
	event.shaped(
		Item.of('kubejs:tungsten_steel_cone', 1),
		[
			'   ',
			' A ',
			'AAA'
		],
		{
			A:'gtceu:tungsten_carbide_double_plate'
		}
	)
	
	// HSS-E
	
	event.shaped(
		Item.of('kubejs:hsse_fin', 1),
		[
			' A ',
			'AAA',
			'A A'
		],
		{
			A:'gtceu:hsse_double_plate'
		}
	)
	
	event.shaped(
		Item.of('kubejs:hsse_cone'),
		[
			'   ',
			' A ',
			'AAA'
		],
		{
			A:'gtceu:hsse_double_plate'
		}
	)
	
	// Trinium
	
	event.shaped(
		Item.of('kubejs:trinium_fin'),
		[
			' A ',
			'AAA',
			'A A'
		],
		{
			A:'gtceu:trinium_double_plate'
		}
	)
	
	event.shaped(
		Item.of('kubejs:trinium_cone'),
		[
			'   ',
			' A ',
			'AAA'
		],
		{
			A:'gtceu:trinium_double_plate'
		}
	)
})