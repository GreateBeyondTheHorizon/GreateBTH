ServerEvents.recipes((event) => {
  event.remove({ output: "create_connected:control_chip" });
  event.recipes.create.sequenced_assembly(
    [
      Item.of("create_connected:control_chip")
        .withChance(120.0),
      Item.of("minecraft:redstone")
        .withChance(8.0),
      Item.of("gtceu:vacuum_tube")
        .withChance(8.0),
      Item.of("gtceu:gold_plate")
        .withChance(5.0),
      Item.of("minecraft:gold_nugget")
        .withChance(3.0),
      Item.of("gtceu:iron_plate")
        .withChance(2.0),
      Item.of("gtceu:crushed_gold_ore")
        .withChance(2.0),
      "minecraft:quartz",
      "minecraft:compass"
    ],
    "gtceu:gold_plate",
    [
      event.recipes.create.deploying("create_connected:incomplete_control_chip", ["create_connected:incomplete_control_chip", "#gtceu:circuits/ulv"]),
      event.recipes.create.deploying("create_connected:incomplete_control_chip", ["create_connected:incomplete_control_chip", "minecraft:redstone"]),
      event.recipes.create.pressing("create_connected:incomplete_control_chip", "create_connected:incomplete_control_chip")
    ]
  )
    .transitionalItem("create_connected:incomplete_control_chip")
    .loops(3);
});
