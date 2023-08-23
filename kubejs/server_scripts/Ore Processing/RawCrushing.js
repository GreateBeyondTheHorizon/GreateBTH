ServerEvents.recipes(event => {

	event.remove({output: /create:crushed_raw_(.*)/})

    //Minecraft:
    const vanillaMaterial = ['gold', 'iron', 'copper']
    
    const vanExtraMaterial = ['copper', 'nickel', 'cobalt']

    //Greg Ingots:
    const gregMaterial = ['aluminium','beryllium','cobalt','lead','lithium','molybdenum','neodymium','nickel','palladium','platinum','plutonium','silver','goethite','sulfur','thorium','tin','naquadah','asbesutos','hematite','geothite','calcite','cassiterite','cassiterite_sand','chalcopyrite','chromite','cobaltite','cooperite','galena','garnierite','ilmenite','bauxite','magnesite','magnetite','molybdenite','powellite','pyrite','pyrolusite','saltpeter','scheelite','tantalite','sphalerite','stibnite','tetrahedrite','tungstate','uraninite','wulfenite','yellow_limonite','graphite','bornite','chalcocite','bastnasite','pentlandite','spodumene','lepidolite','glauconite_sand','mica','barite','alunite','talc','soapstone','kyanite','pyrochlore','oilsands','tricalcium_phosphate','vanadium_magnetite','pollucite','bentonite','fullers_earth','pitchblende','trona','gypsum','zeolite','redstone','electrotine','diatomite','granitic_mineral_sand','garnet_sand','basaltic_mineral_sand']

    const extraMaterial = ['bauxite','emerald','cobalt_oxide','silver','lithium','molybdenum','rare_earth','cobalt','palladium','nickel','uraninite','lead','sulfur','uraninite','iron','sulfur','red_garnet','diatomite','magnetite','topaz','malachite','calcium','tin','tin','pyrite','iron','redstone','coal','sulfur','nickel','graphite','beryllium','sulfur','iron','aluminium','yellow_garnet','iron','grossular','sodalite','magnesium','iron','molybdenum','iron','sulfur','manganese','red_garnet','salt','chromium','rock_salt','saltpeter','aluminium','manganese','lazurite','manganese','red_garnet','yellow_garnet','antimony_trrioxide','antimony','blue_topaz','manganese','uraninite','iron','nickel','quartzite','nether_quartz','certus_quartz','carbon','pyrite','sulfur','aluminium','cinnabar','thorium','magnetite','redstone','tin','copper','copper','copper','copper']


    const gemMaterial =['lapis','apatite','red_garnet','yellow_garnet','monazite','grossular','green_sapphire','emerald','diamond','coal','cinnabar','blue_topaz','asbestos','almandine','nether_quartz','spessartine','sodalite','sapphire','salt','ruby','rock_salt','pyrope','lazurite','certus_quartz','quartzite','topaz','realgar','malachite','soapstone','olivine','amethyst','amethyst']
    const gemExtra = []


    //Minecraft
    let i = 0;
    for(i; i < vanillaMaterial.length; i++){
        event.recipes.create.crushing([`gtceu:${vanillaMaterial[i]}_crushed_ore`,Item.of(`gtceu:${vanillaMaterial[i]}_crushed_ore`).withChance(0.5), Item.of(`gtceu:${vanillaMaterial[i]}_crushed_ore`).withChance(0.25),Item.of(`gtceu:${vanillaMaterial[i]}_impure_dust`).withChance(0.2),Item.of(`gtceu:${vanExtraMaterial[i]}_dust`).withChance(0.2)], `minecraft:raw_${vanillaMaterial[i]}`)
        event.recipes.create.milling([`gtceu:${vanillaMaterial[i]}_crushed_ore`, Item.of(`gtceu:${vanillaMaterial[i]}_crushed_ore`).withChance(0.5)], `minecraft:raw_${vanillaMaterial[i]}`)
    }


    //Greg Ingot
    let j = 0;

    for(j; j < gregMaterial.length; j++){
        event.recipes.create.crushing([`gtceu:${gregMaterial[j]}_crushed_ore`,Item.of(`gtceu:${gregMaterial[j]}_crushed_ore`).withChance(0.5), Item.of(`gtceu:${gregMaterial[j]}_crushed_ore`).withChance(0.25),Item.of(`gtceu:${gregMaterial[j]}_impure_dust`).withChance(0.2),Item.of(`gtceu:${gemExtra[j]}_dust`).withChance(0.2)],  `gtceu:raw_${gregMaterial[j]}`)
        event.recipes.create.milling([`gtceu:${gregMaterial[j]}_crushed_ore`, Item.of(`gtceu:${gregMaterial[j]}_crushed_ore`).withChance(0.10)], `gtceu:raw_${gregMaterial[j]}`)
    }

    //Greg Gem

    let g = 0;

    for(g; g < gemMaterial.length; g++){
        event.recipes.create.crushing([`2x gtceu:${gemMaterial[g]}_crushed_ore`,Item.of(`gtceu:${gemMaterial[g]}_crushed_ore`).withChance(0.5), Item.of(`gtceu:${gemMaterial[g]}_crushed_ore`).withChance(0.25),Item.of(`gtceu:${gemMaterial[g]}_impure_dust`).withChance(0.2),Item.of(`gtceu:${gemExtra[g]}_dust`).withChance(0.2)],  `gtceu:${gemMaterial[g]}_ore`)
        event.recipes.create.milling([`gtceu:${gemMaterial[g]}_crushed_ore`, Item.of(`gtceu:${gemMaterial[g]}_crushed_ore`).withChance(0.10)], `gtceu:${gemMaterial[g]}_ore`)
    }


})