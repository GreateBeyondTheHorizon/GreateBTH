ServerEvents.recipes( event => {
	
	event.remove({ id:'computercraft:cable' })
    event.recipes.gtceu.assembler('computercraft:cable')
        .itemInputs('gtceu:gold_single_cable', 'gtceu:red_alloy_tiny_dust')
        .itemOutputs('computercraft:cable')
        .duration(200)
        .EUt(120)
        .circuit(1)
})