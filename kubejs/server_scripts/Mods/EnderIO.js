ServerEvents.recipes(event => {
	event.remove({ id: 'enderio:stick' })

	// Remove power-related blocks
	event.remove({ output: 'enderio:stirling_generator' })
	event.remove({ output: 'enderio:soul_engine' })
	event.remove({ output: 'enderio:energetic_photovoltaic_module' })
	event.remove({ output: 'enderio:pulsating_photovoltaic_module' })
	event.remove({ output: 'enderio:vibrant_photovoltaic_module' })
	event.remove({ output: 'enderio:wired_charger' })

	// Remove machines that have a gt/create counterpart
	event.remove({ output: 'enderio:primitive_alloy_smelter' })
	event.remove({ output: 'enderio:alloy_smelter' })
	event.remove({ output: 'enderio:sag_mill' })
	event.remove({ output: 'enderio:fluid_tank' })
	event.remove({ output: 'enderio:pressurized_fluid_tank' })
	event.remove({ output: 'enderio:drain' })
})
