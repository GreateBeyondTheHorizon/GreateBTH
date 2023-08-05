// priority: 0
ServerEvents.recipes(event => {
    const tiers = ['lv', 'mv', /* 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv' */];
    const components = ['emitter', 'sensor', 'electric_motor', 'electric_piston', 'robot_arm', 'conveyor_module', 'electric_pump', 'fluid_regulator'];

    tiers.forEach(tier => {
        components.forEach(component => {
            event.remove({output: `gtceu:${tier}_${component}`});
        });
    });
    //circuits removal
    event.remove({output: 'gtceu:basic_electronic_circuit'})
    event.remove({output: 'gtceu:basic_integrated_circuit'})
    event.remove({output: 'gtceu:microchip_processor'})
});