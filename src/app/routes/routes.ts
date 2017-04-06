let config = function($stateProvider){

  let states : ng.ui.IState[] = [
    {
      name: 'shop',
      url: '/shop',
      templateUrl: "templates/shop.html"
    },
    {
      name: 'admin',
      url: '/admin',
      templateUrl: 'templates/admin.html',
    },
    {
      name: 'info',
      url: '/info',
      templateUrl: 'templates/info.html',
    }
  ]
  states.forEach((state) => $stateProvider.state(state));
  
}

angular.module('app')
  .config(config);