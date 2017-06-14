import {ShopService} from './../../../services/shop.service';
import {IShopItem} from 'app';
import * as _ from 'lodash';

class Controller{

    public item : IShopItem;
    public cart : IShopItem[];

    public editing : boolean = false;
    public popoverOpen : boolean = false;

    /* @ngInject */
    constructor(
        private Shop : ShopService,
        private $rootScope : ng.IRootScopeService,
        private $translate : angular.translate.ITranslateService
    ){

    }

    addToCart(){
        let existingItem = _.find(this.cart, cartItem => cartItem.id == this.item.id);
        if (existingItem)
            existingItem.quantity++;
        else{
            let newItem = _.clone(this.item);
            newItem.quantity = 1;
            this.cart.push(newItem);
        }
        this.item.quantity--;
        this.popoverOpen = true;
        setTimeout(() => this.popoverOpen = false, 5000);
    }

    getName(item : IShopItem){
        return (this.$translate.use() === 'fr') ? item.name_french : item.name;
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