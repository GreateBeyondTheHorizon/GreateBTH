ServerEvents.recipes(event => {
	
event.recipes.createMixing('minecraft:netherite_ingot', [
  'minecraft:netherite_scrap',
  'minecraft:netherite_scrap',
  'minecraft:netherite_scrap',
  'minecraft:netherite_scrap',
  Fluid.of('gtceu:hssg', 576)
]).superheated()

event.recipes.createMixing('minecraft:turtle_helmet', [
  'kubejs:unf_turtle_helmet',
  Fluid.of('create:potion', 576, {Bottle:'REGULAR', Potion:'minecraft:water_breathing'})
]).heated()
})