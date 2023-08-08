// priority: 0
ServerEvents.recipes(event => {
	// #region removal
	const tiers = ['lv', 'mv', /* 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv' */];
    const components = ['emitter', 'sensor', 'electric_motor', 'electric_piston', 'robot_arm', 'conveyor_module', 'electric_pump', 'fluid_regulator'];

	let interNanoProc = 'kubejs:inter_nano_processor'

    tiers.forEach(tier => {
        components.forEach(component => {
            event.remove({output: `gtceu:${tier}_${component}`});
        });
    });
    //lv default circuits removal
    event.remove({output: 'gtceu:basic_electronic_circuit'}) // recipes done
    event.remove({output: 'gtceu:basic_integrated_circuit'}) // recipes done
    event.remove({output: 'gtceu:microchip_processor'}) //recipes done for MV tier, TODO EV needs implementation
    //mv default circuits removal
    event.remove({output: 'gtceu:good_electronic_circuit'}) // recipies done
    event.remove({output: 'gtceu:good_integrated_circuit'}) // reciepies done
    event.remove({output: 'gtceu:micro_processor'}) // reciepies done, TODO EV needs implementaion
	// hv default circuits removal
    event.remove({output: 'gtceu:micro_processor_assembly'}) 
    event.remove({output: 'gtceu:advanced_integrated_circuit'}) 
    event.remove({output: 'gtceu:nano_processor'}) 
	
	// #endregion 
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

// tier 3 hv circuit
event.custom(
	{
	"type": "gtceu:circuit_assembler",
	"duration": 100,
	"inputs": {
		"item": [
			{
				"content": {
					"type": "gtceu:sized",
					"fabric:type": "gtceu:sized",
					"count": 1,
					"ingredient": {
						"item": interNanoProc
					}
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
						"item": "gtceu:advanced_smd_resistor"
					}
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
						"item": "gtceu:advanced_smd_capacitor"
					}
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
						"item": "gtceu:advanced_smd_transistor"
					}
				},
				"chance": 1.0,
				"tierChanceBoost": 0.0
			},
			{
				"content": {
					"type": "gtceu:sized",
					"fabric:type": "gtceu:sized",
					"count": 6,
					"tag": "forge:wires/fine/electrum"
				},
				"chance": 1.0,
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
					"count": 2,
					"ingredient": {
						"item": "gtceu:nano_processor"
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
				"content": 600,
				"chance": 1.0,
				"tierChanceBoost": 0.0
			}
		]
	},
	"tickOutputs": {},
	"recipeConditions": [
		{
			"type": "cleanroom",
			"data": {
				"cleanroom": "cleanroom"
			}
		}
	]
}
	)
event.custom(
	{
	"type": "gtceu:circuit_assembler",
	"duration": 100,
	"inputs": {
		"item": [
			{
				"content": {
					"type": "gtceu:sized",
					"fabric:type": "gtceu:sized",
					"count": 1,
					"ingredient": {
						"item": interNanoProc
					}
				},
				"chance": 1.0,
				"tierChanceBoost": 0.0
			},
			{
				"content": {
					"type": "gtceu:sized",
					"fabric:type": "gtceu:sized",
					"count": 2,
					"ingredient": {
						"item": "gtceu:smd_resistor"
					}
				},
				"chance": 1.0,
				"tierChanceBoost": 0.0
			},
			{
				"content": {
					"type": "gtceu:sized",
					"fabric:type": "gtceu:sized",
					"count": 2,
					"ingredient": {
						"item": "gtceu:smd_capacitor"
					}
				},
				"chance": 1.0,
				"tierChanceBoost": 0.0
			},
			{
				"content": {
					"type": "gtceu:sized",
					"fabric:type": "gtceu:sized",
					"count": 2,
					"ingredient": {
						"item": "gtceu:smd_transistor"
					}
				},
				"chance": 1.0,
				"tierChanceBoost": 0.0
			},
			{
				"content": {
					"type": "gtceu:sized",
					"fabric:type": "gtceu:sized",
					"count": 2,
					"tag": "forge:wires/fine/electrum"
				},
				"chance": 1.0,
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
					"count": 2,
					"ingredient": {
						"item": "gtceu:nano_processor"
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
				"content": 600,
				"chance": 1.0,
				"tierChanceBoost": 0.0
			}
		]
	},
	"tickOutputs": {},
	"recipeConditions": [
		{
			"type": "cleanroom",
			"data": {
				"cleanroom": "cleanroom"
			}
		}
	]
}
	)
});