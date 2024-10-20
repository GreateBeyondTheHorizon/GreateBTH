//priority: 1
var extraRecipesToRemove = [
    'aquaculture:iron_nugget_from_smelting',
    'farmersdelight:iron_nugget_from_smelting_knife',
    'aquaculture:gold_nugget_from_smelting',
    'farmersdelight:gold_nugget_from_smelting_knife',
    'create:smelting/iron_ingot_from_crushed',
    'create:smelting/copper_ingot_from_crushed',
    'create:smelting/gold_ingot_from_crushed',
    'aquaculture:neptunium_ingot_from_blasting',
    'aquaculture:iron_nugget_from_blasting',
    'farmersdelight:iron_nugget_from_blasting_knife',
    'aquaculture:gold_nugget_from_blasting',
    'farmersdelight:gold_nugget_from_blasting_knife',
    'create:blasting/iron_ingot_from_crushed',
    'create:blasting/copper_ingot_from_crushed',
    'create:blasting/gold_ingot_from_crushed',
    'gtceu:steam_boiler/aquaculture_wooden_fillet_knife',
    'gtceu:large_boiler/aquaculture_wooden_fillet_knife',
    'create:splashing/crushed_raw_gold',
    'create:splashing/crushed_raw_copper',
    'create:splashing/crushed_raw_iron',
    /gtceu:(macerator|arc_furnace)(.*)solar_boiler/,
    /gtceu:(macerator|arc_furnace)(.*)macerator/,
    /gtceu:(macerator|arc_furnace)(.*)bender/,
    /gtceu:(macerator|arc_furnace)(.*)mixer/,
    /gtceu:(macerator|arc_furnace)(.*)lv_cutter/,
	/gtceu:(macerator|arc_furnace)(.*)mv_cutter/,
	/gtceu:(macerator|arc_furnace)(.*)hv_cutter/,
	/gtceu:(macerator|arc_furnace)(.*)ev_cutter/,
	/gtceu:(macerator|arc_furnace)(.*)iv_cutter/,
	/gtceu:(macerator|arc_furnace)(.*)luv_cutter/,
	/gtceu:(macerator|arc_furnace)(.*)zpm_cutter/,
	/gtceu:(macerator|arc_furnace)(.*)uv_cutter/
]

var recipesToReplace = [
    {removedItem: "ad_astra:steel_rod", replacement: '#forge:rods/steel'},
    {removedItem: "ad_astra:iron_rod", replacement: '#forge:rods/iron'},
	{removedItem: 'ad_astra:desh_engine', replacement: 'kubejs:tungsten_steel_engine'},

    {removedItem: "ae2:ender_dust", replacement: 'gtceu:ender_pearl_dust'},
    {removedItem: "ae2:certus_quartz_crystal", replacement: 'gtceu:certus_quartz_gem'},

    {removedItem: "aether:ambrosium_shard", replacement: 'gtceu:ambrosium_gem'},
    {removedItem: "aether:zanite_gemstone", replacement: 'gtceu:zanite_gem'},

    {removedItem: "deep_aether:skyjade", replacement: 'gtceu:skyjade_gem'},

    {removedItem: "create:copper_sheet", replacement: '#forge:plates/copper'},
    {removedItem: "create:iron_sheet", replacement: '#forge:plates/iron'},
    {removedItem: "create:electron_tube", replacement: '#gtceu:circuits/ulv'},
    {removedItem: "create:sturdy_sheet", replacement: '#forge:plates/obsidian'},
    {removedItem: "create:brass_sheet", replacement: '#forge:plates/brass'},
    {removedItem: "create:brass_ingot", replacement: '#forge:plates/brass'},
    {removedItem: "create:zinc_ingot", replacement: '#forge:plates/zinc'},
    {removedItem: "create:dough", replacement: 'farmersdelight:wheat_dough'},
    {removedItem: "create:andesite_alloy", replacement: 'gtceu:andesite_alloy_ingot'},
    {removedItem: "create:propeller", replacement: 'gtceu:andesite_alloy_rotor'},

    {removedItem: "gtceu:hp_steam_macerator", replacement: 'greate:andesite_alloy_millstone'},
    {removedItem: "gtceu:iv_macerator", replacement: 'greate:tungsten_steel_millstone'},
    {removedItem: "gtceu:iv_bender", replacement: 'greate:tungsten_steel_mechanical_press'},
    {removedItem: "gtceu:iv_mixer", replacement: 'greate:tungsten_steel_mechanical_mixer'},
    {removedItem: "gtceu:iv_cutter", replacement: 'greate:tungsten_steel_mechanical_saw'}   
]

ServerEvents.tags('item', event => {
    for (const item of global.ItemsToRemove) {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
	}
})

ServerEvents.tags('block', event => {
    for(const item of global.ItemsToRemove) {
        event.removeAllTagsFrom(item)
    }
})

ServerEvents.recipes(event => {
    // Remove the recipes for removed tags, and either remove them in inputs or replace them with Removed Tag Placeholders
	for (const tagData of global.TagsToRemove) {
        event.remove({ output: tagData.tag })
        if (tagData.removeInputRecipes === true) {
            event.remove({ input: tagData.tag })
        } else {
            event.replaceInput(
                { input: tagData.tag },
                tagData.tag,
                Item.of('kubejs:removed_tag_placeholder', '{Removed: "' + tagData.tag + '"}').strongNBT()
            )
        }
    }

    // Remove the recipes for removed items, and replace them in inputs as Removed Item Placeholders
	for (const item of global.ItemsToRemove) {
        event.remove({ output: item })
        // Expand tags and RegExps into individual items to more easily identify what was removed
        global.Util.forEachItemExpanded(item, itemId => {
            event.replaceInput(
                { input: itemId },
                itemId,
                Item.of('kubejs:removed_item_placeholder', '{Removed: "' + itemId + '"}').strongNBT()
            )
        })
    }

    extraRecipesToRemove.forEach(recipe => {
        event.remove({ id: recipe })
    })

    recipesToReplace.forEach(recipe => {
        var item = Item.of('kubejs:removed_item_placeholder', `{Removed:"${recipe.removedItem}"}`).weakNBT()
        event.replaceInput(item, item, recipe.replacement)
    })
})

LootJS.modifiers(event => {
    for(const item of global.ItemsToRemove) {
        event.addLootTableModifier(/(.*)/).removeLoot(item)
    }
})
