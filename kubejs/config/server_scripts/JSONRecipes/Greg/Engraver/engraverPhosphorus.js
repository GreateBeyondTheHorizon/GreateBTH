// priority: 0
ServerEvents.recipes(event => {
	event.custom({
	"type": "gtceu:laser_engraver",
	"duration": 500,
	"inputs": {
		"item": [
			{
				"content": {
					"type": "gtceu:sized",
					"fabric:type": "gtceu:sized",
					"count": 1,
					"ingredient": {
						"item": "gtceu:phosphorus_wafer"
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
					"tag": "forge:lenses/certus"	
				},
				"chance": 0.0,
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
			},
		]
	},
	"outputs": {
		"item": [
			{
				"content": {
					"type": "gtceu:sized",
					"fabric:type": "gtceu:sized",
					"count": 4,
					"ingredient": {
						"item": "kubejs:1k_me_storage_wafer"
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
				"content": 480,
				"chance": 1.0,
				"tierChanceBoost": 0.0
			}
		]
	},
	"tickOutputs": {}
	})
	event.custom({
	"type": "gtceu:laser_engraver",
	"duration": 500,
	"inputs": {
		"item": [
			{
				"content": {
					"type": "gtceu:sized",
					"fabric:type": "gtceu:sized",
					"count": 1,
					"ingredient": {
						"item": "gtceu:phosphorus_wafer"
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
					"tag": "forge:lenses/certus"
				},
				"chance": 0.0,
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
						"nbt": "{Configuration:2}"
					},	
						
				},
			
			},	
		],
	},
	"outputs": {
		"item": [
			{
				"content": {
					"type": "gtceu:sized",
					"fabric:type": "gtceu:sized",
					"count": 4,
					"ingredient": {
						"item": "kubejs:4k_me_storage_wafer"
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
				"content": 480,
				"chance": 1.0,
				"tierChanceBoost": 0.0
			}
		]
	},
	"tickOutputs": {}
	})
	event.custom({
	"type": "gtceu:laser_engraver",
	"duration": 500,
	"inputs": {
		"item": [
			{
				"content": {
					"type": "gtceu:sized",
					"fabric:type": "gtceu:sized",
					"count": 1,
					"ingredient": {
						"item": "gtceu:phosphorus_wafer"
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
					"tag": "forge:lenses/certus"
				},
				"chance": 0.0,
				"tierChanceBoost": 0.0
			},
			{"content": {
					"type": "gtceu:sized",
					"fabric:type": "gtceu:sized",
					"count": 1,
					"ingredient": {
						"type": "forge:nbt",
						"item": "gtceu:programmed_circuit",
						"count": 1,
						"nbt": "{Configuration:3}"
					},	
						
				},
			},
		],
	},
	"outputs": {
		"item": [
			{
				"content": {
					"type": "gtceu:sized",
					"fabric:type": "gtceu:sized",
					"count": 4,
					"ingredient": {
						"item": "kubejs:16k_me_storage_wafer"
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
				"content": 480,
				"chance": 1.0,
				"tierChanceBoost": 0.0
			}
		]
	},
	})
	event.custom({
	"type": "gtceu:laser_engraver",
	"duration": 900,
	"inputs": {
		"item": [
			{
				"content": {
					"type": "gtceu:sized",
					"fabric:type": "gtceu:sized",
					"count": 1,
					"ingredient": {
						"item": "gtceu:naquadah_wafer"
					},
				},
				"chance": 1.0,
				"tierChanceBoost": 0.0
			},
			{
				"content": {
					"type": "gtceu:sized",
					"fabric:type": "gtceu:sized",
					"count": 1,
					"tag": "forge:lenses/certus"	
				},
				"chance": 0.0,
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
					},	
						
				},
				"chance": 0.0,
				"tierChanceBoost": 0.0
			},
		],
	},
	"outputs": {
		"item": [
			{
				"content": {
					"type": "gtceu:sized",
					"fabric:type": "gtceu:sized",
					"count": 4,
					"ingredient": {
						"item": "kubejs:64k_me_storage_wafer"
					},
				},
				"chance": 1.0,
				"tierChanceBoost": 0.0
			},
		],
	},
	"tickInputs": {
		"eu": [
			{
				"content": 1920,
				"chance": 1.0,
				"tierChanceBoost": 0.0
			}
		]
	},
	"tickOutputs": {}
	})
})