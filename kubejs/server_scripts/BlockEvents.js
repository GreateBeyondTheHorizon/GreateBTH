BlockEvents.rightClicked('minecraft:campfire', (event) => {
    if (event.item.id === 'kubejs:fire_starter') {
        if (event.block.properties.get('lit') !== true) {
            var mainHandItem = event.player.getMainHandItem().getDamageValue()
            if (mainHandItem < event.item.maxDamage) {
                mainHandItem = mainHandItem + 1
                event.player.getMainHandItem().setDamageValue(mainHandItem)
            } else {
                event.entity.mainHandItem = 'minecraft:air'
            }
            event.block.set('minecraft:campfire', { lit: 'true' })
        }
    }
})

BlockEvents.rightClicked('minecraft:crafting_table', (event) => {
    if (!event.getPlayer().stages.has('early_game_completed')) {
        event
            .getPlayer()
            .displayClientMessage(
                Component.literal(
                    'Complete the Introduction quest chapter to be able to use this!'
                ).red(),
                true
            )
        event.cancel()
    }
})

BlockEvents.rightClicked((event) => {
    if (
        event.block.tags.contains(new ResourceLocation('beds')) &&
        !event.getPlayer().stages.has('crafted_bed')
    ) {
        event
            .getPlayer()
            .displayClientMessage(
                Component.literal(
                    'Complete the "On the Floor No-More" quest to be able to use this!'
                ).red(),
                true
            )
        event.cancel()
    }
})

// Allows converting dirt to mud with water buckets. Disabling water placement in this scenario is done in client_scripts/BlockEvents.js
BlockEvents.rightClicked('minecraft:dirt', (event) => {
    let holdingWaterBucket = event.item.id === 'minecraft:water_bucket'
    let holdingCeramicWaterBucket =
        event.item.id === 'ceramicbucket:ceramic_bucket' &&
        event.item.nbt?.Fluid.FluidName === 'minecraft:water'
    if (
        !event.player.shiftKeyDown &&
        (holdingWaterBucket || holdingCeramicWaterBucket)
    ) {
        event.block.set('minecraft:mud')
        event.server.runCommandSilent(
            `execute in ${event.level.dimension} run execute as ${event.player.getUuid()} run playsound minecraft:entity.generic.splash ambient @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`
        )
        event.player.swing()
        if (!event.player.creative) {
            if (holdingWaterBucket) {
                event.player.setMainHandItem('minecraft:bucket')
            } else if (holdingCeramicWaterBucket) {
                event.player.setMainHandItem('ceramicbucket:ceramic_bucket')
            }
        }
    }
})
