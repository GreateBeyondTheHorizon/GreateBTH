ServerEvents.recipes(event => {

	event.remove('toms_storage:crafting_terminal')
	event.remove({id: "toms_storage:wireless_terminal"})

	//Storage Connector
	event.recipes.createMechanicalCrafting(
	 	Item.of('toms_storage:ts.inventory_connector', 1),
	 	[
			' BAB ',
	 		'BDEDB',
	 		'AECEA',
	 		'BDEDB',
	 		' BAB ',
	 	],
	 	{
	 		A:'ironchest:iron_chest',
	 		B:'gtceu:treated_wood_plate',
	 		C:'gtceu:mv_machine_casing',
	 		D:'gtceu:micro_processor',
			E:'gtceu:lv_robot_arm'
	 	}
	)
	
	//Terminal
	event.recipes.createMechanicalCrafting(
	 	Item.of('toms_storage:ts.crafting_terminal', 1),
	 	[
			'ABCBA',
	 		'BFDFB',
	 		'CDEDC',
	 		'BFDFB',
	 		'ABCBA',
	 	],
	 	{
	 		A:'minecraft:crafting_table',
	 		B:'ironchest:iron_chest',
	 		C:'gtceu:mv_conveyor_module',
	 		D:'toms_storage:ts.inventory_cable',
			E:'#gtceu:circuits/mv',
			F:'toms_storage:ts.inventory_cable_connector',
	 	}
	)
	
	//Inventory Cable
	event.shaped(
		Item.of('toms_storage:ts.inventory_cable'),
		[
			'CBC',
			'BAB',
			'CBC',
		],
		{
			A: 'gtceu:mv_conveyor_module',
			B: 'gtceu:wood_plate',
			C: 'gtceu:wood_long_rod'
		}
	)

	//Inventory Cable Connector
	event.shaped(
		Item.of('toms_storage:ts.inventory_cable_connector', 1),
		[
			' D ', 
			'BAB',
			' C ', 
		],
		{
			A:'gtceu:lv_robot_arm',
			B:'gtceu:treated_wood_plate',
			C:'gtceu:iron_screw',
			D:'gtceu:micro_processor',
		}
	)

	event.shapeless(
		Item.of('toms_storage:ts.inventory_cable_connector_filtered', 1),
		[
			'toms_storage:ts.item_filter',
			'toms_storage:ts.inventory_cable_connector'
		]
	)

	//Wireless
	event.shaped(
		Item.of('toms_storage:ts.wireless_terminal', 1),
		[
			'BDB', 
			'EAE',
			'CDC', 
		],
		{
			A: 'minecraft:ender_eye',
			B: 'gtceu:mv_emitter',
			C: 'gtceu:mv_sensor',
			D: 'gtceu:aluminium_plate',
			E: 'gtceu:wood_plate'
		}
	)


	event.shaped(
		Item.of('toms_storage:ts.paint_kit', 1),
		[
			'DEA', 
			'FB ',
			'C  ',
		],
		{
			A: '#minecraft:wool',
			B: 'gtceu:empty_spray_can',
			C: 'gtceu:wood_long_rod',
			D: '#railways:internal/dyes/blue_dyes',
			E: '#railways:internal/dyes/red_dyes',
			F: '#railways:internal/dyes/green_dyes',
		}
	)
	
	//FILTER
	event.shaped(
		Item.of('toms_storage:ts.item_filter', 1),
		[
			'RBR', 
			'BAB',
			'RBR', 
		],
		{
			A:'gtceu:item_filter',
			B:'gtceu:treated_wood_plate',
			R:'minecraft:redstone',
		}
	)

	event.shapeless(
		Item.of('toms_storage:ts.polymorphic_item_filter', 1),
		[
			'toms_storage:ts.item_filter',
			'gtceu:hv_sensor'
		]
	)


	event.shapeless(
		Item.of('toms_storage:ts.tag_item_filter', 1),
		[
			'toms_storage:ts.item_filter',
			'gtceu:item_tag_filter'
		]
	)
})
