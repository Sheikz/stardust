let config = function($stateProvider : ng.ui.IStateProvider, $locationProvider: ng.ILocationProvider){

  let states : ng.ui.IState[] = [
    {
      name: 'shop',
      url: '/shop',
      template: require('../components/shop/shop.html'),
      params: {
        cart: null
      }
    },
    {
      name: 'admin',
      url: '/admin',
      template: require('../components/admin/shop/shop.admin.html')
    },
    {
      name: 'info',
      url: '/info',
      template: require('../components/info/info.html')
    },
    {
      name: 'checkout',
      url: '/checkout',
      template: require('../components/shop/checkout/checkout.html'),
      params: {
        cart: null
      }
    },
    {
      name: 'guests',
      url: '/guests',
      template: '<guest-list></guest-list>'
    }
  ]
  states.forEach((state) => $stateProvider.state(state));
  $locationProvider.html5Mode(true);
  
}

angular.module('app')
  .config(config);