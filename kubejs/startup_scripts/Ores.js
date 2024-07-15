// priority: 0
const UtilsJS = Java.loadClass('dev.latvian.mods.kubejs.util.UtilsJS')
console.info('Ores Modified')

WorldgenEvents.remove(event => {
    const minecraftOreVeins = [
        'minecraft:coal_ore',
        'minecraft:iron_ore',
        'minecraft:gold_ore',
        'minecraft:redstone_ore',
        'minecraft:lapis_ore',
        'minecraft:diamond_ore',
        'minecraft:emerald_ore']
 
 
    event.removeOres(props => {
        props.worldgenLayer = 'underground_ores'
        props.blocks = [/create:(.*)/, /byg:(.*)/, /sgjourney:(.*)/, /aether:(.*)/].concat(minecraftOreVeins)
    })
 })

GTCEuStartupEvents.registry('gtceu:world_gen_layer', e => {
    e.create('moon')
        .targets('ad_astra:moon_stone')
        .dimensions('ad_astra:moon')

    e.create('aether')
        .targets('aether:holystone')
        .dimensions('aether:the_aether')
})


GTCEuStartupEvents.registry('gtceu:tag_prefix', e => {
    let stoneTypes = [
        'ad_astra:moon_stone', 'ad_astra:mars_stone', 'ad_astra:venus_stone', 'ad_astra:mercury_stone', 'ad_astra:glacio_stone'
    ]

    stoneTypes.forEach(type => {
        e.create(type.split(':')[1], 'ore')
            .baseModelLocation(type.split(':')[0] + ':block/' + type.split(':')[1])
            .stateSupplier(() => Block.getBlock(type).defaultBlockState())
            .unificationEnabled(true)
            .materialIconType(GTMaterialIconType.ore)
            .miningToolTag("mineable/pickaxe")
            .generationCondition(ItemGenerationCondition.hasOreProperty)
    })

    e.create('holystone', 'ore')
            .baseModelLocation('aether:block/holystone')
            .stateSupplier(() => UtilsJS.parseBlockState('aether:holystone[double_drops=true]'))
            .unificationEnabled(true)
            .materialIconType(GTMaterialIconType.ore)
            .miningToolTag("mineable/pickaxe")
            .generationCondition(ItemGenerationCondition.hasOreProperty)
})