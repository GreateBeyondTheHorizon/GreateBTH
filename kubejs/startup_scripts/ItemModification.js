// priority: 0
console.info('Items Modified')

ItemEvents.modification(event => {
	event.modify(
		[
			/minecraft:raw_(.*)/,
			/gtceu:raw_(.*)/,
			/ad_astra:raw_(.*)/,
			/gtceu:(.*)_ore/,
		],
		item => {
			item.maxStackSize = 32
		}
	)
	event.modify(
		[
			/minecraft:raw_(.*)_block/,
			/gtceu:raw_(.*)_(.*)/,
			/ad_astra:raw_(.*)_block/,
			/gtceu:(.*)_crushed_ore/,
			/gtceu:(.*)_refined_ore/,
			/gtceu:(.*)_purified_ore/,
		],
		item => {
			item.maxStackSize = 64
		}
	)
	event.modify(/gtceu:raw_(.*)_bucket/, item => {
		item.maxStackSize = 1
	})

	event.modify('gtceu:brick_wooden_form', item => {
		item.craftingRemainder = Item.of('gtceu:brick_wooden_form').item
	})


	event.modify('kubejs:drinkable_liquid_concrete', item => {
		item.foodProperties = food => {
			food.alwaysEdible(true)
			food.hunger(12)
			food.saturation(24)
		}
	})
})
