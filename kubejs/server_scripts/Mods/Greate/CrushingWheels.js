ServerEvents.recipes((event) => {
  event.remove({ type: "greate:crushing", id: /.*wood_chip_.*/ });
});
