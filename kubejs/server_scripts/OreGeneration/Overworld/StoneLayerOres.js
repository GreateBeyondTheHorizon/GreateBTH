addVein(
    'apatite_vein',
    GTWorldGenLayers.STONE,
    25,
    40,
    10,
    80,
    GTMaterials.Apatite,
    'above',
    (pattern) => {
        pattern
            .layer((l) => l.weight(3).mat(GTMaterials.Apatite).size(2, 2))
            .layer((l) =>
                l.weight(2).mat(GTMaterials.TricalciumPhosphate).size(1, 1)
            )
            .layer((l) => l.weight(1).mat(GTMaterials.Pyrochlore).size(1, 1))
    }
)

addVein(
    'cassiterite_vein',
    GTWorldGenLayers.STONE,
    25,
    60,
    10,
    80,
    GTMaterials.Cassiterite,
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

addVein(
    'copper_tin_vein',
    GTWorldGenLayers.STONE,
    30,
    50,
    10,
    80,
    GTMaterials.Chalcopyrite,
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
    'galena_vein',
    GTWorldGenLayers.STONE,
    25,
    40,
    10,
    45,
    GTMaterials.Galena,
    'surface',
    (pattern) => {
        pattern
            .layer((l) => l.weight(3).mat(GTMaterials.Galena).size(2, 2))
            .layer((l) => l.weight(2).mat(GTMaterials.Silver).size(1, 1))
            .layer((l) => l.weight(1).mat(GTMaterials.Lead).size(1, 1))
    }
)

addVein(
    'garnet_tin_vein',
    GTWorldGenLayers.STONE,
    25,
    60,
    30,
    60,
    GTMaterials.GarnetSand,
    'surface',
    (pattern) => {
        pattern
            .layer((l) =>
                l.weight(3).mat(GTMaterials.CassiteriteSand).size(2, 3)
            )
            .layer((l) => l.weight(2).mat(GTMaterials.GarnetSand).size(1, 1))
            .layer((l) => l.weight(2).mat(GTMaterials.Asbestos).size(1, 1))
            .layer((l) => l.weight(1).mat(GTMaterials.Diatomite).size(1, 1))
    }
)

addVein(
    'garnet_vein',
    GTWorldGenLayers.STONE,
    25,
    40,
    10,
    50,
    GTMaterials.GarnetRed,
    'above',
    (pattern) => {
        pattern
            .layer((l) => l.weight(3).mat(GTMaterials.GarnetRed).size(2, 2))
            .layer((l) => l.weight(2).mat(GTMaterials.GarnetYellow).size(1, 1))
            .layer((l) => l.weight(2).mat(GTMaterials.Amethyst).size(1, 1))
            .layer((l) => l.weight(1).mat(GTMaterials.Opal).size(1, 1))
    }
)

addVein(
    'iron_vein',
    GTWorldGenLayers.STONE,
    30,
    80,
    10,
    60,
    GTMaterials.Goethite,
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
    'magnetite_vein_ow',
    GTWorldGenLayers.STONE,
    25,
    60,
    10,
    60,
    GTMaterials.Magnetite,
    'surface',
    (pattern) => {
        pattern
            .layer((l) => l.weight(3).mat(GTMaterials.Magnetite).size(2, 3))
            .layer((l) =>
                l.weight(2).mat(GTMaterials.VanadiumMagnetite).size(1, 1)
            )
            .layer((l) => l.weight(1).mat(GTMaterials.Gold).size(1, 1))
    }
)

addVein(
    'mineral_sand_vein',
    GTWorldGenLayers.STONE,
    25,
    60,
    15,
    60,
    GTMaterials.BasalticMineralSand,
    'surface',
    (pattern) => {
        pattern
            .layer((l) =>
                l.weight(3).mat(GTMaterials.BasalticMineralSand).size(2, 3)
            )
            .layer((l) =>
                l.weight(2).mat(GTMaterials.GraniticMineralSand).size(1, 1)
            )
            .layer((l) => l.weight(2).mat(GTMaterials.FullersEarth).size(1, 1))
            .layer((l) => l.weight(1).mat(GTMaterials.Gypsum).size(1, 1))
    }
)

addVein(
    'salts_vein',
    GTWorldGenLayers.STONE,
    25,
    50,
    30,
    70,
    GTMaterials.Salt,
    'surface',
    (pattern) => {
        pattern
            .layer((l) => l.weight(3).mat(GTMaterials.RockSalt).size(2, 3))
            .layer((l) => l.weight(2).mat(GTMaterials.Salt).size(1, 1))
            .layer((l) => l.weight(2).mat(GTMaterials.Lepidolite).size(1, 1))
            .layer((l) => l.weight(1).mat(GTMaterials.Spodumene).size(1, 1))
    }
)

addVein(
    'oilsands_vein',
    GTWorldGenLayers.STONE,
    20,
    40,
    30,
    80,
    GTMaterials.Oilsands,
    'surface',
    (pattern) => {
        pattern
            .layer((l) => l.weight(3).mat(GTMaterials.Oilsands).size(2, 3))
            .layer((l) => l.weight(4).mat(GTMaterials.Oilsands).size(1, 1))
    }
)

addVein(
    'coal_vein',
    GTWorldGenLayers.STONE,
    25,
    50,
    40,
    80,
    GTMaterials.Coal,
    'surface',
    (pattern) => {
        pattern
            .layer((l) => l.weight(3).mat(GTMaterials.Coal).size(2, 2))
            .layer((l) => l.weight(1).mat(GTMaterials.Graphite).size(1, 1))
    }
)
