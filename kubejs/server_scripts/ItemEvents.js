ItemEvents.crafted((event) => {
    if (event.getItem().id.includes('_bed')) {
        if (!event.getPlayer().stages.has('crafted_bed')) {
            event.getPlayer().stages.add('crafted_bed')
            event
                .getPlayer()
                .displayClientMessage(
                    Component.literal(
                        'You have unlocked the ability to use a bed.'
                    ),
                    true
                )
        }
    }
})
