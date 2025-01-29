//priority: 1
var itemsToReplace = [
    {removedItem: "ad_astra:steel_rod", replacement: '#forge:rods/steel'},
    {removedItem: "ad_astra:iron_rod", replacement: '#forge:rods/iron'},
	{removedItem: 'ad_astra:desh_engine', replacement: 'kubejs:tungsten_steel_engine'},

    {removedItem: "ae2:ender_dust", replacement: 'gtceu:ender_pearl_dust'},
    {removedItem: "ae2:certus_quartz_crystal", replacement: 'gtceu:certus_quartz_gem'},

    {removedItem: "aether:ambrosium_shard", replacement: 'gtceu:ambrosium_gem'},
    {removedItem: "aether:zanite_gemstone", replacement: 'gtceu:zanite_gem'},

    {removedItem: "deep_aether:skyjade", replacement: 'gtceu:skyjade_gem'},

    {removedItem: "create:copper_sheet", replacement: '#forge:plates/copper'},
    {removedItem: "create:golden_sheet", replacement: '#forge:plates/gold'},
    {removedItem: "create:sturdy_sheet", replacement: '#forge:plates/obsidian'},
    {removedItem: "create:brass_sheet", replacement: '#forge:plates/brass'},
    {removedItem: "create:brass_ingot", replacement: '#forge:plates/brass'},
    {removedItem: "create:zinc_ingot", replacement: '#forge:plates/zinc'},
    {removedItem: "create:iron_sheet", replacement: '#forge:plates/iron'},
    {removedItem: "create:electron_tube", replacement: '#gtceu:circuits/ulv'},
    {removedItem: "create:crushed_raw_copper", replacement: 'gtceu:crushed_copper_ore'},
    {removedItem: "create:crushed_raw_gold", replacement: 'gtceu:crushed_gold_ore'},
    {removedItem: "create:crushed_raw_zinc", replacement: 'gtceu:crushed_sphalerite_ore'},
    {removedItem: "create:crushed_raw_iron", replacement: 'gtceu:crushed_iron_ore'},
    {removedItem: "create:dough", replacement: 'gtceu:dough'},
    {removedItem: "create:wheat_flour", replacement: 'gtceu:wheat_dust'},
    {removedItem: "create:andesite_alloy", replacement: 'gtceu:andesite_alloy_ingot'},
    {removedItem: "create:propeller", replacement: 'gtceu:andesite_alloy_rotor'},
    {removedItem: "create:shaft", replacement: 'greate:andesite_alloy_shaft'}, //TODO: move to greate

    {removedItem: "gtceu:hp_steam_macerator", replacement: 'greate:andesite_alloy_millstone'},
    {removedItem: "gtceu:iv_macerator", replacement: 'greate:tungsten_steel_millstone', replaceOutput: false},
    {removedItem: "gtceu:iv_bender", replacement: 'greate:tungsten_steel_mechanical_press', replaceOutput: false},
    {removedItem: "gtceu:iv_mixer", replacement: 'greate:tungsten_steel_mechanical_mixer', replaceOutput: false},
    {removedItem: "gtceu:iv_cutter", replacement: 'greate:tungsten_steel_mechanical_saw', replaceOutput: false},
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

    itemsToReplace.forEach(recipe => {
        event.replaceInput({}, recipe.removedItem, recipe.replacement)
        
        if(recipe.replaceOutput || recipe.replaceOutput == null) {
            event.replaceOutput({}, recipe.removedItem, recipe.replacement)
        }
    })

    // Remove the recipes for removed items, and replace them in inputs as Removed Item Placeholders
	for (const item of global.ItemsToRemove) {
        console.log(item)
        event.remove([{output: item}, {input: item}])
        // Expand tags and RegExps into individual items to more easily identify what was removed
        global.Util.forEachItemExpanded(item, itemId => {
            var replacedItem = Item.of('kubejs:removed_item_placeholder', '{Removed: "' + itemId + '"}').strongNBT()
            event.replaceInput(
                { input: itemId },
                itemId,
                replacedItem
            )

            event.replaceOutput(
                { output: itemId },
                itemId,
                replacedItem
            )
            event.remove([{input: replacedItem}, {output: replacedItem}])
        })
    }
})

LootJS.modifiers(event => {
    for(const item of global.ItemsToRemove) {
        event.addLootTableModifier(/(.*)/).removeLoot(item)
    }
})
