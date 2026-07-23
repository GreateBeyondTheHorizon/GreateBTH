ItemEvents.tooltip((event) => {
  event.add(["minecraft:furnace", "minecraft:blast_furnace", "minecraft:smoker"], [["", Text.yellow("No functionality."), Text.gray(" Used for crafting or decoration only.")]]);
  event.add(
    [
      "tconstruct:fantastic_foundry",
      "tconstruct:scorched_drain",
      "tconstruct:scorched_duct",
      "tconstruct:scorched_chute",
      "tconstruct:scorched_fuel_tank",
      "tconstruct:scorched_fuel_gauge",
      "tconstruct:scorched_table",
      "tconstruct:scorched_basin",
      "tconstruct:scorched_bricks",
      "tconstruct:chiseled_scorched_bricks",
      "tconstruct:scorched_stone",
      "tconstruct:polished_scorched_stone",
      "tconstruct:scorched_road",
      "tconstruct:scorched_ladder",
      "tconstruct:scorched_glass",
      "tconstruct:scorched_tinted_glass",
      "tconstruct:scorched_soul_glass"
    ],
    [["", Text.yellow("Foundry recipes disabled."), Text.gray(" Used for crafting or decoration only.")]]
  );
  event.add(Ingredient.of(/^(?!tconstruct)^(?!gtceu)(?=.*(axe|shovel|sword|hoe)$)/), [["", Text.yellow("Cannot mine blocks."), Text.gray(" Used for crafting or decoration only.")]]);
});
