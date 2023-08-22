ServerEvents.recipes(event => {
	
event.custom({
	"type": "gtceu:cutter",
	"duration": 900,
	"inputs": {
		"fluid": [
			{
				"content": {
					"fluid": "gtceu:lubricant",
					"amount": 250
				},
				"chance": 1.0,
				"tierChanceBoost": 0.0
			}
		],
		"item": [
			{
				"content": {
					"type": "gtceu:sized",
					"fabric:type": "gtceu:sized",
					"count": 1,
					"ingredient": {
						"item": "kubejs:16k_me_storage_wafer"
					}
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
					"count": 16,
					"ingredient": {
						"item": "kubejs:16k_me_storage_base"
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
				"content": 30720,
				"chance": 1.0,
				"tierChanceBoost": 0.0
			}
		]
	},
	"tickOutputs": {}
})
event.custom({
	"type": "gtceu:cutter",
	"duration": 1350,
	"inputs": {
		"fluid": [
			{
				"content": {
					"fluid": "gtceu:distilled_water",
					"amount": 750
				},
				"chance": 1.0,
				"tierChanceBoost": 0.0
			}
		],
		"item": [
			{
				"content": {
					"type": "gtceu:sized",
					"fabric:type": "gtceu:sized",
					"count": 1,
					"ingredient": {
						"item": "kubejs:16k_me_storage_wafer"
					}
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
					"count": 16,
					"ingredient": {
						"item": "kubejs:16k_me_storage_base"
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
				"content": 30720,
				"chance": 1.0,
				"tierChanceBoost": 0.0
			}
		]
	},
	"tickOutputs": {}
})
event.custom({
	"type": "gtceu:cutter",
	"duration": 1800,
	"inputs": {
		"fluid": [
			{
				"content": {
					"fluid": "minecraft:water",
					"amount": 1000
				},
				"chance": 1.0,
				"tierChanceBoost": 0.0
			}
		],
		"item": [
			{
				"content": {
					"type": "gtceu:sized",
					"fabric:type": "gtceu:sized",
					"count": 1,
					"ingredient": {
						"item": "kubejs:16k_me_storage_wafer"
					}
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
					"count": 16,
					"ingredient": {
						"item": "kubejs:16k_me_storage_base"
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
				"content": 30720,
				"chance": 1.0,
				"tierChanceBoost": 0.0
			}
		]
	},
	"tickOutputs": {}
})
})