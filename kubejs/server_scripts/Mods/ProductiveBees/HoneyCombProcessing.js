var configurableBeeMaterials = ['yttrium', 'vanadium', 'glowing', 'experience', 'amethyst', 'blazing', 'cinnabar', 'topaz', 'titanium', 'prismarine', 'sculk', 
 'chromium', 'pyrope', 'neodymium', 'zinc', 'ostrum', 'tin', 'redstone_alloy', 'sulfur', 'diamond', 'iron', 'ruby', 'ruthenium', 'warped', 'brown_shroom',
 'frosty', 'platinum', 'tungsten', 'red_shroom', 'rose_gold', 'sapphire', 'opal', 'calorite', 'bismuth', 'silicon', 'iridium', 'withered', 'cheese', 'lapis', 
 'energetic_alloy', 'cobalt', 'redstone', 'end_steel', 'oily', 'zombie', 'steel', 'skeletal', 'silky', 'copper', 'dark_steel', 'draconic', 'conductive_alloy',
 'green_sapphire', 'slimy', 'bronze', 'europium', 'coal', 'desh', 'silver', 'crimson', 'infinity', 'radioactive', 'electrum', 'emerald', 'spacial', 'copper_alloy',
 'tea', 'neutronium', 'vibrant_alloy', 'rose_quartz', 'netherite', 'ender', 'pulsating_alloy', 'magmatic', 'nickel', 'fluix', 'malachite', 'osmium', 'lead', 
 'samarium', 'sticky_resin', 'invar', 'palladium', 'apatite', 'crystalline', 'sodalite', 'niobium', 'brass', 'gold', 'rhodium', 'obsidian', 'soularium', 'chocolate'
]


var NeedsToBeChecked= ['rose_gold']

//needs to be checked
var Astra = ['ostrum','calorite', 'cheese', 'desh',] 

var EnderIO = ['redstone_alloy', 'energetic_alloy','end_steel', 'dark_steel', 'conductive_alloy','copper_alloy', 'vibrant_alloy', 'pulsating_alloy', 'soularium']

var configurableBeeMaterialsSpecial = ['experience']

var configurableBeeMaterialsCustomLV = ['glowing','blazing','prismarine','sculk','warped', 'brown_shroom','red_shroom','withered','skeletal', 
  'silky', 'zombie', 'draconic', 'slimy', 'crimson', 'spacial', 'magmatic', 'sticky_resin', 'redstone', 'crystalline', 'frosty']

var configurableBeeMaterialsCustomLvOutput = ['minecraft:glowstone_dust', 'minecraft:blaze_powder', 'minecraft:prismarine_shard', 'minecraft:sculk',
 'minecraft:warped_fungus', 'minecraft:brown_mushroom', 'minecraft:red_mushroom', 'minecraft:wither_skeleton_skull', 'minecraft:bone', 'minecraft:string',
  'minecraft:rotten_flesh', 'productivebees:draconic_dust', 'minecraft:slime_ball', 'minecraft:crimson_fungus', 'gtceu:certus_quartz_gem', 'minecraft:magma_cream', 
  'gtceu:sticky_resin', 'minecraft:redstone','gtceu:nether_quartz_dust', 'minecraft:snowball']

var configurableBeeMaterialsCustomMV = ['rose_quartz', 'ender', 'obsidian', 'fluix']
var configurableBeeMaterialsCustomMvOutput = ['create:rose_quartz', 'minecraft:ender_pearl', 'minecraft:obsidian', 'ae2:fluix_dust']

var specialHoneycombs = [
 Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:oily"}}').strongNBT(),
 Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:frosty"}}').strongNBT(),
 Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:prismarine"}}').strongNBT(),
 Item.of('productivebees:honeycomb_milky'),
 Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:sticky_resin"}}').strongNBT(),
 Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:chocolate"}}').strongNBT(),
 Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:tea"}}').strongNBT()
]

