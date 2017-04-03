"use strict";
class ShopService {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }
    static test() {
        console.log("Shop test");
    }
    getItems() {
        let defer = this.$q.defer();
        this.$http.get('api/items')
            .then(result => {
            defer.resolve(result.data);
        })
            .catch(error => {
            defer.reject(error);
        });
        return defer.promise;
    }
    addItem(item) {
        return this.$http.post('api/items', item)
            .then(result => { console.log("success", result); })
            .catch(error => { console.log("error", error); });
    }
}
exports.ShopService = ShopService;
angular.module('app')
    .service('Shop', ShopService);
