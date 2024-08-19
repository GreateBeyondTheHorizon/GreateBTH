//var $BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
//var $GTUtil = Java.loadClass('com.gregtechceu.gtceu.utils.GTUtil')

// priority: 0
ServerEvents.recipes(event => {
	// #region removal
	event.remove({id: 'gtceu:shaped/chest'})
	event.remove({id: 'gtceu:shaped/crafting_table'})
	event.remove({id: 'gtceu:shaped/wood_wall'})
	event.remove({id: 'gtceu:shaped/wood_multiblock_tank'})
	event.remove({id: 'gtceu:shaped/wood_tank_valve'})
	event.remove({id: 'gtceu:shapeless/compressed_clay'})
	event.remove({id: 'gtceu:smelting/sticky_resin_from_slime'})
	event.remove({output: /gtceu:(.*)_mold/})
	event.remove({id: 'gtceu:shaped/steam_boiler_coal_steel'})
	event.remove({id: 'gtceu:shaped/vacuum_tube'})
	event.remove({id: 'gtceu:mixer/mud'})
	event.remove({id: 'gtceu:shaped/knife_flint'})
	event.remove({id: 'gtceu:shaped/good_circuit_board'})
	/* event.remove({type: 'gtceu:large_boiler'})

		$BuiltInRegistries.ITEM.forEach(item => {
		var burnTime = $GTUtil.getItemBurnTime(item)
		if(burnTime > 0) {
			event.recipes.gtceu.steam_boiler($BuiltInRegistries.ITEM.getKey(item))
				.itemInputs(item)
				.duration(burnTime * 4 * 20)
		}
	}) */

	const tiers = ['lv', 'mv', 'hv' /*'ev', 'iv', 'luv', 'zpm', 'uv' */]
	const components = [
		'emitter',
		'sensor',
		'electric_motor',
		'electric_piston',
		'robot_arm',
		'conveyor_module',
		'electric_pump',
		'fluid_regulator',
	]

	tiers.forEach(tier => {
		components.forEach(component => {
			event.remove({ output: `gtceu:${tier}_${component}` })
		})
	})

	//#region replacement
	event.replaceInput('gtceu:shaped/coke_oven', 'gtceu:iron_plate', 'gtceu:wrought_iron_plate')
	event.replaceInput('gtceu:shaped/primitive_pump', 'gtceu:iron_ring', 'gtceu:wrought_iron_ring')
	event.replaceInput('gtceu:shaped/primitive_pump', 'gtceu:iron_screw', 'gtceu:wrought_iron_screw')
	event.replaceInput('gtceu:shaped/primitive_pump', 'gtceu:iron_rotor', 'gtceu:wrought_iron_rotor')
	event.replaceInput('gtceu:shaped/pump_deck', 'gtceu:iron_screw', 'gtceu:wrought_iron_screw')
	event.replaceInput('gtceu:shaped/pump_hatch', 'gtceu:iron_screw', 'gtceu:wrought_iron_screw')
	event.replaceInput('gtceu:shaped/pump_hatch', 'gtceu:iron_ring', 'gtceu:wrought_iron_ring')
	event.replaceInput('gtceu:shaped/steam_extractor_bronze', 'gtceu:bronze_machine_casing', 'gtceu:bronze_brick_casing')
	event.replaceInput('gtceu:shaped/steam_compressor_bronze', 'gtceu:bronze_machine_casing', 'gtceu:bronze_brick_casing')
	event.replaceInput('gtceu:shaped/steam_hammer_bronze', 'gtceu:bronze_machine_casing', 'gtceu:bronze_brick_casing')
	event.replaceInput('gtceu:shaped/steam_rock_breaker_bronze', 'gtceu:bronze_machine_casing', 'gtceu:bronze_brick_casing')
	event.replaceInput('gtceu:shaped/casing_ulv', 'gtceu:wrought_iron_plate', 'gtceu:iron_plate')

	event.replaceOutput(/gtceu:(smelting|blasting)(.*)_to_ingot/, 'minecraft:iron_ingot', 'gtceu:wrought_iron_ingot')

	//#region campfire
	event.campfireCooking('gtceu:coke_oven_brick', 'gtceu:compressed_coke_clay').cookingTime(300).xp(0.3)
	event.campfireCooking('gtceu:firebrick', 'gtceu:compressed_fireclay').cookingTime(300).xp(0.1)

	//#region stonecutter
	//random mold crafting recipes decided to not work so...
	event.stonecutting('gtceu:plate_casting_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:gear_casting_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:credit_casting_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:bottle_casting_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:ingot_casting_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:ball_casting_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:block_casting_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:nugget_casting_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:cylinder_casting_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:anvil_casting_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:name_casting_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:small_gear_casting_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:rotor_casting_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:plate_extruder_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:rod_extruder_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:bolt_extruder_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:ring_extruder_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:cell_extruder_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:ingot_extruder_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:wire_extruder_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:tiny_pipe_extruder_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:small_pipe_extruder_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:normal_pipe_extruder_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:large_pipe_extruder_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:huge_pipe_extruder_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:block_extruder_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:gear_extruder_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:bottle_extruder_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:foil_extruder_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:small_gear_extruder_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:long_rod_extruder_mold', 'gtceu:empty_mold')
	event.stonecutting('gtceu:rotor_extruder_mold', 'gtceu:empty_mold')

	//#region shaped/shapeless recipes
	event.shaped(
		Item.of('gtceu:vacuum_tube'),
		[
			' B ',
			'CAC',
			'DDD',
		],
		{
			A: 'create:polished_rose_quartz',
			B: 'gtceu:glass_tube',
			C: 'gtceu:steel_bolt',
			D: 'gtceu:copper_single_wire'
		}
	)

	event.shaped(
		Item.of('gtceu:wood_plate'),
		[
			'H',
			'A',
			'A'
		],
		{
			A:'#minecraft:planks',
			H: '#forge:tools/hammers'
		}
	)
	event.shaped(
		Item.of('gtceu:treated_wood_plate'),
		[
			'H',
			'A',
			'A'
		],
		{
			H: '#forge:tools/hammers',
			A:'gtceu:treated_wood_planks'
		}
	)
	event.shaped(
		Item.of('gtceu:stone_gear', 1),
		[
			'GFG',
			'FPF',
			'GFG',
		], 
		{
			P: 'gtceu:wood_gear',
			F: 'minecraft:cobblestone',
			G: 'gtceu:stone_rod'
		}
	)

	event.shaped(
		Item.of('gtceu:flint_knife', '{DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:1.0f,AttackSpeed:3.0f,Damage:0,MaxDamage:63},HideFlags:2}').enchant('minecraft:fire_aspect', 2),
			[
				' A',
				'B ',
			],
			{
				B:'minecraft:stick',
				A:'minecraft:flint'
			}
	)


	event.shaped(
		Item.of('gtceu:flint_pickaxe', '{DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:2.0f,AttackSpeed:-1.8f,Damage:0,HarvestLevel:1,MaxDamage:63,ToolSpeed:5.5f},HideFlags:2}'),
			[
				'AC',
				'B ',
			],
			{
				A:'farmersdelight:rope',
				B:'minecraft:stick',
				C:'kubejs:flint_pickaxe_head'
			}
	)
	
	event.shaped(
		Item.of('gtceu:flint_axe', '{DisallowContainerItem:0b,GT.Behaviours:{DisableShields:1b,TreeFelling:0b},GT.Tool:{AttackDamage:4.0f,AttackSpeed:-4.2f,Damage:0,HarvestLevel:2,MaxDamage:63,ToolSpeed:3.5f},HideFlags:2}'),
			[
				'AC',
				'B ',
			],
			{
				A:'farmersdelight:rope',
				B:'minecraft:stick',
				C:'kubejs:flint_axe_head'
			}
	)
	
	event.shaped(
		Item.of('gtceu:flint_shovel', '{DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:2.5f,AttackSpeed:-3.0f,Damage:0,HarvestLevel:2,MaxDamage:63,ToolSpeed:5.5f},HideFlags:2}'),
			[
				'AC',
				'B ',
			],
			{
				A:'farmersdelight:rope',
				B:'minecraft:stick',
				C:'kubejs:flint_shovel_head'
			}
	)

	event.shaped(
		Item.of('gtceu:flint_sword', '{DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:4.0f,AttackSpeed:-2.4f,Damage:0,MaxDamage:63},HideFlags:2,Enchantments:[{id:"minecraft:fire_aspect", "lvl": 2}]}'),
			[
				'AC',
				'B ',
			],
			{
				A:'farmersdelight:rope',
				B:'minecraft:stick',
				C:'kubejs:flint_sword_head'
			}
	)
	
	event.shaped(
		Item.of('gtceu:flint_hoe', '{DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:0.0f,AttackSpeed:-1.0f,Damage:0,MaxDamage:63},HideFlags:2}'),
			[
				'AC',
				'B ',
			],
			{
				A:'farmersdelight:rope',
				B:'minecraft:stick',
				C:'kubejs:flint_hoe_head'
			}
	)

	event.shaped(
		Item.of('gtceu:empty_wooden_form'),
		[
			'FP',
			'PF'
		],
		{
			P: '#minecraft:planks',
			F: 'minecraft:flint'
		}
	)

	event.shapeless(
		Item.of('gtceu:compressed_clay'),
			[
				'2x minecraft:clay_ball',
				'gtceu:brick_wooden_form'
			]
	).keepIngredient('gtceu:brick_wooden_form')

	event.shaped(
		Item.of('gtceu:treated_wood_planks', 8),
		[
			'PPP',
			'PBP',
			'PPP'
		],
		{
			P: '#minecraft:planks',
			B: Item.of('ceramicbucket:ceramic_bucket','{Fluid:{Amount:1000,FluidName:"gtceu:creosote"}}').strongNBT()
		}
	)

	event.shaped(
		Item.of('gtceu:wooden_tank_valve'),
		[
			'SRD',
			'TPT',
			'FRF'
		],
		{
			S: 'gtceu:wrought_iron_screw',
			R: 'gtceu:wrought_iron_ring',
			D: '#forge:tools/screwdrivers',
			T: 'gtceu:treated_wood_planks',
			P: 'gtceu:wood_large_fluid_pipe',
			F: 'gtceu:treated_wood_frame'
		}
	)

	event.shaped(
		Item.of('gtceu:wooden_multiblock_tank'),
		[
			'RPS',
			'OTD',
			'FPF'
		],
		{
			S: 'gtceu:wrought_iron_screw',
			R: 'gtceu:wrought_iron_ring',
			D: '#forge:tools/screwdrivers',
			T: 'gtceu:treated_wood_planks',
			P: 'gtceu:wood_large_fluid_pipe',
			F: 'gtceu:treated_wood_frame',
			O: 'gtceu:wrought_iron_rotor'
		}
	)

	event.shaped(
		Item.of('gtceu:wood_wall', 2),
		[
			'STS',
			'DFH'
		],
		{
			S: 'gtceu:wrought_iron_screw',
			T: 'gtceu:treated_wood_planks',
			D: '#forge:tools/screwdrivers',
			F: 'gtceu:treated_wood_frame',
			H: '#forge:tools/hammers'
		}
	)

	event.shaped(
		Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"gtceu:concrete"}}').strongNBT(),
		[
			'CBS',
			'CWQ',
			' L '
		],
		{
			C: 'gtceu:calcite_dust',
			B: 'ceramicbucket:ceramic_bucket',
			S: 'gtceu:stone_dust',
			W: Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').strongNBT(),
			Q: 'gtceu:quartz_sand_dust',
			L: 'gtceu:clay_dust'
		}
	)

	event.shaped(
		Item.of('gtceu:firebricks'),
		[
			'FGF',
			'FCF',
			'FGF'
		],
		{
			F: 'gtceu:firebrick',
			G: 'gtceu:gypsum_dust',
			C: Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"gtceu:concrete"}}').strongNBT()
		}
	)

	event.shaped(
		Item.of('gtceu:hp_steam_solid_boiler'),
		[
			'SSS',
			'SWS',
			'BLB'
		],
		{
			S: 'gtceu:steel_plate',
			W: '#forge:tools/wrenches',
			B: 'minecraft:bricks',
			L: 'gtceu:lp_steam_solid_boiler'
		}
	)

	event.shaped(
		Item.of('gtceu:hp_steam_liquid_boiler'),
		[
			'SSS',
			'SGS',
			'SLS'
		],
		{
			S: 'gtceu:steel_plate',
			G: '#forge:glass',
			L: 'gtceu:lp_steam_liquid_boiler'
		}
	)

	event.shaped(
		Item.of('gtceu:empty_mold'),
		[
			'HF',
			'PP',
			'PP'
		],
		{
			H: '#forge:tools/hammers',
			F: '#forge:tools/files',
			P: 'gtceu:steel_plate'
		}
	)

	event.shaped(
		Item.of('gtceu:hp_steam_solid_boiler'),
		[
			'SSS',
			'SWS',
			'BCS'
		],
		{
			S: 'gtceu:steel_plate',
			W: '#forge:tools/wrenches',
			B: 'minecraft:bricks',
			C: 'gtceu:steel_brick_casing'
		}
	)

	event.shaped('gtceu:stone_hammer',
		[
			'RC',
			'S '
		],
		{
			R: 'farmersdelight:rope',
			C: '#forge:cobblestone',
			S: '#forge:rods/wooden'
		}
	)

	event.shaped('3x gtceu:rubber_wood',
		[
			'WW',
			'WW'
		],
		{
			W: 'gtceu:rubber_log'
		}
	)

	event.shaped('3x gtceu:stripped_rubber_wood',
		[
			'WW',
			'WW'
		],
		{
			W: 'gtceu:stripped_rubber_log'
		}
	)
	
	// Material parts
	// Wood
	GregUtil.extrudeRingNoIngotMaterial(event, GTMaterials.Wood, 'gtceu:wood_plate')
	event.shaped(
		Item.of('gtceu:wood_ring'),
		[
			'A ',
			' B'
		],
		{
			A: '#forge:tools/hammers',
			B: 'gtceu:long_wood_rod'
		}
	)
})
