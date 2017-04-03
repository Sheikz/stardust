class ShopController {
    constructor($http, Shop) {
        this.$http = $http;
        this.Shop = Shop;
    }
    $onInit() {
        console.log("Shop component init");
        this.getItems();
    }
    getItems() {
        this.Shop.getItems()
            .then(items => { this.items = items; });
    }
}
angular.module('app')
    .controller('shopController', ShopController);
