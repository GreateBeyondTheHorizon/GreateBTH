var configurableBeeMaterials = ['yttrium', 'vanadium', 'glowing', 'experience', 'amethyst', 'blazing', 'cinnabar', 'topaz', 'titanium', 'prismarine', 'sculk', 
 'chromium', 'pyrope', 'neodymium', 'zinc', 'ostrum', 'tin', 'redstone_alloy', 'sulfur', 'diamond', 'iron', 'ruby', 'ruthenium', 'warped', 'brown_shroom',
 'frosty', 'platinum', 'tungsten', 'red_shroom', 'rose_gold', 'sapphire', 'opal', 'calorite', 'bismuth', 'silicon', 'iridium', 'withered', 'cheese', 'lapis', 
 'energetic_alloy', 'cobalt', 'redstone', 'end_steel', 'oily', 'zombie', 'steel', 'skeletal', 'silky', 'copper', 'dark_steel', 'draconic', 'conductive_alloy',
 'green_sapphire', 'slimy', 'bronze', 'europium', 'coal', 'desh', 'silver', 'crimson', 'infinity', 'radioactive', 'electrum', 'emerald', 'spacial', 'copper_alloy',
 'tea', 'neutronium', 'vibrant_alloy', 'rose_quartz', 'netherite', 'ender', 'pulsating_alloy', 'magmatic', 'nickel', 'fluix', 'malachite', 'osmium', 'lead', 
 'samarium', 'sticky_resin', 'invar', 'palladium', 'apatite', 'crystalline', 'sodalite', 'niobium', 'brass', 'gold', 'rhodium', 'obsidian', 'soularium', 'chocolate'
]


var NeedsToBeChecked= ['rose_gold','tea','chocolate']

//needs to be checked
var Astra = ['ostrum', 'frosty','calorite', 'cheese','oily', 'desh',] 

var EnderIO = ['redstone_alloy'] //,'energetic_alloy','end_steel', 'dark_steel', 'conductive_alloy','copper_alloy', 'vibrant_alloy', 'rose_quartz', 'pulsating_alloy','soularium']




var configurableBeeMaterialsSpecial = ['experience']

var configurableBeeMaterialsDustsLV = ['glowing','blazing','prismarine','sculk','warped', 'brown_shroom','red_shroom','withered','skeletal', 
 'silky','zombie','draconic','slimy','crimson', 'spacial', 'magmatic','sticky_resin', 'apatite','redstone']

var configurableBeeMaterialsDustsLvOutput = []
 



var configurableBeeMaterialsLV= ['amethyst','cinnabar', 'topaz', 'pyrope','zinc','tin','sulfur','diamond', 'iron', 'ruby', 
  'sapphire', 'opal', 'silicon', 'lapis','cobalt',   'copper', 'green_sapphire', 'coal','silver', 'emerald',  
  'malachite','lead','sodalite', 'gold']

var configurableBeeMaterialsDustsMV = ['rose_quartz', 'ender', 'obsidian', 'fluix']

var configurableBeeMaterialsMV= ['vanadium','chromium', 'steel', 'electrum', 'invar', 'brass', 'bronze']



var configurableBeeMaterialsHV= ['bismuth' ]   //'netherite'

var configurableBeeMaterialsEV= ['titanium','neodymium' ] // 'radioactive'

var configurableBeeMaterialsIV= ['platinum', 'tungsten', 'iridium', 'osmium','samarium','niobium']

var configurableBeeMaterialsLUV= ['ruthenium', 'palladium', 'rhodium', ]

var configurableBeeMaterialsZPM= ['naquadah']

var configurableBeeMaterialsUV= ['yttrium' ]

var configurableBeeMaterialsUHV= ['europium']

var configurableBeeMaterialsAfterUHV = ['infinity','neutronium']



