ServerEvents.recipes( event => {
	
	event.remove({ id:'computercraft:cable' })
    event.recipes.gtceu.assembler('computercraft:cable')
        .itemInputs('gtceu:gold_single_cable', 'gtceu:red_alloy_tiny_dust')
        .itemOutputs('computercraft:cable')
        .duration(200)
        .EUt(120)
        .circuit(1)

    event.remove({ id:'computercraft:disk_drive' })
    event.recipes.gtceu.assembler('computercraft:disk_drive')
        .itemInputs('gtceu:lv_machine_casing', '2x #forge:circuits/hv', 'gtceu:mv_electric_motor', 'gtceu:copper_small_spring', 'gtceu:magnetic_iron_rod', 'gtceu:glass_lens')
        .inputFluids('gtceu:polyethylene 72')
        .itemOutputs('computercraft:disk_drive')
        .duration(200)
        .EUt(120)
    
    event.remove({ id:'computercraft:printer' })
    event.recipes.gtceu.assembler('computercraft:printer')
        .itemInputs('gtceu:lv_machine_casing', '2x #forge:circuits/hv', 'gtceu:mv_electric_motor', '2x gtceu:copper_small_spring', 'gtceu:iron_rod')
        .inputFluids('gtceu:polyethylene 72')
        .itemOutputs('computercraft:printer')
        .duration(200)
        .EUt(120)
    
    event.remove({ id:'computercraft:speaker' })
    event.recipes.gtceu.assembler('computercraft:speaker')
        .itemInputs('gtceu:lv_machine_casing', '2x #forge:circuits/hv', 'minecraft:note_block')
        .inputFluids('gtceu:polyethylene 72')
        .itemOutputs('computercraft:speaker')
        .duration(200)
        .EUt(120)
    
    event.remove({ id:'computercraft:monitor_normal' })
    event.recipes.gtceu.assembler('computercraft:monitor_normal')
        .itemInputs('gtceu:lv_machine_casing', '2x #forge:circuits/hv', 'create:display_board')
        .inputFluids('gtceu:polyethylene 72')
        .itemOutputs('computercraft:monitor_normal')
        .duration(200)
        .EUt(120)
    
    event.remove({ id:'computercraft:monitor_advanced' })
    event.recipes.gtceu.assembler('computercraft:monitor_advanced')
        .itemInputs('gtceu:hv_machine_casing', '2x #forge:circuits/ev', 'create:display_board')
        .inputFluids('gtceu:polytetrafluoroethylene 72')
        .itemOutputs('computercraft:monitor_advanced')
        .duration(200)
        .EUt(120)
    
    // Modems
    event.remove({ id:'computercraft:wired_modem' })
    event.recipes.gtceu.assembler('computercraft:wired_modem')
        .itemInputs('gtceu:lv_machine_casing', 'gtceu:plastic_circuit_board', '2x computercraft:cable', '#forge:circuits/mv')
        .inputFluids('gtceu:polyethylene 72')
        .itemOutputs('computercraft:wired_modem')
        .duration(200)
        .EUt(120)
        .circuit(1)
    event.remove({ id:'computercraft:wireless_modem_normal' })
    event.recipes.gtceu.assembler('computercraft:wireless_modem_normal')
        .itemInputs('gtceu:mv_machine_casing', 'gtceu:epoxy_circuit_board', '2x computercraft:cable', '#forge:circuits/hv', 'gtceu:mv_emitter', 'gtceu:mv_sensor')
        .inputFluids('gtceu:polyvinyl_chloride 72')
        .itemOutputs('computercraft:wireless_modem_normal')
        .duration(200)
        .EUt(256)
        .circuit(1)
    event.remove({ id:'computercraft:wireless_modem_advanced' })
    event.recipes.gtceu.assembler('computercraft:wireless_modem_advanced')
        .itemInputs('gtceu:hv_machine_casing', 'gtceu:fiber_reinforced_circuit_board', '2x computercraft:cable', '#forge:circuits/ev', 'gtceu:hv_emitter', 'gtceu:hv_sensor')
        .inputFluids('gtceu:polytetrafluoroethylene 72')
        .itemOutputs('computercraft:wireless_modem_advanced')
        .duration(200)
        .EUt(480)
        .circuit(1)
    
    // Disks
    event.recipes.gtceu.assembler('computercraft:disk_16')
        .itemInputs('gtceu:glass_lens', '4x gtceu:aluminium_foil', '4x gtceu:polyethylene_foil')
        .inputFluids('gtceu:cobalt 36')
        .itemOutputs('computercraft:disk')
        .duration(200)
        .EUt(120)
        .circuit(1)
    // Move dye_colors into a common script if it is needed by anything else
    const dye_colors = [
        'white',
        'orange',
        'magenta',
        'light_blue',
        'yellow',
        'lime',
        'pink',
        'gray',
        'light_gray',
        'cyan',
        'purple',
        'blue',
        'brown',
        'green',
        'red',
        'black',
    ]
    const disk_dye_hex_codes = [
        1118481,
        13388876,
        5744206,
        8349260,
        3368652,
        11691749,
        5020082,
        10066329,
        5000268,
        15905484,
        8375321,
        14605932,
        10072818,
        150404472,
        15905331,
        15790320,
    ]
    for (let i = 0; i < 16; i++) {
        var disk_number = i + 1
        event.remove({ id: 'computercraft:disk_' + disk_number })
        event.shapeless(Item.of('computercraft:disk', { 'Color': disk_dye_hex_codes[15 - i] }), [
            'computercraft:disk',
            '#forge:dyes/' + dye_colors[i]
        ]).modifyResult((grid, result) => {
            let disk = grid.find('computercraft:disk')
            return disk.copy().nbt.merge({ 'Color': disk_dye_hex_codes[15 - i] })
        })
    }
})