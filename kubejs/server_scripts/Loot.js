//Changes the output of grass to have fiber as new Loot
LootJS.modifiers((event) => {
    event
        .addBlockLootModifier('minecraft:grass')
		.matchMainHand("#forge:tools/knives")
		.playerAction(p => {
			p.damageHeldItem()
		})
        .randomChance(0.33)
		.addLoot('farmersdelight:straw');

	event
		.addBlockLootModifier('minecraft:campfire')
		.removeLoot('minecraft:charcoal')
		.addLoot("2x minecraft:stick");
});