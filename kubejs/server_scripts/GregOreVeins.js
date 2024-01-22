GTCEuServerEvents.oreVeins(event => {
	event.removeAll()

	const passiveLayers = {
		
		
		
		moon: pattern => {
			pattern
				.layer(l => {
					l
						.weight(1)
						.block(() => Block.getBlock('ad_astra:moon_stone'))
						.size(2, 3)
				})
		},

		basalt: pattern => {
			pattern
				.layer(l => {
					l
						.weight(1)
						.block(() => Block.getBlock('minecraft:basalt'))
						.block(() => Block.getBlock('minecraft:smooth_basalt'))
						.size(2, 3)
				})
				.layer(l => {
					l
						.weight(1)
						.block(() => Block.getBlock('minecraft:blackstone'))
						.size(1, 2)
				})
		},
		soul_sand: pattern => {
			pattern
				.layer(l => {
					l
						.weight(4)
						.block(() => Block.getBlock('minecraft:soul_soil'))
						.block(() => Block.getBlock('minecraft:soul_sand'))
						.size(1, 3)
				})
				.layer(l => {
					l
						.weight(1)
						.block(() => Block.getBlock('minecraft:magma_block'))
						.size(1, 1)
				})
				.layer(l => {
					l
						.weight(4)
						.block(() => Block.getBlock('minecraft:basalt'))
						.block(() => Block.getBlock('minecraft:smooth_basalt'))
						.size(2, 3)
				})
		},
		tuff: pattern => {
			pattern
				.layer(l => {
					l
						.weight(2)
						.block(() => Block.getBlock('minecraft:tuff'))
						.block(() => Block.getBlock('minecraft:andesite'))
						.size(2, 3)
				})
				.layer(l => {
					l
						.weight(3)
						.block(() => Block.getBlock('minecraft:smooth_basalt'))
						.size(1, 2)
				})
		},
		dripstone: pattern => {
			pattern
				.layer(l => {
					l
						.weight(2)
						.block(() => Block.getBlock('minecraft:tuff'))
						.block(() => Block.getBlock('minecraft:deepslate'))
						.size(2, 3)
				})
				.layer(l => {
					l
						.weight(2)
						.block(() => Block.getBlock('minecraft:dripstone'))
						.size(1, 2)
				})
		},
		calcite: pattern => {
			pattern
				.layer(l => {
					l
						.weight(2)
						.block(() => Block.getBlock('minecraft:calcite'))
						.size(1, 1)
				})
				.layer(l => {
					l
						.weight(1)
						.block(() => Block.getBlock('minecraft:diorite'))
						.size(1, 1)
				})
		},
		deepslate: pattern => {
			pattern
				.layer(l => {
					l
						.weight(1)
						.block(() => Block.getBlock('minecraft:tuff'))
						.block(() => Block.getBlock('minecraft:deepslate'))
						.size(2, 3)
				})
				.layer(l => {
					l
						.weight(1)
						.block(() => Block.getBlock('minecraft:tuff'))
						.size(2, 2)
				})
		},
		endstone: pattern => {
			pattern
				.layer(l => {
					l
						.weight(2)
						.block(() => Block.getBlock('minecraft:endstone'))
						.size(1, 6)
				})
		},
	}

	function addVein(
		name,
		worldGenLayer,
		size,
		weight,
		minHeightRange,
		maxHeightRange,
		indicatorMaterial,
		indicatorPlacement,	// 'above', 'below', or 'surface'
		passiveLayers,
		layers
	) {
		event.add('kubejs:' + name, vein => {
			vein.clusterSize(size)
			vein.weight(weight)
			vein.density(1.0)
			vein.discardChanceOnAirExposure(0)
			vein.layer(worldGenLayer)
			switch (worldGenLayer) {
				case GTWorldGenLayers.STONE:
				case GTWorldGenLayers.DEEPSLATE:
					vein.dimensions('minecraft:overworld')
					vein.biomes('#minecraft:is_overworld')
					break
				case GTWorldGenLayers.NETHERRACK:
					vein.dimensions('minecraft:the_nether')
					vein.biomes('#minecraft:is_nether')
					break
				case GTWorldGenLayers.ENDSTONE:
					vein.dimensions('minecraft:the_end')
					vein.biomes('#minecraft:is_end')
					break
				case 'moon':
					vein.dimensions('ad_astra:moon')
					vein.biomes('ad_astra:lunar_wastelands')
					break
				default:
					console.error("Unknown layer type: '" + worldGenLayer + "'")
			}
			vein.heightRangeUniform(minHeightRange, maxHeightRange)
			vein.layeredVeinGenerator(generator =>
				generator.buildLayerPattern(pattern => {
					passiveLayers(pattern)
					layers(pattern)
				})
			)
			vein.surfaceIndicatorGenerator(i =>
				i
					.surfaceRock(indicatorMaterial)
					.placement(indicatorPlacement)
			)
		})
	}
	//Moon
	addVein('bauxite_vein_moon', 'moon', 25, 40, 10, 80, GTMaterials.Bauxite, 'above', passiveLayers.moon, pattern => {
		pattern
			.layer(l => l.weight(2).mat(GTMaterials.Bauxite).size(1, 4))
			.layer(l => l.weight(1).mat(GTMaterials.Ilmenite).size(1, 2))
			.layer(l => l.weight(1).mat(GTMaterials.Aluminium).size(1, 1))
	})

	// End veins
	addVein('bauxite_vein_end', GTWorldGenLayers.ENDSTONE, 25, 40, 10, 80, GTMaterials.Bauxite, 'above', passiveLayers.endstone, pattern => {
		pattern
			.layer(l => l.weight(2).mat(GTMaterials.Bauxite).size(1, 4))
			.layer(l => l.weight(1).mat(GTMaterials.Ilmenite).size(1, 2))
			.layer(l => l.weight(1).mat(GTMaterials.Aluminium).size(1, 1))
	})
	addVein('magnetite_vein_end', GTWorldGenLayers.ENDSTONE, 25, 30, 20, 80, GTMaterials.Magnetite, 'above', passiveLayers.endstone, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Magnetite).size(1, 4))
			.layer(l => l.weight(2).mat(GTMaterials.VanadiumMagnetite).size(1, 2))
			.layer(l => l.weight(2).mat(GTMaterials.Chromite).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Gold).size(1, 1))
	})
	addVein('naquadah_vein', GTWorldGenLayers.ENDSTONE, 25, 30, 10, 90, GTMaterials.Naquadah, 'above', passiveLayers.endstone, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Naquadah).size(1, 2))
			.layer(l => l.weight(1).mat(GTMaterials.Plutonium239).size(1, 2))
	})
	addVein('pitchblende_vein_end', GTWorldGenLayers.ENDSTONE, 25, 30, 30, 60, GTMaterials.Pitchblende, 'above', passiveLayers.endstone, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Pitchblende).size(1, 2))
			.layer(l => l.weight(2).mat(GTMaterials.Uraninite).size(1, 2))
	})
	addVein('scheelite_vein', GTWorldGenLayers.ENDSTONE, 25, 20, 20, 60, GTMaterials.Scheelite, 'above', passiveLayers.endstone, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Scheelite).size(1, 2))
			.layer(l => l.weight(2).mat(GTMaterials.Tungstate).size(1, 2))
			.layer(l => l.weight(1).mat(GTMaterials.Lithium).size(1, 2))
	})
	addVein('sheldonite_vein', GTWorldGenLayers.ENDSTONE, 20, 10, 5, 50, GTMaterials.Platinum, 'above', passiveLayers.endstone, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Bornite).size(2, 4))
			.layer(l => l.weight(2).mat(GTMaterials.Cooperite).size(1, 1))
			.layer(l => l.weight(2).mat(GTMaterials.Platinum).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Palladium).size(1, 1))
	})

	// Nether veins
	addVein('banded_iron_vein', GTWorldGenLayers.NETHERRACK, 30, 30, 20, 40, GTMaterials.Goethite, 'above', passiveLayers.soul_sand, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Goethite).size(1, 4))
			.layer(l => l.weight(2).mat(GTMaterials.YellowLimonite).size(1, 2))
			.layer(l => l.weight(2).mat(GTMaterials.Hematite).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Gold).size(1, 1))
	})
	addVein('beryllium_vein', GTWorldGenLayers.NETHERRACK, 25, 30, 5, 30, GTMaterials.Beryllium, 'above', passiveLayers.basalt, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Beryllium).size(1, 4))
			.layer(l => l.weight(4).mat(GTMaterials.Emerald).size(1, 2))
	})
	addVein('certus_quartz', GTWorldGenLayers.NETHERRACK, 20, 40, 80, 120, GTMaterials.CertusQuartz, 'below', passiveLayers.soul_sand, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Quartzite).size(2, 4))
			.layer(l => l.weight(2).mat(GTMaterials.CertusQuartz).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Barite).size(1, 1))
	})
	addVein('manganese_vein', GTWorldGenLayers.NETHERRACK, 25, 20, 20, 30, GTMaterials.Grossular, 'above', passiveLayers.basalt, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Grossular).size(1, 2))
			.layer(l => l.weight(2).mat(GTMaterials.Pyrolusite).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Tantalite).size(1, 1))
	})
	addVein('molybdenum_vein', GTWorldGenLayers.NETHERRACK, 20, 5, 20, 50, GTMaterials.Molybdenum, 'above', passiveLayers.basalt, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Wulfenite).size(1, 3))
			.layer(l => l.weight(2).mat(GTMaterials.Molybdenite).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Molybdenum).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Powellite).size(1, 1))
	})
	addVein('monazite_vein', GTWorldGenLayers.NETHERRACK, 20, 30, 20, 40, GTMaterials.Bastnasite, 'above', passiveLayers.basalt, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Bastnasite).size(1, 3))
			.layer(l => l.weight(1).mat(GTMaterials.Molybdenum).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Neodymium).size(1, 1))
	})
	addVein('nether_quartz_vein', GTWorldGenLayers.NETHERRACK, 25, 80, 40, 80, GTMaterials.NetherQuartz, 'above', passiveLayers.soul_sand, pattern => {
		pattern
			.layer(l => l.weight(4).mat(GTMaterials.NetherQuartz).size(2, 2))
			.layer(l => l.weight(1).mat(GTMaterials.Quartzite).size(1, 1))
	})
	addVein('redstone_vein', GTWorldGenLayers.NETHERRACK, 25, 60, 5, 40, GTMaterials.Redstone, 'above', passiveLayers.basalt, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Redstone).size(2, 2))
			.layer(l => l.weight(2).mat(GTMaterials.Quartzite).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Quartzite).size(1, 1))
	})
	addVein('saltpeter_vein', GTWorldGenLayers.NETHERRACK, 25, 40, 5, 45, GTMaterials.Saltpeter, 'above', passiveLayers.basalt, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Saltpeter).size(2, 2))
			.layer(l => l.weight(2).mat(GTMaterials.Diatomite).size(1, 1))
			.layer(l => l.weight(2).mat(GTMaterials.Electrotine).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Alunite).size(1, 1))
	})
	addVein('sulfur_vein', GTWorldGenLayers.NETHERRACK, 25, 100, 10, 30, GTMaterials.Sulfur, 'above', passiveLayers.basalt, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Sulfur).size(2, 2))
			.layer(l => l.weight(2).mat(GTMaterials.Pyrite).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Sphalerite).size(1, 1))
	})
	addVein('tetrahedrite_vein', GTWorldGenLayers.NETHERRACK, 30, 70, 80, 120, GTMaterials.Tetrahedrite, 'below', passiveLayers.soul_sand, pattern => {
		pattern
			.layer(l => l.weight(4).mat(GTMaterials.Tetrahedrite).size(1, 2))
			.layer(l => l.weight(2).mat(GTMaterials.Copper).size(1, 2))
			.layer(l => l.weight(1).mat(GTMaterials.Stibnite).size(1, 2))
	})
	addVein('topaz_vein', GTWorldGenLayers.NETHERRACK, 20, 70, 80, 120, GTMaterials.Topaz, 'below', passiveLayers.soul_sand, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.BlueTopaz).size(2, 2))
			.layer(l => l.weight(2).mat(GTMaterials.Topaz).size(1, 1))
			.layer(l => l.weight(2).mat(GTMaterials.Chalcocite).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Bornite).size(1, 1))
	})

	// Overworld veins
	// Stone
	addVein('apatite_vein', GTWorldGenLayers.STONE, 25, 40, 10, 80, GTMaterials.Apatite, 'above', passiveLayers.calcite, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Apatite).size(2, 2))
			.layer(l => l.weight(2).mat(GTMaterials.TricalciumPhosphate).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Pyrochlore).size(1, 1))
	})
	addVein('cassiterite_vein', GTWorldGenLayers.STONE, 25, 80, 10, 80, GTMaterials.Cassiterite, 'surface', passiveLayers.tuff, pattern => {
		pattern
			.layer(l => l.weight(4).mat(GTMaterials.Tin).size(1, 2))
			.layer(l => l.weight(2).mat(GTMaterials.Cassiterite).size(1, 1))
	})
	addVein('coal_vein', GTWorldGenLayers.STONE, 30, 80, 10, 140, GTMaterials.Coal, 'surface', passiveLayers.calcite, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Coal).size(2, 3))
	})
	addVein('copper_tin_vein', GTWorldGenLayers.STONE, 30, 50, -10, 160, GTMaterials.Chalcopyrite, 'surface', passiveLayers.tuff, pattern => {
		pattern
			.layer(l => l.weight(5).mat(GTMaterials.Chalcopyrite).size(2, 2))
			.layer(l => l.weight(2).mat(GTMaterials.Zeolite).size(1, 2))
			.layer(l => l.weight(2).mat(GTMaterials.Cassiterite).size(1, 2))
			.layer(l => l.weight(1).mat(GTMaterials.Realgar).size(1, 2))
	})
	addVein('galena_vein', GTWorldGenLayers.STONE, 25, 40, -15, 45, GTMaterials.Galena, 'surface', passiveLayers.dripstone, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Galena).size(2, 2))
			.layer(l => l.weight(2).mat(GTMaterials.Silver).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Lead).size(1, 1))
	})
	addVein('garnet_tin_vein', GTWorldGenLayers.STONE, 25, 80, 30, 60, GTMaterials.GarnetSand, 'surface', passiveLayers.dripstone, pattern => {
		pattern
			.layer(l => l.weight(2).state(() => Block.getBlock('minecraft:sand').defaultBlockState()).size(1, 1))
			.layer(l => l.weight(3).mat(GTMaterials.CassiteriteSand).size(2, 3))
			.layer(l => l.weight(2).mat(GTMaterials.GarnetSand).size(1, 1))
			.layer(l => l.weight(2).mat(GTMaterials.Asbestos).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Diatomite).size(1, 1))
	})
	addVein('garnet_vein', GTWorldGenLayers.STONE, 25, 40, -10, 50, GTMaterials.GarnetRed, 'above', passiveLayers.dripstone, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.GarnetRed).size(2, 2))
			.layer(l => l.weight(2).mat(GTMaterials.GarnetYellow).size(1, 1))
			.layer(l => l.weight(2).mat(GTMaterials.Amethyst).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Opal).size(1, 1))
	})
	addVein('iron_vein', GTWorldGenLayers.STONE, 30, 120, -10, 60, GTMaterials.Goethite, 'surface', passiveLayers.deepslate, pattern => {
		pattern
			.layer(l => l.weight(5).mat(GTMaterials.Goethite).size(1, 2))
			.layer(l => l.weight(2).mat(GTMaterials.YellowLimonite).size(1, 1))
			.layer(l => l.weight(2).mat(GTMaterials.Hematite).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Malachite).size(1, 1))
	})
	addVein('lubricant_vein', GTWorldGenLayers.STONE, 20, 40, 0, 50, GTMaterials.Talc, 'surface', passiveLayers.calcite, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Soapstone).size(2, 3))
			.layer(l => l.weight(2).mat(GTMaterials.Talc).size(1, 1))
			.layer(l => l.weight(2).mat(GTMaterials.GlauconiteSand).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Pentlandite).size(1, 1))
	})
	addVein('magnetite_vein_ow', GTWorldGenLayers.STONE, 25, 80, 10, 60, GTMaterials.Magnetite, 'surface', passiveLayers.tuff, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Magnetite).size(2, 3))
			.layer(l => l.weight(2).mat(GTMaterials.VanadiumMagnetite).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Gold).size(1, 1))
	})
	addVein('mineral_sand_vein', GTWorldGenLayers.STONE, 25, 80, 15, 60, GTMaterials.BasalticMineralSand, 'surface', passiveLayers.tuff, pattern => {
		pattern
			.layer(l => l.weight(2).state(() => Block.getBlock('minecraft:sand').defaultBlockState()).size(1, 1))
			.layer(l => l.weight(3).mat(GTMaterials.BasalticMineralSand).size(2, 3))
			.layer(l => l.weight(2).mat(GTMaterials.GraniticMineralSand).size(1, 1))
			.layer(l => l.weight(2).mat(GTMaterials.FullersEarth).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Gypsum).size(1, 1))
	})
	addVein('nickel_vein', GTWorldGenLayers.STONE, 25, 40, -10, 60, GTMaterials.Nickel, 'surface', passiveLayers.tuff, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Garnierite).size(2, 3))
			.layer(l => l.weight(2).mat(GTMaterials.Nickel).size(1, 1))
			.layer(l => l.weight(2).mat(GTMaterials.Cobaltite).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Pentlandite).size(1, 1))
	})
	addVein('salts_vein', GTWorldGenLayers.STONE, 25, 50, 30, 70, GTMaterials.Salt, 'surface', passiveLayers.calcite, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.RockSalt).size(2, 3))
			.layer(l => l.weight(2).mat(GTMaterials.Salt).size(1, 1))
			.layer(l => l.weight(2).mat(GTMaterials.Lepidolite).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Spodumene).size(1, 1))
	})
	addVein('oilsands_vein', GTWorldGenLayers.STONE, 20, 40, 30, 80, GTMaterials.Oilsands, 'surface', passiveLayers.deepslate, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Oilsands).size(2, 3))
			.layer(l => l.weight(4).mat(GTMaterials.Oilsands).size(1, 1))
	})
	// Deepslate
	addVein('copper_vein', GTWorldGenLayers.DEEPSLATE, 25, 80, -40, 10, GTMaterials.Copper, 'surface', passiveLayers.dripstone, pattern => {
		pattern
			.layer(l => l.weight(5).mat(GTMaterials.Chalcopyrite).size(2, 2))
			.layer(l => l.weight(2).mat(GTMaterials.Iron).size(1, 1))
			.layer(l => l.weight(2).mat(GTMaterials.Pyrite).size(1, 1))
			.layer(l => l.weight(2).mat(GTMaterials.Copper).size(1, 1))
	})
	addVein('diamond_vein', GTWorldGenLayers.DEEPSLATE, 25, 40, -65, 30, GTMaterials.Diamond, 'above', passiveLayers.tuff, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Graphite).size(2, 2))
			.layer(l => l.weight(2).mat(GTMaterials.Diamond).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Coal).size(1, 1))
	})
	addVein('lapis_vein', GTWorldGenLayers.DEEPSLATE, 25, 40, -60, 10, GTMaterials.Lapis, 'above', passiveLayers.tuff, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Lazurite).size(2, 2))
			.layer(l => l.weight(2).mat(GTMaterials.Sodalite).size(1, 1))
			.layer(l => l.weight(2).mat(GTMaterials.Lapis).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Calcite).size(1, 1))
	})
	addVein('manganese_vein_ow', GTWorldGenLayers.DEEPSLATE, 30, 20, -30, 0, GTMaterials.Grossular, 'surface', passiveLayers.tuff, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Grossular).size(2, 2))
			.layer(l => l.weight(2).mat(GTMaterials.Spessartine).size(1, 1))
			.layer(l => l.weight(2).mat(GTMaterials.Pyrolusite).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Tantalite).size(1, 1))
	})
	addVein('mica_vein', GTWorldGenLayers.DEEPSLATE, 25, 20, -40, -10, GTMaterials.Mica, 'surface', passiveLayers.calcite, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Kyanite).size(2, 2))
			.layer(l => l.weight(2).mat(GTMaterials.Mica).size(1, 1))
			.layer(l => l.weight(2).mat(GTMaterials.Bauxite).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Pollucite).size(1, 1))
	})
	addVein('olivine_vein', GTWorldGenLayers.DEEPSLATE, 25, 20, -20, 10, GTMaterials.Olivine, 'surface', passiveLayers.dripstone, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Bentonite).size(2, 2))
			.layer(l => l.weight(2).mat(GTMaterials.Magnetite).size(1, 1))
			.layer(l => l.weight(2).mat(GTMaterials.Olivine).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.GlauconiteSand).size(1, 1))
	})
	addVein('redstone_vein_ow', GTWorldGenLayers.DEEPSLATE, 25, 60, -65, -10, GTMaterials.Redstone, 'surface', passiveLayers.tuff, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Redstone).size(2, 2))
			.layer(l => l.weight(2).mat(GTMaterials.Ruby).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Cinnabar).size(1, 1))
	})
	addVein('sapphire_vein', GTWorldGenLayers.DEEPSLATE, 20, 60, -40, 0, GTMaterials.Sapphire, 'above', passiveLayers.calcite, pattern => {
		pattern
			.layer(l => l.weight(3).mat(GTMaterials.Almandine).size(2, 2))
			.layer(l => l.weight(2).mat(GTMaterials.Pyrope).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.Sapphire).size(1, 1))
			.layer(l => l.weight(1).mat(GTMaterials.GreenSapphire).size(1, 1))
	})
})
