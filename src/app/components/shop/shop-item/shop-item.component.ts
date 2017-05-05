import {ShopService} from './../../../services/shop.service';
import {IShopItem, ICartItem} from 'app';
import * as _ from 'lodash';

class Controller{

    public item : IShopItem;
    public cart : ICartItem[];

    public editing : boolean = false;

    /* @ngInject */
    constructor(
        private Shop : ShopService,
        private $rootScope : ng.IRootScopeService,
    ){

    }

    addToCart(){
        let existingItem = _.find(this.cart, cartItem => cartItem.id == this.item.id);
        if (existingItem)
            existingItem.quantity++;
        else{
            let newItem = _.clone(this.item) as ICartItem;
            newItem.quantity = 1;
            this.cart.push(newItem);
        }
        this.item.quantity--;
    }

    editItem(){
        this.editing = true;
    }

    updateItem(){
        this.editing = false;
        this.Shop.updateItem(this.item);
    }

    deleteItem(){
        this.Shop.deleteItem(this.item)
        .then(() => this.$rootScope.$emit('REFRESH'));
    }

    updateItemQuantity(value : number){
        this.Shop.updateItemQuantity(this.item, value)
        this.item.quantity += value
    }
}

export let ShopItemComponent : ng.IComponentOptions = {
  template: require('./shop-item.html'),
  bindings:{
    item: "=",
    cart: "=",
    admin: "<",
  },
  controller: Controller,
}