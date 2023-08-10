// priority: 0
ServerEvents.recipes(event => {
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
			},
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
})