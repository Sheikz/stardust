import {CheckoutController} from './checkout/checkout.controller';
import {ShopCartComponent} from './shop-cart/shop-cart.component';
import {ShopItemComponent} from './shop-item/shop-item.component';
import {ShopItemsDisplay} from './shop-items-display/shop-items-display.component';
import {ShopController} from './shop.controller';

angular.module('app')
  .component('shopItem', ShopItemComponent)
  .component('shopItemsDisplay', ShopItemsDisplay)
  .component('shopCart', ShopCartComponent)
  .controller('shopController', ShopController)
  .controller('checkoutController', CheckoutController)