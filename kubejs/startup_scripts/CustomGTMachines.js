GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('rocket_component_assembler', 'simple')
        .tiers(GTValues.HV, GTValues.EV, GTValues.IV) 
        .tankScalingFunction(tier => tier * 4000)
        .definition((tier, builder) => builder
            .rotationState(RotationState.NON_Y_AXIS)
            .recipeType('rocket_component_assembler')
            .workableTieredHullRenderer('gtceu:block/machines/laser_engraver'))
})