ServerEvents.recipes(event => {

	const energyItems = ['enderio:energetic_photovoltaic_module', 'enderio:pulsating_photovoltaic_module', 'enderio:vibrant_photovoltaic_module', 'enderio:basic_capacitor_bank', 'enderio:advanced_capacitor_bank', 'enderio:vibrant_capacitor_bank', 'enderio:soul_engine', 'enderio:impulse_hopper', 'enderio:creative_power']

	energyItems.forEach(item => { event.remove({output: item})})


	//event.remove({input: Fluid.of('enderio:nutrient_distillation_bucket')})

	event.remove({ type: "enderio:alloy_smelting" });

    event.remove({ type: "enderio:sag_milling" });

})