import { IShopItem, ICartItem } from 'app';
import * as _ from "lodash";

export class ShopService{

  constructor (private $http : ng.IHttpService, private $q : ng.IQService){

  }

  getTotal(cart: ICartItem[]) : number {
    return _.reduce(cart, (a, b) => a + b.price * b.quantity , 0);
  }

  getItems() : ng.IPromise<any>{
    return this.$http.get('api/shop')
  }

  addItem(item : IShopItem){
    return this.$http.post('api/shop', item);
  }

  deleteItem(item : IShopItem){
    return this.$http.delete(`api/shop/${item.id}`);
  }

  updateItem(item, value){
    return this.$http.patch(`api/shop/${item.id}`, {quantity: value});
  }

  checkout(checkoutData : any){
    return this.$http.post('api/shop/checkout', checkoutData);
  }
}

angular.module('app')
  .service('Shop', ShopService);