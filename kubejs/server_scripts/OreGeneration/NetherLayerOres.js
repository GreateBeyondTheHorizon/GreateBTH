addVein('banded_iron_vein_nether', GTWorldGenLayers.NETHERRACK, 30, 30, 20, 40, GTMaterials.Goethite, 'above', pattern => {
    pattern
        .layer(l => l.weight(3).mat(GTMaterials.Goethite).size(1, 4))
        .layer(l => l.weight(2).mat(GTMaterials.YellowLimonite).size(1, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Hematite).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Gold).size(1, 1))
})

addVein('beryllium_vein_nether', GTWorldGenLayers.NETHERRACK, 25, 30, 5, 30, GTMaterials.Beryllium, 'above', pattern => {
    pattern
        .layer(l => l.weight(3).mat(GTMaterials.Beryllium).size(1, 4))
        .layer(l => l.weight(4).mat(GTMaterials.Emerald).size(1, 2))
})

addVein('certus_quartz_vein_nether', GTWorldGenLayers.NETHERRACK, 20, 40, 80, 120, GTMaterials.CertusQuartz, 'below', pattern => {
    pattern
        .layer(l => l.weight(3).mat(GTMaterials.Quartzite).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.CertusQuartz).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Barite).size(1, 1))
})

addVein('manganese_vein_nether', GTWorldGenLayers.NETHERRACK, 25, 20, 20, 30, GTMaterials.Grossular, 'above', pattern => {
    pattern
        .layer(l => l.weight(3).mat(GTMaterials.Grossular).size(1, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Pyrolusite).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Tantalite).size(1, 1))
})

addVein('molybdenum_vein_nether', GTWorldGenLayers.NETHERRACK, 20, 5, 20, 50, GTMaterials.Molybdenum, 'above', pattern => {
    pattern
        .layer(l => l.weight(3).mat(GTMaterials.Wulfenite).size(1, 3))
        .layer(l => l.weight(2).mat(GTMaterials.Molybdenite).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Molybdenum).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Powellite).size(1, 1))
})

addVein('nether_quartz_vein_nether', GTWorldGenLayers.NETHERRACK, 25, 80, 40, 80, GTMaterials.NetherQuartz, 'above', pattern => {
    pattern
        .layer(l => l.weight(4).mat(GTMaterials.NetherQuartz).size(2, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Quartzite).size(1, 1))
})

addVein('saltpeter_vein_nether', GTWorldGenLayers.NETHERRACK, 25, 40, 5, 45, GTMaterials.Saltpeter, 'above', pattern => {
    pattern
        .layer(l => l.weight(3).mat(GTMaterials.Saltpeter).size(2, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Diatomite).size(1, 1))
        .layer(l => l.weight(2).mat(GTMaterials.Electrotine).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Alunite).size(1, 1))
})

addVein('sulfur_vein_nether', GTWorldGenLayers.NETHERRACK, 25, 100, 10, 30, GTMaterials.Sulfur, 'above', pattern => {
    pattern
        .layer(l => l.weight(3).mat(GTMaterials.Sulfur).size(2, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Pyrite).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Sphalerite).size(1, 1))
})

addVein('tetrahedrite_vein_nether', GTWorldGenLayers.NETHERRACK, 30, 70, 80, 120, GTMaterials.Tetrahedrite, 'below', pattern => {
    pattern
        .layer(l => l.weight(4).mat(GTMaterials.Tetrahedrite).size(1, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Copper).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Stibnite).size(1, 2))
})

addVein('topaz_vein_nether', GTWorldGenLayers.NETHERRACK, 20, 70, 80, 120, GTMaterials.Topaz, 'below', pattern => {
    pattern
        .layer(l => l.weight(3).mat(GTMaterials.BlueTopaz).size(2, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Topaz).size(1, 1))
        .layer(l => l.weight(2).mat(GTMaterials.Chalcocite).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Bornite).size(1, 1))
})
