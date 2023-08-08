// priority: 0
ServerEvents.recipes(event => {
	// #region removal
	const tiers = ['lv', 'mv', /* 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv' */];
    const components = ['emitter', 'sensor', 'electric_motor', 'electric_piston', 'robot_arm', 'conveyor_module', 'electric_pump', 'fluid_regulator'];

    tiers.forEach(tier => {
        components.forEach(component => {
            event.remove({output: `gtceu:${tier}_${component}`});
        });
    });
    //lv default circuits removal
    event.remove({output: 'gtceu:basic_electronic_circuit'}) // recipes done
    event.remove({output: 'gtceu:basic_integrated_circuit'}) // recipes done, missing textures
    event.remove({output: 'gtceu:microchip_processor'}) //recipes done for MV tier, TODO EV needs implementation
    //mv default circuits removal
    event.remove({output: 'gtceu:good_electronic_circuit'}) // recipies done, missing textures
    event.remove({output: 'gtceu:good_integrated_circuit'}) // reciepies done, missing textures
    event.remove({output: 'gtceu:micro_processor'}) // reciepies done, TODO EV needs implementaion
	
	event.shaped(
	Item.of('gtceu:wood_plate'),
	[
		'A',
		'A',
	],
	{
		A:'#minecraft:logs'
	}
	)

	// #endregion 


});