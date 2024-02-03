ServerEvents.recipes(event => {
    event.remove({ mod: 'sgjourney' })

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
