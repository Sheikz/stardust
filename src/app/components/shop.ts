let ShopItemComponent : ng.IComponentOptions = {
  templateUrl: "templates/shopItem.html",
  bindings:{
    name: "<",
    description: "<",
    image: "<",
    click: "&"
  }
}

let ShopItemsDisplay : ng.IComponentOptions = {
  templateUrl: "templates/shopItemsDisplay.html",
  bindings: {
    items: "<",
  }
}

angular.module('app')
  .component('shopItem', ShopItemComponent)
  .component('shopItemsDisplay', ShopItemsDisplay)