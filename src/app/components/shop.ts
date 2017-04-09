let ShopItemComponent : ng.IComponentOptions = {
  template: require('./shopItem.html'),
  bindings:{
    name: "<",
    description: "<",
    image: "<",
    click: "&"
  }
}

let ShopItemsDisplay : ng.IComponentOptions = {
  template: require('./shopItemsDisplay.html'),
  bindings: {
    items: "<",
  }
}

angular.module('app')
  .component('shopItem', ShopItemComponent)
  .component('shopItemsDisplay', ShopItemsDisplay)