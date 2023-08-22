ServerEvents.recipes(event => {

	event.remove({output: /create:crushed_raw_(.*)/})

    //Minecraft:
    const vanillaMaterial = ['gold', 'iron', 'copper']
    
    const vanExtraMaterial = []

    //Greg:
    const gregMaterial = ['aluminium','beryllium','cobalt','lead','lithium','molybdenum','neodymium','nickel','palladium','platinum','plutonium','silver','sulfur','thorium','tin','naquadah','asbesutos','hematite','geothite','calcite','cassiterite','cassiterite_sand','chalcopyrite','chromite','cobaltite','cooperite','galena','garnierite','ilmenite','bauxite','magnesite','magnetite','molybdenite','powellite','pyrite','pyrolusite','saltpeter','scheelite','tantalite','sphalerite','stibnite','tetrahedrite','tungstate','uraninite','wulfenite','yellow_limonite','graphite','bornite','chalcocite','bastnasite','pentlandite','spodumene','lepidolite','glauconite_sand','mica','barite','alunite','talc','soapstone','kyanite','pyrochlore','oilsands','tricalcium_phosphate','vanadium_magnetite','pollucite','bentonite','fullers_earth','pitchblende','trona','gypsum','zeolite','redstone','electrotine','diatomite','granitic_mineral_sand','garnet_sand','basaltic_mineral_sand']

    const extraMaterial = []

    //Minecraft
    let i = 0;
    for(i; i < vanillamaterial.length; i++){
        event.recipes.create.crushing([`gtceu:${vanillaMaterial[i]}_crushed_ore`,Item.of(`gtceu:${vanillaMaterial[i]}_crushed_ore`).withChance(0.5), Item.of(`gtceu:${vanillaMaterial[i]}_crushed_ore`).withChance(0.25),Item.of(`gtceu:${vanillaMaterial[j]}_impure_dust`).withChance(0.2),Item.of(`gtceu:${vanExtraMaterial[j]}_crushed_ore`).withChance(0.2)], `minecraft:raw_${vanillaMaterial[i]}`)
        event.recipes.create.milling([`gtceu:${vanillaMaterial[i]}_crushed_ore`, Item.of(`gtceu:${vanillaMaterial[i]}_crushed_ore`).withChance(0.5)], `minecraft:raw_${vanillaMaterial[i]}`)
    }

    let j = 0;

    for(j; j < gregMaterial.length; j++){
        event.recipes.create.crushing([`gtceu:${gregMaterial[j]}_crushed_ore`,Item.of(`gtceu:${gregMaterial[j]}_crushed_ore`).withChance(0.5), Item.of(`gtceu:${gregMaterial[j]}_crushed_ore`).withChance(0.25),Item.of(`gtceu:${gregMaterial[j]}_impure_dust`).withChance(0.2),Item.of(`gtceu:${extraMaterial[j]}_crushed_ore`).withChance(0.2)],  `gtceu:raw_${gregMaterial[j]}`)
        event.recipes.create.milling([`gtceu:${gregMaterial[j]}_crushed_ore`, Item.of(`gtceu:${gregMaterial[j]}_crushed_ore`).withChance(0.10)], 'gtceu:raw_'+gregMaterial[j])
    }

})