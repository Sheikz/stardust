import {shopItems} from './shop-items.fixture';
export class ShopService{

  constructor (private $http : ng.IHttpService, private $q : ng.IQService){

  }

  static test(){
    console.log("Shop test");
  }

  getItems() : ng.IPromise<any>{

    let defer = this.$q.defer();
    defer.resolve(shopItems);
    return defer.promise;

    // this.$http.get('api/items')
    // .then(result => {
    //   defer.resolve(result.data);
    // })
    // .catch(error => {
    //   defer.reject(error);
    // })

    // return defer.promise;
  }

  public addItem(item){
    return this.$http.post('api/items', item)
    .then(result => {console.log("success", result)})
    .catch(error => {console.log("error", error)});
  }
}

angular.module('app')
  .service('Shop', ShopService);