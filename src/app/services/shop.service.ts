export class ShopService{

  constructor (private $http : ng.IHttpService, private $q : ng.IQService){

  }

  static test(){
    console.log("Shop test");
  }

  getItems() : ng.IPromise<any>{

    let defer = this.$q.defer();

    this.$http.get('api/items')
    .then(result => {
      defer.resolve(result.data);
    })
    .catch(error => {
      defer.reject(error);
    })

    return defer.promise;
  }

  public addItem(item){
    return this.$http.post('api/items', item)
    .then(result => {console.log("success", result)})
    .catch(error => {console.log("error", error)});
  }
}

angular.module('app')
  .service('Shop', ShopService);