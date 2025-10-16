addVein(
    'aether_minerals_vein',
    'aether',
    10,
    40,
    20,
    80,
    'zanite',
    'surface',
    (pattern) => {
        pattern
            .layer((l) => l.weight(2).mat('ambrosium').size(1, 3))
            .layer((l) => l.weight(2).mat('zanite').size(1, 3))
            .layer((l) => l.weight(2).mat('skyjade').size(1, 3))
            .layer((l) => l.weight(1).mat('gravitite').size(1, 2))
    }
)

addVein(
    'nickel_vein_aether',
    'aether',
    20,
    40,
    20,
    80,
    'nickel',
    'surface',
    (pattern) => {
        pattern
            .layer((l) => l.weight(3).mat(GTMaterials.Garnierite).size(2, 3))
            .layer((l) => l.weight(2).mat(GTMaterials.Nickel).size(1, 1))
            .layer((l) => l.weight(2).mat(GTMaterials.Cobaltite).size(1, 1))
            .layer((l) => l.weight(1).mat(GTMaterials.Pentlandite).size(1, 1))
    }
)

addVein(
    'lubricant_vein_aether',
    'aether',
    20,
    40,
    20,
    90,
    'talc',
    'surface',
    (pattern) => {
        pattern
            .layer((l) => l.weight(3).mat(GTMaterials.Soapstone).size(2, 3))
            .layer((l) => l.weight(2).mat(GTMaterials.Talc).size(1, 1))
            .layer((l) =>
                l.weight(2).mat(GTMaterials.GlauconiteSand).size(1, 1)
            )
            .layer((l) => l.weight(1).mat(GTMaterials.Pentlandite).size(1, 1))
    }
)

addVein(
    'iron_vein_aether',
    'aether',
    20,
    60,
    20,
    90,
    'goethite',
    'surface',
    (pattern) => {
        pattern
            .layer((l) => l.weight(5).mat(GTMaterials.Goethite).size(1, 2))
            .layer((l) =>
                l.weight(2).mat(GTMaterials.YellowLimonite).size(1, 1)
            )
            .layer((l) => l.weight(2).mat(GTMaterials.Hematite).size(1, 1))
            .layer((l) => l.weight(1).mat(GTMaterials.Malachite).size(1, 1))
    }
)

addVein(
    'copper_vein_aether',
    'aether',
    20,
    60,
    20,
    90,
    'chalcopyrite',
    'surface',
    (pattern) => {
        pattern
            .layer((l) => l.weight(5).mat(GTMaterials.Chalcopyrite).size(2, 2))
            .layer((l) => l.weight(2).mat(GTMaterials.Zeolite).size(1, 2))
            .layer((l) => l.weight(2).mat(GTMaterials.Cassiterite).size(1, 2))
            .layer((l) => l.weight(1).mat(GTMaterials.Realgar).size(1, 2))
    }
)

addVein(
    'tin_vein_aether',
    'aether',
    20,
    60,
    20,
    90,
    'cassiterite',
    'surface',
    (pattern) => {
        pattern
            .layer((l) => l.weight(4).mat(GTMaterials.Tin).size(1, 2))
            .layer((l) => l.weight(2).mat(GTMaterials.Cassiterite).size(1, 1))
            .layer((l) =>
                l.weight(2).mat(GTMaterials.CassiteriteSand).size(1, 1)
            )
    }
)
