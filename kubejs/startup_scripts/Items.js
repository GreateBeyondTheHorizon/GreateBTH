// priority: 0

console.info('Items Modified')

ItemEvents.modification(event => {
	event.modify([/minecraft:raw_(.*)/, /gtceu:raw_(.*)/, /gtceu:(.*)_ore/], item =>{
		item.maxStackSize = 32
	})
	event.modify([/minecraft:raw_(.*)_block/, /gtceu:raw_(.*)_(.*)/, /gtceu:(.*)_crushed_ore/, /gtceu:(.*)_refined_ore/, /gtceu:(.*)_purified_ore/], item =>{
		item.maxStackSize = 64
	})
	event.modify(/gtceu:raw_(.*)_bucket/, item =>{
		item.maxStackSize = 1
	})
})