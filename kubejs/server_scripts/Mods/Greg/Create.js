ServerEvents.recipes(event => {
    event.remove({id: 'create/splashing/magma_block'})
    event.remove({id: 'create:crafting/kinetics/super_glue'})

    //TODO: move to greate
    event.forEachRecipe({type: 'gtceu:assembler', id: /gtceu:assembler(.*)cover(.*)wire(.*)/}, c => {
        var items = c.json.get('inputs').getAsJsonObject().get('item').getAsJsonArray()
        var fluids = c.json.get('inputs').getAsJsonObject().get('fluid').getAsJsonArray().get(0).getAsJsonObject().get('content').getAsJsonObject()
        var output = c.json.get('outputs').getAsJsonObject().get('item').getAsJsonArray().get(0).getAsJsonObject().get('content').getAsJsonObject().get('ingredient').getAsJsonObject().get('item')
        if(items.size() == 1) {
            var item = items.get(0).getAsJsonObject().get('content').getAsJsonObject().get('ingredient').getAsJsonObject().get('item')
            var fluid = fluids.get('value').getAsJsonArray().get(0).getAsJsonObject().get('tag').getAsString()
            event.recipes.create.filling(output, [Fluid.of(fluid.replace('forge', 'gtceu'), fluids.get('amount')), item])
        }
    })
})