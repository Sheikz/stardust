import { ShopService } from "../../../services/shop.service";

class Controller {

    public gifts;

    constructor(
        private Shop : ShopService
    )
    {};

    $onInit(){
        this.Shop.getCheckoutItems()
        .then(result => {
            console.log('checkout', result);
            this.gifts = result;
        })
    }
}

export let CheckoutComponent : ng.IComponentOptions = {
    template: require('./checkout.html'),
    controller: Controller,
    controllerAs: '$ctrl',
}