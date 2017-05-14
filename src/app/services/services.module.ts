import {GuestsService} from './guests.service';
import {ShopService} from './shop.service';
import {AuthService} from './auth.service';

angular.module('app')
    .service('Shop', ShopService)
    .service('Guests', GuestsService)
    .service('Auth', AuthService)