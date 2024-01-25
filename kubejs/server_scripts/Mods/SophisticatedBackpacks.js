ServerEvents.recipes(event => {
	event.remove({mod: 'sophisticatedbackpacks'})

	// Custom backpackUpgrade Recipe
	var SophisticatedBackpacks = {
    	backpackUpgrade: function (resultItem, pattern, keys) {
			event.custom({
				type: 'sophisticatedbackpacks:backpack_upgrade',
				result: resultItem,
				pattern: pattern,
				key: this.toKeyList(keys)
			})
		},

		toKeyList: function(data) {
			const transformed = {};
			for (const key in data) {
			  transformed[key] = Ingredient.of(data[key]).toJson();
			}
			return transformed;
		},

		makeAdvanced: function(id) {
			event.shaped(
				Item.of('sophisticatedbackpacks:advanced_'+id, 1),
				[
					'ABA',
					'BCB',
					'ABA'
				],
				{
					A:'#forge:plates/brass',
					B:'#forge:plates/stainless_steel',
					C:'sophisticatedbackpacks:'+id, 
				}
			)
		}
	}

	//DEFAULT
	event.shaped(
		Item.of('sophisticatedbackpacks:backpack', 1),
		[
			'F F',
			'EAE',
			'BDB'
		],
		{
			A:'minecraft:chest',
			B:'minecraft:leather',
			D:'gtceu:bronze_plate',
			E:'gtceu:bronze_gear',
			F:'minecraft:chain'  
		}
	)

	//IRON
	SophisticatedBackpacks.backpackUpgrade(
		Item.of('sophisticatedbackpacks:iron_backpack', 1),
		[
      		'F F',
			'ECE',
			'BDB'
			
		],
		{
			B:'minecraft:leather',
			C:'sophisticatedbackpacks:backpack',
			D:'gtceu:steel_plate',
      		E:'gtceu:steel_gear',
			F:'minecraft:chain'
		}
  	)

	//Gold
	SophisticatedBackpacks.backpackUpgrade(
		Item.of('sophisticatedbackpacks:gold_backpack', 1),
		[
  			'F F',
			'ECE',
			'BDB'
		],
		{
			B:'gtceu:manganese_phosphide_ingot',
			C:'sophisticatedbackpacks:iron_backpack',
			D:'gtceu:aluminium_plate',
      		E:'gtceu:aluminium_gear',
			F:'minecraft:chain'
		}
	)
	
	//Diamond
	SophisticatedBackpacks.backpackUpgrade(
		Item.of('sophisticatedbackpacks:diamond_backpack', 1),
		[
			'F F',
			'ECE',
			'BDB'
		],
		{
			B:'gtceu:diamond_flawless_gem',
			C:'sophisticatedbackpacks:gold_backpack',
			D:'gtceu:polyvinyl_chloride_plate',
			E:'gtceu:stainless_steel_gear',
			F:'minecraft:chain'
		}
	)
	
	//Netherite
	SophisticatedBackpacks.backpackUpgrade(
		Item.of('sophisticatedbackpacks:netherite_backpack', 1),
		[
			'F F',
			'ECE',
			'BDB'
		],
		{
			B:'#forge:ingots/netherite',
			C:'sophisticatedbackpacks:gold_backpack',
			D:'#forge:plates/ultimet',
			E:'#forge:gears/titanium',
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
			A:'#forge:leather',
			B:'#forge:plates/iron',
			C:'#forge:plates/annealed_copper',
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
			B:'#gtceu:circuits/mv',
			C:'sophisticatedbackpacks:upgrade_base', 
			D:'#forge:storage_blocks/steel',
			E:'minecraft:piston'
		}
  	)
	SophisticatedBackpacks.makeAdvanced('compacting_upgrade')

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
			B:'#gtceu:circuits/mv',
			C:'sophisticatedbackpacks:upgrade_base', 
			D:'minecraft:sticky_piston',
			E:'gtceu:red_alloy_ingot'
		}
  	)
	  SophisticatedBackpacks.makeAdvanced('pickup_upgrade')

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
	SophisticatedBackpacks.makeAdvanced('deposit_upgrade')
	
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
	SophisticatedBackpacks.makeAdvanced('restock_upgrade')
	
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
			B:'#gtceu:circuits/mv',
			C:'sophisticatedbackpacks:upgrade_base', 
			D:'#forge:gems/ender_pearl',
			E:'gtceu:obsidian_plate'
		}
  	)
	SophisticatedBackpacks.makeAdvanced('void_upgrade')
	
	//FEEDING UPGRADE
	event.shaped(
		Item.of('sophisticatedbackpacks:feeding_upgrade', 1),
		[
			'A A',
			'FCE',
			'ABA'
		],
		{
			A:'gtceu:iron_plate',
			B:'#gtceu:circuits/mv',
			C:'sophisticatedstorage:upgrade_base', 
			E:'gtceu:lv_conveyor_module',
			F:'gtceu:lv_robot_arm'
		}
  	)
	SophisticatedBackpacks.makeAdvanced('feeding_upgrade')
	
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
	SophisticatedBackpacks.makeAdvanced('refill_upgrade')
	
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
			B:'#gtceu:circuits/mv',
			C:'sophisticatedbackpacks:upgrade_base', 
			D:'gtceu:magnetic_steel_rod',
			E:'gtceu:ender_pearl_dust'
		}
  	)
	SophisticatedBackpacks.makeAdvanced('magnet_upgrade')

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
			B:'#gtceu:circuits/mv',
			C:'sophisticatedbackpacks:upgrade_base', 
			D:'gtceu:item_filter',
			E:'gtceu:red_alloy_ingot'
		}
 	)
	SophisticatedBackpacks.makeAdvanced('filter_upgrade')
	
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
	SophisticatedBackpacks.makeAdvanced('tool_swapper_upgrade')

	//JUKEBOX UPGRADE
	event.shaped(
		Item.of('sophisticatedbackpacks:jukebox_upgrade', 1),
		[
			'AJA',
			'RBR'
		],
		{
			A:'#forge:screws/iron',
			B:'sophisticatedbackpacks:upgrade_base',
			J:'minecraft:jukebox',
			R:'#forge:ingots/red_alloy'
		}
	)

	//STONECUTTER UPGRADE
	event.shaped(
		Item.of('sophisticatedbackpacks:stonecutter_upgrade', 1),
		[
			'AJA',
			'RBR'
		],
		{
			A:'#forge:screws/iron',
			B:'sophisticatedbackpacks:upgrade_base',
			J:'minecraft:stonecutter',
			R:'#gtceu:circuits/ulv'
		}
	)

	//CHIPPED UPGRADES
	const chipped_tables = [
		'botanist_workbench',
		'glassblower',
		'carpenters_table',
		'loom_table',
		'mason_table',
		'alchemy_bench',
		'tinkering_table'
	]
	chipped_tables.forEach(table => {
		event.shaped(
			Item.of('sophisticatedbackpacks:chipped/'+table+'_upgrade', 1),
			[
				'AJA',
				'RBR'
			],
			{
				A:'#forge:screws/iron',
				B:'sophisticatedbackpacks:upgrade_base',
				J:'chipped:'+table,
				R:'#gtceu:circuits/ulv'
			}
		)
	})
})
