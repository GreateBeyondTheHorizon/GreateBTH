ServerEvents.recipes((event) => {
  event.remove({ id: "mynethersdelight:crafting/hotdog" });

  event.recipes.create.sequenced_assembly(["mynethersdelight:hotdog"], "minecraft:bread", [
    event.recipes.create.deploying("minecraft:bread", ["minecraft:bread", "mynethersdelight:roasted_sausage"])
  ])
    .transitionalItem("minecraft:bread")
    .loops(1);
});
