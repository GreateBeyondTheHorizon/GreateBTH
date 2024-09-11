//priority: 100
GTCEuServerEvents.oreVeins(event => { 
    event.removeAll()
})

function addVein(
    name,
    worldGenLayer,
    size,
    weight,
    minHeightRange,
    maxHeightRange,
    indicatorMaterial,
    indicatorPlacement,
    layers
) {
    GTCEuServerEvents.oreVeins(event => {
        event.add('kubejs:' + name, vein => {
            vein.clusterSize(size)
            vein.weight(weight)
            vein.density(1.0)
            vein.layer(worldGenLayer)
            vein.heightRangeUniform(minHeightRange, maxHeightRange)
            vein.layeredVeinGenerator(generator =>
                generator.buildLayerPattern(pattern => {
                    layers(pattern)
                })
            )
            vein.surfaceIndicatorGenerator(i =>
                i
                    .surfaceRock(indicatorMaterial)
                    .placement(indicatorPlacement)
            )
        })
    })
}