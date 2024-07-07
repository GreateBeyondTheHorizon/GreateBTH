ServerEvents.recipes(event => {
    event.remove({id: 'mynethersdelight:chilidog_alt'})
    event.remove({id: 'mynethersdelight:crafting/raw_stuffed_hoglin'})
    event.remove({id: 'mynethersdelight:crafting/bleeding_tartar'})
    event.remove({id: 'mynethersdelight:crafting/striderloaf'})
    event.remove({id: 'mynethersdelight:crafting/breakfast_sampler'})
    event.remove({id: 'mynethersdelight:crafting/blue_tenderloin_steak'})
    event.remove({id: 'mynethersdelight:crafting/ghast_salad'})
    event.remove({id: 'mynethersdelight:ghasta_with_cream'})
    event.remove({id: 'mynethersdelight:crafting/spicy_skewer'})
    event.remove({id: 'mynethersdelight:powdery_mosaic_slab'})

    event.replaceInput({id: 'mynethersdelight:nether_bricks_stove'}, 'minecraft:nether_brick', 'gtceu:wrought_iron_plate')
    event.replaceOutput({id: 'mynethersdelight:powdery_plank'}, 'mynethersdelight:powdery_plank', '2x mynethersdelight:powdery_plank')

    cookingPotRecipe('mynethersdelight:raw_stuffed_hoglin', [Item.of('minecraft:warped_roots'), Item.of('minecraft:crimson_fungus'), Item.of('minecraft:crimson_roots'), Item.of('mynethersdelight:hoglin_hide'), Item.of('farmersdelight:ham'), Item.of('farmersdelight:nether_salad')], null)
    cookingPotRecipe('mynethersdelight:bleeding_tartar', [Item.of('#forge:eggs'), Item.of('mynethersdelight:minced_strider'), Item.of('mynethersdelight:minced_strider')], 'minecraft:bowl')
    cookingPotRecipe('mynethersdelight:striderloaf', [Item.of('mynethersdelight:strider_slice'), Item.of('mynethersdelight:minced_strider'), Item.of('mynethersdelight:minced_strider'), Item.of('mynethersdelight:minced_strider')], 'minecraft:bowl')
    cookingPotRecipe('mynethersdelight:breakfast_sampler', [Item.of('mynethersdelight:roasted_sausage'), Item.of('mynethersdelight:roasted_sausage'), Item.of('minecraft:honey_bottle'), Item.of('#forge:cooked_eggs'), Item.of('#forge:cooked_eggs')], 'minecraft:bowl')
    cookingPotRecipe('mynethersdelight:blue_tenderloin_steak', [Item.of('minecraft:warped_fungus'), [Item.of('minecraft:warped_fungus'), Item.of('farmersdelight:straw'), Item.of('minecraft:warped_roots')], Item.of('mynethersdelight:cooked_loin')], 'minecraft:bowl')
    cookingPotRecipe('mynethersdelight:ghast_salad', [Item.of('mynethersdelight:ghasta'), Item.of('#forge:vegetables'), Item.of('minecraft:carrot')], 'minecraft:bowl')
    cookingPotRecipe('mynethersdelight:ghasta_with_cream', [Item.of('mynethersdelight:ghasta'), Item.of('mynethersdelight:ghasta'), Item.of('mynethersdelight:ghasta'), Item.of('mynethersdelight:ghasta'), Item.of('minecraft:ghast_tear'), Item.of('minecraft:magma_cream')], 'minecraft:bowl')
    cookingPotRecipe('mynethersdelight:spicy_skewer', [Item.of('#mynethersdelight:strider_meats'), Item.of('mynethersdelight:bullet_pepper'), Item.of('mynethersdelight:bullet_pepper')], 'minecraft:blaze_rod')

    function cookingPotRecipe(output, inputs, container) {
		if(container != null) {
			event.custom({
				type: "farmersdelight:cooking",
				ingredients: inputs,
				result: Item.of(output),
				container: {item: container},
				recipe_book_tab: "meals"
			})
		} else {
			event.custom({
				type: "farmersdelight:cooking",
				ingredients: inputs,
				result: Item.of(output),
				recipe_book_tab: "meals"
			})
		}
	}

  event.shaped('2x mynethersdelight:powdery_mosaic_slab',
		[
			'LS'
		],
		{
      S: 'mynethersdelight:powdery_mosaic',
      L: '#forge:tools/saws'
		}
	)
})