import { ShopService } from "../../../services/shop.service";
import { AuthService } from "../../../services/auth.service";

class Controller {

    public gifts;

    /* @ngInject */
    constructor(
        private Shop : ShopService,
        private Auth : AuthService,
    )
    {};

    $onInit(){
        this.Auth.redirectIfNotAdmin();
        this.Shop.getCheckoutItems()
        .then(result => {
            this.gifts = result;
        })
    }
}

export let CheckoutComponent : ng.IComponentOptions = {
    template: require('./checkout.html'),
    controller: Controller,
    controllerAs: '$ctrl',
}