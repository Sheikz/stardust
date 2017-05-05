class Controller{
}

export let ShopItemsDisplay : ng.IComponentOptions = {
  template: require('./shop-items-display.html'),
  bindings: {
    items: "<",
    cart: "=",
    admin: '<',
  },
  controller: Controller
}