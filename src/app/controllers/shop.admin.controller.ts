class ShopAdminController {

  public items;

  public newItem : {
    name: string,
    description: string,
    quantity: number;
    imageUrl: string;
  }

  constructor(private $http : ng.IHttpService, private Shop){

  }

  $onInit(){
    this.refresh();
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

  public deleteItem(item){
    this.Shop.deleteItem(item);
  }
}

angular.module('app')
  .controller('shopAdmin', ShopAdminController);

console.log("shop admin registered");