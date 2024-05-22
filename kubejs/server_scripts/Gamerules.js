ServerEvents.loaded(e => {
    e.server.runCommand("gamerule doInsomnia false")
    e.server.runCommand("gamerule doPatrolSpawning false")
})