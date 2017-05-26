import {ShopService} from './../../services/shop.service';
import {IShopItem} from 'app';

import * as _ from 'lodash';

export class ShopController{

  public florenceItems : IShopItem[];
  public mauritiusItems : IShopItem[];
  public cart : IShopItem[];
  public other;
  public isLoaded = false;

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
      this.isLoaded = true;
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
  }

  resetCart(){
    this.cart.forEach(cartItem => {
      let item = _.find(this.florenceItems, item => item.id === cartItem.id)
      if (item)
        item.quantity += cartItem.quantity;

      item = _.find(this.mauritiusItems, item => item.id === cartItem.id)
      if (item)
        item.quantity += cartItem.quantity;
    })
  }
}