ServerEvents.recipes((event) => {
    global.Minecraft.Dyes.forEach((dye) => {
        event.remove({ id: `sleeping_bags:${dye}_sleeping_bag` })
        event.shaped(`sleeping_bags:${dye}_sleeping_bag`, [' C', 'WW'], {
            C: 'minecraft:white_carpet',
            W: `minecraft:${dye}_wool`,
        })
    })
})
