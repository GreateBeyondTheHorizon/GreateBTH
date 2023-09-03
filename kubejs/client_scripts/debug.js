global.debug = {}
const before = "===KUBEJS CUSTOM DEBUG==="
const after =  "========================"
ClientEvents.leftDebugInfo(event => {
  if (global.debug == undefined) return
  event.lines.add(before)
  for (let key in global.debug) {
    event.lines.add(key + ": " + global.debug[key])
  }
  event.lines.add(after)
})