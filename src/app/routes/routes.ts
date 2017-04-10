let config = function($stateProvider){

  let states : ng.ui.IState[] = [
    {
      name: 'shop',
      url: '/shop',
      template: require('../components/shop/shop.html')
    },
    {
      name: 'admin',
      url: '/admin',
      template: require('../components/admin/admin.html')
    },
    {
      name: 'info',
      url: '/info',
      template: require('../components/info/info.html')
    }
  ]
  states.forEach((state) => $stateProvider.state(state));
  
}

angular.module('app')
  .config(config);