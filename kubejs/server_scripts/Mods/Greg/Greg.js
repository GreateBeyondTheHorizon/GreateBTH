// priority: 0
ServerEvents.recipes(event => {
	// #region removal
	const tiers = ['lv', 'mv',  'hv', /*'ev', 'iv', 'luv', 'zpm', 'uv' */];
    const components = ['emitter', 'sensor', 'electric_motor', 'electric_piston', 'robot_arm', 'conveyor_module', 'electric_pump', 'fluid_regulator'];
	event.remove({ output: 'gtceu:lp_steam_furnace'})
    tiers.forEach(tier => {
        components.forEach(component => {
            event.remove({output: `gtceu:${tier}_${component}`});
        });
    });
    //lv
    event.remove({output: '#forge:circuits/lv'}) 
    //mv
	event.remove({output: '#forge:circuits/mv'}) 
    //hv
	event.remove({output: '#forge:circuits/hv'}) 
	
	event.remove({id: 'gtceu:smelting/sticky_resin_from_slime'}) // <-- random bullshit go!
    
	event.remove({output: 'gtceu:vacuum_tube'})

	event.shaped(
	Item.of('gtceu:wood_plate'),
		[
			'A',
			'A',
		],
		{
			A:'#minecraft:logs'
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
	event.shaped(Item.of('gtceu:stone_gear', 1), [
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
	
	event.shaped(Item.of('gtceu:lp_steam_furnace', 1),
		[
			'ABA',
			'ACA',
			'ADA'
		],
		{
			A:'gtceu:bronze_small_fluid_pipe',
			B:'minecraft:blast_furnace',
			C:'gtceu:bronze_brick_casing',
			D:'minecraft:smoker'
		}
	)
		
})