// Priority: 0
StartupEvents.registry('item', event => {
	event.create('incomplete_lv_circuit', 'create:sequenced_assembly')
	event.create('incomplete_lv_motor', 'create:sequenced_assembly')
})
