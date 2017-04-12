import {shopItems} from './shop-items.fixture';
import {IShopItem} from 'app';

export class ShopService{

  constructor (private $http : ng.IHttpService, private $q : ng.IQService){

  }

  static test(){
    console.log("Shop test");
  }

  getItems() : ng.IPromise<any>{

    let defer = this.$q.defer();
    // defer.resolve(shopItems);
    // return defer.promise;

    this.$http.get('api/items')
    .then(result => {
      defer.resolve(result.data);
    })
    .catch(error => {
      defer.reject(error);
    })

    return defer.promise;
  }

  public addItem(item : IShopItem){
    return this.$http.post('api/items', item);
  }

  public deleteItem(item : IShopItem){
    console.log('deleting item', item);
    return this.$http.delete(`api/items/${item.id}`);
  }
}

angular.module('app')
  .service('Shop', ShopService);