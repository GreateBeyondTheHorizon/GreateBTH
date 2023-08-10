ServerEvents.recipes(event => {


    //remove all 
    const storage = ['toms_storage:ts.painted_trim', 'toms_storage:ts.inventory_cable', 
                        'toms_storage:ts.inventory_cable_framed', 'toms_storage:ts.inventory_cable_connector_filtered', 
                        'toms_storage:ts.inventory_cable_connector', 'toms_storage:ts.inventory_cable_connector_framed', 
                        'toms_storage:ts.inventory_proxy', 'toms_storage:ts.inventory_hopper_basic', 'toms_storage:ts.level_emitter', 
                        'toms_storage:ts.wireless_terminal', 'toms_storage:ts.adv_wireless_terminal', 'toms_storage:ts.item_filter', 
                        'toms_storage:ts.polymorphic_item_filter', 'toms_storage:ts.tag_item_filter']

	
	storage.forEach((element) => event.remove({output: element}));

})