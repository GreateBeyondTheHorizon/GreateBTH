//priority: -1
const ChemicalHelper = Java.loadClass(
    'com.gregtechceu.gtceu.api.data.chemical.ChemicalHelper'
)

ServerEvents.recipes((event) => {
    //#region recipe gregification
    event.remove({ output: '#minecraft:boats' })
    Ingredient.of('#minecraft:boats').itemIds.forEach((boat) => {
        if (boat.endsWith('chest_boat') || boat.endsWith('chest_raft')) {
            var boatWithoutChest = boat.replace('_chest', '')
            event.shaped(boat, [' C ', 'BDB', ' A '], {
                A: boatWithoutChest,
                B: 'gtceu:iron_screw',
                C: '#forge:tools/screwdrivers',
                D: 'minecraft:chest',
            })
        } else {
            var plank = boat.replace('_boat', '_planks')
            var slab = boat.replace('_boat', '_slab')
            event.shaped(boat, ['POP', 'PKP', 'SSS'], {
                P: plank,
                O: '#minecraft:shovels',
                K: '#forge:tools/knives',
                S: slab,
            })
        }
    })

    event.remove({ not: { mod: 'chipped' }, output: '#minecraft:wooden_doors' })
    Ingredient.of('#minecraft:wooden_doors').itemIds.forEach((door) => {
        var plank = door.replace('door', 'planks')
        var trapdoor = door.replace('door', 'trapdoor')
        event.shaped(Item.of(door), ['PTC', 'PRS', 'PPA'], {
            P: plank,
            T: trapdoor,
            S: 'gtceu:iron_screw',
            R: 'gtceu:iron_ring',
            C: '#forge:tools/screwdrivers',
            A: '#forge:tools/saws',
        })

        event.recipes.gtceu
            .assembler(door)
            .duration(400)
            .itemInputs([trapdoor, Item.of(plank, 4)])
            .itemOutputs(door)
            .inputFluids(Fluid.of('gtceu:iron', 16))
            .EUt(4)
    })

    event.remove([
        { type: 'minecraft:crafting_shaped', output: '#minecraft:planks' },
        { type: 'minecraft:crafting_shapeless', output: '#minecraft:planks' },
        { type: 'gtceu:cutter', output: '#minecraft:planks' },
    ])
    Ingredient.of('#minecraft:planks').itemIds.forEach((planks) => {
        if (!planks.startsWith('chipped')) {
            var log = '#' + planks.replace('planks', 'logs')
            event.shapeless(Item.of(planks, 2), [log])

            event.shaped(Item.of(planks, 4), ['L', 'S'], {
                L: '#forge:tools/saws',
                S: log,
            })
        }
    })

    event.remove({ output: '#minecraft:wooden_slabs' })
    Ingredient.of('#minecraft:wooden_slabs').itemIds.forEach((slab) => {
        var plank = slab.replace('slab', 'planks')
        if (plank.includes('_planks_planks'))
            plank = plank.substring(0, plank.length - 7)
        event.shaped(Item.of(slab, 2), ['LS'], {
            L: '#forge:tools/saws',
            S: plank,
        })

        event.recipes.gtceu
            .cutter(plank + '_water')
            .duration(400)
            .itemInputs(plank)
            .itemOutputs([Item.of(slab, 2)])
            .inputFluids(Fluid.of('minecraft:water', 4))
            .EUt(7)

        event.recipes.gtceu
            .cutter(plank + '_distilled_water')
            .duration(300)
            .itemInputs(plank)
            .itemOutputs([Item.of(slab, 2)])
            .inputFluids(Fluid.of('gtceu:distilled_water', 3))
            .EUt(7)

        event.recipes.gtceu
            .cutter(plank + '_lubricant')
            .duration(200)
            .itemInputs(plank)
            .itemOutputs([Item.of(slab, 2)])
            .inputFluids(Fluid.of('gtceu:lubricant', 1))
            .EUt(7)

        event.recipes.farmersdelight.cutting(plank, '#minecraft:axes', slab)
    })

    event.remove({ output: '#minecraft:wooden_buttons' })
    Ingredient.of('#minecraft:wooden_buttons').itemIds.forEach((button) => {
        var pressure_plate = button.replace('button', 'pressure_plate')
        event.shaped(Item.of(button, 6), ['LS'], {
            S: pressure_plate,
            L: '#forge:tools/saws',
        })

        event.recipes.gtceu
            .cutter(button + '_water')
            .duration(50)
            .itemInputs(pressure_plate)
            .itemOutputs([Item.of(button, 12)])
            .inputFluids(Fluid.of('minecraft:water', 4))
            .EUt(7)

        event.recipes.gtceu
            .cutter(button + '_distilled_water')
            .duration(37)
            .itemInputs(pressure_plate)
            .itemOutputs([Item.of(button, 12)])
            .inputFluids(Fluid.of('gtceu:distilled_water', 3))
            .EUt(7)

        event.recipes.gtceu
            .cutter(button + '_lubricant')
            .duration(25)
            .itemInputs(pressure_plate)
            .itemOutputs([Item.of(button, 12)])
            .inputFluids(Fluid.of('gtceu:lubricant', 1))
            .EUt(7)
    })

    event.remove({ output: '#minecraft:wooden_pressure_plates' })
    Ingredient.of('#minecraft:wooden_pressure_plates').itemIds.forEach(
        (pressurePlate) => {
            var slab = pressurePlate.replace('pressure_plate', 'slab')
            event.shaped(Item.of(pressurePlate, 2), ['BMB', 'SPS', 'BCB'], {
                B: 'gtceu:wood_bolt',
                M: '#forge:tools/mallets',
                S: slab,
                P: 'gtceu:iron_spring',
                C: '#forge:tools/screwdrivers',
            })

            event.recipes.gtceu
                .assembler(pressurePlate)
                .duration(100)
                .itemInputs(['gtceu:iron_spring', Item.of(slab, 2)])
                .itemOutputs(Item.of(pressurePlate, 2))
                .EUt(7)
        }
    )

    event.remove({ output: '#minecraft:fence_gates' })
    Ingredient.of('#minecraft:fence_gates').itemIds.forEach((fenceGate) => {
        var plank = fenceGate.replace('fence_gate', 'planks')
        event.shaped(Item.of(fenceGate), ['F F', 'SPS', 'SPS'], {
            F: 'minecraft:flint',
            S: '#forge:rods/wooden',
            P: plank,
        })

        event.shaped(Item.of(fenceGate, 2), ['CRC', 'SPS', 'SPS'], {
            C: 'gtceu:iron_screw',
            R: '#forge:tools/screwdrivers',
            S: '#forge:rods/wooden',
            P: plank,
        })

        event.recipes.gtceu
            .assembler(fenceGate)
            .circuit(2)
            .itemInputs(Item.of(plank, 2), '2x #forge:rods/wooden')
            .itemOutputs(fenceGate)
            .duration(100)
            .EUt(4)
    })

    event.remove({ output: '#minecraft:wooden_fences' })
    Ingredient.of('#minecraft:wooden_fences').itemIds.forEach((fence) => {
        var plank = fence.replace('fence', 'planks')
        event.shaped(Item.of(fence), ['PSP', 'PSP', 'PSP'], {
            P: plank,
            S: '#forge:rods/wooden',
        })

        event.recipes.gtceu
            .assembler(fence)
            .duration(100)
            .circuit(1)
            .itemInputs([plank])
            .itemOutputs(fence)
            .EUt(4)
    })

    event.remove({ output: '#gbth:shelves' })
    Ingredient.of('#gbth:shelves').itemIds.forEach((shelf) => {
        var slab = shelf
            .replace('shelfmod:shelf_item_', 'minecraft:')
            .concat('_slab')
        var planks = shelf
            .replace('shelfmod:shelf_item_', 'minecraft:')
            .concat('_planks')
        event.shaped(Item.of(shelf), ['PS', 'PS'], {
            P: planks,
            S: slab,
        })
    })
    event.remove({ output: '#gbth:floor_shelves' })
    Ingredient.of('#gbth:floor_shelves').itemIds.forEach((shelf) => {
        var slab = shelf
            .replace('shelfmod:floor_shelf_item_', 'minecraft:')
            .concat('_slab')
        var planks = shelf
            .replace('shelfmod:floor_shelf_item_', 'minecraft:')
            .concat('_planks')
        event.shaped(Item.of(shelf), ['SS', 'PP'], {
            P: planks,
            S: slab,
        })
    })
    //#region wrought iron / iron shenanigans
    event.remove({
        type: 'minecraft:smelting',
        output: 'gtceu:wrought_iron_nugget',
    })
    event.smelting('minecraft:iron_nugget', 'gtceu:wrought_iron_nugget')
})
