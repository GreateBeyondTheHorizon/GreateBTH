// priority: 0
ServerEvents.recipes(event => {

    let tiers = [
        'andesite',
        'steel',
        'aluminium',
        'stainless_steel',
        'titanium',
        //'tungsten_steel',
        'palladium',
        'naquadah',
        'darmstadtium',
        'neutronium'
    ];

    let plates = [
        'wood',
        'stone',
        'steel',
        'aluminium',
        'stainless_steel',
        'titanium',
        //'tungsten_steel',
        'palladium',
        'naquadah',
        'darmstadtium'
    ];

    tiers.forEach((tier, index) => {
        event.recipes.createDeploying(`greate:${tier}_cogwheel`, [`greate:${tier}_shaft`, `gtceu:${plates[index]}_plate`]);
        event.recipes.createDeploying(`greate:large_${tier}_cogwheel`, [`greate:${tier}_cogwheel`, `gtceu:${plates[index]}_plate`]);
        event.recipes.createSequencedAssembly([
            `greate:large_${tier}_cogwheel`
        ],  `greate:${tier}_shaft`, [
            event.recipes.createDeploying(`greate:${tier}_cogwheel`, [`greate:${tier}_cogwheel`, `gtceu:${plates[index]}_plate`])
        ]).transitionalItem(`greate:${tier}_cogwheel`).loops(2)
    });

});
