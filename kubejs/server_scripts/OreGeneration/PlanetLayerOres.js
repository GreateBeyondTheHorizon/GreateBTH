addVein(
    'bauxite_vein_planets',
    'ad',
    35,
    40,
    10,
    80,
    GTMaterials.Bauxite,
    'surface',
    (pattern) => {
        pattern
            .layer((l) => l.weight(2).mat(GTMaterials.Bauxite).size(1, 4))
            .layer((l) => l.weight(1).mat(GTMaterials.Ilmenite).size(1, 2))
            .layer((l) => l.weight(1).mat(GTMaterials.Aluminium).size(1, 1))
    }
)

addVein(
    'pitchblende_vein_planets',
    'ad',
    35,
    30,
    30,
    60,
    GTMaterials.Pitchblende,
    'surface',
    (pattern) => {
        pattern
            .layer((l) => l.weight(3).mat(GTMaterials.Pitchblende).size(1, 2))
            .layer((l) => l.weight(2).mat(GTMaterials.Uraninite).size(1, 2))
    }
)

addVein(
    'scheelite_vein_planets',
    'ad',
    35,
    20,
    20,
    60,
    GTMaterials.Scheelite,
    'surface',
    (pattern) => {
        pattern
            .layer((l) => l.weight(3).mat(GTMaterials.Scheelite).size(1, 2))
            .layer((l) => l.weight(2).mat(GTMaterials.Tungstate).size(1, 2))
            .layer((l) => l.weight(1).mat(GTMaterials.Lithium).size(1, 2))
    }
)

addVein(
    'sheldonite_vein_planets',
    'ad',
    30,
    10,
    5,
    50,
    GTMaterials.Platinum,
    'surface',
    (pattern) => {
        pattern
            .layer((l) => l.weight(3).mat(GTMaterials.Bornite).size(2, 4))
            .layer((l) => l.weight(2).mat(GTMaterials.Cooperite).size(1, 1))
            .layer((l) => l.weight(2).mat(GTMaterials.Platinum).size(1, 1))
            .layer((l) => l.weight(1).mat(GTMaterials.Palladium).size(1, 1))
    }
)

addVein(
    'magnetite_vein_planets',
    'ad',
    35,
    30,
    20,
    80,
    GTMaterials.Magnetite,
    'surface',
    (pattern) => {
        pattern
            .layer((l) => l.weight(3).mat(GTMaterials.Magnetite).size(1, 4))
            .layer((l) =>
                l.weight(2).mat(GTMaterials.VanadiumMagnetite).size(1, 2)
            )
            .layer((l) => l.weight(2).mat(GTMaterials.Chromite).size(1, 1))
            .layer((l) => l.weight(1).mat(GTMaterials.Gold).size(1, 1))
    }
)

addVein(
    'mica_vein_planets',
    'ad',
    35,
    20,
    -40,
    -10,
    GTMaterials.Mica,
    'surface',
    (pattern) => {
        pattern
            .layer((l) => l.weight(3).mat(GTMaterials.Kyanite).size(2, 2))
            .layer((l) => l.weight(2).mat(GTMaterials.Mica).size(1, 1))
            .layer((l) => l.weight(2).mat(GTMaterials.Bauxite).size(1, 1))
            .layer((l) => l.weight(1).mat(GTMaterials.Pollucite).size(1, 1))
    }
)

addVein(
    'olivine_vein_planets',
    'ad',
    35,
    20,
    -20,
    10,
    GTMaterials.Olivine,
    'surface',
    (pattern) => {
        pattern
            .layer((l) => l.weight(3).mat(GTMaterials.Bentonite).size(2, 2))
            .layer((l) => l.weight(2).mat(GTMaterials.Magnetite).size(1, 1))
            .layer((l) => l.weight(2).mat(GTMaterials.Olivine).size(1, 1))
            .layer((l) =>
                l.weight(1).mat(GTMaterials.GlauconiteSand).size(1, 1)
            )
    }
)

addVein(
    'redstone_vein_planets',
    'ad',
    35,
    60,
    -65,
    -10,
    GTMaterials.Redstone,
    'surface',
    (pattern) => {
        pattern
            .layer((l) => l.weight(3).mat(GTMaterials.Redstone).size(2, 2))
            .layer((l) => l.weight(2).mat(GTMaterials.Ruby).size(1, 1))
            .layer((l) => l.weight(1).mat(GTMaterials.Cinnabar).size(1, 1))
    }
)

addVein(
    'sapphire_vein_planets',
    'ad',
    30,
    60,
    -40,
    0,
    GTMaterials.Sapphire,
    'surface',
    (pattern) => {
        pattern
            .layer((l) => l.weight(3).mat(GTMaterials.Almandine).size(2, 2))
            .layer((l) => l.weight(2).mat(GTMaterials.Pyrope).size(1, 1))
            .layer((l) => l.weight(1).mat(GTMaterials.Sapphire).size(1, 1))
            .layer((l) => l.weight(1).mat(GTMaterials.GreenSapphire).size(1, 1))
    }
)

addVein(
    'magnetite_vein_planets',
    'ad',
    35,
    80,
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
