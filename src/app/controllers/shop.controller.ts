import {ShopService} from './../services/shop.service';
import {IShopItem} from 'app';

const shopItems : IShopItem[] = [
  {
    name: "Flight A",
    description: "This is the flight that takes us from A to B",
    quantity: 1,
    image: "https://images.trvl-media.com/media/content/expus/graphics/launch/home/tvly/150324_flights-hero-image_1330x742.jpg"
  },
  {
    name: "Flight B",
    description: "This is the flight that takes us from Y to Z",
    quantity: 1,
    image: "http://images.indianexpress.com/2016/06/flight-759.jpg"
  },
  {
    name: "Cooking class",
    description: "Cooking class where we will learn to make pasta",
    quantity: 1,
    image: "https://www.tourinrome.com/wp-content/uploads/2015/11/cooking-2.jpg",
  }
]

class ShopController{

  public items;

  constructor(private $http : ng.IHttpService, private Shop : ShopService){}

  $onInit(){
    console.log("Shop component init");
    this.getItems();

  }

  getItems(){
    this.items = shopItems;
    // this.Shop.getItems()
    // .then(items => {this.items = items});
  }
}

angular.module('app')
  .controller('shopController', ShopController)