ServerEvents.recipes(event => {
    //HONEY COMB
    event.remove({output:'honeycomb_ghostly'})
    event.remove({input:'honeycomb_milky'})
    event.remove({input:'honeycomb_powdery'})

    event.remove({type:'productivebees:centrifuge'})
    event.remove({type:'create:mixing', output: 'productivebees:wax'})
    specialHoneycombs.forEach(honeycomb => event.remove({input: honeycomb}))

    //Special case honeycombs
    customHCFluidProcessingRecipe('minecraft:honeycomb', Item.of('minecraft:honeycomb'), Fluid.of('create:honey', 250), 150, 16)
    customHCFluidProcessingRecipe('create:chocolate', Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:chocolate"}}').strongNBT(), Fluid.of('create:chocolate', 250), 150, 16)
    customHCFluidProcessingRecipe('create:tea', Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:tea"}}').strongNBT(), Fluid.of('create:tea', 250), 150, 16)
    customHCFluidProcessingRecipe('gtceu:oil', Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:oily"}}').strongNBT(), Fluid.of('gtceu:oil', 250), 150, 128)
    customHCFluidProcessingRecipe('minecraft:milk', Item.of('productivebees:honeycomb_milky'), Fluid.of('minecraft:milk', 250), 150, 16)

    //Chemical Reactor for beer output
    EnderIO.forEach(material => {event.recipes.gtceu.chemical_reactor(`enderio:${material}_nugget`)
        .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:${material}"}}`).strongNBT())
        .inputFluids(Fluid.of('enderio:cloud_seed_concentrated', 100))
        .itemOutputs(`3x enderio:${material}_nugget`)
        .duration(150)
        .EUt(16)
    })

    for(let i = 0; i < configurableBeeMaterialsCustomLvOutput.length; i++){
      event.recipes.gtceu.chemical_reactor(configurableBeeMaterialsCustomLvOutput[i])
      .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:${configurableBeeMaterialsCustomLV[i]}"}}`).strongNBT())
      .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 100))
      .itemOutputs(configurableBeeMaterialsCustomLvOutput[i])
      .duration(150)
      .EUt(16)
    }


    global.ProductiveBees.LVMaterials.forEach(material => {event.recipes.gtceu.chemical_reactor(`gtceu:${material}_dust`)
    .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:${material}"}}`).strongNBT())
    .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 100))
    .itemOutputs(`gtceu:${material}_dust`)
    .duration(150)
    .EUt(16)
    })

    for(let i = 0; i < configurableBeeMaterialsCustomMvOutput.length; i++){
      event.recipes.gtceu.chemical_reactor(configurableBeeMaterialsCustomMvOutput[i])
      .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:${configurableBeeMaterialsCustomMV[i]}"}}`).strongNBT())
      .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 100))
      .itemOutputs(configurableBeeMaterialsCustomMvOutput[i])
      .duration(150)
      .EUt(16)
    }

    global.ProductiveBees.MVMaterials.forEach(material => {event.recipes.gtceu.chemical_reactor(`gtceu:${material}_dust`)
    .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:${material}"}}`).strongNBT())
    .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 100))
    .itemOutputs(`gtceu:${material}_dust`)
    .duration(120)
    .EUt(128)
    })

    global.ProductiveBees.HVMaterials.forEach(material => {event.recipes.gtceu.chemical_reactor(`gtceu:${material}_dust`)
    .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:${material}"}}`).strongNBT())
    .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 100))
    .itemOutputs(`gtceu:${material}_dust`)
    .duration(100)
    .EUt(512)
    })

    global.ProductiveBees.EVMaterials.forEach(material => {event.recipes.gtceu.chemical_reactor(`gtceu:${material}_dust`)
    .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:${material}"}}`).strongNBT())
    .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 100))
    .itemOutputs(`gtceu:${material}_dust`)
    .duration(80)
    .EUt(2048)
    })

    global.ProductiveBees.IVMaterials.forEach(material => {event.recipes.gtceu.chemical_reactor(`gtceu:${material}_dust`)
    .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:${material}"}}`).strongNBT())
    .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 100))
    .itemOutputs(`gtceu:${material}_dust`)
    .duration(60)
    .EUt(8192)
    })

    global.ProductiveBees.LUVMaterials.forEach(material => {event.recipes.gtceu.chemical_reactor(`gtceu:${material}_dust`)
    .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:${material}"}}`).strongNBT())
    .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 100))
    .itemOutputs(`gtceu:${material}_dust`)
    .duration(40)
    .EUt(32768)
    })

    global.ProductiveBees.ZPMMaterials.forEach(material => {event.recipes.gtceu.chemical_reactor(`gtceu:${material}_dust`)
    .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:${material}"}}`).strongNBT())
    .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 100))
    .itemOutputs(`gtceu:${material}_dust`)
    .duration(20)
    .EUt(131072)
    })

    global.ProductiveBees.UVMaterials.forEach(material => {event.recipes.gtceu.chemical_reactor(`gtceu:${material}_dust`)
    .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:${material}"}}`).strongNBT())
    .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 100))
    .itemOutputs(`gtceu:${material}_dust`)
    .duration(10)
    .EUt(524288)
    })

    global.ProductiveBees.UHVMaterials.forEach(material => {event.recipes.gtceu.chemical_reactor(`gtceu:${material}_dust`)
    .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:${material}"}}`).strongNBT())
    .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 100))
    .itemOutputs(`gtceu:${material}_dust`)
    .duration(5)
    .EUt(2097152)
    })

    //Centrifuge no fluid needed but chance output


  function customHCFluidProcessingRecipe(name, input, output, duration, eut) {
    event.recipes.gtceu.chemical_reactor(name)
      .itemInputs(input)
      .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 100))
      .outputFluids(output)
      .duration(duration)
      .EUt(eut)
  }
})