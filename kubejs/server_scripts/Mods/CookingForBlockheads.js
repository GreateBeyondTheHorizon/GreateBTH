ServerEvents.recipes(event => {
    event.remove('cookingforblockheads:spice_rack')
    event.shaped('cookingforblockheads:spice_rack',
        [
            'RR',
            'SS'
        ],
        {
            R: 'farmersdelight:canvas_rug',
            S: '#minecraft:wooden_slabs'
        }
    )
})