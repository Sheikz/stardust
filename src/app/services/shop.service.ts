import { IShopItem } from 'app';
import * as _ from "lodash";
import { AuthService } from "./auth.service";

export class ShopService{

  /* @ngInject */
  constructor (
    private $http : ng.IHttpService, 
    private $q : ng.IQService,
    private Auth : AuthService){

  }

  getTotal(cart: IShopItem[]) : number {
    return _.reduce(cart, (a, b) => a + b.price * b.quantity , 0);
  }

  getItems() : ng.IPromise<any>{
    return this.$http.get('api/shop')
  }

  addItem(item : IShopItem){
    return this.$http.post('api/shop', item, {
      headers: {
        token: this.Auth.getToken()
      }
    });
  }

  deleteItem(item : IShopItem){
    return this.$http.delete(`api/shop/${item.id}`, {
      headers: {
        token: this.Auth.getToken()
      }
    });
  }

  updateItem(item){
    return this.$http.patch(`api/shop/${item.id}`, item, {
      headers: {
        token: this.Auth.getToken()
      }
    });
  }

  updateItemQuantity(item, value){
    return this.$http.patch(`api/shop/${item.id}/quantity`, {quantity: value}, {
      headers: {
        token: this.Auth.getToken()
      }
    });
  }

  checkout(checkoutData : any) : ng.IPromise<any>{
    return this.$http.post('api/shop/checkout', checkoutData);
  }

  getCheckoutItems(){
    return this.$http.get('api/shop/checkout', {
      headers: {
        token: this.Auth.getToken()
      }
    });
  }

  removeGift(gift){
    return this.$http.delete(`api/shop/checkout/${gift.id}`, {
      headers: {
          token: this.Auth.getToken()
      }
    });
  }
}

angular.module('app')
  .service('Shop', ShopService);