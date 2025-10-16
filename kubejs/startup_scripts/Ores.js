// priority: 0
const UtilsJS = Java.loadClass('dev.latvian.mods.kubejs.util.UtilsJS')
console.info('Ores Modified')

WorldgenEvents.remove((event) => {
    event.removeOres((props) => {
        props.worldgenLayer = 'underground_ores'
        props.blocks = [/create:.*/, /byg:.*/, /sgjourney:.*/, /aether:.*/]
    })

    event.removeOres((props) => {
        props.worldgenLayer = 'underground_decoration'
        props.blocks = [/minecraft:infested_(stone|deepslate)/]
    })
})

GTCEuStartupEvents.registry('gtceu:world_gen_layer', (e) => {
    e.create('aether')
        .targets('aether:holystone')
        .dimensions('aether:the_aether')
})

GTCEuStartupEvents.registry('gtceu:tag_prefix', (e) => {
    e.create('holystone', 'ore')
        .baseModelLocation('aether:block/holystone')
        .stateSupplier(() =>
            UtilsJS.parseBlockState('aether:holystone[double_drops=true]')
        )
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .miningToolTag('mineable/pickaxe')
        .generationCondition(ItemGenerationCondition.hasOreProperty)
})

GTCEuStartupEvents.registry('gtceu:dimension_marker', (e) => {
    e.create('aether:the_aether')
        .tier(1)
        .iconSupplier(() => Item.getItem('aether:holystone'))
        .overrideName('The Aether')

    e.create('ad_astra:moon')
        .tier(1)
        .iconSupplier(() => Item.getItem('ad_astra:moon_stone'))
        .overrideName('Moon')

    e.create('ad_astra:mars')
        .tier(1)
        .iconSupplier(() => Item.getItem('ad_astra:mars_stone'))
        .overrideName('Mars')

    e.create('ad_astra:venus')
        .tier(1)
        .iconSupplier(() => Item.getItem('ad_astra:venus_stone'))
        .overrideName('Venus')

    e.create('ad_astra:mercury')
        .tier(1)
        .iconSupplier(() => Item.getItem('ad_astra:mercury_stone'))
        .overrideName('Mercury')

    e.create('ad_astra:glacio')
        .tier(1)
        .iconSupplier(() => Item.getItem('ad_astra:glacio_stone'))
        .overrideName('Glacio')
})
