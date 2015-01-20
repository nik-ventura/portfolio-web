var app = angular.module('portfolio-app', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize'
]);

// Route configuration
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {templateUrl: 'views/home.html'})
        .when('/portfolio', {templateUrl: 'views/portfolio.html', controller: 'PortfolioCtrl'})
        .when('/contact', {templateUrl: 'views/contact.html'})
        .otherwise({redirectTo:"/home"});
}]);

