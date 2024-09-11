ServerEvents.recipes(event => {
	event.remove({id: /ad_astra:(smelting|blasting)(.*)iron_ingot_from_(smelting|blasting)_(.*)_iron_ore/})
	event.remove({type: 'ad_astra:compressing'})
	event.remove({type: 'ad_astra:alloying'})
	event.remove({type: 'create:cutting', output: /ad_astra:(.*)_planks/})
	event.remove({type: 'ad_astra:nasa_workbench'})


	event.recipes.gtceu.rocket_component_assembler('stainless_steel_engine')
		.itemInputs('4x gtnn:heavy_plate_t1', 'gtceu:stainless_steel_frame', '2x gtceu:double_stainless_steel_plate', 'gtnn:t1_chip', 'gtceu:activity_detector_cover')
		.inputFluids(Fluid.of('gtceu:polyethylene', 2304))
		.itemOutputs('kubejs:stainless_steel_engine')
		.circuit(1)
		.duration(1200)
		.EUt(480)

	event.recipes.gtceu.rocket_component_assembler('stainless_steel_fin')
		.itemInputs('4x gtceu:double_stainless_steel_plate', '2x gtnn:heavy_plate_t1')
		.inputFluids(Fluid.of('gtceu:polyethylene', 576))
		.itemOutputs('kubejs:stainless_steel_fin')
		.circuit(2)
		.duration(600)
		.EUt(480)

	event.recipes.gtceu.rocket_component_assembler('stainless_steel_cone')
		.itemInputs('2x gtceu:double_stainless_steel_plate', '2x gtnn:heavy_plate_t1', 'minecraft:lightning_rod', '2x gtceu:stainless_steel_screw')
		.inputFluids(Fluid.of('gtceu:polyethylene', 576))
		.itemOutputs('kubejs:stainless_steel_cone')
		.circuit(3)
		.duration(300)
		.EUt(480)


	event.recipes.gtceu.rocket_component_assembler('tungsten_steel_engine')
		.itemInputs('4x gtnn:heavy_plate_t2', '2x gtceu:double_tungsten_steel_plate', 'gtnn:t2_chip', 'kubejs:stainless_steel_engine')
		.inputFluids(Fluid.of('gtceu:polyethylene', 2304))
		.itemOutputs('kubejs:tungsten_steel_engine')
		.circuit(1)
		.duration(2400)
		.EUt(1920)

	event.recipes.gtceu.rocket_component_assembler('tungsten_steel_fin')
		.itemInputs('4x gtceu:double_tungsten_steel_plate', '2x gtnn:heavy_plate_t2', 'kubejs:stainless_steel_fin')
		.inputFluids(Fluid.of('gtceu:polyethylene', 576))
		.itemOutputs('kubejs:tungsten_steel_fin')
		.circuit(2)
		.duration(1200)
		.EUt(1920)

	event.recipes.gtceu.rocket_component_assembler('tungsten_steel_cone')
		.itemInputs('2x gtceu:double_tungsten_steel_plate', '2x gtnn:heavy_plate_t2', 'kubejs:stainless_steel_cone', '2x gtceu:tungsten_steel_screw')
		.inputFluids(Fluid.of('gtceu:polyethylene', 576))
		.itemOutputs('kubejs:tungsten_steel_cone')
		.circuit(3)
		.duration(600)
		.EUt(1920)

	event.recipes.gtceu.rocket_component_assembler('hsse_engine')
		.itemInputs('4x gtnn:heavy_plate_t3', '2x gtceu:double_hsse_plate', 'gtnn:t3_chip', 'kubejs:stainless_steel_engine')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 2304))
		.itemOutputs('kubejs:hsse_engine')
		.circuit(1)
		.duration(4800)
		.EUt(7680)

	event.recipes.gtceu.rocket_component_assembler('hsse_fin')
		.itemInputs('4x gtceu:double_hsse_plate', '2x gtnn:heavy_plate_t3', 'kubejs:tungsten_steel_fin')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 576))
		.itemOutputs('kubejs:hsse_fin')
		.circuit(2)
		.duration(2400)
		.EUt(7680)

	event.recipes.gtceu.rocket_component_assembler('hsse_cone')
		.itemInputs('2x gtceu:double_hsse_plate', '2x gtnn:heavy_plate_t3', 'kubejs:tungsten_steel_cone', '2x gtceu:hsse_screw')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 576))
		.itemOutputs('kubejs:hsse_cone')
		.circuit(3)
		.duration(1200)
		.EUt(7680)

	
	event.recipes.gtceu.assembly_line('trinium_engine')
		.itemInputs('32x gtceu:double_trinium_plate', '16x gtnn:heavy_plate_t4', 'kubejs:hsse_engine', 'gtnn:t4_chip')
		.inputFluids([Fluid.of('gtceu:platinum', 4032), Fluid.of('gtceu:iridium', 2016), Fluid.of('gtceu:palladium', 1008), Fluid.of('gtceu:osmium', 504)])
		.itemOutputs('kubejs:trinium_engine')
		.duration(1200)
		.EUt(30720)
	
	event.recipes.gtceu.assembly_line('trinium_fin')
		.itemInputs('8x gtceu:double_trinium_plate', '4x gtnn:heavy_plate_t4', 'kubejs:hsse_fin')
		.inputFluids([Fluid.of('gtceu:platinum', 1008), Fluid.of('gtceu:iridium', 504), Fluid.of('gtceu:palladium', 252), Fluid.of('gtceu:osmium', 126)])
		.itemOutputs('kubejs:trinium_fin')
		.duration(600)
		.EUt(30720)

	event.recipes.gtceu.assembly_line('trinium_cone')
		.itemInputs('4x gtceu:double_trinium_plate', '4x gtnn:heavy_plate_t4', 'kubejs:hsse_cone', '2x gtceu:trinium_screw')
		.inputFluids([Fluid.of('gtceu:platinum', 1008), Fluid.of('gtceu:iridium', 504), Fluid.of('gtceu:palladium', 252), Fluid.of('gtceu:osmium', 126)])
		.itemOutputs('kubejs:trinium_cone')
		.duration(300)
		.EUt(30720)

	event.recipes.gtceu.arc_furnace('recycle_t1_rocket')
		.itemInputs('ad_astra:tier_1_rocket')
		.inputFluids(Fluid.of('gtceu:oxygen', 14400))
		.itemOutputs('11x gtnn:heavy_plate_t1', '10x gtceu:double_stainless_steel_plate')
		.duration(1200)
		.EUt(120)

	event.recipes.gtceu.arc_furnace('recycle_t2_rocket')
		.itemInputs('ad_astra:tier_2_rocket')
		.inputFluids(Fluid.of('gtceu:oxygen', 14400))
		.itemOutputs('7x gtnn:heavy_plate_t1', '11x gtnn:heavy_plate_t2', '10x gtceu:double_stainless_steel_plate', '10x gtceu:double_tungsten_steel_plate')
		.duration(2400)
		.EUt(120)

	event.recipes.gtceu.arc_furnace('recycle_t3_rocket')
		.itemInputs('ad_astra:tier_3_rocket')
		.inputFluids(Fluid.of('gtceu:oxygen', 14400))
		.itemOutputs('5x gtnn:heavy_plate_t2', '11x gtnn:heavy_plate_t3', '9x gtceu:double_tungsten_steel_plate', '10x gtceu:double_hsse_plate')
		.duration(4800)
		.EUt(120)

	event.recipes.gtceu.arc_furnace('recycle_t4_rocket')
		.itemInputs('ad_astra:tier_4_rocket')
		.inputFluids(Fluid.of('gtceu:oxygen', 14400))
		.itemOutputs('7x gtnn:heavy_plate_t3', '22x gtnn:heavy_plate_t4', '10x gtceu:double_hsse_plate', '34x gtceu:double_trinium_plate')
		.duration(9600)
		.EUt(120)

	//// Rockets ////
	
	// Tier 1 Rocket
	event.custom({
		type: 'ad_astra:nasa_workbench',
		ingredients: [
			{
				item: 'kubejs:stainless_steel_cone'
			},
			{
				item: 'gtnn:heavy_plate_t1'
			},
			{
				item: 'gtnn:heavy_plate_t1'
			},
			{
				item: 'gtnn:heavy_plate_t1'
			},
			{
				item: 'gtnn:heavy_plate_t1'
			},
			{
				item: 'gtnn:heavy_plate_t1'
			},
			{
				item: 'gtnn:heavy_plate_t1'
			},
			{
				item: 'kubejs:stainless_steel_fin'
			},
			{
				item: 'gtnn:heavy_plate_t1'
			},
			{
				item: 'gtnn:heavy_plate_t1'
			},
			{
				item: 'kubejs:stainless_steel_fin'
			},
			{
				item: 'kubejs:stainless_steel_fin'
			},
			{
				item: 'kubejs:stainless_steel_engine'
			},
			{
				item: 'kubejs:stainless_steel_fin'
			}
		],
		result: 'ad_astra:tier_1_rocket'
	})
	// Tier 2 Rocket
	event.custom({
		type: 'ad_astra:nasa_workbench',
		ingredients: [
			{
				item: 'kubejs:tungsten_steel_cone'
			},
			{
				item: 'gtnn:heavy_plate_t2'
			},
			{
				item: 'gtnn:heavy_plate_t2'
			},
			{
				item: 'gtnn:heavy_plate_t2'
			},
			{
				item: 'gtnn:heavy_plate_t2'
			},
			{
				item: 'gtnn:heavy_plate_t2'
			},
			{
				item: 'gtnn:heavy_plate_t2'
			},
			{
				item: 'kubejs:tungsten_steel_fin'
			},
			{
				item: 'gtnn:heavy_plate_t2'
			},
			{
				item: 'gtnn:heavy_plate_t2'
			},
			{
				item: 'kubejs:tungsten_steel_fin'
			},
			{
				item: 'kubejs:tungsten_steel_fin'
			},
			{
				item: 'kubejs:tungsten_steel_engine'
			},
			{
				item: 'kubejs:tungsten_steel_fin'
			}
		],
		result: 'ad_astra:tier_2_rocket'
	})
	// Tier 3 Rocket
	event.custom({
		type: 'ad_astra:nasa_workbench',
		ingredients: [
			{
				item: 'kubejs:hsse_cone'
			},
			{
				item: 'gtnn:heavy_plate_t3'
			},
			{
				item: 'gtnn:heavy_plate_t3'
			},
			{
				item: 'gtnn:heavy_plate_t3'
			},
			{
				item: 'gtnn:heavy_plate_t3'
			},
			{
				item: 'gtnn:heavy_plate_t3'
			},
			{
				item: 'gtnn:heavy_plate_t3'
			},
			{
				item: 'kubejs:hsse_fin'
			},
			{
				item: 'gtnn:heavy_plate_t3'
			},
			{
				item: 'gtnn:heavy_plate_t3'
			},
			{
				item: 'kubejs:hsse_fin'
			},
			{
				item: 'kubejs:hsse_fin'
			},
			{
				item: 'kubejs:hsse_engine'
			},
			{
				item: 'kubejs:hsse_fin'
			}
		],
		result: 'ad_astra:tier_3_rocket'
	})
	// Tier 4 Rocket
	event.custom({
		type: 'ad_astra:nasa_workbench',
		ingredients: [
			{
				item: 'kubejs:trinium_cone'
			},
			{
				item: 'gtnn:heavy_plate_t4'
			},
			{
				item: 'gtnn:heavy_plate_t4'
			},
			{
				item: 'gtnn:heavy_plate_t4'
			},
			{
				item: 'gtnn:heavy_plate_t4'
			},
			{
				item: 'gtnn:heavy_plate_t4'
			},
			{
				item: 'gtnn:heavy_plate_t4'
			},
			{
				item: 'kubejs:trinium_fin'
			},
			{
				item: 'gtnn:heavy_plate_t4'
			},
			{
				item: 'gtnn:heavy_plate_t4'
			},
			{
				item: 'kubejs:trinium_fin'
			},
			{
				item: 'kubejs:trinium_fin'
			},
			{
				item: 'kubejs:trinium_engine'
			},
			{
				item: 'kubejs:trinium_fin'
			}
		],
		result: 'ad_astra:tier_4_rocket'
	})
})
