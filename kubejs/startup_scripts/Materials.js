GTCEuStartupEvents.registry('gtceu:material', event => {
	GTMaterials.Polyethylene.addFlags(GTMaterialFlags.GENERATE_ROTOR)
	GTMaterials.Wood.addFlags(GTMaterialFlags.GENERATE_RING)
	GTMaterials.WroughtIron.addFlags(GTMaterialFlags.GENERATE_ROTOR)

	GTMaterials.get('andesite_alloy').addFlags(GTMaterialFlags.DISABLE_DECOMPOSITION)
})