ServerEvents.recipes(event => {
    //HONEY COMB
    event.remove({output:'honeycomb_ghostly'})
    event.remove({input:'honeycomb_milky'})
    event.remove({input:'honeycomb_powdery'})

    configurableBeeMaterials.forEach(material => {	event.remove({input: Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:${material}"}}`).strongNBT()})})


    //Chemical Reactor for beer output

    EnderIO.forEach(material => {event.recipes.gtceu.chemical_reactor(`enderio:${material}_nugget`)
        .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:${material}"}}`).strongNBT())
        .inputFluids(Fluid.of('enderio:cloud_seed_concentrated', 100))
        .itemOutputs(`3x enderio:${material}_nugget`)
        .duration(150)
        .EUt(16)
    })

    //'crystalline', the quartz bee
    event.recipes.gtceu.chemical_reactor('gtceu:nether_quartz_dust')
    .itemInputs(Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:crystalline"}}').strongNBT())
    .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 100))
    .itemOutputs('gtceu:nether_quartz_dust')
    .duration(150)
    .EUt(16)


    configurableBeeMaterialsLV.forEach(material => {event.recipes.gtceu.chemical_reactor(`gtceu:${material}_dust`)
    .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:${material}"}}`).strongNBT())
    .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 100))
    .itemOutputs(`gtceu:${material}_dust`)
    .duration(150)
    .EUt(16)
    })

    configurableBeeMaterialsMV.forEach(material => {event.recipes.gtceu.chemical_reactor(`gtceu:${material}_dust`)
    .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:${material}"}}`).strongNBT())
    .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 100))
    .itemOutputs(`gtceu:${material}_dust`)
    .duration(120)
    .EUt(128)
    })

    configurableBeeMaterialsHV.forEach(material => {event.recipes.gtceu.chemical_reactor(`gtceu:${material}_dust`)
    .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:${material}"}}`).strongNBT())
    .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 100))
    .itemOutputs(`gtceu:${material}_dust`)
    .duration(100)
    .EUt(512)
    })

    configurableBeeMaterialsEV.forEach(material => {event.recipes.gtceu.chemical_reactor(`gtceu:${material}_dust`)
    .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:${material}"}}`).strongNBT())
    .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 100))
    .itemOutputs(`gtceu:${material}_dust`)
    .duration(80)
    .EUt(2048)
    })

    configurableBeeMaterialsIV.forEach(material => {event.recipes.gtceu.chemical_reactor(`gtceu:${material}_dust`)
    .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:${material}"}}`).strongNBT())
    .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 100))
    .itemOutputs(`gtceu:${material}_dust`)
    .duration(60)
    .EUt(8192)
    })

    configurableBeeMaterialsLUV.forEach(material => {event.recipes.gtceu.chemical_reactor(`gtceu:${material}_dust`)
    .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:${material}"}}`).strongNBT())
    .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 100))
    .itemOutputs(`gtceu:${material}_dust`)
    .duration(40)
    .EUt(32768)
    })

    configurableBeeMaterialsZPM.forEach(material => {event.recipes.gtceu.chemical_reactor(`gtceu:${material}_dust`)
    .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:${material}"}}`).strongNBT())
    .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 100))
    .itemOutputs(`gtceu:${material}_dust`)
    .duration(20)
    .EUt(131072)
    })

    configurableBeeMaterialsUV.forEach(material => {event.recipes.gtceu.chemical_reactor(`gtceu:${material}_dust`)
    .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:${material}"}}`).strongNBT())
    .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 100))
    .itemOutputs(`gtceu:${material}_dust`)
    .duration(10)
    .EUt(524288)
    })

    configurableBeeMaterialsUHV.forEach(material => {event.recipes.gtceu.chemical_reactor(`gtceu:${material}_dust`)
    .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:${material}"}}`).strongNBT())
    .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 100))
    .itemOutputs(`gtceu:${material}_dust`)
    .duration(5)
    .EUt(2097152)
    })





    //Centrifuge no fluid needed but chance output



})