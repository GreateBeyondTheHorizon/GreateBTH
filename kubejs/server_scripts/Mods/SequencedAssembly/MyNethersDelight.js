ServerEvents.recipes(event => {
    event.remove({id: 'mynethersdelight:crafting/hotdog'})

    event.recipes.createSequencedAssembly(['mynethersdelight:hotdog'], 'minecraft:bread',
        [
            event.recipes.createDeploying('minecraft:bread', [
                'minecraft:bread',
                'mynethersdelight:roasted_sausage'
            ])
        ]
    ).transitionalItem('minecraft:bread').loops(1)
})