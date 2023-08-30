// priority: 0
ServerEvents.recipes(event => {
    // cooking tools
    // saucepan
    event.shaped(Item.of('pamhc2foodcore:saucepanitem', 1), 
        [
            'ECB',
            'DAC',
            'DDF',
        ],
        {
            A: 'minecraft:bucket',
            B: 'gtceu:iron_rod',
            C: 'gtceu:treated_wood_rod',
            D: 'gtceu:copper_plate',
            E: '#forge:tools/files',
            F: '#forge:tools/hammers',
        }
    )
    // cutting board
    event.shaped(Item.of('pamhc2foodcore:cuttingboarditem', 1),
        [
            '   ',
            ' A ',
            'BBB',
        ],
        {
            A:'#forge:tools/butchery_knives',
            B: 'gtceu:wood_plate',
        }
    )
    // skillet
    event.shaped(Item.of('pamhc2foodcore:skilletitem', 1),
        [
            'DEG',
            'BCG',
            'ABF'
        ],
        {
            A: 'gtceu:iron_rod',
            B: 'gtceu:treated_wood_rod',
            C: 'minecraft:bucket',
            D: 'gtceu:iron_ring',
            E: '#forge:tools/files',
            F: '#forge:tools/hammers',
            G: 'gtceu:copper_plate',
        }
    )
    // mixing bowl
    event.shaped(Item.of('pamhc2foodcore:mixingbowlitem', 1),
        [
            'CDC',
            'BAB',
            'CBC',
        ],
        {
            A: 'minecraft:bucket',
            B: 'gtceu:copper_plate',
            C: 'gtceu:iron_screw',
            D: '#forge:tools/hammers'
        }
    )
    // bakeware
    event.shaped(Item.of('pamhc2foodcore:bakewareitem', 1),
        [
            'B B',
            'BAB',
            'CBC',
        ],
        {
            A: '#forge:tools/hammers',
            B: 'gtceu:stainless_steel_plate',
            C: 'gtceu:stainless_steel_bolt'
        }
    )
    // pot
    event.shaped(Item.of('pamhc2foodcore:potitem', 1),
        [
            'EBF',
            'CAC',
            'DBD',
        ],
        {
            A: 'minecraft:bucket',
            B: 'gtceu:copper_plate',
            C: 'gtceu:iron_ring',
            D: 'gtceu:steel_screw',
            E: '#forge:tools/files',
            F: '#forge:tools/hammers',
        }
    )
    // juicer
    event.shaped(Item.of('pamhc2foodcore:juiceritem', 1),
        [
            'BDB',
            'BAB',
            'CBC',
        ],
        {
            A: 'gtceu:stainless_steel_drill_head',
            B: 'gtceu:stainless_steel_plate',
            C: 'gtceu:stainless_steel_bolt',
            D: '#forge:tools/files'
        }
    )
    // grinder
    event.shaped(Item.of('pamhc2foodcore:grinderitem', 1),
        [
            'ACA',
            'ADA',
            'BAB',
        ],
        {
            A: 'minecraft:smooth_stone',
            B: 'gtceu:iron_plate',
            C: '#forge:tools/files',
            D: '#forge:tools/mortars'
        }
    )
    //roller
    event.shaped(Item.of('pamhc2foodcore:rolleritem', 1),
        [
            'BC ',
            'CAC',
            ' CB',
        ],
        {
            A: '#minecraft:logs',
            B: 'gtceu:iron_rod',
            C: 'gtceu:iron_bolt'
        }
    )
})