let oreberries = [
    'oreberriesreplanted:iron_oreberry',
    'oreberriesreplanted:gold_oreberry',
    'oreberriesreplanted:copper_oreberry',
    'oreberriesreplanted:tin_oreberry',
    'oreberriesreplanted:aluminum_oreberry',
    'oreberriesreplanted:lead_oreberry',
    'oreberriesreplanted:nickel_oreberry',
    'oreberriesreplanted:uranium_oreberry',
    'oreberriesreplanted:osmium_oreberry',
    'oreberriesreplanted:zinc_oreberry',
    'oreberriesreplanted:silver_oreberry'
]

ServerEvents.recipes(event => {
    oreberries.forEach(berry => {
        let material = berry.substring(berry.indexOf(':') + 1, berry.indexOf('_'))

        if(material === 'iron' || material === 'gold') {
            event.campfireCooking('minecraft:' + material + '_nugget', berry).cookingTime(300)
        } else if(material === 'aluminum') {
            event.campfireCooking('gtceu:aluminium_nugget', berry).cookingTime(300)
        } else {
            event.campfireCooking('gtceu:' + material + '_nugget', berry).cookingTime(300)
        }
    })
})

 