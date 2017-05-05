import {ShopService} from './../../services/shop.service';
import {IShopItem, ICartItem} from 'app';

export class ShopController{

  public florenceItems : IShopItem[];
  public mauritiusItems : IShopItem[];
  public firstFlorenceItems : IShopItem[];
  public cart : ICartItem[];

  /* @ngInject */
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
    .then((items : IShopItem[]) => {
      this.florenceItems = items.filter(item => item.category == 'florence');
      this.mauritiusItems = items.filter(item => item.category == 'mauritius');
      this.firstFlorenceItems = this.florenceItems.splice(0, 3);
      console.log('first', this.firstFlorenceItems);
      console.log('florence', this.florenceItems);
      console.log('mauritius', this.mauritiusItems);
    });
  }
}