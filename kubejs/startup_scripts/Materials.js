//priority: 1
const $BloomProperty = Java.loadClass("com.gbth.gbthcore.integration.gtceu.material.BloomProperty");

GTCEuStartupEvents.registry("gtceu:material", (event) => {
  GTMaterials.Polyethylene.addFlags(GTMaterialFlags.GENERATE_ROTOR)
  GTMaterials.Wood.addFlags(GTMaterialFlags.GENERATE_RING)
  GTMaterials.WroughtIron.addFlags(GTMaterialFlags.GENERATE_ROTOR)
  GTMaterials.Obsidian.addFlags(GTMaterialFlags.GENERATE_BOLT_SCREW)
  GTMaterials.CertusQuartz.addFlags(GTMaterialFlags.GENERATE_LENS)
  GTMaterials.RutheniumTriniumAmericiumNeutronate.addFlags(GTMaterialFlags.GENERATE_PLATE)
  GTMaterials.Netherite.addFlags(GTMaterialFlags.GENERATE_PLATE)

  GTMaterials.get("andesite_alloy").addFlags(GTMaterialFlags.DISABLE_DECOMPOSITION)
  GTMaterials.get("andesite_alloy").setProperty(GBTHCorePropertyKeys.BLOOM, new $BloomProperty())
  GTMaterials.Iron.setProperty(GBTHCorePropertyKeys.BLOOM, new $BloomProperty())
  GTMaterials.Redstone.setProperty(GBTHCorePropertyKeys.BLOOM, new $BloomProperty())

  // Add stone hammer for hammering blooms
  GTMaterials.Stone.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(0, 1, 64, 1)
      .addTypes(GTToolType.HARD_HAMMER)
      .build())

  event.create('zanite')
    .gem(2)
    .ore()
    .color(0x8e51e9)
    .iconSet(GTMaterialIconSet.GEM_VERTICAL)
    .flags(GTMaterialFlags.GENERATE_PLATE)

  event.create('skyjade')
    .gem(3)
    .ore()
    .color(0x99cc5e)
    .iconSet(GTMaterialIconSet.GEM_HORIZONTAL)
    .flags(GTMaterialFlags.GENERATE_PLATE)

  event.create('gravitite')
    .gem(3)
    .ore()
    .color(0xba5eb3)
    .iconSet(GTMaterialIconSet.GEM_VERTICAL)
    .flags(GTMaterialFlags.GENERATE_PLATE)

  event.create('ambrosium')
    .gem(1)
    .ore()
    .color(0xfefb64)
    .iconSet(GTMaterialIconSet.GEM_VERTICAL)
    .burnTime(1600)
})

GTCEuStartupEvents.materialModification(event => {
  TagPrefix.block["setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])"](GTMaterials.Stone, () => Item.getItem('minecraft:stone'))
  TagPrefix.ingot["setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material)"](GTMaterials.Stone)
  TagPrefix.nugget["setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material)"](GTMaterials.Stone)
})
