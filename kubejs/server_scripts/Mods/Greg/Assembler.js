ServerEvents.recipes(event => {
    event.remove({id: 'gtceu:assembler/energy_hatch_lv'})

    event.recipes.gtceu.assembler('lv_energy_hatch')
        .duration(200)
        .itemInputs(['gtceu:lv_machine_hull', '2x gtceu:tin_single_cable', 'gtceu:lv_voltage_coil'])
        .inputFluids(Fluid.of('gtceu:lubricant', 2000))
        .itemOutputs('gtceu:lv_energy_input_hatch')
        .EUt(30)
})