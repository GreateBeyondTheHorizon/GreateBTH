ServerEvents.recipes((event) => {
    event.remove({ id: 'gtceu:shaped/energy_hatch_lv' })
    event.remove({ id: 'gtceu:assembler/energy_hatch_lv' })
    event.remove({ id: 'gtceu:shaped/energy_hatch_mv' })
    event.remove({ id: 'gtceu:assembler/energy_hatch_mv' })
    event.remove({ id: 'gtceu:assembler/vacuum_tube_plain' })
    event.remove({ id: 'gtceu:assembler/vacuum_tube_red_alloy' })
    event.remove({ id: 'gtceu:assembler/vacuum_tube_red_alloy_annealed' })

    event.recipes.gtceu
        .assembler('lv_energy_hatch')
        .duration(200)
        .itemInputs([
            'gtceu:lv_machine_hull',
            '2x gtceu:tin_single_cable',
            'gtceu:lv_voltage_coil',
        ])
        .inputFluids(Fluid.of('gtceu:lubricant', 2000))
        .itemOutputs('gtceu:lv_energy_input_hatch')
        .EUt(30)

    event.recipes.gtceu
        .assembler('mv_energy_hatch')
        .duration(200)
        .itemInputs([
            'gtceu:mv_machine_hull',
            '2x gtceu:copper_single_cable',
            'gtceu:mv_voltage_coil',
            'gtceu:ulpic_chip',
        ])
        .inputFluids(Fluid.of('gtceu:lubricant', 2000))
        .itemOutputs('gtceu:mv_energy_input_hatch')
        .EUt(120)

    event.recipes.gtceu
        .assembler('vacuum_tube_red_alloy')
        .duration(40)
        .itemInputs([
            'gtceu:glass_tube',
            '2x gtceu:copper_single_wire',
            'gtceu:steel_bolt',
        ])
        .inputFluids(Fluid.of('gtceu:red_alloy', 72))
        .itemOutputs('2x gtceu:vacuum_tube')
        .EUt(7)

    event.recipes.gtceu
        .assembler('vacuum_tube_red_alloy_annealed')
        .duration(40)
        .itemInputs([
            'gtceu:glass_tube',
            '2x gtceu:annealed_copper_single_wire',
            'gtceu:steel_bolt',
        ])
        .inputFluids(Fluid.of('gtceu:red_alloy', 72))
        .itemOutputs('4x gtceu:vacuum_tube')
        .EUt(7)

    event.recipes.gtceu
        .assembler('annihilation_core')
        .duration(100)
        .itemInputs([
            'ae2:logic_processor',
            'ae2:fluix_dust',
            'minecraft:quartz',
        ])
        .itemOutputs('ae2:annihilation_core')
        .EUt(30)

    event.recipes.gtceu
        .assembler('formation_core')
        .duration(200)
        .itemInputs([
            'ae2:logic_processor',
            'ae2:fluix_dust',
            '#forge:gems/certus_quartz',
        ])
        .itemOutputs('ae2:formation_core')
        .EUt(30)
})
