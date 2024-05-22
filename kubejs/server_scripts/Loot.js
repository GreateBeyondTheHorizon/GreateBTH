LootJS.modifiers(event => {
    event.addBlockLootModifier('minecraft:grass').matchMainHand("#forge:tools/knives").playerAction(p => {
			p.damageHeldItem()
		}).randomChance(0.33).addLoot('farmersdelight:straw')

	event.addBlockLootModifier('minecraft:campfire').removeLoot('minecraft:charcoal').addLoot("2x minecraft:stick")
	event.addLootTableModifier(/(.*)/).removeLoot(/farmersdelight:(.*)_knife/).removeLoot('sophisticatedbackpacks:iron_backpack').removeLoot('sophisticatedbackpacks:gold_backpack').removeLoot('sophisticatedbackpacks:copper_backpack')
	
	event.addLootTableModifier('minecraft:chests/woodland_mansion').addWeightedLoot(2, false, LootEntry.of('sophisticatedbackpacks:backpack'))
	event.addLootTableModifier('minecraft:chests/shipwreck_treasure').addWeightedLoot(2, false, LootEntry.of('sophisticatedbackpacks:backpack'))
	event.addLootTableModifier('minecraft:chests/bastion_treasure').addWeightedLoot(2, false, LootEntry.of('sophisticatedbackpacks:backpack'))
	event.addLootTableModifier('minecraft:chests/desert_pyramid').addWeightedLoot(2, false, LootEntry.of('sophisticatedbackpacks:backpack'))
	event.addLootTableModifier('minecraft:chests/bastion_treasure').addWeightedLoot(2, false, LootEntry.of('sophisticatedbackpacks:backpack'))
	event.addLootTableModifier('minecraft:chests/end_city_treasure').addWeightedLoot(5, false, LootEntry.of('ophisticatedbackpacks:gold_backpack'))
})