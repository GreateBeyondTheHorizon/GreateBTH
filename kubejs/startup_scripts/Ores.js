// priority: 0
console.info('Ores Modified')

WorldgenEvents.remove(event => {
	event.removeOres(props => {
		props.worldgenLayer = 'underground_ores'
		props.blocks = [/minecraft:(.*)/, /create:(.*)/, /byg:(.*)/, /sgjourney:(.*)/]
	})
})

GTCEuStartupEvents.registry('gtceu:world_gen_layer', e => {
    e.create('moon')
        .targets('ad_astra:moon_stone')
        .dimensions('ad_astra:moon')
})


GTCEuStartupEvents.registry('gtceu:tag_prefix', e => {
    let stoneTypes = [
        'ad_astra:moon_stone', 'ad_astra:mars_stone', 'ad_astra:venus_stone', 'ad_astra:mercury_stone', 'ad_astra:glacio_stone'
    ]

    stoneTypes.forEach(type => {
        e.create(type.split(':')[1], 'ore')
            .baseModelLocation(type)
            .stateSupplier(() => Block.getBlock(type).defaultBlockState())
            .unificationEnabled(true)
            .materialIconType(GTMaterialIconType.ore)
            .miningToolTag("mineable/pickaxe")
            .generationCondition(ItemGenerationCondition.hasOreProperty)
    })
})