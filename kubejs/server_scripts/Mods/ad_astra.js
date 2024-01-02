ServerEvents.recipes( event => {
	
	event.remove({ output:'ad_astra:rocket_fin' })
	event.remove({ output:/ad_astra:(.*)engine/ })
	event.remove({ output:'ad_astra:rocket_nose_cone' })
	event.remove({ output: /ad_astra:(.*)_plate/ })
	
	event.remove({output: 'ad_astra:steel_ingot'})
	event.remove({output: 'ad_astra:steel_block'})
	//stainless steel
	
	
	event.shaped(
	Item.of('kubejs:stainless_steel_engine', 1),
		[
			'AAA',
			' B ',
			'DCD'
		],
		{
			A:'gtceu:stainless_steel_double_plate',
			B:'gtceu:stainless_steel_frame',
			C:'gtceu:stainless_steel_rotor',
			D:'#forge:circuits/hv'
		}
	)
	
	
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
	Item.of('kubejs:tungsten_steel_engine', 1),
		[
			'AAA',
			' B ',
			'DCD'
		],
		{
			A:'gtceu:tungsten_steel_double_plate',
			B:'gtceu:tungsten_steel_frame',
			C:'gtceu:tungsten_steel_rotor',
			D:'#forge:circuits/ev'
		}
	)
	
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
	Item.of('kubejs:hsse_engine', 1),
		[
			'AAA',
			' B ',
			'DCD'
		],
		{
			A:'gtceu:hsse_double_plate',
			B:'gtceu:hsse_frame',
			C:'kubejs:hsse_rotor',
			D:'#forge:circuits/iv'
		}
	)
	
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
	Item.of('kubejs:trinium_engine', 1),
		[
			'AAA',
			' B ',
			'DCD'
		],
		{
			A:'gtceu:trinium_double_plate',
			B:'kubejs:trinium_frame',
			C:'kubejs:trinium_rotor',
			D:'#forge:circuits/luv'
		}
	)
	
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