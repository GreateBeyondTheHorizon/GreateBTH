ServerEvents.recipes(event => {


	event.remove({input: "#forge:ores"})  // /ad_astra:jet(.*)/



	//'geothite'

	const ore = ['aluminium','beryllium','cobalt','lead','lithium','molybdenum','neodymium','nickel','palladium','platinum','plutonium','silver','sulfur','thorium','tin','naquadah','asbestos','hematite','calcite','cassiterite','cassiterite_sand','chalcopyrite','chromite','cobaltite','cooperite','galena','garnierite','ilmenite','bauxite','magnesite','magnetite','molybdenite','powellite','pyrite','pyrolusite','saltpeter','scheelite','tantalite','sphalerite','stibnite','tetrahedrite','tungstate','uraninite','wulfenite','yellow_limonite','graphite','bornite','chalcocite','bastnasite','pentlandite','spodumene','lepidolite','glauconite_sand','mica','barite','alunite','talc','soapstone','kyanite','pyrochlore','oilsands','tricalcium_phosphate','vanadium_magnetite','pollucite','bentonite','fullers_earth','pitchblende','trona','gypsum','zeolite','redstone','electrotine','diatomite','granitic_mineral_sand','garnet_sand','basaltic_mineral_sand']


	ore.forEach(element => {
		event.recipes.gtceu.ore_decimator(`gtceu:${element}`) //'gtceu:test'
		.itemInputs(`#forge:ores/${element}`)
		.itemOutputs(`2x gtceu:raw_${element}`)
		.inputFluids('gtceu:sulfuric_acid 100')
    	.duration(100)
	    .EUt(512)
	});
	



		
})