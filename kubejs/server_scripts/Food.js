ServerEvents.recipes((event) => {
    event.remove({ id: /(farmersdelight|bucketlib):(.*)wheat_dough_from_(.*)/ })
    event.remove({ id: 'farmersrespite:chilidog_alt' })

    event.replaceInput(
        { id: 'mynethersdelight:nether_bricks_stove' },
        'minecraft:nether_brick',
        'gtceu:wrought_iron_plate'
    )
    event.replaceOutput(
        { id: 'mynethersdelight:powdery_plank' },
        'mynethersdelight:powdery_plank',
        '2x mynethersdelight:powdery_plank'
    )

    mixingRecipe(
        'farmersdelight:apple_pie',
        [
            '3x minecraft:wheat',
            '3x minecraft:apple',
            '2x minecraft:sugar',
            'farmersdelight:pie_crust',
        ],
        true
    )
    mixingRecipe(
        'farmersdelight:sweet_berry_cheesecake',
        [
            '6x minecraft:sweet_berries',
            Fluid.of('minecraft:milk', 2000),
            'farmersdelight:pie_crust',
        ],
        true
    )
    mixingRecipe(
        Item.of('4x farmersdelight:sweet_berry_cookie'),
        ['minecraft:sweet_berries', 'gtceu:dough'],
        true
    )
    mixingRecipe(
        Item.of('4x farmersdelight:honey_cookie'),
        [Fluid.of('create:honey', 250), 'gtceu:dough'],
        true
    )
    mixingRecipe('farmersdelight:melon_juice', [
        '4x minecraft:melon_slice',
        'minecraft:sugar',
        'minecraft:glass_bottle',
    ])
    mixingRecipe('farmersdelight:melon_popsicle', [
        '4x minecraft:melon_slice',
        '2x minecraft:ice',
        'minecraft:stick',
    ])
    mixingRecipe('farmersdelight:fruit_salad', [
        'minecraft:apple',
        '2x minecraft:melon_slice',
        '#minecraft:fox_food',
        'farmersdelight:pumpkin_slice',
        'minecraft:bowl',
    ])
    mixingRecipe('farmersdelight:mixed_salad', [
        '#forge:crops/cabbage',
        'farmersdelight:tomato',
        'minecraft:beetroot',
        'minecraft:bowl',
    ])
    mixingRecipe('farmersdelight:nether_salad', [
        'minecraft:crimson_fungus',
        'minecraft:warped_fungus',
        'minecraft:bowl',
    ])
    mixingRecipe('farmersdelight:rice_roll_medley_block', [
        '3x farmersdelight:kelp_roll_slice',
        '3x farmersdelight:salmon_roll',
        '2x farmersdelight:cod_roll',
        'minecraft:bowl',
    ])
    mixingRecipe('farmersdelight:pie_crust', [
        '3x gtceu:wheat_dust',
        Fluid.of('minecraft:milk', 250),
        'minecraft:egg',
    ])
    mixingRecipe(Item.of('2x aquaculturedelight:raw_fish_fillet_roll'), [
        '2x aquaculture:fish_fillet_raw',
        'farmersdelight:cooked_rice',
    ])
    mixingRecipe('ends_delight:chorus_fruit_popsicle', [
        '4x ends_delight:chorus_fruit_grain',
        '2x minecraft:ice',
        'minecraft:stick',
    ])
    mixingRecipe('ends_delight:end_mixed_salad', [
        'minecraft:chorus_fruit',
        '2x ends_delight:chorus_succulent',
        '#forge:crops/cabbage',
        'farmersdelight:tomato',
        'minecraft:bowl',
    ])
    mixingRecipe('ends_delight:assorted_salad', [
        'minecraft:chorus_fruit',
        'ends_delight:chorus_succulent',
        'minecraft:warped_fungus',
        'minecraft:crimson_fungus',
        '#forge:crops/cabbage',
        'farmersdelight:tomato',
        'minecraft:shulker_shell',
    ])
    mixingRecipe('oceansdelight:seagrass_salad', [
        'minecraft:seagrass',
        'minecraft:bowl',
    ])

    function mixingRecipe(output, inputs, heated) {
        event.remove({ output: output })
        if (heated) {
            event.recipes.create.mixing(output, inputs).heated()
        } else {
            event.recipes.create.mixing(output, inputs)
        }
    }

    compressingRecipe('farmersdelight:carrot_crate', 'minecraft:carrot')
    compressingRecipe('farmersdelight:potato_crate', 'minecraft:potato')
    compressingRecipe('farmersdelight:beetroot_crate', 'minecraft:beetroot')
    compressingRecipe('farmersdelight:cabbage_crate', 'farmersdelight:cabbage')
    compressingRecipe('farmersdelight:tomato_crate', 'farmersdelight:tomato')
    compressingRecipe('farmersdelight:onion_crate', 'farmersdelight:onion')
    compressingRecipe('farmersdelight:rice_bale', 'farmersdelight:rice_panicle')
    compressingRecipe('farmersdelight:rice_bag', 'farmersdelight:rice')
    compressingRecipe('farmersdelight:straw_bale', 'farmersdelight:straw')
    compressingRecipe('minecraft:cake', 'farmersdelight:cake_slice')
    compressingRecipe(
        'mynethersdelight:bullet_pepper_crate',
        'mynethersdelight:bullet_pepper'
    )
    compressingRecipe(
        'ends_delight:chorus_fruit_crate',
        'minecraft:chorus_fruit'
    )
    compressingRecipe(
        'farmersdelight:apple_pie',
        'farmersdelight:apple_pie_slice',
        true
    )
    compressingRecipe(
        'farmersdelight:chocolate_pie',
        'farmersdelight:chocolate_pie_slice',
        true
    )
    compressingRecipe(
        'farmersdelight:sweet_berry_cheesecake',
        'farmersdelight:sweet_berry_cheesecake_slice',
        true
    )
    compressingRecipe(
        'ends_delight:chorus_fruit_pie',
        'ends_delight:chorus_fruit_pie_slice',
        true
    )

    function compressingRecipe(output, input, small) {
        event.remove({
            type: 'minecraft:crafting_shaped',
            id: /crate|cake|pie|bale|bag/,
            output: output,
        })
        event.remove({
            type: 'minecraft:crafting_shapeless',
            id: /crate|cake|pie|bale|bag/,
            output: output,
        })
        event.remove({ type: 'minecraft:crafting_shaped', output: input })
        event.remove({ type: 'minecraft:crafting_shapeless', output: input })
        if (small) {
            event.recipes.create.compacting(output, `4x ${input}`)

            event.recipes.gtceu
                .extractor(input)
                .duration(300)
                .itemInputs(output)
                .itemOutputs(`4x ${input}`)
                .EUt(2)
        } else {
            event.recipes.create.compacting(output, `9x ${input}`)

            event.recipes.gtceu
                .extractor(input)
                .duration(300)
                .itemInputs(output)
                .itemOutputs(`9x ${input}`)
                .EUt(2)
        }
    }

    cookingPotRecipe(
        'farmersdelight:barbecue_stick',
        [
            'farmersdelight:tomato',
            'farmersdelight:onion',
            [
                '#forge:cooked_pork',
                '#forge:cooked_mutton',
                '#forge:cooked_beef',
                '#forge:cooked_chicken',
                'minecraft:cooked_rabbit',
                '#forge:cooked_fishes',
            ],
        ],
        'minecraft:stick'
    )
    cookingPotRecipe(
        'farmersdelight:shepherds_pie_block',
        [
            'minecraft:baked_potato',
            'minecraft:baked_potato',
            '#forge:milk',
            '#forge:cooked_mutton',
            'farmersdelight:onion',
        ],
        'minecraft:bowl'
    )
    cookingPotRecipe(
        'farmersdelight:stuffed_potato',
        ['minecraft:baked_potato', '#forge:cooked_beef', '#forge:milk'],
        null
    )
    cookingPotRecipe(
        'farmersdelight:salmon_roll',
        [
            'farmersdelight:salmon_slice',
            'farmersdelight:salmon_slice',
            'farmersdelight:cooked_rice',
        ],
        null
    )
    cookingPotRecipe(
        'farmersdelight:cod_roll',
        [
            'farmersdelight:cod_slice',
            'farmersdelight:cod_slice',
            'farmersdelight:cooked_rice',
        ],
        null
    )
    cookingPotRecipe(
        'farmersdelight:kelp_roll',
        [
            'farmersdelight:cooked_rice',
            'minecraft:carrot',
            'farmersdelight:cooked_rice',
            'minecraft:dried_kelp',
            'minecraft:dried_kelp',
            'minecraft:dried_kelp',
        ],
        null
    )
    cookingPotRecipe(
        'farmersdelight:bacon_and_eggs',
        [
            'farmersdelight:cooked_bacon',
            'farmersdelight:cooked_bacon',
            'farmersdelight:fried_egg',
            'farmersdelight:fried_egg',
        ],
        'minecraft:bowl'
    )
    cookingPotRecipe(
        'farmersdelight:roasted_mutton_chops',
        [
            'farmersdelight:cooked_mutton_chops',
            'minecraft:beetroot',
            'farmersdelight:cooked_rice',
            'farmersdelight:tomato',
        ],
        'minecraft:bowl'
    )
    cookingPotRecipe(
        'farmersdelight:steak_and_potatoes',
        [
            'minecraft:baked_potato',
            'minecraft:cooked_beef',
            'farmersdelight:onion',
            'farmersdelight:cooked_rice',
        ],
        'minecraft:bowl'
    )
    cookingPotRecipe(
        'farmersdelight:grilled_salmon',
        [
            '#forge:cooked_fishes/salmon',
            'minecraft:sweet_berries',
            '#forge:crops/cabbage',
            'farmersdelight:onion',
        ],
        'minecraft:bowl'
    )
    cookingPotRecipe(
        'farmersdelight:roast_chicken_block',
        [
            'farmersdelight:onion',
            'minecraft:egg',
            'minecraft:bread',
            'minecraft:carrot',
            'minecraft:cooked_chicken',
            'minecraft:baked_potato',
        ],
        'minecraft:bowl'
    )
    cookingPotRecipe(
        'farmersdelight:honey_glazed_ham_block',
        [
            'minecraft:sweet_berries',
            'minecraft:honey_bottle',
            'minecraft:sweet_berries',
            'farmersdelight:smoked_ham',
            'farmersdelight:cooked_rice',
            'farmersdelight:cooked_rice',
        ],
        'minecraft:bowl'
    )
    cookingPotRecipe(
        'mynethersdelight:raw_stuffed_hoglin',
        [
            'minecraft:warped_roots',
            'minecraft:crimson_fungus',
            'minecraft:crimson_roots',
            'mynethersdelight:hoglin_hide',
            'farmersdelight:ham',
            'farmersdelight:nether_salad',
        ],
        null
    )
    cookingPotRecipe(
        'mynethersdelight:bleeding_tartar',
        [
            '#forge:eggs',
            'mynethersdelight:minced_strider',
            'mynethersdelight:minced_strider',
        ],
        'minecraft:bowl'
    )
    cookingPotRecipe(
        'mynethersdelight:striderloaf',
        [
            'mynethersdelight:strider_slice',
            'mynethersdelight:minced_strider',
            'mynethersdelight:minced_strider',
            'mynethersdelight:minced_strider',
        ],
        'minecraft:bowl'
    )
    cookingPotRecipe(
        'mynethersdelight:breakfast_sampler',
        [
            'mynethersdelight:roasted_sausage',
            'mynethersdelight:roasted_sausage',
            'minecraft:honey_bottle',
            '#forge:cooked_eggs',
            '#forge:cooked_eggs',
        ],
        'minecraft:bowl'
    )
    cookingPotRecipe(
        'mynethersdelight:blue_tenderloin_steak',
        [
            'minecraft:warped_fungus',
            [
                'minecraft:warped_fungus',
                'farmersdelight:straw',
                'minecraft:warped_roots',
            ],
            'mynethersdelight:cooked_loin',
        ],
        'minecraft:bowl'
    )
    cookingPotRecipe(
        'mynethersdelight:ghast_salad',
        ['mynethersdelight:ghasta', '#forge:vegetables', 'minecraft:carrot'],
        'minecraft:bowl'
    )
    cookingPotRecipe(
        'mynethersdelight:ghasta_with_cream',
        [
            'mynethersdelight:ghasta',
            'mynethersdelight:ghasta',
            'mynethersdelight:ghasta',
            'mynethersdelight:ghasta',
            'minecraft:ghast_tear',
            'minecraft:magma_cream',
        ],
        'minecraft:bowl'
    )
    cookingPotRecipe(
        'mynethersdelight:spicy_skewer',
        [
            '#mynethersdelight:strider_meats',
            'mynethersdelight:bullet_pepper',
            'mynethersdelight:bullet_pepper',
        ],
        'minecraft:blaze_rod'
    )
    cookingPotRecipe(
        'aquaculturedelight:large_fish_with_vegetables',
        [
            'farmersdelight:tomato',
            'aquaculture:fish_fillet_cooked',
            'aquaculture:fish_fillet_cooked',
            'farmersdelight:onion',
            'farmersdelight:rice',
        ],
        'minecraft:bowl'
    )
    cookingPotRecipe(
        'aquaculturedelight:turtle_meat_dish',
        [
            'farmersdelight:pumpkin_slice',
            'aquaculturedelight:cooked_small_turtle_meat',
            'aquaculturedelight:cooked_small_turtle_meat',
            'minecraft:carrot',
            '#forge:crops/cabbage',
        ],
        'minecraft:bowl'
    )
    cookingPotRecipe(
        'aquaculturedelight:catfish_barbecue',
        [
            'farmersdelight:tomato',
            '#forge:crops/cabbage',
            '#forge:raw_fishes/catfish',
        ],
        'minecraft:stick'
    )
    cookingPotRecipe(
        'ends_delight:shulker_omelette_mixture',
        ['#forge:eggs', '#forge:shulker_meat', 'farmersdelight:onion'],
        'minecraft:bowl'
    )
    cookingPotRecipe(
        'ends_delight:raw_ender_sausage',
        ['#forge:raw_dragon_meat', 'ends_delight:enderman_gistle'],
        'ends_delight:chorus_sauce'
    )
    cookingPotRecipe('ends_delight:stuffed_rice_cake', [
        '#forge:crops/rice',
        'minecraft:sugar',
        'minecraft:chorus_fruit',
    ])
    cookingPotRecipe('ends_delight:chorus_cookie', [
        'minecraft:wheat',
        'minecraft:wheat',
        'ends_delight:chorus_fruit_grain',
    ])
    cookingPotRecipe('ends_delight:chorus_flower_pie', [
        '#forge:dough',
        'ends_delight:dried_chorus_flower',
        'ends_delight:dried_chorus_flower',
        'minecraft:poppy',
        'minecraft:sugar',
    ])
    cookingPotRecipe(
        'ends_delight:dragon_breath_soda',
        ['minecraft:dragon_breath', 'minecraft:sugar'],
        'minecraft:glass_bottle'
    )
    cookingPotRecipe(
        'ends_delight:roasted_dragon_steak',
        [
            'ends_delight:chorus_sauce',
            '#forge:roasted_dragon_meat',
            'farmersdelight:tomato',
            'minecraft:warped_fungus',
            'minecraft:crimson_fungus',
            'minecraft:chorus_fruit',
        ],
        'minecraft:bowl'
    )
    cookingPotRecipe(
        'ends_delight:end_barbecue_stick',
        [
            '#forge:roasted_shulker_meat',
            '#forge:roasted_dragon_meat',
            'minecraft:chorus_fruit',
            'ends_delight:dried_endermite_meat',
        ],
        'minecraft:stick'
    )
    cookingPotRecipe(
        'ends_delight:dragon_leg_with_sauce_block',
        [
            'farmersdelight:tomato',
            'ends_delight:chorus_sauce',
            'minecraft:crimson_fungus',
            'minecraft:warped_fungus',
            'ends_delight:smoked_dragon_leg',
            'minecraft:chorus_fruit',
        ],
        'minecraft:bowl'
    )
    cookingPotRecipe(
        'ends_delight:grilled_shulker_block',
        [
            'ends_delight:chorus_succulent',
            'farmersdelight:onion',
            'farmersdelight:tomato',
            'ends_delight:roasted_shulker_meat',
            'minecraft:chorus_fruit',
        ],
        'minecraft:shulker_shell'
    )
    cookingPotRecipe(
        'oceansdelight:tentacle_on_a_stick',
        ['oceansdelight:tentacles'],
        'minecraft:stick'
    )
    cookingPotRecipe(
        'oceansdelight:elder_guardian_roll',
        [
            'oceansdelight:elder_guardian_slice',
            'oceansdelight:elder_guardian_slice',
        ],
        'farmersdelight:cooked_rice'
    )
    cookingPotRecipe(
        'oceansdelight:cabbage_wrapped_elder_guardian',
        [
            'farmersdelight:onion',
            'farmersdelight:tomato',
            'oceansdelight:cooked_elder_guardian_slice',
        ],
        'farmersdelight:cabbage'
    )
    cookingPotRecipe(
        'oceansdelight:fugu_roll',
        ['oceansdelight:fugu_slice', 'oceansdelight:fugu_slice'],
        'farmersdelight:cooked_rice'
    )
    cookingPotRecipe('oceansdelight:stuffed_cod', [
        'minecraft:kelp',
        'farmersdelight:onion',
        'farmersdelight:tomato',
        'minecraft:brown_mushroom',
        'minecraft:cod',
        'farmersdelight:rope',
    ])

    function cookingPotRecipe(output, inputs, container) {
        event.remove({ output: output })
        if (container != null) {
            event.recipes.farmersdelight.cooking(
                inputs,
                output,
                0,
                60,
                container
            )
        } else {
            event.recipes.farmersdelight.cooking(inputs, output, 0, 60)
        }
    }
})
