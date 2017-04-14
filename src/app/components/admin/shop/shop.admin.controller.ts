import { IShopItem } from 'app';
import { ShopService } from "../../../services/shop.service";

export class ShopAdminController {

  public items;

  public newItem : IShopItem;

  constructor(
    private $http : ng.IHttpService, 
    private Shop : ShopService,
    private $rootScope : ng.IRootScopeService)
    {}

  $onInit(){
    this.refresh();
    this.$rootScope.$on('REFRESH', () =>this.refresh());
  }

  private refresh(){
    this.Shop.getItems()
    .then(items => {
      this.items = items;
      console.log('items', this.items);
    })
  }

  public addItem(){
    this.Shop.addItem(this.newItem)
    .then(() => this.refresh());
  }
}