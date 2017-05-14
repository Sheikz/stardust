import { IShopItem } from 'app';
import { ShopService } from "../../../services/shop.service";
import { AuthService } from "../../../services/auth.service";

export class ShopAdminController {

  public items;
  public florenceItems;
  public mauritiusItems;

  public newItem : IShopItem;

  /* @ngInject */
  constructor(
    private $http : ng.IHttpService, 
    private Shop : ShopService,
    private $rootScope : ng.IRootScopeService,
    private Auth : AuthService,
    )
    {}

  $onInit(){
    this.Auth.redirectIfNotAdmin();
    this.refresh();
    this.$rootScope.$on('REFRESH', () =>this.refresh());

  }

  private refresh(){
    this.Shop.getItems()
    .then(items => {
      this.items = items;
    })
  }

  public addItem(){
    this.Shop.addItem(this.newItem)
    .then(() => this.refresh());
  }
}