// Stops the placement of water when using a water bucket to turn a dirt block into mud.
BlockEvents.rightClicked('minecraft:dirt', event => {
	if (!event.player.shiftKeyDown && (event.item.id === 'minecraft:water_bucket'
		|| (event.item.id === 'ceramicbucket:ceramic_bucket' && event.item.nbt?.Fluid.FluidName === 'minecraft:water'))) {
		event.cancel()
	}
})
