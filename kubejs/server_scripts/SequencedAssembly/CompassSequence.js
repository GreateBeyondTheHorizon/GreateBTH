ServerEvents.recipes(event=>{

    let empty_compass = 'kubejs:empty_compass';

    event.remove({output: 'minecraft:compass'});

    event.recipes.createSequencedAssembly([
            'minecraft:compass',
        ],	empty_compass, [
        event.recipes.createFilling(empty_compass, [empty_compass, Fluid.of('minecraft:water', 1000)]),
        event.recipes.createDeploying(empty_compass, [empty_compass, 'gtceu:magnetic_iron_rod']),
        event.recipes.createDeploying(empty_compass, [empty_compass, 'gtceu:red_alloy_bolt']),
        event.recipes.createDeploying(empty_compass, [empty_compass, 'minecraft:glass_pane'])
        ]).transitionalItem(empty_compass).loops(1)
})