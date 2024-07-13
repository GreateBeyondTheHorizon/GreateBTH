ServerEvents.recipes(event => {
    event.remove({id: 'aether:skyroot_barrel'})
    event.remove({id: 'aether:skyroot_chest'})
    event.remove({id: 'aether:skyroot_piston'})
    event.remove({id: 'aether:skyroot_cartography_table'})
    event.remove({id: 'aether:skyroot_smithing_table'})
    event.remove({id: 'aether:skyroot_grindstone_holystone_slab'})
    event.remove({id: 'aether:skyroot_grindstone'})
    event.remove({id: 'aether:skyroot_loom'})
    event.remove({id: 'aether:skyroot_note_block'})
    event.remove({id: 'aether:gravitite_jukebox'})
    event.remove({id: 'aether:skyroot_jukebox'})
    event.remove({id: 'aether:skyroot_gravitite_jukebox'})
    event.remove({id: 'aether:skyroot_tripwire_hook'})
    event.remove({id: 'aether:skyroot_crafting_table'})
    event.remove({id: 'aether:skyroot_bed'})
    event.remove({id: /(aether|deep_aether):(leather|chainmail|iron|gold|diamond|netherite|zanite|skyjade)_gloves/})

    event.shaped('aether:skyroot_bed',
		[
			'CCC',
			'PPP',
			'FMF',
		],
		{
			C: '#minecraft:wool_carpets',
			P: '#minecraft:planks',
			F: '#minecraft:fences',
			M: '#forge:tools/mallets'
		}
	)
})