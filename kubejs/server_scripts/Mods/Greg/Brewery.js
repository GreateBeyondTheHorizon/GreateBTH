ServerEvents.recipes((event) => {
    event.remove({ id: /gtceu:brewery(.*)lubricant_from_(.*)_and_redstone/ })
})
