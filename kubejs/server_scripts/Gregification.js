ServerEvents.recipes(event => {
    event.remove({ output: '#minecraft:chest_boats' })
	Ingredient.of("#minecraft:boats").itemIds.forEach(boat => {
		if (boat.endsWith('chest_boat') || boat.endsWith('chest_raft')) {
			var boatWithoutChest = boat.replace('_chest', '')
			event.shaped(
				Item.of(boat, 1),
				[
					' C ',
					'BDB',
					' A '
				],
				{
					A: boatWithoutChest,
					B: 'gtceu:iron_screw',
					C: '#forge:tools/screwdrivers',
					D: 'minecraft:chest',
				}
			)
		}
	})

    event.remove({output: '#minecraft:wooden_doors'})
    Ingredient.of('#minecraft:wooden_doors').itemIds.forEach(door => {
        var plank = door.replace('door', 'planks')
		var trapdoor = door.replace('door', 'trapdoor')
        event.shaped(Item.of(door),
			[
				'PTC',
				'PRS',
				'PPA'
			],
			{
				P: plank,
				T: trapdoor,
				S: 'gtceu:iron_screw',
				R: 'gtceu:iron_ring',
				C: '#forge:tools/screwdrivers',
				A: '#forge:tools/saws'
			}
        )
    })

	event.remove({output: '#minecraft:wooden_slabs'})
    Ingredient.of('#minecraft:wooden_slabs').itemIds.forEach(slab => {
        var plank = slab.replace('slab', 'planks')
        event.shaped(Item.of(slab, 2),
            [
                'LS'
            ],
            {
                L: '#forge:tools/saws',
                S: plank
            }
        )
    })

	event.remove({output: '#minecraft:wooden_buttons'})
    Ingredient.of('#minecraft:wooden_buttons').itemIds.forEach(button => {
        var pressure_plate = button.replace('button', 'pressure_plate')
        event.shaped(Item.of(button, 6),
			[
				'LS'
			],
			{
		  		S: pressure_plate,
		  		L: '#forge:tools/saws'
			}
        )
    })

	event.remove({output: '#minecraft:wooden_pressure_plates'})
    Ingredient.of('#minecraft:wooden_pressure_plates').itemIds.forEach(pressurePlate => {
        var slab = pressurePlate.replace('pressure_plate', 'slab')
        event.shaped(Item.of(pressurePlate, 2),
			[
				'BMB',
		  		'SPS',
		  		'BCB'
			],
			{
		  		B: 'gtceu:wood_bolt',
		  		M: '#forge:tools/mallets',
				S: slab,
		  		P: 'gtceu:iron_spring',
		  		C: '#forge:tools/screwdrivers'
			}
        )
    })

	event.remove({output: '#minecraft:fence_gates'})
    Ingredient.of('#minecraft:fence_gates').itemIds.forEach(fenceGate => {
        var plank = fenceGate.replace('fence_gate', 'planks')
        event.shaped(Item.of(fenceGate),
			[
				'F F',
		  		'SPS',
		  		'SPS'
			],
			{
		  		F: 'minecraft:flint',
				S: '#forge:rods/wooden',
				P: plank
			}
        )

		event.shaped(Item.of(fenceGate, 2),
			[
				'CRC',
		  		'SPS',
		  		'SPS'
			],
			{
		  		C: 'gtceu:iron_screw',
				R: '#forge:tools/screwdrivers',
				S: '#forge:rods/wooden',
				P: plank
			}
        )

		event.recipes.gtceu.assembler(fenceGate)
			.circuit(2)
			.itemInputs(Item.of(plank, 2), '2x #forge:rods/wooden')
			.itemOutputs(fenceGate)
			.duration(100)
			.EUt(4)
    })

	event.remove({output: '#minecraft:wooden_fences'})
    Ingredient.of('#minecraft:wooden_fences').itemIds.forEach(fence => {
        var plank = fence.replace('fence', 'planks')
        event.shaped(Item.of(fence),
			[
				'PSP',
		  		'PSP',
		  		'PSP'
			],
			{
		  		P: plank,
				S: '#forge:rods/wooden'
			}
        )
    })
})