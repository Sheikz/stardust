import {ShopService} from './../../../services/shop.service';
import {IShopItem} from 'app';
import * as _ from 'lodash';

class Controller{

    public cart : IShopItem[]
    public onCancel : Function;

    /* @ngInject */
    constructor(private Shop: ShopService)
    {}

    getTotal(){
        return this.Shop.getTotal(this.cart);
    }

    cancel(){
        this.onCancel();
        this.cart = [];
    }
}

export let ShopCartComponent : ng.IComponentOptions = {
    template: require('./shop-cart.html'),
    bindings: {
        cart: "=",
        onCancel: "&",
    },
    controller: Controller
}