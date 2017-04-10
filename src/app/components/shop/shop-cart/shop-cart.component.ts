import {ICartItem} from 'app';
import * as _ from 'lodash';

class Controller{

    public cart : ICartItem[]

    getTotal(){
        return _.reduce(this.cart, (a, b) => a + b.price * b.quantity , 0);
    }
}

export let ShopCartComponent : ng.IComponentOptions = {
    template: require('./shop-cart.html'),
    bindings: {
        cart: "=",
    },
    controller: Controller
}