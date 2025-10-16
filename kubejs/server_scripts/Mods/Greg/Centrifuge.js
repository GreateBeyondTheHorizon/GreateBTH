ServerEvents.recipes((event) => {
    event.replaceOutput(
        { type: 'gtceu:centrifuge', input: /gtceu:(impure|pure)(.*)/ },
        'gtceu:iron_dust',
        'gtceu:wrought_iron_dust'
    )
    event.replaceOutput(
        { type: 'gtceu:centrifuge', input: 'gtceu:goethite_dust' },
        'gtceu:iron_dust',
        'gtceu:wrought_iron_dust'
    )
    event.replaceOutput(
        { type: 'gtceu:centrifuge', input: 'minecraft:red_sand' },
        'gtceu:iron_dust',
        'gtceu:wrought_iron_dust'
    )
    event.replaceOutput(
        { type: 'gtceu:centrifuge', input: 'gtceu:yellow_limonite_dust' },
        'gtceu:iron_dust',
        'gtceu:wrought_iron_dust'
    )
})
