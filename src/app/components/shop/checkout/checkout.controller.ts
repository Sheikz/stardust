import {ShopService} from './../../../services/shop.service';
import {ICartItem} from 'app';

export class CheckoutController{

    public cart : ICartItem[];
    public validated = false;
    public name : string;
    public comment : string;

    /* @ngInject */
    constructor(
        private $stateParams: ng.ui.IStateParamsService,
        private Shop: ShopService
    )
    {}

    $onInit(){
        this.cart = this.$stateParams['cart'];
        console.log('init checkout', this.cart);
    }

    getTotal(){
        return this.Shop.getTotal(this.cart);
    }

    validate(){
        this.validated = true;
        this.Shop.checkout({
            from: this.name,
            comment: this.comment,
            cart: this.cart,
        });
    }

}