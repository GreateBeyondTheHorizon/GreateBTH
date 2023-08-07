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
<<<<<<< HEAD
	
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
	
=======

	// #endregion 
>>>>>>> origin/general-kube-stuff-kstoko23
	event.custom({
	"type": "gtceu:bender",
	"duration": 26,
	"inputs": {
		"item": [
			{
				"content": {
					"type": "gtceu:sized",
					"fabric:type": "gtceu:sized",
					"count": 5,
					'ingredient': 
					{"item": "minecraft:scute"}
				},
				"chance": 1.0,
				"tierChanceBoost": 0.0
			},
			{
				"content": {
					"type": "gtceu:sized",
					"fabric:type": "gtceu:sized",
					"count": 1,
					"ingredient": {
						"type": "forge:nbt",
						"item": "gtceu:programmed_circuit",
						"count": 1,
						"nbt": "{Configuration:1}"
					}
				},
				"chance": 0.0,
				"tierChanceBoost": 0.0
			}
		]
	},
	"outputs": {
		"item": [
			{
				"content": {
					"type": "gtceu:sized",
					"fabric:type": "gtceu:sized",
					"count": 1,
					"ingredient": {
						"item": "kubejs:unf_turtle_helmet"
					}
				},
				"chance": 1.0,
				"tierChanceBoost": 0.0
			}
		]
	},
	"tickInputs": {
		"eu": [
			{
				"content": 24,
				"chance": 1.0,
				"tierChanceBoost": 0.0
			}
		]
	},
	"tickOutputs": {}
})
});