import { IShopItem, ICartItem } from 'app';
import * as _ from "lodash";

export class ShopService{

  /* @ngInject */
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

  updateItem(item){
    return this.$http.patch(`api/shop/${item.id}`, item);
  }

  updateItemQuantity(item, value){
    return this.$http.patch(`api/shop/${item.id}/quantity`, {quantity: value});
  }

  checkout(checkoutData : any) : ng.IPromise<any>{
    return this.$http.post('api/shop/checkout', checkoutData);
  }

  getCheckoutItems(){
    return this.$http.get('api/shop/checkout');
  }
}

angular.module('app')
  .service('Shop', ShopService);