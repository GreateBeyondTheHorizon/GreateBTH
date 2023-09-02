ServerEvents.recipes(event => {
    let interNanoProc = 'kubejs:inter_nano_processor'
    // EV expensive recipe
    event.custom(
        {
	"type": "gtceu:circuit_assembler",
	"duration": 200,
	"inputs": {
		"fluid": [],
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

    // EV cheap recipe
    event.custom(
        {
	"type": "gtceu:circuit_assembler",
	"duration": 100,
	"inputs": {
		"fluid": [],
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
})