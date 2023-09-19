// priority: 0

console.info("Ores Modified");

WorldgenEvents.remove((event) => {
  /* event.removeOres((props) => {
    props.worldgenLayer = "underground_ores";
    props.blocks = [/minecraft:(.*)/, /create:(.*)/, /byg:(.*)/];
  }); */
  event.removeFeatureById("underground_ores", [
    "create:zinc_ore",
    "create:deepslate_zinc_ore",
  ]);
});
//-8992324727273622645
