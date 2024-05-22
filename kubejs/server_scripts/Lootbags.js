ServerEvents.recipes(event => {
	event.custom({
		type: 'lootbags:loot',
		name: 'Lootbag (Dirt Age)',
		rarity: 'COMMON',
		output: {
			table: 'gbth:dirt_age'
		}
	})

	event.custom({
		type: 'lootbags:loot',
		name: 'Lootbag (Common Food)',
		rarity: 'COMMON',
		output: {
			table: 'gbth:common_food'
		}
	})

	event.custom({
		type: 'lootbags:loot',
		name: 'Lootbag (ULV Age)',
		rarity: 'COMMON',
		output: {
			table: 'gbth:ulv_age'
		}
	})
})