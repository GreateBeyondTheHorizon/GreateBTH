ServerEvents.recipes((event) => {
    event.remove({ id: 'aether:skyroot_barrel' })
    event.remove({ id: 'aether:skyroot_chest' })
    event.remove({ id: 'aether:skyroot_piston' })
    event.remove({ id: 'aether:skyroot_cartography_table' })
    event.remove({ id: 'aether:skyroot_smithing_table' })
    event.remove({ id: 'aether:skyroot_grindstone_holystone_slab' })
    event.remove({ id: 'aether:skyroot_grindstone' })
    event.remove({ id: 'aether:skyroot_fletching_table' })
    event.remove({ id: 'aether:skyroot_beehive' })
    event.remove({ id: 'aether:skyroot_loom' })
    event.remove({ id: 'aether:skyroot_note_block' })
    event.remove({ id: 'aether:gravitite_jukebox' })
    event.remove({ id: 'aether:skyroot_jukebox' })
    event.remove({ id: 'aether:skyroot_gravitite_jukebox' })
    event.remove({ id: 'aether:skyroot_tripwire_hook' })
    event.remove({ id: 'aether:skyroot_crafting_table' })
    event.remove({ id: 'aether:skyroot_bed' })
    event.remove({ id: 'aether:skyroot_iron_vanilla_shield' })
    event.remove({ id: 'aether:skyroot_lectern' })
    event.remove({ id: 'deep_aether:skyroot_crafting_table' })
    event.remove({
        id: /(aether|deep_aether):(leather|chainmail|iron|golden|diamond|zanite|skyjade|gravitite)_gloves/,
    })
    event.remove({
        id: /(aether|deep_aether):(iron|golden|zanite|skyjade|gravitite)_ring/,
    })
    event.remove({ id: /aether:(iron|golden|zanite)_pendant/ })
    event.remove({
        id: /(aether|deep_aether):(zanite|skyjade|gravitite)_(helmet|chestplate|leggings|boots)/,
    })
    event.remove({
        id: /(aether|deep_aether):(zanite|skyjade|gravitite)_(sword|pickaxe|axe|shovel|hoe)/,
    })
    event.remove({ id: 'aether:quicksoil_glass_enchanting' })
    event.remove({
        id: 'aether:ambrosium_enchant_aether_grass_to_enchanted_aether_grass',
    })

    event.replaceInput(
        { id: 'deep_aether:stratus_smithing_template_from_gravitite' },
        'gtceu:gravitite_block',
        'gtceu:gravitite_gem'
    )

    event.shaped('aether:skyroot_bed', ['CCC', 'PPP', 'FMF'], {
        C: '#minecraft:wool_carpets',
        P: '#minecraft:planks',
        F: '#minecraft:fences',
        M: '#forge:tools/mallets',
    })

    glovesRecipe('aether:leather_gloves', 'minecraft:leather')
    glovesRecipe('aether:chainmail_gloves', 'gtceu:wrought_iron_plate')
    glovesRecipe('aether:iron_gloves', 'gtceu:iron_plate')
    glovesRecipe('aether:golden_gloves', 'gtceu:gold_plate')
    glovesRecipe('aether:diamond_gloves', 'gtceu:diamond_plate')
    glovesRecipe('aether:zanite_gloves', 'gtceu:zanite_plate')
    glovesRecipe('deep_aether:skyjade_gloves', 'gtceu:skyjade_plate')
    glovesRecipe('aether:gravitite_gloves', 'gtceu:gravitite_plate')
    glovesRecipe('aether:obsidian_gloves', 'gtceu:obsidian_plate')

    function glovesRecipe(output, plate) {
        event.shaped(output, ['PHP'], {
            P: plate,
            H: '#forge:tools/hammers',
        })
    }

    ringRecipe('aether:iron_ring', 'gtceu:iron_plate')
    ringRecipe('aether:golden_ring', 'gtceu:gold_plate')
    ringRecipe('aether:zanite_ring', 'gtceu:zanite_plate')
    ringRecipe('deep_aether:skyjade_ring', 'gtceu:skyjade_plate')
    ringRecipe('deep_aether:gravitite_ring', 'gtceu:gravitite_plate')

    function ringRecipe(output, plate) {
        event.shaped(output, [' P ', 'PHP', ' P '], {
            P: plate,
            H: '#forge:tools/hammers',
        })
    }

    pendantRecipe('aether:iron_pendant', 'gtceu:iron_plate')
    pendantRecipe('aether:golden_pendant', 'gtceu:gold_plate')
    pendantRecipe('aether:zanite_pendant', 'gtceu:zanite_plate')

    function pendantRecipe(output, plate) {
        event.shaped(output, ['SSS', 'SHS', ' P '], {
            P: plate,
            H: '#forge:tools/hammers',
            S: 'minecraft:string',
        })
    }

    armorAndToolRecipe('aether', 'zanite')
    armorAndToolRecipe('deep_aether', 'skyjade')
    armorAndToolRecipe('aether', 'gravitite')
    armorRecipe('aether', 'obsidian')

    function armorRecipe(mod, material) {
        event.shaped(`${mod}:${material}_helmet`, ['PPP', 'PHP'], {
            P: `gtceu:${material}_plate`,
            H: '#forge:tools/hammers',
        })

        event.shaped(`${mod}:${material}_chestplate`, ['PHP', 'PPP', 'PPP'], {
            P: `gtceu:${material}_plate`,
            H: '#forge:tools/hammers',
        })

        event.shaped(`${mod}:${material}_leggings`, ['PPP', 'PHP', 'P P'], {
            P: `gtceu:${material}_plate`,
            H: '#forge:tools/hammers',
        })

        event.shaped(`${mod}:${material}_boots`, ['P P', 'PHP'], {
            P: `gtceu:${material}_plate`,
            H: '#forge:tools/hammers',
        })
    }

    function armorAndToolRecipe(mod, material) {
        armorRecipe(mod, material)

        event.shaped(`${mod}:${material}_sword`, [' P ', 'HPF', ' S '], {
            P: `gtceu:${material}_plate`,
            H: '#forge:tools/hammers',
            F: '#forge:tools/files',
            S: 'aether:skyroot_stick',
        })

        event.shaped(`${mod}:${material}_pickaxe`, ['PII', 'HSF', ' S '], {
            P: `gtceu:${material}_plate`,
            I: `gtceu:${material}_gem`,
            F: '#forge:tools/files',
            H: '#forge:tools/hammers',
            S: 'aether:skyroot_stick',
        })

        event.shaped(`${mod}:${material}_axe`, ['PIF', 'PS ', 'HS '], {
            P: `gtceu:${material}_plate`,
            H: '#forge:tools/hammers',
            I: `gtceu:${material}_gem`,
            F: '#forge:tools/files',
            S: 'aether:skyroot_stick',
        })

        event.shaped(`${mod}:${material}_shovel`, ['HPF', ' S ', ' S '], {
            P: `gtceu:${material}_plate`,
            F: '#forge:tools/files',
            H: '#forge:tools/hammers',
            S: 'aether:skyroot_stick',
        })

        event.shaped(`${mod}:${material}_hoe`, ['PIF', 'HS ', ' S '], {
            P: `gtceu:${material}_plate`,
            H: '#forge:tools/hammers',
            F: '#forge:tools/files',
            I: `gtceu:${material}_gem`,
            S: 'aether:skyroot_stick',
        })
    }
})
