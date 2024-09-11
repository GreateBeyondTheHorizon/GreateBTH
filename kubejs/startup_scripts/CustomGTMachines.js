GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('rocket_component_assembler', 'simple', GTValues.HV, GTValues.EV, GTValues.IV) 
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('rocket_component_assembler', true, true)
        .tankScalingFunction(tier => tier * 4000)
        .workableTieredHullRenderer('gtceu:block/machines/laser_engraver')
})