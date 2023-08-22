ServerEvents.recipes(event => {

   // event.remove({ output:  /gtceu:(.*)_crushed_ore/ })
	event.remove({output: /create:crushed_raw_(.*)/})



    //First Step Crushing

    //Minecraft:
    const material = ['gold', 'iron', 'copper']
    
    //Greg:
    const gregMaterial = ['aluminium']

    //Minecraft
    let i = 0;
    for(i; i < material.length; i++){
        event.recipes.create.crushing(['gtceu:'+material[i]+'_crushed_ore',Item.of('gtceu:'+material[i]+'_crushed_ore').withChance(0.5), Item.of('gtceu:'+material[i]+'_crushed_ore').withChance(0.25)],  'minecraft:raw_'+material[i])
        event.recipes.create.milling(['gtceu:'+material[i]+'_crushed_ore', Item.of('gtceu:'+material[i]+'_crushed_ore').withChance(0.10)], 'minecraft:raw_'+material[i])
    }

    let j = 0

    for(j; j < gregMaterial.length; j++){
        event.recipes.create.crushing(['gtceu:'+gregMaterial[j]+'_crushed_ore',Item.of('gtceu:'+gregMaterial[j]+'_crushed_ore').withChance(0.5), Item.of('gtceu:'+gregMaterial[j]+'_crushed_ore').withChance(0.25)],  'gtceu:raw_'+gregMaterial[j])
        event.recipes.create.milling(['gtceu:'+gregMaterial[j]+'_crushed_ore', Item.of('gtceu:'+gregMaterial[j]+'_crushed_ore').withChance(0.10)], 'gtceu:raw_'+gregMaterial[j])
    }









})