addVein('copper_vein', GTWorldGenLayers.DEEPSLATE, 25, 80, -40, 10, GTMaterials.Copper, 'surface', pattern => {
    pattern
        .layer(l => l.weight(5).mat(GTMaterials.Chalcopyrite).size(2, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Iron).size(1, 1))
        .layer(l => l.weight(2).mat(GTMaterials.Pyrite).size(1, 1))
        .layer(l => l.weight(2).mat(GTMaterials.Copper).size(1, 1))
})

addVein('diamond_vein', GTWorldGenLayers.DEEPSLATE, 25, 40, -65, 30, GTMaterials.Diamond, 'above', pattern => {
    pattern
        .layer(l => l.weight(3).mat(GTMaterials.Graphite).size(2, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Diamond).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Coal).size(1, 1))
})

addVein('lapis_vein', GTWorldGenLayers.DEEPSLATE, 25, 40, -60, 10, GTMaterials.Lapis, 'above', pattern => {
    pattern
        .layer(l => l.weight(3).mat(GTMaterials.Lazurite).size(2, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Sodalite).size(1, 1))
        .layer(l => l.weight(2).mat(GTMaterials.Lapis).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Calcite).size(1, 1))
})

addVein('manganese_vein', GTWorldGenLayers.DEEPSLATE, 30, 20, -30, 0, GTMaterials.Grossular, 'surface', pattern => {
    pattern
        .layer(l => l.weight(3).mat(GTMaterials.Grossular).size(2, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Spessartine).size(1, 1))
        .layer(l => l.weight(2).mat(GTMaterials.Pyrolusite).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Tantalite).size(1, 1))
})

addVein('mica_vein', GTWorldGenLayers.DEEPSLATE, 25, 20, -40, -10, GTMaterials.Mica, 'surface', pattern => {
    pattern
        .layer(l => l.weight(3).mat(GTMaterials.Kyanite).size(2, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Mica).size(1, 1))
        .layer(l => l.weight(2).mat(GTMaterials.Bauxite).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Pollucite).size(1, 1))
})

addVein('olivine_vein', GTWorldGenLayers.DEEPSLATE, 25, 20, -20, 10, GTMaterials.Olivine, 'surface', pattern => {
    pattern
        .layer(l => l.weight(3).mat(GTMaterials.Bentonite).size(2, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Magnetite).size(1, 1))
        .layer(l => l.weight(2).mat(GTMaterials.Olivine).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.GlauconiteSand).size(1, 1))
})

addVein('redstone_vein', GTWorldGenLayers.DEEPSLATE, 25, 60, -65, -10, GTMaterials.Redstone, 'surface', pattern => {
    pattern
        .layer(l => l.weight(3).mat(GTMaterials.Redstone).size(2, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Ruby).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Cinnabar).size(1, 1))
})

addVein('sapphire_vein', GTWorldGenLayers.DEEPSLATE, 20, 60, -40, 0, GTMaterials.Sapphire, 'above', pattern => {
    pattern
        .layer(l => l.weight(3).mat(GTMaterials.Almandine).size(2, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Pyrope).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Sapphire).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.GreenSapphire).size(1, 1))
})