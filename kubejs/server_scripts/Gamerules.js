ServerEvents.loaded(e => {
    e.server.runCommand("gamerule doInsomnia false")
    e.server.runCommand("gamerule doPatrolSpawning false")
    e.server.runCommand("gamerule playersSleepingPercentage 50")
})