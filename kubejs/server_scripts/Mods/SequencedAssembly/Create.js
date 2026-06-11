ServerEvents.recipes((event) => {
  event.remove({ output: "create:railway_casing" });
  event.recipes.create.sequenced_assembly(["create:railway_casing"], "create:brass_casing", [
    event.recipes.create.deploying("create:brass_casing", ["create:brass_casing", "gtceu:obsidian_plate"]),
    event.recipes.create.deploying("create:brass_casing", ["create:brass_casing", "#gtceu:circuits/lv"]),
    event.recipes.create.pressing("create:brass_casing", "create:brass_casing")
  ])
    .transitionalItem("create:brass_casing")
    .loops(1);
});
