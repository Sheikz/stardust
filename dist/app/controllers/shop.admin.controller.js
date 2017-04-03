class ShopAdminController {
    constructor($http, Shop) {
        this.$http = $http;
        this.Shop = Shop;
    }
    $onInit() {
        this.refresh();
    }
    refresh() {
        this.Shop.getItems()
            .then(items => {
            this.items = items;
        });
    }
    addItem() {
        this.Shop.addItem(this.newItem)
            .then(() => this.refresh());
    }
    deleteItem(item) {
        this.Shop.deleteItem(item);
    }
}
angular.module('app')
    .controller('shopAdmin', ShopAdminController);
console.log("shop admin registered");
