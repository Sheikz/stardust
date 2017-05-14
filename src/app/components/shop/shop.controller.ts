import {ShopService} from './../../services/shop.service';
import {IShopItem} from 'app';

import * as _ from 'lodash';

export class ShopController{

  public florenceItems : IShopItem[];
  public mauritiusItems : IShopItem[];
  public firstFlorenceItems : IShopItem[];
  public cart : IShopItem[];
  public other;

  /* @ngInject */
  constructor(
    private $http : ng.IHttpService, 
    private Shop : ShopService,
    private $stateParams : ng.ui.IStateParamsService){}

  $onInit(){
    this.getItems();
    this.cart = this.$stateParams['cart'] ? this.$stateParams['cart'] : [];
  }

  getItems(){
    this.Shop.getItems()
    .then((items : IShopItem[]) => {
      this.florenceItems = items.filter(item => item.category == 'florence');
      this.mauritiusItems = items.filter(item => item.category == 'mauritius');
      //this.firstFlorenceItems = this.florenceItems.splice(0, 3);
      console.log('items', items);
    });
  }

  addOther(){
    let newItem = {
      id: -1,
      name: this.other.name,
      price: this.other.price,
      quantity: 1,
    };
    this.cart.push(_.clone(newItem));
    this.other.name = '';
    this.other.price = null;
    console.log('cart', this.cart);
  }
}