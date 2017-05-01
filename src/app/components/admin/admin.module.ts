import { ShopAdminController } from "./shop/shop.admin.controller";
import { GuestListComponent } from "./guest-list/guest-list.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "./auth.service";

angular.module('app')
  .controller('ShopAdmin', ShopAdminController)
  .component('guestList', GuestListComponent)
  .component('checkout', CheckoutComponent)
  .component('login', LoginComponent)
  .service('Auth', AuthService)
