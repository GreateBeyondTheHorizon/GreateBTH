ServerEvents.recipes(event => {

    //remove all 
    const storage = ['toms_storage:ts.inventory_connector', 'toms_storage:ts.storage_terminal', 'toms_storage:ts.crafting_terminal', 
                        'toms_storage:ts.trim', 'toms_storage:ts.open_crate', 'toms_storage:ts.painted_trim', 'toms_storage:ts.inventory_cable', 
                        'toms_storage:ts.inventory_cable_framed', 'toms_storage:ts.inventory_cable_connector_filtered', 
                        'toms_storage:ts.inventory_cable_connector', 'toms_storage:ts.inventory_cable_connector_framed', 
                        'toms_storage:ts.inventory_proxy', 'toms_storage:ts.inventory_hopper_basic', 'toms_storage:ts.level_emitter', 
                        'toms_storage:ts.wireless_terminal', 'toms_storage:ts.adv_wireless_terminal', 'toms_storage:ts.item_filter', 
                        'toms_storage:ts.polymorphic_item_filter', 'toms_storage:ts.tag_item_filter']

	
	storage.forEach((element) => event.remove({output: element}));

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
            E:'gtceu:mv_robot_arm'
		}
	)

	event.recipes.createMechanicalCrafting(
		Item.of('toms_storage:ts.storage_terminal', 1),
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
            E:'#forge:circuits/mv',
            F:'toms_storage:ts.inventory_cable_connector',
			

		}
	)
})