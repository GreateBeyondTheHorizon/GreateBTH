ServerEvents.recipes((event) => {
    event.remove({ id: 'computercraft:cable' })
    event.recipes.gtceu
        .assembler('computercraft:cable')
        .itemInputs('gtceu:gold_single_cable', 'gtceu:tiny_red_alloy_dust')
        .itemOutputs('computercraft:cable')
        .duration(200)
        .EUt(120)
        .circuit(1)

    event.remove({ id: 'computercraft:disk_drive' })
    event.recipes.gtceu
        .assembler('computercraft:disk_drive')
        .itemInputs(
            'gtceu:lv_machine_casing',
            '2x #gtceu:circuits/hv',
            'gtceu:mv_electric_motor',
            'gtceu:small_copper_spring',
            'gtceu:magnetic_iron_rod',
            'gtceu:glass_lens'
        )
        .inputFluids('gtceu:polyethylene 72')
        .itemOutputs('computercraft:disk_drive')
        .duration(200)
        .EUt(120)

    event.remove({ id: 'computercraft:printer' })
    event.recipes.gtceu
        .assembler('computercraft:printer')
        .itemInputs(
            'gtceu:lv_machine_casing',
            '2x #gtceu:circuits/hv',
            'gtceu:mv_electric_motor',
            '2x gtceu:small_copper_spring',
            'gtceu:iron_rod'
        )
        .inputFluids('gtceu:polyethylene 72')
        .itemOutputs('computercraft:printer')
        .duration(200)
        .EUt(120)

    event.remove({ id: 'computercraft:speaker' })
    event.recipes.gtceu
        .assembler('computercraft:speaker')
        .itemInputs(
            'gtceu:lv_machine_casing',
            '2x #gtceu:circuits/hv',
            'minecraft:note_block'
        )
        .inputFluids('gtceu:polyethylene 72')
        .itemOutputs('computercraft:speaker')
        .duration(200)
        .EUt(120)

    event.remove({ id: 'computercraft:monitor_normal' })
    event.recipes.gtceu
        .assembler('computercraft:monitor_normal')
        .itemInputs(
            'gtceu:lv_machine_casing',
            '2x #gtceu:circuits/hv',
            'create:display_board'
        )
        .inputFluids('gtceu:polyethylene 72')
        .itemOutputs('computercraft:monitor_normal')
        .duration(200)
        .EUt(120)

    event.remove({ id: 'computercraft:monitor_advanced' })
    event.recipes.gtceu
        .assembler('computercraft:monitor_advanced')
        .itemInputs(
            'gtceu:hv_machine_casing',
            '2x #gtceu:circuits/ev',
            'create:display_board'
        )
        .inputFluids('gtceu:polyethylene 72')
        .itemOutputs('computercraft:monitor_advanced')
        .duration(200)
        .EUt(120)

    // Computers
    event.remove({ id: 'computercraft:computer_normal' })
    event.recipes.gtceu
        .assembler('computercraft:computer_normal')
        .itemInputs(
            'gtceu:mv_machine_casing',
            '2x gtceu:aluminium_plate',
            'gtceu:plastic_printed_circuit_board',
            '#gtceu:circuits/mv',
            '2x gtceu:polyethylene_rotor'
        )
        .inputFluids('gtceu:polyethylene 72')
        .itemOutputs('computercraft:computer_normal')
        .duration(200)
        .EUt(120)
    event.remove({ id: 'computercraft:computer_advanced' })
    event.remove({ id: 'computercraft:computer_advanced_upgrade' })
    event.recipes.gtceu
        .assembler('computercraft:computer_advanced')
        .itemInputs(
            'gtceu:hv_machine_casing',
            '2x gtceu:aluminium_plate',
            'gtceu:epoxy_printed_circuit_board',
            '#gtceu:circuits/hv',
            '2x gtceu:polyethylene_rotor'
        )
        .inputFluids('gtceu:polyethylene 72')
        .itemOutputs('computercraft:computer_advanced')
        .duration(200)
        .EUt(256)

    // Pocket computers
    event.remove({ id: 'computercraft:pocket_computer_normal' })
    event.recipes.gtceu
        .assembler('computercraft:pocket_computer_normal')
        .itemInputs(
            '2x gtceu:aluminium_plate',
            'gtceu:plastic_printed_circuit_board',
            '#gtceu:circuits/mv',
            'gtceu:polyethylene_rotor',
            'create:display_board'
        )
        .inputFluids('gtceu:polyethylene 72')
        .itemOutputs('computercraft:pocket_computer_normal')
        .duration(200)
        .EUt(120)
    event.remove({ id: 'computercraft:pocket_computer_advanced' })
    event.remove({ id: 'computercraft:pocket_computer_advanced_upgrade' })
    event.recipes.gtceu
        .assembler('computercraft:pocket_computer_advanced')
        .itemInputs(
            '2x gtceu:aluminium_plate',
            'gtceu:epoxy_printed_circuit_board',
            '#gtceu:circuits/hv',
            'gtceu:polyethylene_rotor',
            'create:display_board'
        )
        .inputFluids('gtceu:polyethylene 72')
        .itemOutputs('computercraft:pocket_computer_advanced')
        .duration(200)
        .EUt(256)

    // Turtles
    event.remove({ id: 'computercraft:turtle_normal' })
    event.recipes.gtceu
        .assembler('computercraft:turtle_normal')
        .itemInputs(
            'computercraft:computer_normal',
            '2x gtceu:aluminium_plate',
            '#forge:chests/wooden'
        )
        .inputFluids('gtceu:polyethylene 72')
        .itemOutputs('computercraft:turtle_normal')
        .duration(200)
        .EUt(120)
    event.remove({ id: 'computercraft:turtle_advanced' })
    event.remove({ id: 'computercraft:turtle_advanced_upgrade' })
    event.recipes.gtceu
        .assembler('computercraft:turtle_advanced')
        .itemInputs(
            'computercraft:computer_advanced',
            '2x gtceu:aluminium_plate',
            '#forge:chests/wooden'
        )
        .inputFluids('gtceu:polyethylene 72')
        .itemOutputs('computercraft:turtle_advanced')
        .duration(200)
        .EUt(256)

    // Modems
    event.remove({ id: 'computercraft:wired_modem' })
    event.recipes.gtceu
        .assembler('computercraft:wired_modem')
        .itemInputs(
            'gtceu:lv_machine_casing',
            'gtceu:plastic_circuit_board',
            '2x computercraft:cable',
            '#gtceu:circuits/mv'
        )
        .inputFluids('gtceu:polyethylene 72')
        .itemOutputs('computercraft:wired_modem')
        .duration(200)
        .EUt(120)
        .circuit(1)
    event.remove({ id: 'computercraft:wireless_modem_normal' })
    event.recipes.gtceu
        .assembler('computercraft:wireless_modem_normal')
        .itemInputs(
            'gtceu:mv_machine_casing',
            'gtceu:epoxy_circuit_board',
            '2x computercraft:cable',
            '#gtceu:circuits/hv',
            'gtceu:mv_emitter',
            'gtceu:mv_sensor'
        )
        .inputFluids('gtceu:polyvinyl_chloride 72')
        .itemOutputs('computercraft:wireless_modem_normal')
        .duration(200)
        .EUt(256)
        .circuit(1)
    event.remove({ id: 'computercraft:wireless_modem_advanced' })
    event.recipes.gtceu
        .assembler('computercraft:wireless_modem_advanced')
        .itemInputs(
            'gtceu:hv_machine_casing',
            'gtceu:fiber_reinforced_circuit_board',
            '2x computercraft:cable',
            '#gtceu:circuits/ev',
            'gtceu:hv_emitter',
            'gtceu:hv_sensor'
        )
        .inputFluids('gtceu:polyethylene 72')
        .itemOutputs('computercraft:wireless_modem_advanced')
        .duration(200)
        .EUt(480)
        .circuit(1)

    // Printed book
    event.remove({ id: 'computercraft:printed_book' })
    event.shapeless('computercraft:printed_book', [
        'minecraft:book',
        'computercraft:printed_page',
        'minecraft:string',
    ])

    // Disks
    event.recipes.gtceu
        .assembler('computercraft:disk_16')
        .itemInputs(
            'gtceu:glass_lens',
            '4x gtceu:aluminium_foil',
            '4x gtceu:polyethylene_foil'
        )
        .inputFluids('gtceu:cobalt 36')
        .itemOutputs('computercraft:disk')
        .duration(200)
        .EUt(120)
        .circuit(1)

    const disk_dye_hex_codes = [
        1118481, 13388876, 5744206, 8349260, 3368652, 11691749, 5020082,
        10066329, 5000268, 15905484, 8375321, 14605932, 10072818, 150404472,
        15905331, 15790320,
    ]
    for (let i = 0; i < 16; i++) {
        var disk_number = i + 1
        event.remove({ id: 'computercraft:disk_' + disk_number })
        event
            .shapeless(
                Item.of('computercraft:disk', {
                    Color: disk_dye_hex_codes[15 - i],
                }),
                [
                    'computercraft:disk',
                    '#forge:dyes/' + global.Minecraft.Dyes[i],
                ]
            )
            .modifyResult((grid, result) => {
                let disk = grid.find('computercraft:disk')
                return disk
                    .copy()
                    .nbt.merge({ Color: disk_dye_hex_codes[15 - i] })
            })
    }
})
