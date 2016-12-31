let config = function($stateProvider){

  let states = [
    {
      name: 'hello',
      url: '/hello',
      template: '<h3> Hello World</h3>'
    },
    {
      name: 'about',
      url: 'about',
      template: '<h2> about</h2>'
    }
  ]
  states.forEach((state) => $stateProvider.state(state));
  
}

angular.module('app')
  .config(config);