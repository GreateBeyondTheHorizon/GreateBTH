addVein('magnetite_vein_end', GTWorldGenLayers.ENDSTONE, 25, 30, 20, 80, GTMaterials.Magnetite, 'above', pattern => {
    pattern
        .layer(l => l.weight(3).mat(GTMaterials.Magnetite).size(1, 4))
        .layer(l => l.weight(2).mat(GTMaterials.VanadiumMagnetite).size(1, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Chromite).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Gold).size(1, 1))
})

addVein('pitchblende_vein_end', GTWorldGenLayers.ENDSTONE, 25, 30, 30, 60, GTMaterials.Pitchblende, 'above', pattern => {
    pattern
        .layer(l => l.weight(3).mat(GTMaterials.Pitchblende).size(1, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Uraninite).size(1, 2))
})

addVein('scheelite_vein_end', GTWorldGenLayers.ENDSTONE, 25, 20, 20, 60, GTMaterials.Scheelite, 'above', pattern => {
    pattern
        .layer(l => l.weight(3).mat(GTMaterials.Scheelite).size(1, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Tungstate).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Lithium).size(1, 2))
})

addVein('sheldonite_vein_end', GTWorldGenLayers.ENDSTONE, 20, 10, 5, 50, GTMaterials.Platinum, 'above', pattern => {
    pattern
        .layer(l => l.weight(3).mat(GTMaterials.Bornite).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Cooperite).size(1, 1))
        .layer(l => l.weight(2).mat(GTMaterials.Platinum).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Palladium).size(1, 1))
})

addVein('magnetite_vein_end', GTWorldGenLayers.ENDSTONE, 25, 80, 10, 60, GTMaterials.Magnetite, 'surface', pattern => {
    pattern
        .layer(l => l.weight(3).mat(GTMaterials.Magnetite).size(2, 3))
        .layer(l => l.weight(2).mat(GTMaterials.VanadiumMagnetite).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Gold).size(1, 1))
})