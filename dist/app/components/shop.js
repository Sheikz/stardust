let ShopItemComponent = {
    templateUrl: "templates/shopItem.html",
    bindings: {
        name: "<",
        description: "<",
        image: "<",
        click: "&"
    }
};
let ShopItemsDisplay = {
    templateUrl: "templates/shopItemsDisplay.html",
    bindings: {
        items: "<",
    }
};
angular.module('app')
    .component('shopItem', ShopItemComponent)
    .component('shopItemsDisplay', ShopItemsDisplay);
