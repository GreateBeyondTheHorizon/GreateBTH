ServerEvents.recipes((event) => {
  event.remove({ mod: "sophisticatedstorage" });

  const woodType = ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "mangrove", "crimson", "warped", "bamboo", "cherry"];

  var SophisticatedStorage = {
    storageTierUpgrade: function (wood, tier, pattern, keys) {
      // Chest
      keys = Object.assign(
        {
          A: Item.of(`sophisticatedstorage:${tier[0]}chest`, `{woodType:"${wood}"}`)
            .strongNBT()
        },
        keys
      );
      event.shaped(Item.of(`sophisticatedstorage:${tier[1]}chest`, `{woodType:"${wood}"}`), pattern, keys);
      delete keys.A;
      // Barrel
      keys = Object.assign(
        {
          A: Item.of(`sophisticatedstorage:${tier[0]}barrel`, `{woodType:"${wood}"}`)
            .strongNBT()
        },
        keys
      );
      event.shaped(Item.of(`sophisticatedstorage:${tier[1]}barrel`, `{woodType:"${wood}"}`), pattern, keys);
      delete keys.A;
      // Limited Barrel
      for (let i = 1; i <= 4; i++) {
        keys = Object.assign(
          {
            A: Item.of(`sophisticatedstorage:limited_${tier[0]}barrel_${i}`, `{woodType:"${wood}"}`)
              .strongNBT()
          },
          keys
        );
        event.shaped(Item.of(`sophisticatedstorage:limited_${tier[1]}barrel_${i}`, `{woodType:"${wood}"}`), pattern, keys);
        delete keys.A;
      }
    },

    // Makes Advanced Upgrade Recipes
    makeAdvanced: function (id) {
      event.shaped(Item.of("sophisticatedstorage:advanced_" + id, 1), ["ABA", "BCB", "ABA"], {
        A: "gtceu:iron_plate",
        B: "gtceu:aluminium_plate",
        C: "sophisticatedstorage:" + id
      });
    }
  };

  event.shaped("sophisticatedstorage:basic_tier_upgrade", ["PPP", "GTG", "PPP"], {
    P: "gtceu:wood_plate",
    G: "gtceu:wood_screw",
    T: "minecraft:redstone_torch"
  });

  // Basic Type
  woodType.forEach((wood) => {
    event.shapeless(Item.of("sophisticatedstorage:chest", `{woodType:"${wood}"}`), ["#forge:chests/wooden", "#gtceu:circuits/ulv"]);

    // Chest
    event.shaped(Item.of("sophisticatedstorage:chest", `{woodType:"${wood}"}`), ["PPP", "RER", "PPP"], {
      P: "minecraft:" + wood + "_planks",
      E: "#gtceu:circuits/ulv",
      R: "gtceu:wood_screw"
    });
    // Barrel
    event.shaped(Item.of("sophisticatedstorage:barrel", `{woodType:"${wood}"}`), ["PPP", "RER", "PPP"], {
      P: "minecraft:" + wood + "_planks",
      E: "#gtceu:circuits/ulv",
      R: "gtceu:long_iron_rod"
    });
    // Limited Barrel
    event.shaped(Item.of("sophisticatedstorage:limited_barrel_1", `{woodType:"${wood}"}`), ["PSP", "RER", "PPP"], {
      P: "minecraft:" + wood + "_planks",
      E: "#gtceu:circuits/ulv",
      R: "gtceu:iron_screw",
      S: "gtceu:wood_plate"
    });
    event.shaped(Item.of("sophisticatedstorage:limited_barrel_2", `{woodType:"${wood}"}`), ["PSP", "RER", "PSP"], {
      P: "minecraft:" + wood + "_planks",
      E: "#gtceu:circuits/ulv",
      R: "gtceu:iron_screw",
      S: "gtceu:wood_plate"
    });
    event.shaped(Item.of("sophisticatedstorage:limited_barrel_3", `{woodType:"${wood}"}`), ["PSP", "RER", "SPS"], {
      P: "minecraft:" + wood + "_planks",
      E: "#gtceu:circuits/ulv",
      R: "gtceu:iron_screw",
      S: "gtceu:wood_plate"
    });
    event.shaped(Item.of("sophisticatedstorage:limited_barrel_4", `{woodType:"${wood}"}`), ["SPS", "RER", "SPS"], {
      P: "minecraft:" + wood + "_planks",
      E: "#gtceu:circuits/ulv",
      R: "gtceu:iron_screw",
      S: "gtceu:wood_plate"
    });

    //Steel Tier
    SophisticatedStorage.storageTierUpgrade(wood, ["", "iron_"], ["PPP", "GAG", "PPP"], {
      P: "gtceu:iron_plate",
      G: "gtceu:iron_screw"
    });

    //Aluminium Tier
    SophisticatedStorage.storageTierUpgrade(wood, ["iron_", "gold_"], ["PPP", "GAG", "PPP"], {
      P: "gtceu:bronze_plate",
      G: Item.of("tconstruct:large_plate", "{Material:'tconstruct:treated_wood'}").strongNBT()
    });

    //Stainless Steel Tier
    SophisticatedStorage.storageTierUpgrade(wood, ["gold_", "diamond_"], ["DPD", "GAG", "DPD"], {
      P: "gtceu:steel_plate",
      D: "gtceu:diamond_plate",
      G: "gtceu:steel_screw"
    });

    //Titanium Tier
    SophisticatedStorage.storageTierUpgrade(wood, ["diamond_", "netherite_"], ["DPD", "GAG", "DPD"], {
      P: "gtceu:aluminium_plate",
      D: "gtceu:silicone_rubber_plate",
      G: "gtceu:aluminium_screw"
    });
  });

  event.shaped("sophisticatedstorage:basic_to_iron_tier_upgrade", ["SSS", "GPG", "SSS"], {
    S: "gtceu:iron_plate",
    G: "gtceu:iron_screw",
    P: "gtceu:wood_plate"
  });

  event.recipes.gtceu
    .assembler("basic_to_iron_tier_upgrade")
    .duration(100)
    .itemInputs(["6x gtceu:iron_plate", "2x gtceu:iron_screw", "gtceu:wood_plate"])
    .itemOutputs("sophisticatedstorage:basic_to_iron_tier_upgrade")
    .EUt(30);

  // Gold Tier
  event.shaped("sophisticatedstorage:iron_to_gold_tier_upgrade", ["SSS", "GPG", "SSS"], {
    S: "gtceu:bronze_plate",
    G: Item.of("tconstruct:large_plate", "{Material:'tconstruct:treated_wood'}").strongNBT(),
    P: "gtceu:iron_plate"
  });

  event.recipes.gtceu
    .assembler("iron_to_gold_tier_upgrade")
    .duration(100)
    .itemInputs(["6x gtceu:bronze_plate",
      "gtceu:iron_plate",
      Item.of("tconstruct:large_plate", "{Material:'tconstruct:treated_wood'}").strongNBT(),
      Item.of("tconstruct:large_plate", "{Material:'tconstruct:treated_wood'}").strongNBT()])
    .itemOutputs("sophisticatedstorage:iron_to_gold_tier_upgrade")
    .EUt(30);

  // Diamond Tier
  event.shaped("sophisticatedstorage:gold_to_diamond_tier_upgrade", ["DPD", "GBG", "DPD"], {
    D: "gtceu:diamond_plate",
    G: "gtceu:steel_screw",
    P: "gtceu:steel_plate",
    B: "gtceu:bronze_plate"
  });

  event.recipes.gtceu
    .assembler("gold_to_diamond_tier_upgrade")
    .duration(100)
    .itemInputs(["4x gtceu:steel_plate", "2x gtceu:steel_screw", "2x gtceu:diamond_plate", "gtceu:bronze_plate"])
    .itemOutputs("sophisticatedstorage:gold_to_diamond_tier_upgrade")
    .EUt(30);

  // Netherite Tier
  event.shaped("sophisticatedstorage:diamond_to_netherite_tier_upgrade", ["SDS", "PTP", "SDS"], {
    D: "gtceu:aluminium_plate",
    P: "gtceu:aluminium_screw",
    S: "gtceu:silicone_rubber_plate",
    T: "gtceu:steel_plate"
  });

  event.recipes.gtceu
    .assembler("diamond_to_netherite_tier_upgrade")
    .duration(100)
    .itemInputs(["4x gtceu:aluminium_plate", "2x gtceu:aluminium_screw", "2x gtceu:silicone_rubber_plate", "gtceu:steel_plate"])
    .itemOutputs("sophisticatedstorage:diamond_to_netherite_tier_upgrade")
    .EUt(30);

  // -- UPGRADES --
  //UPGRADE BASE
  event.shaped(Item.of("sophisticatedstorage:upgrade_base", 1), ["ADA", "BCB", "ABA"], {
    A: "gtceu:wood_plate",
    B: "gtceu:iron_plate",
    C: "gtceu:brass_plate",
    D: "#gtceu:circuits/lv"
  });

  //COMPACTING UPGRADE
  event.shaped(Item.of("sophisticatedstorage:compacting_upgrade", 1), ["ADA", "ECE", "ABA"], {
    A: "gtceu:iron_plate",
    B: "#gtceu:circuits/mv",
    C: "sophisticatedstorage:upgrade_base",
    D: "gtceu:steel_block",
    E: "minecraft:piston"
  });
  SophisticatedStorage.makeAdvanced("compacting_upgrade");

  //PICKUP UPGRADE
  event.shaped(Item.of("sophisticatedstorage:pickup_upgrade", 1), ["ADA", "ECE", "ABA"], {
    A: "gtceu:iron_plate",
    B: "#gtceu:circuits/mv",
    C: "sophisticatedstorage:upgrade_base",
    D: "minecraft:sticky_piston",
    E: "gtceu:red_alloy_ingot"
  });
  SophisticatedStorage.makeAdvanced("pickup_upgrade");

  //VOID UPGRADE
  event.shaped(Item.of("sophisticatedstorage:void_upgrade", 1), ["ADA", "ECE", "ABA"], {
    A: "gtceu:iron_plate",
    B: "#gtceu:circuits/mv",
    C: "sophisticatedstorage:upgrade_base",
    D: "#forge:gems/ender_pearl",
    E: "gtceu:obsidian_plate"
  });
  SophisticatedStorage.makeAdvanced("void_upgrade");

  //FILTER UPGRADE
  event.shaped(Item.of("sophisticatedstorage:filter_upgrade", 1), ["ADA", "ECE", "ABA"], {
    A: "gtceu:iron_plate",
    B: "#gtceu:circuits/mv",
    C: "sophisticatedstorage:upgrade_base",
    D: "gtceu:item_filter",
    E: "gtceu:red_alloy_ingot"
  });
  SophisticatedStorage.makeAdvanced("filter_upgrade");

  //FILTER UPGRADE
  event.shaped(Item.of("sophisticatedstorage:hopper_upgrade", 1), ["AHA", "BCB", "AHA"], {
    A: "gtceu:iron_plate",
    B: "#gtceu:circuits/mv",
    C: "sophisticatedstorage:upgrade_base",
    H: "minecraft:hopper"
  });
  SophisticatedStorage.makeAdvanced("hopper_upgrade");

  const chipped_tables = ["botanist_workbench", "glassblower", "carpenters_table", "loom_table", "mason_table", "alchemy_bench", "tinkering_table"];
  chipped_tables.forEach((table) => {
    event.shaped(Item.of("sophisticatedstorage:chipped/" + table + "_upgrade", 1), ["AJA", "RBR"], {
      A: "gtceu:iron_screw",
      B: "sophisticatedstorage:upgrade_base",
      J: "chipped:" + table,
      R: "#gtceu:circuits/ulv"
    });
  });
});
