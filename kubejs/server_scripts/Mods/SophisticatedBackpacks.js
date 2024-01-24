ServerEvents.recipes(event => {
	const backpack = [
		'sophisticatedbackpacks:backpack', 'sophisticatedbackpacks:upgrade_base', 'sophisticatedbackpacks:filter_upgrade', 'sophisticatedbackpacks:advanced_filter_upgrade',
		'sophisticatedbackpacks:tool_swapper_upgrade', 'sophisticatedbackpacks:advanced_tool_swapper_upgrade', 'sophisticatedbackpacks:advanced_magnet_upgrade', 
		'sophisticatedbackpacks:magnet_upgrade', 'sophisticatedbackpacks:stack_upgrade_tier_3', 'sophisticatedbackpacks:stack_upgrade_tier_1', 'sophisticatedbackpacks:restock_upgrade',
		'sophisticatedbackpacks:advanced_restock_upgrade', 'sophisticatedbackpacks:advanced_void_upgrade', 'sophisticatedbackpacks:feeding_upgrade', 'sophisticatedbackpacks:advanced_refill_upgrade', 
		'sophisticatedbackpacks:stack_upgrade_tier_4', 'sophisticatedbackpacks:stack_upgrade_tier_2', 'sophisticatedbackpacks:advanced_deposit_upgrade', 'sophisticatedbackpacks:deposit_upgrade', 
		'sophisticatedbackpacks:void_upgrade', 'sophisticatedbackpacks:advanced_feeding_upgrade', 'sophisticatedbackpacks:refill_upgrade',
		'sophisticatedbackpacks:iron_backpack', 'sophisticatedbackpacks:gold_backpack', 'sophisticatedbackpacks:advanced_pickup_upgrade', 'sophisticatedbackpacks:pickup_upgrade',
		'sophisticatedbackpacks:diamond_backpack','sophisticatedbackpacks:inception_upgrade',
		'sophisticatedbackpacks:everlasting_upgrade', 'sophisticatedbackpacks:auto_blasting_upgrade', 
		'sophisticatedbackpacks:auto_smoking_upgrade', 'sophisticatedbackpacks:auto_smelting_upgrade', 
		'sophisticatedbackpacks:crafting_upgrade', 'sophisticatedbackpacks:smoking_upgrade',
		'sophisticatedbackpacks:stonecutter_upgrade', 'sophisticatedbackpacks:tank_upgrade',
		'sophisticatedbackpacks:battery_upgrade', 'sophisticatedbackpacks:advanced_pump_upgrade', 
		'sophisticatedbackpacks:xp_pump_upgrade', 'sophisticatedbackpacks:smelting_upgrade', 'sophisticatedbackpacks:advanced_compacting_upgrade',
		'sophisticatedbackpacks:pump_upgrade', 'sophisticatedbackpacks:blasting_upgrade', 'sophisticatedbackpacks:compacting_upgrade'
	]
	
	backpack.forEach((element) => event.remove({output: element}))
	
	//DEFAULT
	event.shaped(
		Item.of('sophisticatedbackpacks:backpack', 1),
		[
			'FAF',
			'ECE',
			'BDB'
		],
		{
			A:'minecraft:chest',
			B:'minecraft:leather',
			C:'botania:flower_bag',
			D:'gtceu:bronze_plate',
			E:'gtceu:potin_gear',
			F:'minecraft:chain'  
		}
	)

	//IRON
	event.shaped(
		Item.of('sophisticatedbackpacks:iron_backpack', 1),
		[
      'FAF',
			'ECE',
			'BDB'
			
		],
		{
			A:'ironchest:iron_chest',
			B:'minecraft:leather',
			C:'sophisticatedbackpacks:backpack',
			D:'gtceu:steel_plate',
      		E:'gtceu:steel_gear',
			F:'minecraft:chain'
		}
  )

	//Gold
	event.shaped(
		Item.of('sophisticatedbackpacks:gold_backpack', 1),
		[
      'FAF',
			'ECE',
			'BDB'
		],
		{
			A:'ironchest:gold_chest',
			B:'gtceu:manganese_phosphide_ingot',
			C:'sophisticatedbackpacks:iron_backpack',
			D:'gtceu:aluminium_plate',
      		E:'gtceu:aluminium_gear',
			F:'minecraft:chain'
		}
	)
	
	//Diamond
	event.shaped(
		Item.of('sophisticatedbackpacks:diamond_backpack', 1),
		[
			'FAF',
			'ECE',
			'BDB'
		],
		{
			A:'ironchest:diamond_chest',
			B:'gtceu:diamond_flawless_gem',
			C:'sophisticatedbackpacks:gold_backpack',
			D:'gtceu:polyvinyl_chloride_plate',
			E:'gtceu:stainless_steel_gear',
			F:'minecraft:chain'
		}
	)

	//UPGRADE BASE
	event.shaped(
		Item.of('sophisticatedbackpacks:upgrade_base', 1),
		[
			'ADA',
			'BCB',
			'ABA'
		],
		{
			A:'minecraft:bricks',
			B:'gtceu:iron_plate',
			C:'gtceu:annealed_copper_plate', 
			D:'#gtceu:circuits/lv'
		}
  )

	//COMPACTING UPGRADE
	event.shaped(
		Item.of('sophisticatedbackpacks:compacting_upgrade', 1),
		[
			'ADA',
			'ECE',
			'ABA'
		],
		{
			A:'gtceu:iron_plate',
			B:'#forge:circuits/mv',
			C:'sophisticatedbackpacks:upgrade_base', 
			D:'gtceu:aluminium_hammer',
			E:'minecraft:piston'
		}
  )

	//ADVANCED COMPACTING UPGRADE
	event.shaped(
		Item.of('sophisticatedbackpacks:advanced_compacting_upgrade', 1),
		[
			'ABA',
			'BCB',
			'ABA'
		],
		{
			A:'gtceu:gold_plate',
			B:'gtceu:stainless_steel_double_plate',
			C:'sophisticatedbackpacks:compacting_upgrade', 
		}
  )

	//PICKUP UPGRADE
	event.shaped(
		Item.of('sophisticatedbackpacks:pickup_upgrade', 1),
		[
			'ADA',
			'ECE',
			'ABA'
		],
		{
			A:'gtceu:iron_plate',
			B:'#forge:circuits/mv',
			C:'sophisticatedbackpacks:upgrade_base', 
			D:'minecraft:sticky_piston',
			E:'gtceu:red_alloy_ingot'
		}
  )

	//ADVANCED PICKUP UPGRADE
	event.shaped(
		Item.of('sophisticatedbackpacks:advanced_pickup_upgrade', 1),
		[
			'ABA',
			'BCB',
			'ABA'
		],
		{
			A:'gtceu:gold_plate',
			B:'gtceu:stainless_steel_double_plate',
			C:'sophisticatedbackpacks:pickup_upgrade', 
		}
  )

	//DEPOSIT UPGRADE
	event.shaped(
		Item.of('sophisticatedbackpacks:deposit_upgrade', 1),
		[
			'ADA',
			'ECE',
			'ABA'
		],
		{
			A:'gtceu:iron_plate',
			B:'#gtceu:circuits/lv',
			C:'sophisticatedbackpacks:upgrade_base', 
			D:'minecraft:chest',
			E:'minecraft:sticky_piston'
		}
  )

	//ADVANCED PICKUP UPGRADE
	event.shaped(
		Item.of('sophisticatedbackpacks:advanced_deposit_upgrade', 1),
		[
			'ABA',
			'BCB',
			'ABA'
		],
		{
			A:'gtceu:gold_plate',
			B:'gtceu:stainless_steel_double_plate',
			C:'sophisticatedbackpacks:deposit_upgrade', 
		}
  )
	
	//RESTOCK UPGRADE
	event.shaped(
		Item.of('sophisticatedbackpacks:restock_upgrade', 1),
		[
			'ADA',
			'ECE',
			'ABA'
		],
		{
			A:'gtceu:iron_plate',
			B:'#gtceu:circuits/lv',
			C:'sophisticatedbackpacks:upgrade_base', 
			D:'minecraft:chest',
			E:'minecraft:piston'
		}
  )

	//ADVANCED RESTOCK UPGRADE
	event.shaped(
		Item.of('sophisticatedbackpacks:advanced_restock_upgrade', 1),
		[
			'ABA',
			'BCB',
			'ABA'
		],
		{
			A:'gtceu:gold_plate',
			B:'gtceu:stainless_steel_double_plate',
			C:'sophisticatedbackpacks:restock_upgrade', 
		}
  )
	
	//VOID UPGRADE
	event.shaped(
		Item.of('sophisticatedbackpacks:void_upgrade', 1),
		[
			'ADA',
			'ECE',
			'ABA'
		],
		{
			A:'gtceu:iron_plate',
			B:'#forge:circuits/mv',
			C:'sophisticatedbackpacks:upgrade_base', 
			D:'gtceu:aluminium_hammer', //TRASHCAN IF ADDED
			E:'gtceu:obsidian_plate'
		}
  )

	//ADVANCED VOID UPGRADE
	event.shaped(
		Item.of('sophisticatedbackpacks:advanced_void_upgrade', 1),
		[
			'ABA',
			'BCB',
			'ABA'
		],
		{
			A:'gtceu:gold_plate',
			B:'gtceu:stainless_steel_double_plate',
			C:'sophisticatedbackpacks:void_upgrade', 
		}
  )
	
	//FEEDING UPGRADE
	event.shaped(
		Item.of('sophisticatedbackpacks:feeding_upgrade', 1),
		[
			'ADA',
			'FCE',
			'GBH'
		],
		{
			A:'gtceu:iron_plate',
			B:'#forge:circuits/mv',
			C:'sophisticatedbackpacks:upgrade_base', 
			D:'minecraft:milk_bucket',
			E:'@pamhc2foodcore',
			F:'@pamhc2foodextended',
			G:'minecraft:golden_apple',
			H:'minecraft:golden_carrot'
		}
  )

	//ADVANCED FEEDING UPGRADE
	event.shaped(
		Item.of('sophisticatedbackpacks:advanced_feeding_upgrade', 1),
		[
			'ABA',
			'BCB',
			'ABA'
		],
		{
			A:'gtceu:gold_plate',
			B:'gtceu:stainless_steel_double_plate',
			C:'sophisticatedbackpacks:feeding_upgrade', 
		}
	)
	
	//REFILL UPGRADE
	event.shaped(
		Item.of('sophisticatedbackpacks:refill_upgrade', 1),
		[
			'ADA',
			'ECE',
			'ABA'
		],
		{
			A:'gtceu:iron_plate',
			B:'#gtceu:circuits/lv',
			C:'sophisticatedbackpacks:upgrade_base', 
			D:'gtceu:ender_pearl_dust',
			E:'minecraft:chest'
		}
  )

	//ADVANCED REFILL UPGRADE
	event.shaped(
		Item.of('sophisticatedbackpacks:advanced_refill_upgrade', 1),
		[
			'ABA',
			'BCB',
			'ABA'
		],
		{
			A:'gtceu:gold_plate',
			B:'gtceu:stainless_steel_double_plate',
			C:'sophisticatedbackpacks:refill_upgrade', 
		}
	)
	
	//MAGNET UPGRADE
	event.shaped(
		Item.of('sophisticatedbackpacks:magnet_upgrade', 1),
		[
			'ADA',
			'ECE',
			'ABA'
		],
		{
			A:'gtceu:iron_plate',
			B:'#forge:circuits/mv',
			C:'sophisticatedbackpacks:upgrade_base', 
			D:'gtceu:magnetic_steel_rod',
			E:'gtceu:ender_pearl_dust'
		}
  )

	//ADVANCED MAGNET UPGRADE
	event.shaped(
		Item.of('sophisticatedbackpacks:advanced_magnet_upgrade', 1),
		[
			'ABA',
			'BCB',
			'ABA'
		],
		{
			A:'gtceu:gold_plate',
			B:'gtceu:stainless_steel_double_plate',
			C:'sophisticatedbackpacks:magnet_upgrade', 
		}
  )

	//FILTER UPGRADE
	event.shaped(
		Item.of('sophisticatedbackpacks:filter_upgrade', 1),
		[
			'ADA',
			'ECE',
			'ABA'
		],
		{
			A:'gtceu:iron_plate',
			B:'#forge:circuits/mv',
			C:'sophisticatedbackpacks:upgrade_base', 
			D:'gtceu:item_filter',
			E:'gtceu:red_alloy_ingot'
		}
  )

	//ADVANCED FILTER UPGRADE
	event.shaped(
		Item.of('sophisticatedbackpacks:advanced_filter_upgrade', 1),
		[
			'ABA',
			'BCB',
			'ABA'
		],
		{
			A:'gtceu:gold_plate',
			B:'gtceu:stainless_steel_double_plate',
			C:'sophisticatedbackpacks:filter_upgrade', 
		}
	)
	
	//TOOL SWAP UPGRADE
	event.shaped(
		Item.of('sophisticatedbackpacks:tool_swapper_upgrade', 1),
		[
			'ADA',
			'ECF',
			'ABA'
		],
		{
			A:'gtceu:iron_plate',
			B:'#gtceu:circuits/lv',
			C:'sophisticatedbackpacks:upgrade_base', 
			D:'#forge:tools/saws',
			E:'#forge:tools/screwdrivers',
			F:'#forge:tools/wire_cutters'
		}
  )

	//ADVANCED PICKUP UPGRADE
	event.shaped(
		Item.of('sophisticatedbackpacks:advanced_tool_swapper_upgrade', 1),
		[
			'ABA',
			'BCB',
			'ABA'
		],
		{
			A:'gtceu:gold_plate',
			B:'gtceu:stainless_steel_double_plate',
			C:'sophisticatedbackpacks:tool_swapper_upgrade', 
		}
  )
})
