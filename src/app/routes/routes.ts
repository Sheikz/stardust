let config = function($stateProvider : ng.ui.IStateProvider, $locationProvider: ng.ILocationProvider, $urlRouterProvider : ng.ui.IUrlRouterProvider){

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
      url: '/admin-shop',
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
      url: '/admin-guests',
      template: '<guest-list></guest-list>'
    },
    {
      name: 'checkoutAdmin',
      url: '/admin-checkout',
      template: '<checkout></checkout>'
    },
    {
      name: 'login',
      url: '/login',
      template: '<login></login>',
    }
  ]
  states.forEach((state) => $stateProvider.state(state));
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/info')
  
}

angular.module('app')
  .config(config);