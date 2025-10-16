ServerEvents.recipes((event) => {
    event.remove({ id: 'farmersdelight:egg_sandwich' })
    event.remove({ id: 'farmersdelight:chicken_sandwich' })
    event.remove({ id: 'farmersdelight:hamburger' })
    event.remove({ id: 'farmersdelight:bacon_sandwich' })
    event.remove({ id: 'farmersdelight:mutton_wrap' })

    event.recipes
        .createSequencedAssembly(
            ['farmersdelight:egg_sandwich'],
            'minecraft:bread',
            [
                event.recipes.createDeploying('minecraft:bread', [
                    'minecraft:bread',
                    'farmersdelight:fried_egg',
                ]),
                event.recipes.createDeploying('minecraft:bread', [
                    'minecraft:bread',
                    'farmersdelight:fried_egg',
                ]),
                event.recipes.createDeploying('minecraft:bread', [
                    'minecraft:bread',
                    'minecraft:bread',
                ]),
            ]
        )
        .transitionalItem('minecraft:bread')
        .loops(1)

    event.recipes
        .createSequencedAssembly(
            ['farmersdelight:chicken_sandwich'],
            'minecraft:bread',
            [
                event.recipes.createDeploying('minecraft:bread', [
                    'minecraft:bread',
                    '#forge:cooked_chicken',
                ]),
                event.recipes.createDeploying('minecraft:bread', [
                    'minecraft:bread',
                    '#forge:crops/cabbage',
                ]),
                event.recipes.createDeploying('minecraft:bread', [
                    'minecraft:bread',
                    'minecraft:carrot',
                ]),
                event.recipes.createDeploying('minecraft:bread', [
                    'minecraft:bread',
                    'minecraft:bread',
                ]),
            ]
        )
        .transitionalItem('minecraft:bread')
        .loops(1)

    event.recipes
        .createSequencedAssembly(
            ['farmersdelight:hamburger'],
            'minecraft:bread',
            [
                event.recipes.createDeploying('minecraft:bread', [
                    'minecraft:bread',
                    'farmersdelight:beef_patty',
                ]),
                event.recipes.createDeploying('minecraft:bread', [
                    'minecraft:bread',
                    '#forge:crops/cabbage',
                ]),
                event.recipes.createDeploying('minecraft:bread', [
                    'minecraft:bread',
                    'farmersdelight:tomato',
                ]),
                event.recipes.createDeploying('minecraft:bread', [
                    'minecraft:bread',
                    'farmersdelight:onion',
                ]),
                event.recipes.createDeploying('minecraft:bread', [
                    'minecraft:bread',
                    'minecraft:bread',
                ]),
            ]
        )
        .transitionalItem('minecraft:bread')
        .loops(1)

    event.recipes
        .createSequencedAssembly(
            ['farmersdelight:bacon_sandwich'],
            'minecraft:bread',
            [
                event.recipes.createDeploying('minecraft:bread', [
                    'minecraft:bread',
                    'farmersdelight:cooked_bacon',
                ]),
                event.recipes.createDeploying('minecraft:bread', [
                    'minecraft:bread',
                    '#forge:crops/cabbage',
                ]),
                event.recipes.createDeploying('minecraft:bread', [
                    'minecraft:bread',
                    'farmersdelight:tomato',
                ]),
                event.recipes.createDeploying('minecraft:bread', [
                    'minecraft:bread',
                    'minecraft:bread',
                ]),
            ]
        )
        .transitionalItem('minecraft:bread')
        .loops(1)

    event.recipes
        .createSequencedAssembly(
            ['farmersdelight:mutton_wrap'],
            'minecraft:bread',
            [
                event.recipes.createDeploying('minecraft:bread', [
                    'minecraft:bread',
                    '#forge:cooked_mutton',
                ]),
                event.recipes.createDeploying('minecraft:bread', [
                    'minecraft:bread',
                    '#forge:crops/cabbage',
                ]),
                event.recipes.createDeploying('minecraft:bread', [
                    'minecraft:bread',
                    'farmersdelight:onion',
                ]),
                event.recipes.createDeploying('minecraft:bread', [
                    'minecraft:bread',
                    'minecraft:bread',
                ]),
            ]
        )
        .transitionalItem('minecraft:bread')
        .loops(1)
})
