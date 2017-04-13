import {shopItems} from './shop-items.fixture';
import { IShopItem, ICartItem } from 'app';
import * as _ from "lodash";

export class ShopService{

  constructor (private $http : ng.IHttpService, private $q : ng.IQService){

  }

  getTotal(cart: ICartItem[]) : number {
    return _.reduce(cart, (a, b) => a + b.price * b.quantity , 0);
  }

  getItems() : ng.IPromise<any>{

    let defer = this.$q.defer();
    // defer.resolve(shopItems);
    // return defer.promise;

    this.$http.get('api/shop')
    .then(result => {
      defer.resolve(result.data);
    })
    .catch(error => {
      defer.reject(error);
    })

    return defer.promise;
  }

  public addItem(item : IShopItem){
    return this.$http.post('api/shop', item);
  }

  public deleteItem(item : IShopItem){
    console.log('deleting item', item);
    return this.$http.delete(`api/shop/${item.id}`);
  }

  public checkout(checkoutData : any){
    return this.$http.post('api/shop/checkout', checkoutData);
  }
}

angular.module('app')
  .service('Shop', ShopService);