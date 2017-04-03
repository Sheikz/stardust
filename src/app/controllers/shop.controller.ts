class ShopController{

  public items;

  constructor(private $http : ng.IHttpService, private Shop){}

  $onInit(){
    console.log("Shop component init");
    this.getItems();

  }

  getItems(){
    this.Shop.getItems()
    .then(items => {this.items = items});
  }
}

angular.module('app')
  .controller('shopController', ShopController)