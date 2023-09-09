// priority: 0

ServerEvents.recipes(event => {
    
    const gregMaterial = ['aluminium','beryllium','cobalt','lead','lithium',
	'molybdenum','neodymium','nickel','palladium','platinum','plutonium','silver',
	'goethite','sulfur','thorium','tin','naquadah','asbestos','hematite','goethite',
	'calcite','cassiterite','cassiterite_sand','chalcopyrite','chromite','cobaltite',
	'cooperite','galena','garnierite','ilmenite','bauxite','magnesite','magnetite',
	'molybdenite','powellite','pyrite','pyrolusite','saltpeter','scheelite',
	'tantalite','sphalerite','stibnite','tetrahedrite','tungstate','uraninite',
	'wulfenite','yellow_limonite','graphite','bornite','chalcocite','bastnasite',
	'pentlandite','spodumene','lepidolite','glauconite_sand','mica','barite',
	'alunite','talc','soapstone','kyanite','pyrochlore','oilsands',
	'tricalcium_phosphate','vanadium_magnetite','pollucite','bentonite',
	'fullers_earth','pitchblende','trona','gypsum','zeolite','redstone',
	'electrotine','diatomite','granitic_mineral_sand','garnet_sand','basaltic_mineral_sand']
    
    event.remove({ id: /gtceu:macerator\/macerate_raw_(.*)_ore_to_crushed_ore/})

    /* gregMaterial.forEach(material => {
        event.recipes.greate.milling(`${material}_crushed_ore`, `raw_${material}`)
    }) */
})