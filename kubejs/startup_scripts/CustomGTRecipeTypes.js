//priority: 1
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('rocket_component_assembler')
        .category('rocket_component_assembler')
        .setEUIO('in')
        .setMaxIOSize(6, 1, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER)
})