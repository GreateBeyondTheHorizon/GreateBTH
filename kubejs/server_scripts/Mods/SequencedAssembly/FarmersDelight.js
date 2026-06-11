ServerEvents.recipes((event) => {
  event.remove({ id: "farmersdelight:egg_sandwich" });
  event.remove({ id: "farmersdelight:chicken_sandwich" });
  event.remove({ id: "farmersdelight:hamburger" });
  event.remove({ id: "farmersdelight:bacon_sandwich" });
  event.remove({ id: "farmersdelight:mutton_wrap" });

  event.recipes.create.sequenced_assembly(["farmersdelight:egg_sandwich"], "minecraft:bread", [
    event.recipes.create.deploying("minecraft:bread", ["minecraft:bread", "farmersdelight:fried_egg"]),
    event.recipes.create.deploying("minecraft:bread", ["minecraft:bread", "farmersdelight:fried_egg"]),
    event.recipes.create.deploying("minecraft:bread", ["minecraft:bread", "minecraft:bread"])
  ])
    .transitionalItem("minecraft:bread")
    .loops(1);

  event.recipes.create.sequenced_assembly(["farmersdelight:chicken_sandwich"], "minecraft:bread", [
    event.recipes.create.deploying("minecraft:bread", ["minecraft:bread", "#forge:cooked_chicken"]),
    event.recipes.create.deploying("minecraft:bread", ["minecraft:bread", "#forge:crops/cabbage"]),
    event.recipes.create.deploying("minecraft:bread", ["minecraft:bread", "minecraft:carrot"]),
    event.recipes.create.deploying("minecraft:bread", ["minecraft:bread", "minecraft:bread"])
  ])
    .transitionalItem("minecraft:bread")
    .loops(1);

  event.recipes.create.sequenced_assembly(["farmersdelight:hamburger"], "minecraft:bread", [
    event.recipes.create.deploying("minecraft:bread", ["minecraft:bread", "farmersdelight:beef_patty"]),
    event.recipes.create.deploying("minecraft:bread", ["minecraft:bread", "#forge:crops/cabbage"]),
    event.recipes.create.deploying("minecraft:bread", ["minecraft:bread", "farmersdelight:tomato"]),
    event.recipes.create.deploying("minecraft:bread", ["minecraft:bread", "farmersdelight:onion"]),
    event.recipes.create.deploying("minecraft:bread", ["minecraft:bread", "minecraft:bread"])
  ])
    .transitionalItem("minecraft:bread")
    .loops(1);

  event.recipes.create.sequenced_assembly(["farmersdelight:bacon_sandwich"], "minecraft:bread", [
    event.recipes.create.deploying("minecraft:bread", ["minecraft:bread", "farmersdelight:cooked_bacon"]),
    event.recipes.create.deploying("minecraft:bread", ["minecraft:bread", "#forge:crops/cabbage"]),
    event.recipes.create.deploying("minecraft:bread", ["minecraft:bread", "farmersdelight:tomato"]),
    event.recipes.create.deploying("minecraft:bread", ["minecraft:bread", "minecraft:bread"])
  ])
    .transitionalItem("minecraft:bread")
    .loops(1);

  event.recipes.create.sequenced_assembly(["farmersdelight:mutton_wrap"], "minecraft:bread", [
    event.recipes.create.deploying("minecraft:bread", ["minecraft:bread", "#forge:cooked_mutton"]),
    event.recipes.create.deploying("minecraft:bread", ["minecraft:bread", "#forge:crops/cabbage"]),
    event.recipes.create.deploying("minecraft:bread", ["minecraft:bread", "farmersdelight:onion"]),
    event.recipes.create.deploying("minecraft:bread", ["minecraft:bread", "minecraft:bread"])
  ])
    .transitionalItem("minecraft:bread")
    .loops(1);
});
