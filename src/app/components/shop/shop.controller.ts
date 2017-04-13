import {ShopService} from './../../services/shop.service';
import {IShopItem, ICartItem} from 'app';

export class ShopController{

  public items : IShopItem[];
  public cart : ICartItem[];

  constructor(
    private $http : ng.IHttpService, 
    private Shop : ShopService,
    private $stateParams : ng.ui.IStateParamsService){}

  $onInit(){
    console.log("Shop component init");
    this.getItems();
    this.cart = this.$stateParams['cart'] ? this.$stateParams['cart'] : [];
  }

  getItems(){
    this.Shop.getItems()
    .then(items => {
      this.items = items
      console.log('items', this.items);
    });
  }
}