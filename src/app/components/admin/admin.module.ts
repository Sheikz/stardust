import { ShopAdminController } from "./shop/shop.admin.controller";
import { GuestListComponent } from "./guest-list/guest-list.component";

angular.module('app')
  .controller('ShopAdmin', ShopAdminController)
  .component('guestList', GuestListComponent);
