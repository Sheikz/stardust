import {ShopService} from './../../../services/shop.service';
import {IShopItem} from 'app';

export class CheckoutController{

    public cart : IShopItem[];
    public validated = false;
    public name : string;
    public comment : string;

    /* @ngInject */
    constructor(
        private $stateParams: ng.ui.IStateParamsService,
        private Shop: ShopService,
        private $translate: angular.translate.ITranslateService
    )
    {}

    $onInit(){
        this.cart = this.$stateParams['cart'];
    }

    getName(item : IShopItem){
        return (this.$translate.use() === 'fr') ? item.name_french : item.name;
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