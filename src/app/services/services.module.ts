import {GuestsService} from './guests.service';
import {ShopService} from './shop.service';
angular.module('app')
    .service('Shop', ShopService)
    .service('Guests', GuestsService)