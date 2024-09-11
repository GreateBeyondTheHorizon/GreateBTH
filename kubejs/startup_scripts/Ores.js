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
    e.create('aether')
        .targets('aether:holystone')
        .dimensions('aether:the_aether')
})

GTCEuStartupEvents.registry('gtceu:tag_prefix', e => {
    e.create('holystone', 'ore')
        .baseModelLocation('aether:block/holystone')
        .stateSupplier(() => UtilsJS.parseBlockState('aether:holystone[double_drops=true]'))
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .miningToolTag("mineable/pickaxe")
        .generationCondition(ItemGenerationCondition.hasOreProperty)
})

GTCEuStartupEvents.registry('gtceu:dimension_marker', e => {
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