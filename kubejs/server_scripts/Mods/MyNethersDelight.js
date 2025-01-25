ServerEvents.recipes(event => {
	event.remove({id: 'nethersdelight:cutting/hoglin_sausage_alt'})
    event.remove({id: 'mynethersdelight:powdery_mosaic_slab'})
    event.remove({id: 'mynethersdelight:scaffolding_alt'})
	
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