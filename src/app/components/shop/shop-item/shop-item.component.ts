import {IShopItem, ICartItem} from 'app';
import * as _ from 'lodash';

class Controller{

    public item : IShopItem;
    public cart : ICartItem[];

    constructor(){

    }

    addToCart(){
        let existingItem = _.find(this.cart, cartItem => cartItem.id == this.item.id);
        if (existingItem)
            existingItem.quantity++;
        else{
            let newItem = this.item as ICartItem;
            newItem.quantity = 1;
            this.cart.push(newItem);
        }
    }
}

export let ShopItemComponent : ng.IComponentOptions = {
  template: require('./shop-item.html'),
  bindings:{
    item: "=",
    cart: "=",
  },
  controller: Controller,
}