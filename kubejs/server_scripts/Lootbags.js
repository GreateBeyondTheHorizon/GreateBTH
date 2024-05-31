ServerEvents.recipes(event => {
	event.custom({
		type: 'lootbags:loot',
		name: 'Lootbag (Dirt Age)',
		rarity: 'COMMON',
		output: {
			table: 'gbth:chests/dirt_age'
		}
	})

	event.custom({
		type: 'lootbags:loot',
		name: 'Lootbag (Common Food)',
		rarity: 'COMMON',
		output: {
			table: 'gbth:chests/common_food'
		}
	})

	event.custom({
		type: 'lootbags:loot',
		name: 'Lootbag (ULV Age)',
		rarity: 'COMMON',
		output: {
			table: 'gbth:chests/ulv_age'
		}
	})

	event.custom({
		type: 'lootbags:loot',
		name: 'Lootbag (Tasty Foods)',
		rarity: 'UNCOMMON',
		output: {
			table: 'gbth:chests/tasty_foods'
		}
	})
})