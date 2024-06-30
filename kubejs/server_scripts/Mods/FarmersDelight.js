ServerEvents.recipes(event => {
	event.remove({id: 'farmersdelight:book_from_canvas'})
	event.remove({id: 'farmersdelight:cutting_board'})
	event.remove({id: 'farmersdelight:paper_from_tree_bark'})
	event.remove({type: 'minecraft:crafting_shaped', id: /farmersdelight:(.*)crate(.*)/})
	event.remove({type: 'minecraft:crafting_shapeless', id: /farmersdelight:(.*)crate(.*)/})
	event.remove({type: 'minecraft:crafting_shapeless', id: 'farmersdelight:cabbage'})
	event.remove({type: 'minecraft:crafting_shapeless', id: 'farmersdelight:tomato'})
	event.remove({type: 'minecraft:crafting_shapeless', id: 'farmersdelight:onion'})
	event.remove({type: 'minecraft:crafting_shaped', id: /farmersdelight:rice(.*)/})
	event.remove({type: 'minecraft:crafting_shapeless', id: /farmersdelight:rice(.*)/})
	event.remove({type: 'minecraft:crafting_shaped', id: /farmersdelight:straw(.*)/})
	event.remove({type: 'minecraft:crafting_shapeless', id: /farmersdelight:straw(.*)/})
	event.remove({id: /(farmersdelight|bucketlib):(.*)wheat_dough_from_(.*)/})
	event.remove({type: 'minecraft:crafting_shaped', id: /farmersdelight:(.*)pie(.*)/})
	event.remove({id: /farmersdelight:sweet_berry_cheesecake(.*)/})
	event.remove({id: 'farmersdelight:shepherds_pie_block'})
	event.remove({id: 'farmersdelight:sweet_berry_cookie'})
	event.remove({id: 'farmersdelight:honey_cookie'})
	event.remove({id: 'farmersdelight:melon_juice'})
	event.remove({id: 'farmersdelight:melon_popsicle'})
	event.remove({id: 'farmersdelight:fruit_salad'})
	event.remove({id: 'farmersdelight:mixed_salad'})
	event.remove({id: 'farmersdelight:barbecue_stick'})
	event.remove({id: 'farmersdelight:egg_sandwich'})
	event.remove({id: 'farmersdelight:chicken_sandwich'})
	event.remove({id: 'farmersdelight:hamburger'})
	event.remove({id: 'farmersdelight:bacon_sandwich'})
	event.remove({id: 'farmersdelight:mutton_wrap'})
	event.remove({id: 'farmersdelight:stuffed_potato'})
	event.remove({id: 'farmersdelight:salmon_roll'})
	event.remove({id: 'farmersdelight:cod_roll'})
	event.remove({id: 'farmersdelight:kelp_roll'})
	event.remove({id: 'farmersdelight:bacon_and_eggs'})
	event.remove({id: 'farmersdelight:roasted_mutton_chops'})
	event.remove({id: 'farmersdelight:steak_and_potatoes'})
	event.remove({id: 'farmersdelight:grilled_salmon'})
	event.remove({id: 'farmersdelight:roast_chicken_block'})
	event.remove({id: 'farmersdelight:honey_glazed_ham_block'})
	event.remove({output: 'farmersdelight:pie_crust'})
	event.remove({output: 'farmersdelight:cake_slice'})
	event.remove({id: 'farmersdelight:rope'})
	event.remove({id: 'farmersdelight:lead_from_straw'})

	event.campfireCooking('minecraft:bread', 'farmersdelight:wheat_dough')

	event.replaceInput({id: 'farmersdelight:stove'}, 'minecraft:iron_ingot', 'gtceu:wrought_iron_plate')
	event.replaceInput({id: 'farmersdelight:cooking_pot'}, 'minecraft:iron_ingot', 'gtceu:steel_plate')

	event.recipes.create.mixing('farmersdelight:apple_pie', ['3x minecraft:wheat', '3x minecraft:apple', '2x minecraft:sugar', 'farmersdelight:pie_crust']).heated()
	event.recipes.create.mixing('farmersdelight:chocolate_pie', ['3x minecraft:cocoa_beans', Fluid.of("minecraft:milk", 3000), '2x minecraft:sugar', 'farmersdelight:pie_crust']).heated()
	event.recipes.create.mixing('farmersdelight:sweet_berry_cheesecake', ['6x minecraft:sweet_berries', Fluid.of('minecraft:milk', 2000), 'farmersdelight:pie_crust']).heated()
	event.recipes.create.mixing('farmersdelight:wheat_dough', ['create:wheat_flour', Fluid.of('minecraft:water')])
	event.recipes.create.mixing('4x farmersdelight:sweet_berry_cookie', ['minecraft:sweet_berries', 'farmersdelight:wheat_dough']).heated()
	event.recipes.create.mixing('4x farmersdelight:honey_cookie', [Fluid.of('create:honey', 250), 'farmersdelight:wheat_dough']).heated()
	event.recipes.create.mixing('farmersdelight:melon_juice', ['4x minecraft:melon_slice', 'minecraft:sugar', 'minecraft:glass_bottle'])
	event.recipes.create.mixing('farmersdelight:melon_popsicle', ['4x minecraft:melon_slice', '2x minecraft:ice', 'minecraft:stick'])
	event.recipes.create.mixing('farmersdelight:fruit_salad', ['minecraft:apple', '2x minecraft:melon_slice', '#minecraft:fox_food', 'farmersdelight:pumpkin_slice', 'minecraft:bowl'])
	event.recipes.create.mixing('farmersdelight:mixed_salad', ['#forge:crops/cabbage', 'farmersdelight:tomato', 'minecraft:beetroot', 'minecraft:bowl'])
	event.recipes.create.mixing('farmersdelight:nether_salad', ['minecraft:crimson_fungus', 'minecraft:warped_fungus', 'minecraft:bowl'])
	event.recipes.create.mixing('farmersdelight:rice_roll_medley_block', ['3x farmersdelight:kelp_roll_slice', '3x farmersdelight:salmon_roll', '2x farmersdelight:cod_roll', 'minecraft:bowl'])
	event.recipes.create.mixing('farmersdelight:pie_crust', ['3x create:wheat_flour', Fluid.of('minecraft:milk', 250), 'minecraft:egg'])

	event.recipes.create.splashing('farmersdelight:wheat_dough', 'create:wheat_flour')

	compressingRecipe('farmersdelight:carrot_crate', 'minecraft:carrot')
	compressingRecipe('farmersdelight:potato_crate', 'minecraft:potato')
	compressingRecipe('farmersdelight:beetroot_crate', 'minecraft:beetroot')
	compressingRecipe('farmersdelight:cabbage_crate', 'farmersdelight:cabbage')
	compressingRecipe('farmersdelight:tomato_crate', 'farmersdelight:tomato')
	compressingRecipe('farmersdelight:onion_crate', 'farmersdelight:onion')
	compressingRecipe('farmersdelight:rice_bale', 'farmersdelight:rice_panicle')
	compressingRecipe('farmersdelight:rice_bag', 'farmersdelight:rice')
	compressingRecipe('farmersdelight:straw_bale', 'farmersdelight:straw')
	compressingRecipe('minecraft:cake', 'farmersdelight:cake_slice')
	compressingRecipe('farmersdelight:apple_pie', 'farmersdelight:apple_pie_slice', true)
	compressingRecipe('farmersdelight:chocolate_pie', 'farmersdelight:chocolate_pie_slice', true)
	compressingRecipe('farmersdelight:sweet_berry_cheesecake', 'farmersdelight:sweet_berry_cheesecake_slice', true)

	function compressingRecipe(output, input, small) {
		if(small) {
			event.recipes.gtceu.compressor(output)
				.duration(300)
				.itemInputs(`4x ${input}`)
				.itemOutputs(output)
				.EUt(2)

			event.recipes.gtceu.extractor(input)
				.duration(300)
				.itemInputs(output)
				.itemOutputs(`4x ${input}`)
				.EUt(2)
			} else {
			event.recipes.gtceu.compressor(output)
				.duration(300)
				.itemInputs(`9x ${input}`)
				.itemOutputs(output)
				.EUt(2)

			event.recipes.gtceu.extractor(input)
				.duration(300)
				.itemInputs(output)
				.itemOutputs(`9x ${input}`)
				.EUt(2)
			}
	}

	cookingPotRecipe(Item.of('farmersdelight:barbecue_stick'), [Item.of('farmersdelight:tomato'), Item.of('farmersdelight:onion'), [Item.of('#forge:cooked_pork'), Item.of('#forge:cooked_mutton'), Item.of('#forge:cooked_beef'), Item.of('#forge:cooked_chicken'), Item.of('minecraft:cooked_rabbit'), Item.of('#forge:cooked_fishes')]], 'minecraft:stick')
	cookingPotRecipe(Item.of('farmersdelight:shepherds_pie_block'), [Item.of('minecraft:baked_potato'), Item.of('minecraft:baked_potato'), Item.of('#forge:milk'), Item.of('#forge:cooked_mutton'), Item.of('farmersdelight:onion')], 'minecraft:bowl')
	cookingPotRecipe(Item.of('farmersdelight:stuffed_potato'), [Item.of('minecraft:baked_potato'), Item.of('#forge:cooked_beef'), Item.of('#forge:milk')], null)
	cookingPotRecipe(Item.of('2x farmersdelight:salmon_roll'), [Item.of('farmersdelight:salmon_slice'), Item.of('farmersdelight:salmon_slice'), Item.of('farmersdelight:cooked_rice')], null)
	cookingPotRecipe(Item.of('2x farmersdelight:cod_roll'), [Item.of('farmersdelight:cod_slice'), Item.of('farmersdelight:cod_slice'), Item.of('farmersdelight:cooked_rice')], null)
	cookingPotRecipe(Item.of('farmersdelight:kelp_roll'), [Item.of('farmersdelight:cooked_rice'), Item.of('minecraft:carrot'), Item.of('farmersdelight:cooked_rice'), Item.of('minecraft:dried_kelp'), Item.of('minecraft:dried_kelp'), Item.of('minecraft:dried_kelp')], null)
	cookingPotRecipe(Item.of('farmersdelight:bacon_and_eggs'), [Item.of('farmersdelight:cooked_bacon'), Item.of('farmersdelight:cooked_bacon'), Item.of('farmersdelight:fried_egg'), Item.of('farmersdelight:fried_egg')], 'minecraft:bowl')
	cookingPotRecipe(Item.of('farmersdelight:roasted_mutton_chops'), [Item.of('farmersdelight:cooked_mutton_chops'), Item.of('minecraft:beetroot'), Item.of('farmersdelight:cooked_rice'), Item.of('farmersdelight:tomato')], 'minecraft:bowl')
	cookingPotRecipe(Item.of('farmersdelight:steak_and_potatoes'), [Item.of('minecraft:baked_potato'), Item.of('minecraft:cooked_beef'), Item.of('farmersdelight:onion'), Item.of('farmersdelight:cooked_rice')], 'minecraft:bowl')
	cookingPotRecipe(Item.of('farmersdelight:grilled_salmon'), [Item.of('#forge:cooked_fishes/salmon'), Item.of('minecraft:sweet_berries'), Item.of('#forge:crops/cabbage'), Item.of('farmersdelight:onion')], 'minecraft:bowl')
	cookingPotRecipe(Item.of('farmersdelight:roast_chicken_block'), [Item.of('farmersdelight:onion'), Item.of('minecraft:egg'), Item.of('minecraft:bread'), Item.of('minecraft:carrot'), Item.of('minecraft:cooked_chicken'), Item.of('minecraft:baked_potato')], 'minecraft:bowl')
	cookingPotRecipe(Item.of('farmersdelight:honey_glazed_ham_block'), [Item.of('minecraft:sweet_berries'), Item.of('minecraft:honey_bottle'), Item.of('minecraft:sweet_berries'), Item.of('farmersdelight:smoked_ham'), Item.of('farmersdelight:cooked_rice'), Item.of('farmersdelight:cooked_rice')], 'minecraft:bowl')
	
	function cookingPotRecipe(output, inputs, container) {
		if(container != null) {
			event.custom({
				type: "farmersdelight:cooking",
				ingredients: inputs,
				result: output,
				container: {item: container},
				recipe_book_tab: "meals"
			})
		} else {
			event.custom({
				type: "farmersdelight:cooking",
				ingredients: inputs,
				result: output,
				recipe_book_tab: "meals"
			})
		}
	}

	event.custom({
		type: "farmersdelight:cutting",
		ingredients: [
			{
				"item": "minecraft:cake"
			}
		],
		result: [
			{
				"count": 9,
				"item": "farmersdelight:cake_slice"
			}
		],
		tool: {
			"tag": "forge:tools/knives"
		}
	})

	event.shaped('farmersdelight:cutting_board',
		[
			'SP',
			'SP'
		],
		{
			S: '#forge:rods/wood',
			P: '#minecraft:planks'
		}
	)

	event.shaped('farmersdelight:rope',
		[
			'S',
			'S'
		],
		{
			S: 'farmersdelight:straw'
		}
	)
})