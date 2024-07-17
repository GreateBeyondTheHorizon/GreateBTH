/// priority: 0
console.info('Items Modified')

ItemEvents.modification(event => {
	event.modify(
		[
			/minecraft:raw_(.*)_block/,
			/gtceu:raw_(.*)_block/,
			/ad_astra:raw_(.*)_block/,
			/gtceu:(.*)_crushed_ore/,
			/gtceu:(.*)_refined_ore/,
			/gtceu:(.*)_purified_ore/,
			'farmersdelight:apple_cider',
			'farmersdelight:bacon_and_eggs',
			'farmersdelight:baked_cod_stew',
			'farmersdelight:baked_cod_stew',
			'farmersdelight:beef_stew',
			'farmersdelight:bone_broth',
			'farmersdelight:chicken_soup',
			'farmersdelight:cooked_rice',
			'farmersdelight:dog_food',
			'farmersdelight:fish_stew',
			'farmersdelight:fried_rice',
			'farmersdelight:fruit_salad',
			'farmersdelight:glow_berry_custard',
			'farmersdelight:grilled_salmon',
			'farmersdelight:honey_glazed_ham',
			'farmersdelight:horse_feed',
			'farmersdelight:hot_cocoa',
			'farmersdelight:melon_juice',
			'farmersdelight:mixed_salad',
			'farmersdelight:mushroom_rice',
			'farmersdelight:nether_salad',
			'farmersdelight:noodle_soup',
			'farmersdelight:pasta_with_meatballs',
			'farmersdelight:pasta_with_mutton_chop',
			'farmersdelight:pumpkin_soup',
			'farmersdelight:pumpkin_soup',
			'farmersdelight:ratatouille',
			'farmersdelight:roast_chicken',
			'farmersdelight:roasted_mutton_chops',
			'farmersdelight:shepherds_pie',
			'farmersdelight:squid_ink_pasta',
			'farmersdelight:steak_and_potatoes',
			'farmersdelight:stuffed_pumpkin',
			'farmersdelight:vegetable_noodles',
			'farmersdelight:vegetable_soup',
			'minecraft:beetroot_soup',
			'minecraft:mushroom_stew',
			'minecraft:rabbit_stew'

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

	event.modify('gtceu:raw_coal', item => {
		item.burnTime = 1600
	})

	event.modify('gtceu:raw_coal_block', item => {
		item.burnTime = 14400
	})

	event.modify('aether:ambrosium_shard', item => {
		item.burnTime = 0
	})

	event.modify('aether:ambrosium_block', item => {
		item.burnTime = 0
	})
})
