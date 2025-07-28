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

  GTMaterials.get("andesite_alloy").setProperty(GBTHCorePropertyKeys.BLOOM, new $BloomProperty())
  GTMaterials.Iron.setProperty(GBTHCorePropertyKeys.BLOOM, new $BloomProperty())

  // Add flint hammer for hammering blooms
  GTMaterials.Flint.getProperty(PropertyKey.TOOL).addTypes(GTToolType.HARD_HAMMER)

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
  GTCEuAPI.materialManager.getRegisteredMaterials().forEach(material => {
    if(material.hasProperty(PropertyKey.TOOL)) {
      material.getProperty(PropertyKey.TOOL).removeTypes(GTToolType.MINING_HAMMER, GTToolType.SPADE,
        GTToolType.DRILL_LV, GTToolType.DRILL_MV, GTToolType.DRILL_HV, GTToolType.DRILL_EV, GTToolType.DRILL_IV);
    }
  })

  TagPrefix.block["setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])"](GTMaterials.CertusQuartz, () => Item.getItem('ae2:quartz_block'))
  TagPrefix.gem["setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])"](GTMaterials.CertusQuartz, () => Item.getItem('ae2:certus_quartz_crystal'))
  TagPrefix.dust["setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])"](GTMaterials.CertusQuartz, () => Item.getItem('ae2:certus_quartz_dust'))

  TagPrefix.dust["setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])"](GTMaterials.Netherrack, () => Item.getItem('create:cinder_flour'))
  TagPrefix.dust["setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])"](GTMaterials.Obsidian, () => Item.getItem('create:powdered_obsidian'))
})
