ServerEvents.tags('item', event => {

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

    
    gregMaterial.forEach(material => {
        event.add('forge:raw_materials', `gtceu:raw_${material}`)

    })
})