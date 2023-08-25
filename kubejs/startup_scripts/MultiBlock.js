GTCEuStartupEvents.registry('gtceu:machine', event => {

    //multi
    event.create('ore_proc', 'multiblock')
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType('test_recipe_type')
    .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
    .pattern(definition => FactoryBlockPattern.start()
        .aisle("XXX", "XXX", "XXX")
        .aisle("XXX", "X#X", "XXX")
        .aisle("XXX", "XSX", "XXX")
        .where('S', Predicates.controller(Predicates.blocks(definition.get())))
        .where('X', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()).setMinGlobalLimited(5)
            .or(Predicates.autoAbilities(definition.getRecipeType())))
        .where('M', Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
        .where('#', Predicates.air())
        .build())
    .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
        "gtceu:block/multiblock/implosion_compressor", true)


})