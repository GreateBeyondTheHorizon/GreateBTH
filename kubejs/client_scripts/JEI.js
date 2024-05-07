JEIEvents.hideItems(event => {
	event.hide(/(.*)_bucket/)
})
JEIEvents.addItems(event => {
	event.add('minecraft:bucket')
	event.add('ceramicbucket:unfired_clay_bucket')
	event.add('ceramicbucket:ceramic_bucket')
})