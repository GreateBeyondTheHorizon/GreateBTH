const sg = ['sgjourney:classic_stargate_base_block', 'sgjourney:classic_stargate_chevron_block', 'sgjourney:classic_stargate_ring_block', 'sgjourney:classic_dhd', 
 'sgjourney:archeology_table','sgjourney:naquadah_block', 'sgjourney:basic_interface', 'sgjourney:crystal_interface', 'sgjourney:advanced_crystal_interface', 
 'sgjourney:ancient_gene_detector','sgjourney:matok', 'sgjourney:memory_crystal', 'sgjourney:advanced_memory_crystal', 'sgjourney:materialization_crystal',  
 'sgjourney:advanced_materialization_crystal',  'sgjourney:energy_crystal','sgjourney:advanced_energy_crystal', 'sgjourney:transfer_crystal',  
 'sgjourney:advanced_transfer_crystal', 'sgjourney:communication_crystal', 'sgjourney:advanced_communication_crystal', 'gtceu:naquadah_crushed_ore',
 'sgjourney:vial', 'sgjourney:naquadah_rod', 'sgjourney:reaction_chamber', 'sgjourney:plasma_converter', 'sgjourney:pda','sgjourney:naquadah_sword', 
 'sgjourney:naquadah_pickaxe', 'sgjourney:naquadah_axe', 'sgjourney:naquadah_alloy', 'sgjourney:naquadah_shovel',
 'sgjourney:naquadah_hoe', 'sgjourney:naquadah_helmet','sgjourney:naquadah_chestplate', 'sgjourney:naquadah_leggings','sgjourney:naquadah_boots', 
 'sgjourney:kara_kesh', 'sgjourney:ring_remote', 'sgjourney:jackal_helmet', 'sgjourney:jaffa_helmet', 'sgjourney:jaffa_chestplate', 'sgjourney:jaffa_leggings',
 'sgjourney:jaffa_boots', 'sgjourney:syringe','sgjourney:syringe', 'sgjourney:crystal_base', 'sgjourney:advanced_crystal_base', 'sgjourney:large_control_crystal',
 'sgjourney:control_crystal', 'sgjourney:advanced_control_crystal', 'sgjourney:stargate_upgrade_crystal', 'sgjourney:stargate_variant_crystal', 'sgjourney:fire_pit',
 'sgjourney:raw_naquadah_block', 'sgjourney:naquadah_stairs' ]


ServerEvents.recipes(event => {

    sg.forEach((element) => event.remove({output: element}))

    event.remove({input: 'sgjourney:pure_naquadah'})
    event.remove({input: 'sgjourney:naquadah'})
    event.remove({input: 'sgjourney:raw_naquadah_block'})
    

    event.shaped(
        Item.of('sgjourney:naquadah_block', 8),
        [
            "BBB",
            "BAB",
            "BBB"
        ],
        {
            A: 'gtceu:naquadah_nugget',
            B: 'minecraft:stone'
        }
    )

    event.shaped(
        Item.of('sgjourney:naquadah_stairs', 4),
        [
            "   ",
            " A ",
            " AA"
        ],
        {
            A: 'sgjourney:naquadah_block',
        }
    )
    event.shaped(
        Item.of('sgjourney:naquadah_slab', 6),
        [
            "   ",
            "   ",
            "AAA"
        ],
        {
            A: 'sgjourney:naquadah_block',
        }
    )
    event.shaped(
        Item.of('sgjourney:cut_naquadah_stairs', 4),
        [
            "   ",
            " A ",
            " AA"
        ],
        {
            A: 'sgjourney:cut_naquadah_block',
        }
    )
    event.shaped(
        Item.of('sgjourney:cut_naquadah_slab', 6),
        [
            "   ",
            "   ",
            "AAA"
        ],
        {
            A: 'sgjourney:cut_naquadah_block',
        }
    )

})