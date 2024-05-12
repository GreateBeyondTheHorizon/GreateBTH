// priority: 0
ServerEvents.recipes(event => {

	event.campfireCooking('gtceu:coke_oven_brick', 'gtceu:compressed_coke_clay').cookingTime(300).xp(0.3)


	event.replaceInput('gtceu:shaped/coke_oven', 'gtceu:iron_plate', 'gtceu:wrought_iron_plate')
	event.replaceInput('gtceu:shaped/primitive_pump', 'gtceu:iron_ring', 'gtceu:wrought_iron_ring')
	event.replaceInput('gtceu:shaped/primitive_pump', 'gtceu:iron_screw', 'gtceu:wrought_iron_screw')
	event.replaceInput('gtceu:shaped/primitive_pump', 'gtceu:iron_rotor', 'gtceu:wrought_iron_rotor')
	event.replaceInput('gtceu:shaped/pump_deck', 'gtceu:iron_screw', 'gtceu:wrought_iron_screw')
	event.replaceInput('gtceu:shaped/pump_hatch', 'gtceu:iron_screw', 'gtceu:wrought_iron_screw')
	event.replaceInput('gtceu:shaped/pump_hatch', 'gtceu:iron_ring', 'gtceu:wrought_iron_ring')

	event.replaceInput('gtceu:shaped/bronze_primitive_blast_furnace', 'gtceu:iron_screw', 'gtceu:wrought_iron_screw')
	event.replaceInput('gtceu:shaped/bronze_primitive_blast_furnace', 'gtceu:iron_rod', 'gtceu:wrought_iron_rod')
	event.replaceInput('gtceu:shaped/bronze_primitive_blast_furnace', 'gtceu:iron_plate', 'gtceu:wrought_iron_plate')


	// #region removal
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

	//Recipe ids that should have a campfire in place of a furnace in its recipe
	const furnaceRecipesToReplace = [
		'gtceu:shaped/steam_furnace_bronze',
		'gtceu:shaped/steam_alloy_smelter_bronze',
		'gtceu:shaped/furnace_minecart',
		'cookingforblockheads:oven',
		'productivebees:honey_generator',
		'gtceu:shaped/steam_boiler_coal_bronze',
		'gtceu:shaped/steam_boiler_coal_steel',
		'gtceu:shaped/electric_blast_furnace',
		'gtceu:shaped/multi_furnace',
		'gtceu:assembler/furnace_minecart'
	]

	furnaceRecipesToReplace.forEach(recipeID => {
		event.replaceInput({id: recipeID}, 'minecraft:furnace', 'minecraft:campfire')
	})
	
	tiers.forEach(tier => {
		components.forEach(component => {
			event.remove({ output: `gtceu:${tier}_${component}` })
		})
	})
	//lv
	event.remove({ output: '#forge:circuits/lv' })
	//mv
	event.remove({ output: '#forge:circuits/mv' })
	//hv
	event.remove({ output: '#forge:circuits/hv' })

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
			A:'#minecraft:logs',
			H: '#forge:tools/hammers'
		}
	)
	event.shaped(
		Item.of('gtceu:treated_wood_plate'),
		[
			'A',
			'A',
		],
		{
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
		Item.of('gtceu:flint_knife', '{DisallowContainerItem:0,GT.Behaviours:{},GT.Tool:{AttackDamage:1.0f,AttackSpeed:3.0f,Damage:0,MaxDamage:50},HideFlags:2,Enchantments:[{id:"minecraft:fire_aspect", "lvl": 2}]}'),
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
				' B',
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
				'minecraft:clay_ball',
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

	event.shapeless(
		Item.of('gtceu:rubber_planks', 2),
		[
			'gtceu:rubber_log'
		]
	)

	event.shapeless(
		Item.of('gtceu:rubber_planks', 4),
		[
			'gtceu:rubber_log',
			'#forge:tools/saws'
		]
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
			A: '#forge:tools/files',
			B: 'gtceu:wood_plate'
		}
	)
})
