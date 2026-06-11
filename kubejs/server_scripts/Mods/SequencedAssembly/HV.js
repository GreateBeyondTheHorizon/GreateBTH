// priority: 0
ServerEvents.recipes((event) => {
  // #region variables
  let incHvMotor = "kubejs:inc_hv_motor";
  let incHvPiston = "kubejs:inc_hv_piston";
  let lncHvRobotArm = "kubejs:inc_hv_robot_arm";
  let incHvConveyor = "kubejs:inc_hv_conveyor";
  let incHvPump = "kubejs:inc_hv_pump";
  let invHvFluidRegulator = "kubejs:inc_hv_fluid_regulator";
  let invHvSensor = "kubejs:inc_hv_sensor";
  let incHvEmitter = "kubejs:inc_hv_emitter";
  // #endregion
  // #region components
  event.recipes.create.sequenced_assembly(["gtceu:hv_electric_motor"], "gtceu:magnetic_steel_rod", [
    event.recipes.create.deploying(incHvMotor, [incHvMotor, "gtceu:electrum_double_wire"]),
    event.recipes.create.deploying(incHvMotor, [incHvMotor, "gtceu:electrum_double_wire"]),
    event.recipes.create.deploying(incHvMotor, [incHvMotor, "gtceu:stainless_steel_rod"]),
    event.recipes.create.deploying(incHvMotor, [incHvMotor, "gtceu:silver_double_cable"])
  ])
    .transitionalItem(incHvMotor)
    .loops(2);

  event.recipes.create.sequenced_assembly(["gtceu:hv_electric_piston"], "gtceu:hv_electric_motor", [
    event.recipes.create.deploying(incHvPiston, [incHvPiston, "gtceu:small_stainless_steel_gear"]),
    event.recipes.create.deploying(incHvPiston, [incHvPiston, "gtceu:gold_single_cable"]),
    event.recipes.create.deploying(incHvPiston, [incHvPiston, "gtceu:stainless_steel_rod"]),
    event.recipes.create.deploying(incHvPiston, [incHvPiston, "gtceu:stainless_steel_plate"])
  ])
    .transitionalItem(incHvPiston)
    .loops(2);

  event.recipes.create.sequenced_assembly(["gtceu:hv_robot_arm"], "gtceu:hv_electric_piston", [
    event.recipes.create.deploying(lncHvRobotArm, [lncHvRobotArm, "gtceu:hv_electric_motor"]),
    event.recipes.create.deploying(lncHvRobotArm, [lncHvRobotArm, "#gtceu:circuits/hv"]),
    event.recipes.create.deploying(lncHvRobotArm, [lncHvRobotArm, "gtceu:gold_single_cable"]),
    event.recipes.create.deploying(lncHvRobotArm, [lncHvRobotArm, "gtceu:stainless_steel_rod"])
  ])
    .transitionalItem(lncHvRobotArm)
    .loops(2);

  event.recipes.create.sequenced_assembly(["gtceu:hv_conveyor_module"], "gtceu:gold_single_cable", [
    event.recipes.create.deploying(incHvConveyor, [incHvConveyor, ["gtceu:rubber_plate", "gtceu:silicone_rubber_plate", "gtceu:styrene_butadiene_rubber_plate"]]),
    event.recipes.create.deploying(incHvConveyor, [incHvConveyor, ["gtceu:rubber_plate", "gtceu:silicone_rubber_plate", "gtceu:styrene_butadiene_rubber_plate"]]),
    event.recipes.create.deploying(incHvConveyor, [incHvConveyor, ["gtceu:rubber_plate", "gtceu:silicone_rubber_plate", "gtceu:styrene_butadiene_rubber_plate"]]),
    event.recipes.create.deploying(incHvConveyor, [incHvConveyor, "gtceu:hv_electric_motor"])
  ])
    .transitionalItem(incHvConveyor)
    .loops(2);

  event.recipes.create.sequenced_assembly(["gtceu:hv_electric_pump"], "gtceu:stainless_steel_normal_fluid_pipe", [
    event.recipes.create.deploying(incHvPump, [incHvPump, "gtceu:steel_screw"]),
    event.recipes.create.deploying(incHvPump, [incHvPump, "gtceu:steel_rotor"]),
    event.recipes.create.deploying(incHvPump, [incHvPump, ["gtceu:rubber_ring", "gtceu:silicone_rubber_ring", "gtceu:styrene_butadiene_rubber_ring"]]),
    event.recipes.create.deploying(incHvPump, [incHvPump, ["gtceu:rubber_ring", "gtceu:silicone_rubber_ring", "gtceu:styrene_butadiene_rubber_ring"]]),
    event.recipes.create.deploying(incHvPump, [incHvPump, "gtceu:gold_single_cable"]),
    event.recipes.create.deploying(incHvPump, [incHvPump, "gtceu:hv_electric_motor"])
  ])
    .transitionalItem(incHvPump)
    .loops(1);

  event.recipes.create.sequenced_assembly(["gtceu:hv_fluid_regulator"], "gtceu:hv_electric_pump", [
    event.recipes.create.deploying(invHvFluidRegulator, [invHvFluidRegulator, "#gtceu:circuits/hv"])
  ])
    .transitionalItem(invHvFluidRegulator)
    .loops(2);

  event.recipes.create.sequenced_assembly(["gtceu:hv_sensor"], "gtceu:chromium_rod", [
    event.recipes.create.deploying(invHvSensor, [invHvSensor, "#gtceu:circuits/hv"]),
    event.recipes.create.deploying(invHvSensor, [invHvSensor, "gtceu:double_stainless_steel_plate"]),
    event.recipes.create.deploying(invHvSensor, [invHvSensor, "gtceu:double_stainless_steel_plate"]),
    event.recipes.create.deploying(invHvSensor, [invHvSensor, "minecraft:ender_eye"])
  ])
    .transitionalItem(invHvSensor)
    .loops(1);

  event.recipes.create.sequenced_assembly(["gtceu:hv_emitter"], "minecraft:ender_eye", [
    event.recipes.create.deploying(incHvEmitter, [incHvEmitter, "#gtceu:circuits/hv"]),
    event.recipes.create.deploying(incHvEmitter, [incHvEmitter, "gtceu:gold_single_cable"]),
    event.recipes.create.deploying(incHvEmitter, [incHvEmitter, "gtceu:chromium_rod"]),
    event.recipes.create.deploying(incHvEmitter, [incHvEmitter, "gtceu:chromium_rod"])
  ])
    .transitionalItem(incHvEmitter)
    .loops(2);
  // #endregion
});
