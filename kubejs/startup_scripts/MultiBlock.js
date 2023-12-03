GTCEuStartupEvents.registry('gtceu:machine', event => {

    //multi
     event.create('ore_proc', 'multiblock')
     .rotationState(RotationState.NON_Y_AXIS)
     .recipeTypes(['ore_proc'])
     .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
     .pattern(definition => FactoryBlockPattern.start()
         .aisle("PPPPP", "PTTTP", "PTTTP", "PPPPP")
         .aisle("PPPPP", "SWGWS", "SWGWS", "PPPPP")
         .aisle("PPPPP", "S#G#S", "S#G#S", "PPMPP")
         .aisle("PPPPP", "SWGWS", "SWGWS", "PPPPP")
         .aisle("PPPPP", "PTCTP", "PTTTP", "PPPPP")
         .where('C', Predicates.controller(Predicates.blocks(definition.get())))
         .where('P', Predicates.blocks('gtceu:inert_machine_casing').setMinGlobalLimited(5).or(Predicates.autoAbilities(definition.getRecipeTypes())))
         .where('S', Predicates.blocks('gtceu:stainless_steel_frame'))
         .where('T', Predicates.blocks('gtceu:tempered_glass'))
         .where('G', Predicates.blocks('gtceu:steel_gearbox'))
         .where('W', Predicates.blocks('create:crushing_wheel'))
         .where('M', Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
         .where('#', Predicates.air())
         .build())
     .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_inert_ptfe",
         "gtceu:block/multiblock/implosion_compressor", false)

 })

 GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    
     event.create('ore_proc')
         .category('multi') //Used in the GTlib / LDlib ui editor
         .setEUIO('in')
         .setMaxIOSize(3, 4, 4, 3) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
         .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
 		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
 	    .setSound(GTSoundEntries.FIRE);
 })