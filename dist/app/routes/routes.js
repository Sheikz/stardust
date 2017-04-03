let config = function ($stateProvider) {
    let states = [
        {
            name: 'shop',
            url: '/shop',
            templateUrl: "templates/shop.html"
        },
        {
            name: 'admin',
            url: '/admin',
            templateUrl: 'templates/admin.html',
        }
    ];
    states.forEach((state) => $stateProvider.state(state));
};
angular.module('app')
    .config(config);
